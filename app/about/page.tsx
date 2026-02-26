import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--muted)" }}>
          About
        </div>
        <h1 className="text-3xl font-semibold tracking-tight">Axion Capitals Global Bridge</h1>
        <p className="max-w-3xl" style={{ color: "var(--muted)" }}>
          Enterprise-grade global bridging for trade, investment, real estate, and technology execution.
          We design repeatable intake, diligence, and execution workflows so leaders can make decisions with clarity.
        </p>
      </header>

      <section className="rounded-2xl border p-6" style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.02)" }}>
        <h2 className="text-xl font-semibold">Our mission</h2>
        <p className="mt-3" style={{ color: "var(--muted)" }}>
          We help clients move from intent to outcome across market corridors by combining disciplined operational design,
          documentation readiness, and execution cadence. Our model focuses on measurable milestones and clean handoffs.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border p-6" style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.02)" }}>
          <div className="text-sm font-semibold">Experience</div>
          <div className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
            Experts in cross-border trade, deal diligence, property operations, and enterprise-grade software delivery.
          </div>
        </div>

        <div className="rounded-2xl border p-6" style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.02)" }}>
          <div className="text-sm font-semibold">Approach</div>
          <div className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
            Structured intake → clear scope → data readiness → milestone-based execution → clean closeout.
          </div>
        </div>

        <div className="rounded-2xl border p-6" style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.02)" }}>
          <div className="text-sm font-semibold">Values</div>
          <div className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
            Discretion, reliability, and measurable outcomes.
          </div>
        </div>
      </section>

      <section className="rounded-2xl border p-6 flex items-center justify-between" style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.02)" }}>
        <div>
          <div className="text-sm font-semibold">Interested in working together?</div>
          <div className="mt-1 text-sm" style={{ color: "var(--muted)" }}>Start by sending a short summary of your objective.</div>
        </div>
        <Link href="/contact" className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium text-white" style={{ background: "linear-gradient(135deg, var(--accent), var(--accent2))" }}>
          Contact Us
        </Link>
      </section>
    </div>
  );
}
