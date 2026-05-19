import "server-only";
import { prisma } from "@/lib/server/prisma";

export interface EnvCheck {
  key: string;
  set: boolean;
  required: boolean;
  hint?: string;
}

export interface RecentError {
  id: string;
  sessionId: string;
  timestamp: string;
  eventType: string;
  code: string | null;
  message: string | null;
  metadata: unknown;
}

export interface FailedRenderJob {
  id: string;
  sessionId: string;
  createdAt: string;
  updatedAt: string;
  failureReason: string | null;
  errorMessage: string | null;
  errorCode: string | null;
}

export interface SystemDiagnosticsData {
  envChecks: EnvCheck[];
  recentErrors: RecentError[];
  failedJobs: FailedRenderJob[];
  dbStats: {
    totalSessions: number;
    failedSessions: number;
    totalRenderJobs: number;
    failedRenderJobs: number;
    errorsLast24h: number;
  };
  checkedAt: string;
}

const ENV_CHECKS: Omit<EnvCheck, "set">[] = [
  { key: "GEMINI_API_KEY", required: true, hint: "AI image generation — without this no renders will work" },
  { key: "DATABASE_URL", required: true, hint: "PostgreSQL connection string" },
  { key: "R2_ENDPOINT", required: true, hint: "Cloudflare R2 endpoint URL" },
  { key: "R2_ACCESS_KEY_ID", required: true, hint: "R2 access key" },
  { key: "R2_SECRET_ACCESS_KEY", required: true, hint: "R2 secret key" },
  { key: "R2_BUCKET_NAME", required: true, hint: "R2 bucket name" },
  { key: "R2_PUBLIC_URL", required: true, hint: "Public URL prefix for uploaded images" },
  { key: "ADMIN_USERNAME", required: true, hint: "Admin panel username" },
  { key: "ADMIN_PASSWORD", required: true, hint: "Admin panel password" },
  { key: "ADMIN_JWT_SECRET", required: true, hint: "Secret for admin session tokens" },
  { key: "SESSION_TOKEN_SECRET", required: true, hint: "Secret for user session tokens" },
  { key: "NEXT_PUBLIC_BASE_URL", required: false, hint: "Public URL of the app (affects QR codes)" },
  { key: "ENABLE_REDIS", required: false, hint: "Set to 'true' to enable Redis for rate limiting" },
  { key: "GEMINI_IMAGE_MODELS", required: false, hint: "Override default Gemini model names (comma-separated)" },
];

export async function getSystemDiagnostics(): Promise<SystemDiagnosticsData> {
  const envChecks: EnvCheck[] = ENV_CHECKS.map((e) => ({
    ...e,
    set: !!process.env[e.key],
  }));

  const since24h = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const since7d = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

  const [
    totalSessions,
    failedSessions,
    totalRenderJobs,
    failedRenderJobsCount,
    errorsLast24h,
    recentErrorEvents,
    failedJobsRaw,
  ] = await Promise.all([
    prisma.roomPreviewSession.count(),
    prisma.roomPreviewSession.count({ where: { status: "failed" } }),
    prisma.renderJob.count(),
    prisma.renderJob.count({ where: { status: "failed" } }),
    prisma.sessionEvent.count({
      where: { level: "error", timestamp: { gte: since24h } },
    }),
    prisma.sessionEvent.findMany({
      where: { level: "error", timestamp: { gte: since7d } },
      orderBy: { timestamp: "desc" },
      take: 30,
      select: {
        id: true,
        sessionId: true,
        timestamp: true,
        eventType: true,
        code: true,
        message: true,
        metadata: true,
      },
    }),
    prisma.renderJob.findMany({
      where: { status: "failed", createdAt: { gte: since7d } },
      orderBy: { createdAt: "desc" },
      take: 20,
      select: {
        id: true,
        sessionId: true,
        createdAt: true,
        updatedAt: true,
        failureReason: true,
      },
    }),
  ]);

  const recentErrors: RecentError[] = recentErrorEvents.map((e) => ({
    id: e.id,
    sessionId: e.sessionId,
    timestamp: e.timestamp.toISOString(),
    eventType: e.eventType,
    code: e.code,
    message: e.message,
    metadata: e.metadata,
  }));

  // Enrich failed jobs with the error message from session events
  const failedJobIds = failedJobsRaw.map((j) => j.sessionId);
  const jobErrorEvents =
    failedJobIds.length > 0
      ? await prisma.sessionEvent.findMany({
          where: {
            sessionId: { in: failedJobIds },
            eventType: "render_failed",
          },
          orderBy: { timestamp: "desc" },
          select: { sessionId: true, message: true, code: true },
        })
      : [];

  const errorBySession = new Map<string, { message: string | null; code: string | null }>();
  for (const ev of jobErrorEvents) {
    if (!errorBySession.has(ev.sessionId)) {
      errorBySession.set(ev.sessionId, { message: ev.message, code: ev.code });
    }
  }

  const failedJobs: FailedRenderJob[] = failedJobsRaw.map((j) => {
    const ev = errorBySession.get(j.sessionId);
    return {
      id: j.id,
      sessionId: j.sessionId,
      createdAt: j.createdAt.toISOString(),
      updatedAt: j.updatedAt.toISOString(),
      failureReason: j.failureReason,
      errorMessage: ev?.message ?? null,
      errorCode: ev?.code ?? null,
    };
  });

  return {
    envChecks,
    recentErrors,
    failedJobs,
    dbStats: {
      totalSessions,
      failedSessions,
      totalRenderJobs,
      failedRenderJobs: failedRenderJobsCount,
      errorsLast24h,
    },
    checkedAt: new Date().toISOString(),
  };
}
