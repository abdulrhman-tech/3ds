import { createHash, timingSafeEqual } from "node:crypto";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { signAdminToken, ADMIN_SESSION_COOKIE } from "@/lib/admin/auth";
import { checkIpRateLimit, getClientIp } from "@/lib/ip-rate-limit";

const LOGIN_RATE_LIMIT = 5;
const LOGIN_RATE_WINDOW_SECONDS = 60;

function checkCredentials(username: string, password: string): boolean {
  const expectedUser = process.env.ADMIN_USERNAME ?? "";
  const expectedPass = process.env.ADMIN_PASSWORD ?? "";

  if (!expectedUser || !expectedPass) return false;

  const hash = (s: string) => createHash("sha256").update(s).digest();

  const userMatch = timingSafeEqual(hash(username), hash(expectedUser));
  const passMatch = timingSafeEqual(hash(password), hash(expectedPass));

  return userMatch && passMatch;
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request.headers);
  const rateLimit = await checkIpRateLimit(ip, {
    keyPrefix: "admin-login",
    limit: LOGIN_RATE_LIMIT,
    windowSeconds: LOGIN_RATE_WINDOW_SECONDS,
  });

  if (rateLimit.limited) {
    return NextResponse.redirect(new URL("/admin/login?error=1", request.url));
  }

  const formData = await request.formData();
  const username = String(formData.get("username") ?? "");
  const password = String(formData.get("password") ?? "");
  const next = String(formData.get("next") ?? "/admin");

  if (!checkCredentials(username, password)) {
    return NextResponse.redirect(new URL("/admin/login?error=1", request.url));
  }

  const token = await signAdminToken();
  const destination = next.startsWith("/admin") ? next : "/admin";

  const response = NextResponse.redirect(new URL(destination, request.url));
  response.cookies.set(ADMIN_SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/admin",
    maxAge: 8 * 60 * 60,
  });

  return response;
}
