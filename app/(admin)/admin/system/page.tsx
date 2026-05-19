import Link from "next/link";
import { AdminHeader } from "../_components/admin-header";
import { getSystemDiagnostics } from "@/lib/admin/system-diagnostics";

export const metadata = { title: "System Status — Ibdaa 360" };
export const dynamic = "force-dynamic";

function relativeTime(iso: string) {
  const s = Math.max(0, Math.floor((Date.now() - new Date(iso).getTime()) / 1000));
  if (s < 60) return `${s}s ago`;
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  return `${Math.floor(s / 86400)}d ago`;
}

function Badge({ ok, label }: { ok: boolean; label: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${
        ok ? "bg-green-950 text-green-300" : "bg-red-950 text-red-300"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${ok ? "bg-green-400" : "bg-red-400"}`} />
      {label}
    </span>
  );
}

export default async function AdminSystemPage() {
  const data = await getSystemDiagnostics();
  const missingRequired = data.envChecks.filter((e) => e.required && !e.set);
  const allRequiredSet = missingRequired.length === 0;

  return (
    <div className="min-h-screen bg-gray-950">
      <AdminHeader />
      <main className="mx-auto max-w-5xl space-y-8 px-6 py-8">

        {/* Title */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-lg font-semibold text-white">System Status</h1>
            <p className="mt-1 text-sm text-gray-500">
              Env vars, recent render errors, and DB stats. Checked at {new Date(data.checkedAt).toLocaleTimeString()}.
            </p>
          </div>
          <div className="flex gap-2">
            <Link href="/admin/system" className="rounded-md border border-gray-800 px-3 py-1.5 text-sm text-gray-400 hover:bg-gray-900 hover:text-white">
              Refresh
            </Link>
            <Link href="/admin" className="rounded-md border border-gray-800 px-3 py-1.5 text-sm text-gray-400 hover:bg-gray-900 hover:text-white">
              Dashboard
            </Link>
          </div>
        </div>

        {/* DB Stats */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {[
            { label: "Total sessions", value: data.dbStats.totalSessions },
            { label: "Failed sessions", value: data.dbStats.failedSessions, red: data.dbStats.failedSessions > 0 },
            { label: "Total render jobs", value: data.dbStats.totalRenderJobs },
            { label: "Failed render jobs", value: data.dbStats.failedRenderJobs, red: data.dbStats.failedRenderJobs > 0 },
            { label: "Errors (24h)", value: data.dbStats.errorsLast24h, red: data.dbStats.errorsLast24h > 0 },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-gray-800 bg-gray-900 px-4 py-4">
              <p className="text-xs text-gray-500">{s.label}</p>
              <p className={`mt-1 text-2xl font-semibold tabular-nums ${s.red ? "text-red-400" : "text-white"}`}>
                {s.value}
              </p>
            </div>
          ))}
        </div>

        {/* Environment Variables */}
        <section>
          <div className="mb-3 flex items-center gap-3">
            <h2 className="text-sm font-semibold text-white">Environment Variables</h2>
            {allRequiredSet ? (
              <Badge ok label="All required vars set" />
            ) : (
              <Badge ok={false} label={`${missingRequired.length} required var${missingRequired.length > 1 ? "s" : ""} missing`} />
            )}
          </div>
          <div className="overflow-hidden rounded-xl border border-gray-800">
            <table className="w-full text-sm">
              <thead className="border-b border-gray-800 bg-gray-900">
                <tr>
                  <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Variable</th>
                  <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Status</th>
                  <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/70 bg-gray-950">
                {data.envChecks.map((e) => (
                  <tr key={e.key} className={!e.set && e.required ? "bg-red-950/10" : ""}>
                    <td className="px-4 py-2.5 font-mono text-xs text-gray-200">{e.key}</td>
                    <td className="px-4 py-2.5">
                      <Badge ok={e.set} label={e.set ? "set" : "missing"} />
                      {e.required && !e.set && (
                        <span className="ml-2 text-xs text-red-400 font-medium">REQUIRED</span>
                      )}
                    </td>
                    <td className="px-4 py-2.5 text-xs text-gray-500">{e.hint}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Failed Render Jobs */}
        <section>
          <h2 className="mb-3 text-sm font-semibold text-white">
            Failed Render Jobs <span className="ml-2 text-xs font-normal text-gray-500">(last 7 days)</span>
          </h2>
          <div className="overflow-hidden rounded-xl border border-gray-800">
            <table className="w-full text-sm">
              <thead className="border-b border-gray-800 bg-gray-900">
                <tr>
                  <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Job ID</th>
                  <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Session</th>
                  <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-gray-500">When</th>
                  <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Error</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/70 bg-gray-950">
                {data.failedJobs.map((j) => (
                  <tr key={j.id} className="hover:bg-gray-900/50">
                    <td className="px-4 py-2.5 font-mono text-xs text-gray-400">{j.id.slice(0, 10)}…</td>
                    <td className="px-4 py-2.5">
                      <Link href={`/admin/diagnostics/${j.sessionId}`} className="font-mono text-xs text-indigo-300 hover:text-indigo-200">
                        {j.sessionId.slice(0, 10)}…
                      </Link>
                    </td>
                    <td className="px-4 py-2.5 text-xs text-gray-500">{relativeTime(j.createdAt)}</td>
                    <td className="px-4 py-2.5 text-xs">
                      {j.errorMessage ? (
                        <span className="text-red-300">{j.errorMessage}</span>
                      ) : j.failureReason ? (
                        <span className="text-amber-300">{j.failureReason}</span>
                      ) : (
                        <span className="text-gray-600">no error captured</span>
                      )}
                    </td>
                  </tr>
                ))}
                {data.failedJobs.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-6 py-10 text-center text-sm text-gray-500">
                      No failed render jobs in the last 7 days.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Recent Error Events */}
        <section>
          <h2 className="mb-3 text-sm font-semibold text-white">
            Recent Error Events <span className="ml-2 text-xs font-normal text-gray-500">(last 7 days)</span>
          </h2>
          <div className="overflow-hidden rounded-xl border border-gray-800">
            <table className="w-full text-sm">
              <thead className="border-b border-gray-800 bg-gray-900">
                <tr>
                  <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-gray-500">When</th>
                  <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Session</th>
                  <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Event</th>
                  <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Code</th>
                  <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Message</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/70 bg-gray-950">
                {data.recentErrors.map((e) => (
                  <tr key={e.id} className="hover:bg-gray-900/50">
                    <td className="px-4 py-2.5 text-xs text-gray-500 whitespace-nowrap">{relativeTime(e.timestamp)}</td>
                    <td className="px-4 py-2.5">
                      <Link href={`/admin/diagnostics/${e.sessionId}`} className="font-mono text-xs text-indigo-300 hover:text-indigo-200">
                        {e.sessionId.slice(0, 10)}…
                      </Link>
                    </td>
                    <td className="px-4 py-2.5 font-mono text-xs text-gray-400">{e.eventType}</td>
                    <td className="px-4 py-2.5 font-mono text-xs text-amber-400">{e.code ?? "—"}</td>
                    <td className="px-4 py-2.5 text-xs text-red-300 max-w-sm truncate" title={e.message ?? ""}>
                      {e.message ?? <span className="text-gray-600">—</span>}
                    </td>
                  </tr>
                ))}
                {data.recentErrors.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-6 py-10 text-center text-sm text-green-400">
                      No errors logged in the last 7 days.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

      </main>
    </div>
  );
}
