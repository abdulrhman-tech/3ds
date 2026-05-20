import { NextRequest, NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE, verifyAdminToken } from "@/lib/admin/auth";
import { checkIpRateLimit, getClientIp } from "@/lib/ip-rate-limit";
import { isRoomPreviewRateLimitDisabled } from "@/lib/room-preview/rate-limit-bypass";

// ─── Limits configuration ─────────────────────────────────────────────────────
//
// Each rule uses an explicit path pattern; avoid substring matching because
// "/room" would otherwise match "/api/room-preview/...".
// Rules are checked in order; first match wins.
// Counters are Redis-backed (shared across all instances) with an in-memory
// fallback when Redis is unavailable.

type RateLimitRule = {
  limit: number;
  matches: (path: string, method: string) => boolean;
  name: string;
  windowSeconds: number;
};

const ROOM_PREVIEW_SESSION_ROUTE = /^\/api\/room-preview\/sessions\/[^/]+$/;
const ROOM_PREVIEW_RENDER_ROUTE = /^\/api\/room-preview\/sessions\/[^/]+\/render$/;
const ROOM_PREVIEW_ROOM_ROUTE = /^\/api\/room-preview\/sessions\/[^/]+\/room(?:\/.*)?$/;

const RATE_LIMIT_RULES: RateLimitRule[] = [
  // AI render pipeline — most expensive resource
  {
    name: "room-preview-render",
    limit: 5,
    windowSeconds: 60,
    matches: (path) => ROOM_PREVIEW_RENDER_ROUTE.test(path),
  },
  // Image uploads
  {
    name: "room-preview-room-upload",
    limit: 20,
    windowSeconds: 60,
    matches: (path) => ROOM_PREVIEW_ROOM_ROUTE.test(path),
  },
  // Session polling/fetch
  {
    name: "room-preview-session-fetch",
    limit: 60,
    windowSeconds: 60,
    matches: (path, method) => method === "GET" && ROOM_PREVIEW_SESSION_ROUTE.test(path),
  },
  {
    name: "room-preview-session-create",
    limit: 15,
    windowSeconds: 60,
    matches: (path, method) => method === "POST" && path === "/api/room-preview/sessions",
  },
  // All other API calls — broad safety net
  {
    name: "api-general",
    limit: 300,
    windowSeconds: 60,
    matches: (path) => path.startsWith("/api/"),
  },
];

// ─── Security headers ─────────────────────────────────────────────────────────

const SECURITY_HEADERS: [string, string][] = [
  ["X-Content-Type-Options",  "nosniff"],
  ["X-Frame-Options",         "DENY"],
  ["X-XSS-Protection",        "1; mode=block"],
  ["Referrer-Policy",         "strict-origin-when-cross-origin"],
  // camera=(self) — allow camera only on same-origin pages (needed for room photo capture).
  // microphone and geolocation remain blocked.
  ["Permissions-Policy",      "camera=(self), microphone=(), geolocation=()"],
];

// ─── Proxy (formerly Middleware) ─────────────────────────────────────────────

export async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const method = request.method.toUpperCase();

  // ── Admin auth guard ─────────────────────────────────────────────────────────
  // Protect all /admin routes except /admin/login.
  // Room Preview diagnostics live under /api/room-preview/* and must never use admin auth.
  if (path.startsWith("/admin") && !path.startsWith("/admin/login")) {
    const token = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;
    if (!token || !(await verifyAdminToken(token))) {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = "/admin/login";
      loginUrl.searchParams.set("next", path);
      return NextResponse.redirect(loginUrl);
    }
  }

  const bypassRoomPreviewRateLimit =
    path.startsWith("/api/room-preview/") && isRoomPreviewRateLimitDisabled();

  // ── Rate limiting (API routes only) ─────────────────────────────────────────
  if (path.startsWith("/api/") && !bypassRoomPreviewRateLimit) {
    const ip = getClientIp(request.headers);

    for (const rule of RATE_LIMIT_RULES) {
      if (rule.matches(path, method)) {
        const result = await checkIpRateLimit(ip, {
          keyPrefix: `proxy:${rule.name}`,
          limit: rule.limit,
          windowSeconds: rule.windowSeconds,
        });

        if (result.limited) {
          console.warn("[proxy] rate limited", {
            ip,
            matchedRule: rule.name,
            method,
            path,
            retryAfterSeconds: result.retryAfterSeconds,
          });

          return NextResponse.json(
            {
              code: "RATE_LIMITED",
              error: "Too many requests. Please slow down.",
              matchedRule: rule.name,
            },
            {
              status: 429,
              headers: {
                "Retry-After": String(result.retryAfterSeconds),
                "Content-Type": "application/json",
                "X-RateLimit-Rule": rule.name,
              },
            },
          );
        }

        break; // only apply the first matching rule
      }
    }
  }

  // ── Security headers (all routes) ───────────────────────────────────────────
  const response = NextResponse.next();
  const requestId = crypto.randomUUID();

  response.headers.set("X-Request-Id", requestId);

  for (const [name, value] of SECURITY_HEADERS) {
    response.headers.set(name, value);
  }

  return response;
}

export const config = {
  // Run on all routes except Next.js internals and static files.
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
