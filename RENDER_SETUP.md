# إعداد Render — خطوة بخطوة

## 1. إعدادات الـ Service في Render

| الحقل | القيمة |
|-------|--------|
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm start` |
| **Node Version** | `20` |
| **Health Check Path** | `/api/health` |

---

## 2. متغيرات البيئة (Environment Variables)

انسخ هذه القيم مباشرة في Render → Environment

### ✅ جاهزة — انسخها مباشرة

```
NODE_ENV=production
STORAGE_PROVIDER=r2
ENABLE_REDIS=false
R2_BUCKET_NAME=3rds
R2_PUBLIC_URL=https://pub-4cea1c464af34c79a4a249df418381f1.r2.dev
ADMIN_USERNAME=admin
```

---

### 🔑 أدخلها يدوياً (من مصادرها)

#### من لوحة Neon (neon.tech → Project → Connection Details)
```
DATABASE_URL=          ← رابط Connection string (Pooled)
DIRECT_URL=            ← رابط Connection string (Direct)
```

#### من Cloudflare R2 (cloudflare.com → R2 → Manage R2 API Tokens)
```
R2_ENDPOINT=           ← Account ID endpoint مثل: https://xxxxx.r2.cloudflarestorage.com
R2_ACCESS_KEY_ID=      ← Access Key ID
R2_SECRET_ACCESS_KEY=  ← Secret Access Key
```

#### من Google AI Studio (aistudio.google.com)
```
GEMINI_API_KEY=        ← مفتاح Gemini API
```

#### قيم أنت تختارها (اكتب أي نص عشوائي طويل)
```
SESSION_TOKEN_SECRET=  ← مثال: my-super-secret-session-key-2024-xyz
ADMIN_JWT_SECRET=      ← مثال: my-super-secret-admin-jwt-key-2024-abc
CLEANUP_SECRET=        ← مثال: my-cleanup-cron-secret-key-2024
ADMIN_PASSWORD=        ← كلمة مرور لوحة الإدارة /admin
```

#### بعد ما يعطيك Render رابطك (مثل https://room-preview.onrender.com)
```
NEXT_PUBLIC_BASE_URL=  ← الرابط الكامل بدون / في النهاية
```

---

## 3. بعد النشر

- **لوحة الإدارة:** `https://your-app.onrender.com/admin`
- **فحص الصحة:** `https://your-app.onrender.com/api/health`
- **المعرض:** `https://your-app.onrender.com/room-preview`

---

## 4. مشاكل شائعة

| المشكلة | الحل |
|---------|------|
| `DATABASE_URL is not set` | أضف DATABASE_URL في Render Environment |
| الصفحة تفتح لكن QR لا يعمل | أضف `NEXT_PUBLIC_BASE_URL` بالرابط الصحيح |
| الـ AI لا يولّد صور | أضف `GEMINI_API_KEY` |
| الصور لا تُرفع | تحقق من R2 credentials |
