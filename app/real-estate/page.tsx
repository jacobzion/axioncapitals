import Link from "next/link";

export default function RealEstatePage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--muted)" }}>
          Services
        </div>
        <h1 className="text-3xl font-semibold tracking-tight">Real Estate</h1>
        <p className="max-w-3xl" style={{ color: "var(--muted)" }}>
          Acquisition support, portfolio operations enablement, and property workflow tooling—
          built for predictable execution and reporting.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium text-white"
            style={{ background: "linear-gradient(135deg, var(--accent), var(--accent2))" }}
          >
            Discuss a Property
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium"
            style={{ border: "1px solid var(--line)", color: "var(--text)", background: "rgba(255,255,255,0.03)" }}
          >
            Our approach
          </Link>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          ["Acquisition Workflow", "Evaluation, comps inputs, and decision gating."],
          ["Operations Enablement", "Checklists, vendor coordination, and cadence."],
          ["Investor Reporting", "KPI snapshots and repeatable monthly outputs."],
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
        <div className="text-sm font-semibold">Operations toolkit</div>
        <ul className="mt-4 list-disc pl-5 text-sm" style={{ color: "var(--muted)" }}>
          <li>Turnover and maintenance checklists</li>
          <li>Vendor coordination and documentation handoffs</li>
          <li>Rent roll and expense tracking templates</li>
          <li>Monthly KPI reporting format</li>
        </ul>
      </section>

      <section className="rounded-2xl border p-6 md:p-8" style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.02)" }}>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold text-white">Want a clean acquisition-to-ops pipeline?</div>
            <div className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
              Share the market, target profile, and timeline. We’ll respond with an intake checklist.
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
