import Link from "next/link";

export default function InvestmentPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--muted)" }}>
          Services
        </div>
        <h1 className="text-3xl font-semibold tracking-tight">Investment</h1>
        <p className="max-w-3xl" style={{ color: "var(--muted)" }}>
          Deal intake, screening, diligence workflows, and stakeholder reporting—
          built for clarity, repeatability, and disciplined decision-making.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium text-white"
            style={{ background: "linear-gradient(135deg, var(--accent), var(--accent2))" }}
          >
            Submit a Deal
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium"
            style={{ border: "1px solid var(--line)", color: "var(--text)", background: "rgba(255,255,255,0.03)" }}
          >
            Operating principles
          </Link>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          ["Intake & Qualification", "Standardized inputs to prevent wasted cycles."],
          ["Diligence Workbench", "Document requests, tracking, and review cadence."],
          ["Stakeholder Reporting", "Decision-ready updates and milestone gates."],
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
        <div className="text-sm font-semibold">Diligence cadence</div>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          {[
            ["Week 0", "Deal intake + initial screen"],
            ["Week 1", "Document request + model inputs"],
            ["Week 2", "Review + risk flags + Q&A"],
            ["Week 3+", "Decision memo + closing workflow"],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border p-5" style={{ borderColor: "var(--line)", background: "rgba(0,0,0,0.10)" }}>
              <div className="text-sm font-semibold">{t}</div>
              <div className="mt-2 text-sm" style={{ color: "var(--muted)" }}>{d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border p-6 md:p-8" style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.02)" }}>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold text-white">Need a repeatable diligence workflow?</div>
            <div className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
              Send the deal summary and current materials. We’ll respond with an intake template.
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
