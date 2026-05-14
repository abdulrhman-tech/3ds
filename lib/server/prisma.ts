import "server-only";

import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/lib/generated/prisma";

// In serverless environments many short-lived function invocations run
// concurrently, each potentially opening its own connection pool. Without
// an explicit limit, 50 concurrent functions × pg's default of 10 = 500
// connection attempts — well above what most managed Postgres providers allow.
//
// DATABASE_POOL_SIZE controls this per-deployment:
//   - Raw Postgres (no external pooler): 3–5
//   - With PgBouncer / Neon pooled / Supabase Supavisor: 1–2
//
// idleTimeoutMillis: release idle connections after 10 s.
// connectionTimeoutMillis: fail fast (5 s) rather than queue forever.

function parsePoolSize(raw: string | undefined, fallback: number): number {
  const n = parseInt(raw ?? "", 10);
  return Number.isFinite(n) && n > 0 ? n : fallback;
}

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
  prismaPool?: Pool;
};

function createPrismaClient(): PrismaClient {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not set.");
  }

  const MAX_CONNECTIONS = parsePoolSize(process.env.DATABASE_POOL_SIZE, 5);

  const pool =
    globalForPrisma.prismaPool ??
    new Pool({
      connectionString,
      max: MAX_CONNECTIONS,
      idleTimeoutMillis: 10_000,
      connectionTimeoutMillis: 12_000,
    });

  if (!globalForPrisma.prismaPool) {
    globalForPrisma.prismaPool = pool;
  }

  const adapter = new PrismaPg(pool);

  return new PrismaClient({
    adapter,
    log: ["warn", "error"],
  });
}

// Lazy singleton — DATABASE_URL is only read on first actual DB call,
// not at module import time. This prevents Next.js build from failing
// when DATABASE_URL is absent from the build environment.
export const prisma: PrismaClient =
  globalForPrisma.prisma ?? (globalForPrisma.prisma = createPrismaClient());
