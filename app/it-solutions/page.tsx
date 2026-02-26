import Link from "next/link";

export default function ITSolutionsPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--muted)" }}>
          Services
        </div>
        <h1 className="text-3xl font-semibold tracking-tight">IT Solutions</h1>
        <p className="max-w-3xl" style={{ color: "var(--muted)" }}>
          Automation, platforms, and AI-ready systems that scale delivery—built with enterprise security and operational rigor.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium text-white"
            style={{ background: "linear-gradient(135deg, var(--accent), var(--accent2))" }}
          >
            Request a Build Plan
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium"
            style={{ border: "1px solid var(--line)", color: "var(--text)", background: "rgba(255,255,255,0.03)" }}
          >
            Delivery model
          </Link>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          ["Web & Portals", "Next.js sites, client portals, secure workflows."],
          ["Automation", "Integrations, process automation, reporting."],
          ["AI Enablement", "Document pipelines, extraction, validation, and orchestration."],
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
        <div className="text-sm font-semibold">Common deliverables</div>
        <ul className="mt-4 list-disc pl-5 text-sm" style={{ color: "var(--muted)" }}>
          <li>Architecture + integration plan</li>
          <li>Data model + security boundaries</li>
          <li>Deployment pipeline + environments</li>
          <li>Operational dashboards + alerting</li>
        </ul>
      </section>

      <section className="rounded-2xl border p-6 md:p-8" style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.02)" }}>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold text-white">Want to modernize execution with software?</div>
            <div className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
              Share your workflow, users, and constraints. We’ll respond with a structured implementation plan.
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
