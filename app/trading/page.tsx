import Link from "next/link";

export default function TradingPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--muted)" }}>
          Services
        </div>
        <h1 className="text-3xl font-semibold tracking-tight">Trading</h1>
        <p className="max-w-3xl" style={{ color: "var(--muted)" }}>
          Cross-border sourcing, coordination, documentation readiness, and execution cadence—
          designed for enterprise reliability and clear stakeholder communication.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium text-white"
            style={{ background: "linear-gradient(135deg, var(--accent), var(--accent2))" }}
          >
            Start a Trading Intake
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium"
            style={{ border: "1px solid var(--line)", color: "var(--text)", background: "rgba(255,255,255,0.03)" }}
          >
            How we work
          </Link>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          ["Sourcing Support", "Coordinate suppliers, availability, and readiness checks."],
          ["Documentation Readiness", "Basic checklists, handoffs, and milestone gating."],
          ["Execution Cadence", "Tracking, communications, and stakeholder updates."],
        ].map(([t, d]) => (
          <div
            key={t}
            className="rounded-2xl border p-6"
            style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.02)" }}
          >
            <div className="text-sm font-semibold">{t}</div>
            <div className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
              {d}
            </div>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border p-6 md:p-8" style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.02)" }}>
        <div className="text-sm font-semibold">Typical workflow</div>
        <ol className="mt-4 grid gap-4 md:grid-cols-4">
          {[
            ["Intake", "Objective, constraints, timeline, parties."],
            ["Structure", "Roles, data, documentation, milestones."],
            ["Execute", "Coordination and progress tracking."],
            ["Closeout", "Handoffs, artifacts, post-mortem."],
          ].map(([t, d]) => (
            <li key={t} className="rounded-2xl border p-5" style={{ borderColor: "var(--line)", background: "rgba(0,0,0,0.10)" }}>
              <div className="text-sm font-semibold">{t}</div>
              <div className="mt-2 text-sm" style={{ color: "var(--muted)" }}>{d}</div>
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-2xl border p-6 md:p-8" style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.02)" }}>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold text-white">Ready to coordinate a trading execution?</div>
            <div className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
              Share the corridor, target timeline, and counterpart details. We’ll respond with an intake checklist.
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium text-white"
            style={{ background: "linear-gradient(135deg, var(--accent), var(--accent2))" }}
          >
            Contact Axion
          </Link>
        </div>
      </section>
    </div>
  );
}
