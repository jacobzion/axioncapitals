import Link from "next/link";

const cards = [
  {
    href: "/trading",
    title: "Trading",
    desc: "Cross-border sourcing, coordination, documentation readiness, and execution cadence.",
  },
  {
    href: "/investment",
    title: "Investment",
    desc: "Deal intake, screening, diligence workflows, and stakeholder reporting.",
  },
  {
    href: "/real-estate",
    title: "Real Estate",
    desc: "Acquisition support, portfolio operations enablement, and property workflow tooling.",
  },
  {
    href: "/it-solutions",
    title: "IT Solutions",
    desc: "Automation, platforms, and AI-ready systems that scale delivery.",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* HERO */}
      <section
        className="rounded-2xl border p-8 md:p-12"
        style={{
          borderColor: "var(--line)",
          background:
            "radial-gradient(900px 500px at 20% 0%, rgba(47,108,255,0.18), transparent 55%), radial-gradient(900px 500px at 80% 10%, rgba(106,168,255,0.14), transparent 60%), rgba(255,255,255,0.02)",
        }}
      >
        <div
          className="text-xs font-semibold uppercase tracking-widest"
          style={{ color: "var(--muted)" }}
        >
          Axion Capitals Global Bridge
        </div>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          Enterprise-grade global bridging for execution.
        </h1>

        <p className="mt-4 max-w-2xl" style={{ color: "var(--muted)" }}>
          We help clients move from intent to outcome across trade, investment,
          real estate, and technology—using structured intake, disciplined
          diligence, and operational delivery.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium text-white"
            style={{
              background:
                "linear-gradient(135deg, var(--accent), var(--accent2))",
            }}
          >
            Request an Introduction
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium"
            style={{
              border: "1px solid var(--line)",
              color: "var(--text)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            How we work
          </Link>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {[
            ["Structured Intake", "Clear objectives, constraints, and deliverables."],
            ["Diligence First", "Data + documentation readiness before action."],
            ["Execution Cadence", "Milestones, tracking, and stakeholder updates."],
          ].map(([t, d]) => (
            <div
              key={t}
              className="rounded-2xl border p-5"
              style={{
                borderColor: "var(--line)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div className="text-sm font-semibold">{t}</div>
              <div className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                {d}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section>
        <div
          className="text-xs font-semibold uppercase tracking-widest"
          style={{ color: "var(--muted)" }}
        >
          Services
        </div>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">
          Core capabilities
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {cards.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="rounded-2xl border p-6 transition hover:translate-y-[-1px]"
              style={{
                borderColor: "var(--line)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div className="text-lg font-semibold">{c.title}</div>
              <div className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                {c.desc}
              </div>
              <div
                className="mt-4 text-sm font-medium"
                style={{ color: "var(--accent2)" }}
              >
                Explore →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="rounded-2xl border p-6 md:p-8"
        style={{
          borderColor: "var(--line)",
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold text-white">
              Start with a structured intake.
            </div>
            <div className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
              Send your objective and context—Axion will respond with next steps
              and required information.
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium text-white"
            style={{
              background:
                "linear-gradient(135deg, var(--accent), var(--accent2))",
            }}
          >
            Contact Axion
          </Link>
        </div>
      </section>
    </div>
  );
}
