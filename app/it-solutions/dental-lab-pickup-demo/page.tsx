import Link from "next/link";

const DEMO_URL = "https://camel-glossy-16131483.figma.site/standalone-dentist";

const sections = [
  {
    title: "Problem",
    body:
      "Dental clinics often need fast, reliable crown-case pickups to meet lab timelines. Manual calls/texts create delays, missed handoffs, and low visibility.",
  },
  {
    title: "Solution (Demo)",
    body:
      "A mobile-first pickup request app that routes requests to the nearest available driver, tracks status in real time, and notifies the clinic, lab, and dispatcher.",
  },
  {
    title: "Key Features",
    body:
      "• Clinic pickup request (address, ready time, notes)\n• Driver availability + matching\n• Status tracking: Requested → Assigned → Picked up → Delivered\n• Notifications for stakeholders\n• Admin/dispatch view for assignment and oversight",
  },
  {
    title: "Tech Stack (Typical)",
    body:
      "Firebase Auth, Firestore (real-time), Cloud Functions, Notifications (FCM/email), Maps integration. Optional: Salesforce + Slack + Twilio for enterprise workflows.",
  },
];

export default function DentalLabPickupDemoPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--muted)" }}>
          IT Solutions • Demo
        </div>

        <h1 className="text-3xl font-semibold tracking-tight">
          Dental Lab Pickup Request App Demo
        </h1>

        <p className="max-w-3xl" style={{ color: "var(--muted)" }}>
          Live UX demo for a real-time pickup request and dispatch workflow designed for dental clinics and labs.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          {/* ✅ Open Demo button (new tab) */}
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium text-white"
            style={{ background: "linear-gradient(135deg, var(--accent), var(--accent2))" }}
          >
            Open Live Demo
          </a>

          <Link
            href="/it-solutions"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium"
            style={{ border: "1px solid var(--line)", color: "var(--text)", background: "rgba(255,255,255,0.03)" }}
          >
            Back to IT Solutions
          </Link>
        </div>
      </header>

      {/* Overview cards */}
      <section className="grid gap-4 md:grid-cols-2">
        {sections.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border p-6"
            style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.02)" }}
          >
            <div className="text-sm font-semibold">{s.title}</div>
            <div className="mt-3 whitespace-pre-line text-sm" style={{ color: "var(--muted)" }}>
              {s.body}
            </div>
          </div>
        ))}
      </section>

      {/* ✅ Optional embed preview */}
      <section
        className="rounded-2xl border p-4 md:p-6"
        style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.02)" }}
      >
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold">Live Demo Preview (Embedded)</div>
            <div className="mt-1 text-xs" style={{ color: "var(--muted)" }}>
              If the embedded preview does not load, Figma may be blocking iframe embedding—use “Open Live Demo”.
            </div>
          </div>

          <a
            href={DEMO_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium"
            style={{ border: "1px solid var(--line)", color: "var(--text)", background: "rgba(255,255,255,0.03)" }}
          >
            Open Demo in New Tab
          </a>
        </div>

        <div className="mt-4 overflow-hidden rounded-2xl border" style={{ borderColor: "var(--line)" }}>
          <iframe
            src={DEMO_URL}
            style={{ width: "100%", height: "780px", border: 0 }}
            loading="lazy"
            allow="fullscreen"
          />
        </div>
      </section>

      {/* CTA */}
      <section
        className="rounded-2xl border p-6 md:p-8"
        style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.02)" }}
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold text-white">Want this as a production app?</div>
            <div className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
              We can implement authentication, dispatch logic, notifications, audit logs, and admin controls—plus integrations.
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium text-white"
            style={{ background: "linear-gradient(135deg, var(--accent), var(--accent2))" }}
          >
            Request a walkthrough
          </Link>
        </div>
      </section>
    </div>
  );
}
