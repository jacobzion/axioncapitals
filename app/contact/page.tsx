export default function ContactPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <header>
        <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--muted)" }}>Contact</div>
        <h1 className="text-3xl font-semibold tracking-tight">Get in touch</h1>
        <p className="mt-2" style={{ color: "var(--muted)" }}>
          Tell us a short summary of your objective and the best way to reach you. We’ll respond with next steps.
        </p>
      </header>

      <section className="rounded-2xl border p-6" style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.02)" }}>
        {/* Netlify form (static HTML form so Netlify can capture submissions) */}
        <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="flex flex-col gap-4">
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="source" value="website-contact-form" />

          {/* honeypot */}
          <div style={{ display: 'none' }}>
            <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
          </div>

          <label className="flex flex-col">
            <span className="text-sm font-medium">Name</span>
            <input name="name" required className="mt-2 rounded-xl border px-3 py-2" style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.03)" }} />
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium">Email</span>
            <input name="email" type="email" required className="mt-2 rounded-xl border px-3 py-2" style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.03)" }} />
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium">Message</span>
            <textarea name="message" rows={6} required className="mt-2 rounded-xl border px-3 py-2" style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.03)" }} />
          </label>

          <div className="flex items-center gap-3">
            <button type="submit" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium text-white" style={{ background: "linear-gradient(135deg, var(--accent), var(--accent2))" }}>
              Send Message
            </button>

            <a href="mailto:hello@axioncapitals.com" className="text-sm" style={{ color: "var(--muted)" }}>
              Or email: hello@axioncapitals.com
            </a>
          </div>
        </form>
      </section>

      <section className="rounded-2xl border p-6" style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.02)" }}>
        <div className="text-sm font-semibold">Privacy</div>
        <div className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
          We treat submissions confidentially. Contact info will only be used to respond to this request.
        </div>
      </section>
    </div>
  );
}
