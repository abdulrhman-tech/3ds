"use client";

import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

/**
 * global-error.tsx replaces the root layout when a fatal React render error
 * occurs at the top level. It must include <html> and <body> tags.
 */
export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="ar" dir="rtl">
      <body>
        <main
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#e0d6df",
            padding: "1rem",
            textAlign: "center",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.4)",
              border: "1px solid rgba(255,255,255,0.6)",
              borderRadius: "2rem",
              padding: "2.5rem",
              maxWidth: "28rem",
              width: "100%",
              backdropFilter: "blur(12px)",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.2em",
                color: "#003C71",
                textTransform: "uppercase",
              }}
            >
              Something went wrong
            </p>
            <h1 style={{ marginTop: "1rem", fontSize: "1.875rem", fontWeight: 700, color: "#1d1d1f" }}>
              Unexpected error
            </h1>
            <p style={{ marginTop: "0.75rem", fontSize: "0.875rem", color: "#4a4a52" }}>
              {error.message || "An unexpected error occurred. Please try again."}
            </p>
            {error.digest && (
              <p style={{ marginTop: "0.5rem", fontFamily: "monospace", fontSize: "0.75rem", color: "#8b7b8a" }}>
                Ref: {error.digest}
              </p>
            )}
            <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <button
                onClick={reset}
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  borderRadius: "9999px",
                  border: "1px solid rgba(255,255,255,0.6)",
                  background: "rgba(255,255,255,0.5)",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                }}
              >
                Try again
              </button>
              <a
                href="/"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  borderRadius: "9999px",
                  border: "1px solid rgba(255,255,255,0.6)",
                  background: "rgba(255,255,255,0.2)",
                  color: "#003C71",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  display: "block",
                }}
              >
                Go home
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
