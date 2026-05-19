/**
 * instrumentation-client.ts
 *
 * Runs BEFORE React hydration begins (Next.js 15.3+).
 * This is the canonical location for client-side Sentry init and polyfills.
 *
 * iOS Safari throws "TypeError: Type error" when performance.measure() is
 * called with a start mark that doesn't exist yet. Next.js App Router and
 * Sentry both call this API during navigation — if it throws before React
 * hydrates, the entire JS thread halts and the page stays permanently on the
 * splash screen (white/blank). Wrapping it in a no-throw shim fixes this
 * without affecting any other browser or the collected timing data.
 */
import * as Sentry from "@sentry/nextjs";

if (typeof window !== "undefined" && typeof performance !== "undefined") {
  const _originalMeasure = performance.measure.bind(performance);
  performance.measure = function safePerformanceMeasure(...args) {
    try {
      return _originalMeasure(...args);
    } catch {
      return undefined as unknown as PerformanceMeasure;
    }
  };
}

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  tracesSampleRate: process.env.NODE_ENV === "production" ? 0.1 : 1.0,

  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,

  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],

  enabled: Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN),
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
