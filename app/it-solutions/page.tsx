import Link from "next/link";

const DEMO_URL = "https://camel-glossy-16131483.figma.site/standalone-dentist";

const chips = [
  "Dental Logistics",
  "Realtime Dispatch",
  "Clinic-first UX",
  "Driver Matching",
  "Notifications",
  "Admin Oversight",
];

const featureCards = [
  {
    title: "Clinic Pickup Request",
    body: "Simple request flow: address, ready time, case notes — designed for front desk speed.",
  },
  {
    title: "Dispatch + Assignment",
    body: "Dispatcher view assigns the nearest available driver with clear SLAs and audit trail.",
  },
  {
    title: "Driver Workflow",
    body: "Mobile-first steps: accept → pickup → deliver, with real-time status updates.",
  },
  {
    title: "Notifications",
    body: "Clinic, lab, and dispatcher get updates at each state change — fewer calls, fewer delays.",
  },
  {
    title: "Operational Visibility",
    body: "Track pending/assigned/in-transit/completed requests for daily throughput control.",
  },
  {
    title: "Integrations Ready",
    body: "Optional connectors: Salesforce, Slack, Twilio, Maps, Supabase — enterprise extensions.",
  },
];

const workflow = [
  { step: "01", title: "Clinic creates request", body: "Pickup details captured in seconds." },
  { step: "02", title: "Dispatch assigns driver", body: "Nearest/available driver routed." },
  { step: "03", title: "Driver picks up case", body: "Status updates in real time." },
  { step: "04", title: "Lab receives delivery", body: "Delivery confirmation + history." },
];

const stack = [
  { k: "UX Demo", v: "Figma Site (live)" },
  { k: "MVP (typical)", v: "Firebase Auth, Firestore realtime, Functions, Notifications" },
  { k: "Enterprise add-ons", v: "Salesforce, Slack, Twilio, Maps, Analytics, Data Lake" },
];

function GlassCard({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div
      className="rounded-2xl border p-6"
      style={{
        borderColor: "var(--line)",
        background: "rgba(255,255,255,0.02)",
      }}
    >
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
        {body}
      </div>
    </div>
  );
}

export default function ITSolutionsPage() {
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
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--muted)" }}>
              IT Solutions • Demo-driven Delivery
            </div>

            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Dental Lab Pickup Request App Demo
            </h1>

            <p className="max-w-2xl text-sm md:text-base" style={{ color: "var(--muted)" }}>
              A mobile-first pickup request + real-time dispatch workflow designed for dental clinics and labs.
              Built to reduce delays, eliminate manual coordination, and improve visibility from request to delivery.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {chips.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium"
                  style={{
                    borderColor: "var(--line)",
                    background: "rgba(255,255,255,0.03)",
                    color: "var(--muted)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row pt-2">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-medium text-white"
                style={{
                  background: "linear-gradient(135deg, var(--accent), var(--accent2))",
                  boxShadow: "0 16px 50px rgba(47,108,255,0.22)",
                }}
              >
                Open Live Demo
              </a>

              <Link
                href="/it-solutions/dental-lab-pickup-demo"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-medium"
                style={{
                  border: "1px solid var(--line)",
                  color: "var(--text)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                View Details
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-medium"
                style={{
                  border: "1px solid var(--line)",
                  color: "var(--text)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                Request a Walkthrough
              </Link>
            </div>
          </div>

          {/* Right panel */}
          <div
            className="rounded-2xl border p-6 md:p-8 md:max-w-md"
            style={{ borderColor: "var(--line)", background: "rgba(0,0,0,0.12)" }}
          >
            <div className="text-sm font-semibold">What you can demo in 2 minutes</div>
            <ul className="mt-4 space-y-3 text-sm" style={{ color: "var(--muted)" }}>
              <li className="flex gap-2">
                <span style={{ color: "var(--accent2)" }}>•</span>
                Clinic submits a pickup request
              </li>
              <li className="flex gap-2">
                <span style={{ color: "var(--accent2)" }}>•</span>
                Dispatcher assigns nearest driver
              </li>
              <li className="flex gap-2">
                <span style={{ color: "var(--accent2)" }}>•</span>
                Driver marks pickup and delivery
              </li>
              <li className="flex gap-2">
                <span style={{ color: "var(--accent2)" }}>•</span>
                Stakeholders receive notifications
              </li>
            </ul>

            <div className="mt-6 rounded-2xl border p-5" style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.02)" }}>
              <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--muted)" }}>
                Outcome
              </div>
              <div className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                Fewer calls. Fewer missed handoffs. Clear ETA and accountability.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--muted)" }}>
              Capabilities
            </div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">Designed for real operations</h2>
          </div>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium"
            style={{
              border: "1px solid var(--line)",
              color: "var(--text)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            Open Demo
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {featureCards.map((f) => (
            <GlassCard key={f.title} title={f.title} body={f.body} />
          ))}
        </div>
      </section>

      {/* WORKFLOW */}
      <section
        className="rounded-2xl border p-6 md:p-8"
        style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.02)" }}
      >
        <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--muted)" }}>
          Workflow
        </div>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">Request → Dispatch → Pickup → Delivery</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {workflow.map((w) => (
            <div
              key={w.step}
              className="rounded-2xl border p-5"
              style={{ borderColor: "var(--line)", background: "rgba(0,0,0,0.10)" }}
            >
              <div className="text-xs font-semibold" style={{ color: "var(--accent2)" }}>
                {w.step}
              </div>
              <div className="mt-2 text-sm font-semibold">{w.title}</div>
              <div className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                {w.body}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STACK / DELIVERY */}
      <section className="grid gap-4 md:grid-cols-2">
        <div
          className="rounded-2xl border p-6 md:p-8"
          style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.02)" }}
        >
          <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--muted)" }}>
            Stack
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">MVP now, enterprise-ready later</h2>

          <div className="mt-5 space-y-3">
            {stack.map((s) => (
              <div key={s.k} className="flex items-start justify-between gap-4 rounded-2xl border p-4"
                style={{ borderColor: "var(--line)", background: "rgba(0,0,0,0.10)" }}
              >
                <div className="text-sm font-semibold">{s.k}</div>
                <div className="text-sm text-right" style={{ color: "var(--muted)" }}>
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="rounded-2xl border p-6 md:p-8"
          style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.02)" }}
        >
          <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--muted)" }}>
            Delivery
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">How we implement production</h2>

          <ul className="mt-5 space-y-3 text-sm" style={{ color: "var(--muted)" }}>
            <li className="flex gap-2"><span style={{ color: "var(--accent2)" }}>•</span>Requirements → workflow mapping → acceptance criteria</li>
            <li className="flex gap-2"><span style={{ color: "var(--accent2)" }}>•</span>Data model + audit trail + role-based access</li>
            <li className="flex gap-2"><span style={{ color: "var(--accent2)" }}>•</span>Dispatch rules + SLA monitoring + notifications</li>
            <li className="flex gap-2"><span style={{ color: "var(--accent2)" }}>•</span>Hosting + observability + secure operations</li>
            <li className="flex gap-2"><span style={{ color: "var(--accent2)" }}>•</span>Optional integrations (Salesforce, Slack, Twilio, Maps)</li>
          </ul>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-medium text-white"
              style={{ background: "linear-gradient(135deg, var(--accent), var(--accent2))" }}
            >
              Request a Walkthrough
            </Link>

            <a
              href={DEMO_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-medium"
              style={{ border: "1px solid var(--line)", color: "var(--text)", background: "rgba(255,255,255,0.03)" }}
            >
              Open Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
