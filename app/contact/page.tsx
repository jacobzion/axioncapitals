"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      // IMPORTANT: Post to the static HTML file in /public so Netlify Forms can process it
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <div className="max-w-3xl space-y-8">
      <header>
        <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--muted)" }}>
          Contact
        </div>
        <h1 className="text-3xl font-semibold tracking-tight">Get in touch</h1>
        <p className="mt-2" style={{ color: "var(--muted)" }}>
          Send a short summary of your objective and the best way to reach you.
        </p>
      </header>

      <section className="rounded-2xl border p-6" style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.02)" }}>
        <form name="contact" method="POST" onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Netlify needs this field */}
          <input type="hidden" name="form-name" value="contact" />
          {/* Honeypot */}
          <p style={{ display: "none" }}>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <label className="flex flex-col">
            <span className="text-sm font-medium">Name</span>
            <input
              name="name"
              required
              className="mt-2 rounded-xl border px-3 py-2"
              style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.03)" }}
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium">Email</span>
            <input
              name="email"
              type="email"
              required
              className="mt-2 rounded-xl border px-3 py-2"
              style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.03)" }}
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium">Message</span>
            <textarea
              name="message"
              rows={6}
              required
              className="mt-2 rounded-xl border px-3 py-2"
              style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.03)" }}
            />
          </label>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium text-white"
              style={{ background: "linear-gradient(135deg, var(--accent), var(--accent2))", opacity: status === "sending" ? 0.75 : 1 }}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            <a href="mailto:hello@axioncapitals.com" className="text-sm" style={{ color: "var(--muted)" }}>
              Or email: hello@axioncapitals.com
            </a>
          </div>

          {status === "success" && (
            <div className="text-sm" style={{ color: "var(--accent2)" }}>
              Thanks — your message was submitted.
            </div>
          )}
          {status === "error" && (
            <div className="text-sm" style={{ color: "var(--muted)" }}>
              Submission failed. Please try again or email us.
            </div>
          )}
        </form>
      </section>
    </div>
  );
}
