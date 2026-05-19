# Room Preview System Audit

## 1. Executive Summary

- التقييم العام: Medium risk.
- النظام بشكل عام ليس فيه polling عشوائي أو loop واضح يضرب السيرفر باستمرار. التصميم الأساسي يعتمد على SSE للشاشة، ومعه polling fallback فقط عند فشل SSE.
- أعلى مصدر ضغط دوري هو heartbeat: شاشة + موبايل يرسلون ping كل 30 ثانية، والـ API يعمل DB read ثم DB update لكل ping.
- الرندر محمي بعدة طبقات: Redis lock، عداد renderCount atomic، claim DB atomic من `ready_to_render` إلى `rendering`، وGemini semaphore. هذا جيد.
- قبل production يفضل إصلاح نقاط واضحة: Redis يجب أن يكون موجودا في production، heartbeat يحتاج تقليل DB writes أو throttle، وملف `lib/room-preview/session-client.ts` فيه استدعاء ناقص argument عند retry 429.
- يوجد اعتماد كبير على in-memory maps للـ diagnostics/rate-limit عند غياب Redis. هذا مقبول للتطوير أو instance واحدة، لكنه غير كاف كضمان production multi-instance.

## 2. System Flow

- screen flow:
  - صفحة `/room-preview` تعرض carousel وزر الدخول.
  - شاشة العرض تنشئ session عبر `POST /api/room-preview/sessions`.
  - صفحة الشاشة الحقيقية `/room-preview/screen/[sessionId]` تستخدم `ScreenSessionClient`.
  - `useScreenSession` يعمل initial fetch ثم يفتح SSE من `/api/room-preview/sessions/[sessionId]/events`.
  - إذا فشل SSE ينتقل إلى polling كل 2 ثانية.

- mobile flow:
  - الرابط الحقيقي `/room-preview/mobile/[sessionId]` يتحقق من gate ثم يمرر products إلى `MobileSessionClient`.
  - `useMobileSession` يعمل initial fetch بحد أقصى 3 محاولات، ثم auto-connect عبر `/connect` إذا الجوال غير متصل.
  - heartbeat للموبايل يعمل كل 30 ثانية طالما الجلسة غير terminal.

- session lifecycle:
  - session تنشأ في `app/api/room-preview/sessions/route.ts`.
  - state transitions موجودة في `lib/room-preview/session-machine.ts` وتنفذ عبر `session-service.ts`.
  - حفظ state يتم في `lib/room-preview/session-repository.ts`.
  - cleanup يحول الجلسات القديمة أو stuck إلى expired/failed/completed.

- upload flow:
  - الموبايل يضغط رفع/تصوير.
  - في production مع R2: يطلب signed URL من `/room/upload-url`، يرفع مباشرة إلى R2، ثم يؤكد عبر `/room/confirm-upload`.
  - fallback: يرفع FormData إلى `/room`.
  - server يتحقق من MIME والحجم والأبعاد وmagic bytes قبل التخزين.

- product selection flow:
  - المنتجات حاليا تأتي من `data/room-preview/mock-products.ts` بقراءة `public/product`.
  - اختيار المنتج في الموبايل له debounce 700ms قبل `POST /product`.
  - endpoint المنتج يقرأ product من local directory ثم يحفظه في session.

- render flow:
  - الموبايل يستدعي `POST /render`.
  - API يعمل auth، locks/rate limits، يغير session إلى `ready_to_render`، ثم يبدأ `executeRenderPipeline`.
  - pipeline يعمل claim atomic إلى `rendering`، ينشئ RenderJob، يأخذ Gemini semaphore، يستدعي provider، ثم يحفظ النتيجة وينشر update.
  - الموبايل ينتظر النتيجة عبر `pollForRenderResult`.

- result flow:
  - عندما تصبح الجلسة `result_ready` تعرض الشاشة النتيجة.
  - شاشة العرض تعيد التوجيه بعد `SCREEN_RESULT_RESET_MS = 60_000`.
  - cleanup يحول `result_ready` إلى `completed` بعد 90 ثانية.

- cleanup flow:
  - endpoint `/api/room-preview/cleanup` ينفذ:
    - `detectStuckSessions`
    - `failStuckRenderingSessions`
    - `completeResultReadySessions`
    - `expireIdleWaitingSessions`
    - `expireOldSessions`
    - `detectMobileStale`

- real-time updates flow:
  - `publishRoomPreviewSessionEvent` ينشر updates عبر Redis Pub/Sub إذا Redis موجود، أو in-memory fallback إذا غير موجود.
  - `events/route.ts` يرسل SSE keepalive كل 15 ثانية.
  - عند فشل Redis subscribe يغلق SSE حتى ينتقل العميل إلى polling fallback.

## 3. Server Load Analysis

- تكرار إنشاء session:
  - موجود في `app/api/room-preview/sessions/route.ts`.
  - يوجد IP rate limit: 10 sessions / 60s، وactive sessions per IP = 5.
  - `checkActiveSessionsPerIp` يعتمد على Redis، وإذا Redis غير موجود يسمح بالطلب.
  - الخطر: Low مع Redis، Medium بدون Redis في production.
  - التوصية: Redis مطلوب production، أو بديل DB-based active session limit.

- polling من الشاشة:
  - `features/room-preview/screen/useScreenSession.ts:241` يبدأ polling fallback فقط عند فشل SSE.
  - frequency: كل 2 ثانية.
  - الخطر: Low في الحالة الطبيعية، Medium إذا SSE/Redis معطل لعدد شاشات كبير.
  - التوصية: جعل interval تصاعدي أو 3-5 ثوان عند انقطاع SSE طويل.

- polling من الموبايل:
  - initial load فيه 3 محاولات مع delay 1.5s.
  - render polling في `lib/room-preview/session-polling.ts:67`: 2.5s أول 30s، ثم 5s، ثم 10s، timeout 310s.
  - upload timeout recovery poll كل 1.5s لمدة 60s في `lib/room-preview/room-service.ts:132`.
  - الخطر: Low/Medium. مقبول لأنه مرتبط بعمليات upload/render فقط.
  - التوصية: أضف jitter بسيط إذا صار عندك عدد كبير من المستخدمين المتزامنين.

- heartbeat frequency:
  - `useScreenHeartbeat.ts:5` و `useMobileHeartbeat.ts:5`: كل 30 ثانية.
  - `heartbeat/route.ts` يعمل `getSessionPresence` ثم `updateSessionPresence`.
  - تقريبا لكل session فعالة مع شاشة وموبايل: 4 DB operations في الدقيقة.
  - الخطر: Medium عند عدد جلسات كبير.
  - التوصية: تحديث DB فقط إذا مر 60-75 ثانية من آخر seen، أو نقل heartbeat إلى Redis ثم flush دوري للـ DB.

- diagnostics frequency:
  - client diagnostics لديها throttle.
  - server diagnostics في `diagnostics/route.ts`: max 30 event/session/min وdedupe 5s وsession validity cache 30s.
  - الخطر: Low/Medium. جيد كحماية، لكن in-memory فقط.
  - التوصية: في production multi-instance، استخدم Redis للـ rate limit/dedupe إذا زاد الحمل.

- SSE connections:
  - `events/route.ts` يفتح ReadableStream لكل شاشة.
  - keepalive كل 15s.
  - Redis subscription ref-counted في `session-events.ts`.
  - الخطر: Low لعدد شاشات محدود، Medium إذا آلاف الشاشات أو Redis غير موجود.
  - التوصية: Redis production + monitoring لعدد الاتصالات المفتوحة.

- cleanup cron:
  - endpoint `/api/room-preview/cleanup`.
  - كل run يشغل عدة findMany/updateMany ويفتح issues/events.
  - الخطر: Medium إذا تم تشغيله بتردد عال أو عند تراكم session events كثيرة.
  - التوصية: شغله كل 1-5 دقائق، وأضف pagination/batch limits للعمليات التي ليس لها take.

- render job locking:
  - Redis lock في `render-rate-limit.ts`.
  - DB claim atomic في `session-repository.ts:179`.
  - Gemini semaphore في `gemini-semaphore.ts`.
  - الخطر: Low. التصميم جيد.
  - التوصية: لا تعتمد على Redis lock وحده؛ الوضع الحالي صحيح لأن DB claim موجود.

- upload endpoints:
  - direct upload يقلل ضغط السيرفر لأن الملف يذهب إلى R2 مباشرة.
  - fallback `/room` يقرأ الملف في memory ويتحقق بـ sharp ثم يرفعه storage.
  - الخطر: Low/Medium حسب حجم الصور وعدد المستخدمين.
  - التوصية: direct upload مفضل production، وأضف rate limit للـ upload endpoints.

- product endpoints:
  - `POST /product` يقرأ المنتجات من `public/product` في كل request عبر `getProductsFromPublicDirectory`.
  - الخطر: Low حاليا، Medium إذا public/product كبر جدا.
  - التوصية: cache server-side للمنتجات أو build-time manifest.

- admin dashboard queries:
  - `lib/admin/session-dashboard.ts` و `lib/admin/session-diagnostics.ts`.
  - بعض queries تأخذ 200-250 sessions، وبعضها يجلب nested events/issues.
  - الخطر: Medium إذا dashboard يعمل refresh كثير.
  - التوصية: لا تجعل admin page auto-refresh سريع، وأضف pagination/filtering واضح.

## 4. Polling / Loops / Intervals

| File | Mechanism | Frequency | Purpose | Risk | Notes |
|---|---:|---:|---|---|---|
| `features/room-preview/screen/useScreenHeartbeat.ts:59` | `setInterval` | 30s | screen heartbeat | Medium | كل ping يسبب DB read + write. |
| `features/room-preview/mobile/useMobileHeartbeat.ts:69` | `setInterval` | 30s | mobile heartbeat | Medium | نفس ضغط heartbeat. |
| `app/api/room-preview/sessions/[sessionId]/events/route.ts:163` | `setInterval` | 15s | SSE keepalive | Low | payload صغير، cleanup موجود. |
| `features/room-preview/screen/useScreenSession.ts:241` | polling fallback | 2s | screen session updates عند فشل SSE | Medium | لا يعمل إلا عند فشل SSE. |
| `lib/room-preview/session-polling.ts:11` | timeout polling | 2s default | generic session poller | Low/Medium | يستخدم بعد SSE fallback. |
| `lib/room-preview/session-polling.ts:67` | render polling | 2.5s ثم 5s ثم 10s | انتظار نتيجة render | Medium | مقبول لأنه مؤقت حتى 310s. |
| `lib/room-preview/room-service.ts:132` | upload recovery polling | 1.5s حتى 60s | استعادة نتيجة upload بعد timeout | Medium | قد يسبب bursts إذا upload server بطيء. |
| `features/room-preview/screen/useScreenSession.ts:286` | countdown interval | 1s | reset result/failed UI | Low | client-only. |
| `features/room-preview/screen/useScreenSession.ts:311` | countdown interval | 1s | idle reset | Low | client-only. |
| `features/room-preview/screen/useScreenSession.ts:336` | countdown interval | 1s | error reset | Low | client-only. |
| `features/room-preview/screen/StatusPanel.tsx:127` | `window.setInterval` | 1s | rendering elapsed UI | Low | client-only. |
| `features/room-preview/mobile/useMobileSession.ts:987` | debounce timeout | 700ms | product save debounce | Low | جيد لتقليل calls. |
| `features/room-preview/mobile/useMobileSession.ts:567` | render resume poll | dynamic | استئناف polling إذا reload أثناء render | Medium | لا يبدو أنه يكرر نفسه بسبب dependencies. |
| `components/room-preview/Carousel3D.tsx:142` | autoplay interval | UI only | carousel | Low | لا يلمس السيرفر. |
| `components/room-preview/FlooringHeroCarousel.tsx:52` | staged timeouts | UI only | animation | Low | لا يلمس السيرفر. |
| `lib/room-preview/session-client.ts:145` | retry delay | once on 429 | retry request | Low | يوجد bug في line 146، مذكور في findings. |
| `lib/room-preview/render-providers/gemini-provider.ts:175` | timeout race | per render | Gemini timeout | Low | يحمي من تعليق request. |
| `lib/room-preview/render-providers/ai-provider.ts:79` | 2s delay | per provider retry/fallback | provider timing | Low | Needs verification حسب provider behavior. |

## 5. Client-side Re-render Risks

- لا يوجد evidence على infinite React re-render loop واضح.
- `useScreenSession`:
  - initial fetch effect يعتمد على `loadAttempt/sessionId/t`.
  - SSE effect يعتمد على readiness flags، وينظف `stopEvents`.
  - polling fallback effect يعمل فقط إذا `isUsingPollingFallback=true`.
  - ملاحظة: effect `screen_render_branch_changed` في `features/room-preview/screen/useScreenSession.ts:172` يرسل diagnostics عند تغير `hasRenderResult/pollError/status/viewState`. هذا قد ينتج events أكثر من اللازم عند حالات متقلبة، لكن diagnostics endpoint عنده dedupe/rate limit.

- `useMobileSession`:
  - initial load فيه `active` flag لمنع setState بعد unmount.
  - browser back guard يعيد `pushState` ثم fetch واحد عند popstate. لا يبدو loop لأنه event مرتبط بزر back.
  - product selection يستخدم debounce 700ms. جيد.
  - render button محمي بـ `renderRequestInFlightRef` وstatus checks.
  - resume render polling effect يعتمد على `[devPreviewMode, session?.id, showResult]` وليس status. هذا يقلل احتمال تشغيل polling جديد عند كل status update، لكنه يعني أن استئناف polling يعتمد على mount/session id، وهو مناسب للـ reload scenario.

- `useMobileDiagnostics`:
  - patch لـ `history.pushState/replaceState`.
  - replaceState throttled 5s، pushState غير throttled لأنه نادر.
  - يحتاج مراقبة فقط إذا code خارجي يستخدم pushState بشكل كثيف.

- `MobileSessionClient`:
  - lifecycle sends diagnostics على visibility/pagehide باستخدام beacon/fetch.
  - disabled في devPreviewMode.

## 6. API Endpoint Pressure

| Endpoint | Caller | Frequency | Uses DB? | Uses Redis? | Risk | Notes |
|---|---|---:|---|---|---|---|
| `POST /api/room-preview/sessions` | screen/mobile launchers | عند بدء session | Yes | Yes للـ rate-limit/active limit | Low/Medium | Redis مفقود يعني active-session limit يفشل open. |
| `GET /api/room-preview/sessions/[id]` | screen initial, mobile initial, polling | initial + polling fallback/render poll | Yes | No | Medium | أكثر endpoint يتكرر عند fallback/render polling. |
| `GET /api/room-preview/sessions/[id]/events` | screen SSE | اتصال طويل واحد | Yes | Yes/Memory | Low/Medium | DB read عند فتح الاتصال، keepalive كل 15s. |
| `POST /api/room-preview/sessions/[id]/heartbeat` | screen/mobile hooks | كل 30s لكل client | Yes | No | Medium | DB read + update لكل heartbeat. |
| `POST /api/room-preview/sessions/[id]/diagnostics` | diagnostics hooks | event-driven | Yes cached 30s | No | Low/Medium | rate limit 30/min/session، dedupe 5s. |
| `POST /api/room-preview/sessions/[id]/connect` | mobile auto-connect | مرة عند فتح الجوال | Yes | No | Low | يستخدم atomic claim. |
| `POST /api/room-preview/sessions/[id]/room/upload-url` | mobile upload | مرة لكل upload direct | No direct session DB غير guard token | No | Low | يولد signed R2 URL ثم يسجل event. |
| `POST /api/room-preview/sessions/[id]/room/confirm-upload` | mobile بعد R2 PUT | مرة لكل upload direct | Yes | No | Medium | يحفظ session ثم يعمل verification read. |
| `POST /api/room-preview/sessions/[id]/room` | mobile fallback upload/demo | مرة لكل upload/demo | Yes | No | Medium | server يعالج file/sharp/storage، ثم verification read. |
| `POST /api/room-preview/sessions/[id]/product` | product debounce | بعد توقف المستخدم 700ms | Yes | No | Low/Medium | يقرأ previousSession ثم يحفظ session؛ products من filesystem. |
| `POST /api/room-preview/sessions/[id]/render` | mobile render button | عادة مرة، max 2/session | Yes | Yes locks/semaphore | Medium/High cost | محمي جيدا لكن AI/storage مكلف. |
| `GET /api/room-preview/cleanup` | cron/manual | حسب cron | Yes | No | Medium | عدة queries/updateMany وissue/event writes. |
| admin dashboard functions | admin pages | حسب refresh | Yes | No | Medium | بعض queries تجلب nested events/issues. |

ملاحظة: لا يوجد endpoint واضح باسم `/api/room-preview/mobile/products`. المنتجات تمر من server component أو تقرأ في `/product`.

## 7. Database Load / Prisma Usage

- Prisma client:
  - `lib/server/prisma.ts:35` يرمي Error إذا `DATABASE_URL` غير موجود.
  - التعليق يقول lazy، لكن `export const prisma = ... createPrismaClient()` في `lib/server/prisma.ts:55` ينشئ client عند import، وليس عند أول DB call فعلي. هذا مهم جدا لأي route يستورد DB module في dev no DB.
  - في production مع DATABASE_URL الوضع طبيعي.

- Queries متكررة:
  - `GET session` via `getSessionById` هو الأكثر تكرارا مع polling/render.
  - heartbeat يعمل `findUnique` ثم `update` كل 30s لكل client.
  - product save يعمل read للـ previousSession ثم write.
  - upload save يعمل write ثم verification read.

- Cleanup queries:
  - `session-cleanup.ts` يستخدم findMany ثم updateMany ثم يكتب events/issues لكل session.
  - `detectStuckSessions` يأخذ 250 live sessions، ومع كل session يجلب 120 events.
  - مقبول إذا cron غير سريع، لكنه قد يكون ثقيل مع كثرة live sessions/events.

- Admin dashboard:
  - `getDashboardMetrics` يعمل 6 queries parallel، منها `renderJob.findMany` لكل completed اليوم لحساب average duration.
  - `getDashboardSessions` يأخذ 200 row.
  - `getSessionDiagnostics` يأخذ 300 events و100 issues لجلسة واحدة.
  - جيد للـ admin، لكن لا تضع auto-refresh سريع.

- Indexes:
  - موجودة indexes جيدة في `prisma/schema.prisma:74-79` لـ `RoomPreviewSession`.
  - موجودة indexes لـ `RenderJob` في `schema.prisma:99-100`.
  - موجودة indexes لـ `SessionEvent` في `schema.prisma:118-122`.
  - موجودة indexes لـ `SessionIssue` في `schema.prisma:144-147`.
  - Needs verification: queries التي تستخدم `lastMobileSeenAt` في `detectMobileStale` لا يوجد لها index مباشر. عند كثرة sessions قد تحتاج `@@index([status, lastMobileSeenAt])`.
  - Needs verification: cleanup على `updatedAt` مع status قد يستفيد من `@@index([status, updatedAt])`. حاليا يوجد `[status, createdAt]` وليس `[status, updatedAt]`.

## 8. Redis / SSE / Real-time

- Redis/SSE:
  - `session-events.ts` يستخدم Redis Pub/Sub إذا `REDIS_URL` موجود.
  - يوجد ref counting للـ subscription حتى لا يلغي listener واحد كل listeners على نفس channel.
  - يوجد dedupe TTL 10s لمنع double-publish.
  - `events/route.ts` ينظف interval والاشتراك عند disconnect/cancel.

- إذا Redis غير موجود:
  - `lib/redis.ts:23-27` يطبع warning في production.
  - `session-events.ts:217-239` يرجع in-memory bus single-server.
  - هذا جيد للتطوير أو instance واحدة، لكنه خطر في production multi-instance: إذا render pipeline يعمل على instance مختلفة عن SSE screen connection، الشاشة قد لا تستلم update وتنتقل إلى polling fallback فقط إذا SSE error، أما إذا SSE بقي مفتوحا فلن يعرف أن update ضاع.

- EventSource reconnect:
  - client يستخدم EventSource بسيط في `session-events-client.ts:30`.
  - server يرسل `retry: 3000`.
  - عند error في client يتم تفعيل polling fallback في `useScreenSession`.

- leak/disconnect:
  - `events/route.ts` يستخدم cleanup object، `clearInterval`، unsubscribe، remove abort listener.
  - يبدو جيد.

## 9. Render Flow / Race Conditions

- duplicate render:
  - Redis lock في `render-rate-limit.ts`.
  - `tryIncrementRenderCount` raw SQL conditional update في `session-repository.ts:195`.
  - `tryClaimRenderingSlot` atomic updateMany في `session-repository.ts:179`.
  - client يحمي button spam بـ `renderRequestInFlightRef`.
  - الخطر: Low.

- Redis unavailable:
  - Redis lock/semaphore/device cooldown تفشل open.
  - DB claim لا يزال يمنع duplicate pipeline لنفس session.
  - لكن Gemini concurrency يصبح best-effort فقط بدون Redis. في multi-instance هذا خطر Medium/High حسب traffic.

- render async/background:
  - `render/route.ts:351` يستخدم `void executeRenderPipeline(sessionId)` ثم يرجع 202.
  - `render-service.ts` التعليق يقول يجب await داخل request handler حتى لا تتجمد serverless function، لكن route حاليا يستدعيها fire-and-forget.
  - هذا تناقض مهم. إذا runtime serverless يجمد بعد response، render pipeline قد لا يكمل.
  - Production impact: High إذا deploy على Vercel/serverless.

- timeout/stuck cleanup:
  - `failStuckRenderingSessions` يفشل sessions stuck بعد 7 دقائق.
  - `markStuckRenderJobsAsFailed` موجود ويستخدمه admin render jobs.
  - cleanup route لا يستدعي `markStuckRenderJobsAsFailed` مباشرة، لكنه يستدعي `failStuckRenderingSessions` و`detectStuckSessions`.
  - Needs verification: هل render jobs stuck تنظف عبر admin فقط أم cron آخر؟ إذا فقط admin، أضفها للـ cleanup cron.

- retry pressure:
  - client render polling dynamic ومحدود timeout 310s.
  - requestRoomPreviewJson يعمل retry واحد فقط على 429، وهذا جيد.

## 10. Dev No DB Mode Safety

- dev no DB محصور بشرط:
  - `process.env.NODE_ENV === "development" && !process.env.DATABASE_URL`
  - موجود في `app/room-preview/page.tsx:7` و `app/room-preview/mobile/dev-preview/page.tsx:15`.

- dev-preview-session:
  - route dev-preview يحول إلى `/room-preview` إذا الشرط غير محقق.
  - token ثابت فقط داخل dev route.
  - `useMobileSession` bypasses DB/server calls عند `devPreviewMode`.

- production غير متأثر غالبا:
  - dev button لا يظهر في production.
  - dev-preview route redirect إلى `/room-preview` إذا production.

- ملاحظة مهمة:
  - وجود `!DATABASE_URL` كجزء من الشرط جيد لمنع bypass إذا قاعدة البيانات موجودة حتى في development.
  - لكن أي server file يستورد `prisma` مباشرة بدون حراسة قد يرمي Error في dev no DB بسبب `lib/server/prisma.ts` ينشئ client عند import.

## 11. Findings

### Finding 1: render pipeline fire-and-forget contradicts serverless safety comment
- Severity: High
- Evidence: `app/api/room-preview/sessions/[sessionId]/render/route.ts:351` يستدعي `void executeRenderPipeline(sessionId)`. في `lib/room-preview/render-service.ts:312-319` التعليق يقول يجب await داخل request handler لأن serverless قد يجمد بعد response.
- Why it matters: في production serverless قد يبدأ render ثم يتوقف بعد رجوع 202، فتظل الجلسة `ready_to_render` أو `rendering` حتى cleanup يفشلها. هذا لا يزيد polling فقط، بل يكسر تجربة المستخدم.
- Suggested fix: استخدم `after()` الرسمي من Next/Vercel إن كان مدعوما، أو await pipeline داخل route مع `maxDuration=300`، أو نقل الرندر إلى queue worker حقيقي.
- Production impact: renders stuck أو failed تحت serverless.

### Finding 2: heartbeat يكتب في DB كل 30 ثانية لكل client
- Severity: Medium
- Evidence: `features/room-preview/screen/useScreenHeartbeat.ts:5`, `features/room-preview/mobile/useMobileHeartbeat.ts:5`, و `app/api/room-preview/sessions/[sessionId]/heartbeat/route.ts:57-77`.
- Why it matters: session واحدة فيها شاشة وموبايل تساوي تقريبا 4 DB ops/minute. مع 500 sessions فعالة ممكن تصل إلى آلاف DB ops/minute فقط للpresence.
- Suggested fix: لا تعمل update إذا آخر seen أقل من 60s، أو اجعل heartbeat يسجل في Redis ثم flush DB كل دقيقة، أو استخدم `updateMany` بشرط timestamp قديم.
- Production impact: ضغط مستمر على DB حتى بدون تفاعل المستخدم.

### Finding 3: Redis غيابه في production يحول real-time/rate-limit إلى best-effort
- Severity: High
- Evidence: `lib/redis.ts:23-27` warning production، و `session-events.ts:217-239` in-memory fallback، و `gemini-semaphore.ts:98-104` يسمح بالرندر إذا Redis غير موجود.
- Why it matters: في multi-instance، SSE updates لا تعبر بين instances، rate limits/concurrency قد لا تكون global، وGemini quota ممكن يتجاوز.
- Suggested fix: اجعل Redis مطلوبا production أو فعّل degraded mode صريح يمنع render/concurrency-sensitive flows إذا Redis غير متوفر.
- Production impact: updates ضائعة، ضغط AI زائد، rate-limit غير موحد.

### Finding 4: bug في retry 429 داخل session-client
- Severity: Medium
- Evidence: `lib/room-preview/session-client.ts:146` يستدعي `doFetch(input, init, headers, timeoutMs)` بينما `doFetch` يحتاج 5 arguments في `session-client.ts:98`.
- Why it matters: TypeScript/build قد يفشل، أو عند retry ثم network error يكون fallback message مفقود.
- Suggested fix: مرر `fallbackMessage` في الاستدعاء الثاني.
- Production impact: build/typecheck issue واحتمال error handling ناقص عند 429 retry.

### Finding 5: cleanup endpoint قد يكون مفتوحا إذا secrets غير مضبوطة
- Severity: Medium
- Evidence: `app/api/room-preview/cleanup/route.ts` comment يقول إذا لم تضبط env vars فالendpoint open، و `isRequestAuthorized` يرجع true إذا `!cleanupSecret && !cronSecret`.
- Why it matters: في production إذا نسيان env vars، أي شخص يستطيع تشغيل cleanup ويضغط DB أو يغير session statuses.
- Suggested fix: في production، إذا لا يوجد `CLEANUP_SECRET` ولا `CRON_SECRET` أرجع 500/401 ولا تسمح.
- Production impact: تشغيل cleanup غير مصرح، ضغط DB، تغيير حالات sessions.

### Finding 6: product lookup يقرأ filesystem لكل request
- Severity: Low
- Evidence: `data/room-preview/mock-products.ts` يستخدم `readdirSync(PRODUCTS_DIRECTORY)` في `getProductsFromPublicDirectory`، و`getRoomPreviewMockProductById/Barcode` تستدعيه لكل product POST.
- Why it matters: مع عدد منتجات كبير أو filesystem بطيء، اختيار المنتج يصير أبطأ ويستهلك CPU/IO.
- Suggested fix: cache manifest في module scope مع invalidate في development فقط، أو generate product manifest build-time.
- Production impact: بطء بسيط إلى متوسط في product save.

### Finding 7: cleanup/stuck detection queries قد تحتاج indexes إضافية
- Severity: Medium
- Evidence: `detectMobileStale` يستخدم `lastMobileSeenAt` في `session-cleanup.ts:27`، وschema لا يحتوي index على `lastMobileSeenAt`. cleanup أخرى تستخدم `status + updatedAt`، بينما schema فيها `status + createdAt`.
- Why it matters: عند نمو جدول sessions، cleanup قد يتحول إلى scan مكلف.
- Suggested fix: إضافة indexes مثل `@@index([status, updatedAt])`, `@@index([status, lastMobileSeenAt])`, وربما `@@index([status, lastScreenSeenAt])`.
- Production impact: cleanup أبطأ وضغط DB أعلى مع البيانات الكبيرة.

### Finding 8: diagnostics server guards in-memory فقط
- Severity: Low/Medium
- Evidence: `diagnostics/route.ts` يستخدم `rateLimitMap`, `dedupeMap`, `sessionValidityCache` في module scope.
- Why it matters: في serverless/multi-instance الحماية ليست global وقد يعبر burst من عدة instances.
- Suggested fix: استخدم Redis optional/global للدedupe/rate-limit، أو اقبلها كحماية best-effort مع مراقبة.
- Production impact: ضغط DB أعلى عند clients شاذة أو reload loops.

### Finding 9: Prisma singleton ليس lazy فعليا
- Severity: Medium
- Evidence: `lib/server/prisma.ts:55` ينفذ `createPrismaClient()` عند import. التعليق قبله يقول lazy.
- Why it matters: أي import لمسار DB في dev no DB يرمي Error حتى لو لن يتم استخدام DB call. هذا يفسر حساسية المشروع عند غياب `DATABASE_URL`.
- Suggested fix: إما صحح التعليق أو اجعل الوصول lazy فعلا عبر function `getPrisma()`. لا تغير production behavior بدون اختبار.
- Production impact: منخفض إذا env مضبوط، عالي للتطوير/preview بدون DB.

## 12. Recommendations

### Must fix before production

- اجعل Redis متطلبا فعليا في production أو امنع render/real-time degraded mode إذا Redis غير متوفر.
- أصلح render execution strategy: لا تعتمد على `void executeRenderPipeline` في serverless إلا إذا عندك worker/queue أو `after()` مضمون.
- أصلح استدعاء `doFetch` الناقص في `lib/room-preview/session-client.ts:146`.
- اجعل `/api/room-preview/cleanup` يرفض الطلب في production إذا secrets غير مضبوطة.

### Should fix soon

- قلل DB writes في heartbeat أو انقل presence إلى Redis.
- أضف indexes لـ cleanup: `status + updatedAt` و `status + lastMobileSeenAt`.
- أضف cache لمنتجات `public/product`.
- أضف rate limit للـ upload endpoints، خصوصا fallback `/room`.
- أضف monitoring metrics: عدد SSE connections، polling fallback count، render duration، heartbeat write count، cleanup duration.

### Nice to have

- أضف jitter بسيط للـ polling حتى لا تتزامن requests عند كثرة الأجهزة.
- أضف pagination/batching أوسع في cleanup/stuck detection.
- أضف admin setting يمنع auto-refresh أقل من 15-30s.
- اجعل product manifest generated حتى لا يعتمد runtime على filesystem scan.

## 13. Final Verdict

- النظام قابل للتجربة حاليا: نعم، خصوصا للتطوير والتدفق الحقيقي الأساسي.
- النظام قابل للإنتاج: قابل، لكن ليس قبل معالجة أهم 4 نقاط في Must fix.
- أكبر 3 مخاطر:
  - الرندر fire-and-forget قد يفشل في serverless.
  - غياب Redis في production يجعل real-time/rate limits/concurrency best-effort.
  - heartbeat يسبب DB writes مستمرة مع نمو عدد الجلسات.

- أول 5 تعديلات أنصح بها:
  1. إصلاح استراتيجية تشغيل render pipeline بqueue/worker أو await/after مضمون.
  2. فرض Redis في production أو تعطيل flows الحساسة عند غيابه.
  3. تخفيف heartbeat DB writes.
  4. إصلاح bug `doFetch` retry.
  5. إضافة indexes للـ cleanup queries.

الخلاصة: لا يوجد loop قاتل أو polling خطير دائم في الحالة الطبيعية. التصميم واعي وفيه dedupe/cleanup/locks جيدة. المخاطر الحقيقية production-oriented: الاعتماد على serverless background work، غياب Redis، وضغط heartbeat/cleanup مع الحجم الكبير.
