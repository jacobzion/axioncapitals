"use client";

import { useMemo, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

function encodeForm(formData: FormData) {
  const params = new URLSearchParams();
  for (const [k, v] of formData.entries()) params.append(k, String(v));
  return params.toString();
}

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");

  const statusLabel = useMemo(() => {
    if (status === "sending") return "Sending…";
    if (status === "success") return "Submitted";
    if (status === "error") return "Failed";
    return "Ready";
  }, [status]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      // Netlify Next Runtime Forms migration approach:
      // submit to a static file in /public so Netlify Forms can process it.
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForm(formData),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="mx-auto max-w-5xl space-y-10">
      {/* HERO */}
      <section
        className="rounded-2xl border p-8 md:p-12"
        style={{
          borderColor: "var(--line)",
          background:
            "radial-gradient(900px 500px at 20% 0%, rgba(47,108,255,0.18), transparent 55%), radial-gradient(900px 500px at 80% 10%, rgba(106,168,255,0.14), transparent 60%), rgba(255,255,255,0.02)",
        }}
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <div
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--muted)" }}
            >
              Contact
            </div>
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Start with a structured intake.
            </h1>
            <p className="max-w-2xl text-sm md:text-base" style={{ color: "var(--muted)" }}>
              Share your objective, timeline, and constraints. We’ll respond with next steps and required information.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span
                className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium"
                style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.03)", color: "var(--muted)" }}
              >
                Discreet handling
              </span>
              <span
                className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium"
                style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.03)", color: "var(--muted)" }}
              >
                24–48h response target
              </span>
              <span
                className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium"
                style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.03)", color: "var(--muted)" }}
              >
                Executive-ready summary
              </span>
            </div>
          </div>

          {/* Status pill */}
          <div
            className="inline-flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm"
            style={{ borderColor: "var(--line)", background: "rgba(0,0,0,0.12)" }}
          >
            <span
              className="inline-flex h-2 w-2 rounded-full"
              style={{
                background:
                  status === "success"
                    ? "rgba(106,168,255,0.9)"
                    : status === "error"
                    ? "rgba(255,110,110,0.9)"
                    : status === "sending"
                    ? "rgba(255,210,110,0.9)"
                    : "rgba(255,255,255,0.35)",
              }}
            />
            <span style={{ color: "var(--muted)" }}>{statusLabel}</span>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="grid gap-6 md:grid-cols-5">
        {/* Left: Form Card */}
        <div
          className="md:col-span-3 rounded-2xl border p-6 md:p-8"
          style={{
            borderColor: "var(--line)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
            boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
          }}
        >
          <div className="mb-6">
            <div className="text-lg font-semibold tracking-tight">Send a message</div>
            <div className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
              Provide enough context for a meaningful first response.
            </div>
          </div>

          <form name="contact" method="POST" onSubmit={handleSubmit} className="space-y-5">
            {/* Netlify needs this field */}
            <input type="hidden" name="form-name" value="contact" />
            {/* Honeypot */}
            <p style={{ display: "none" }}>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            {/* NAME */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Name</label>
              <input
                name="name"
                required
                placeholder="Your full name"
                className="w-full rounded-2xl border px-4 py-3 text-sm outline-none transition"
                style={{
                  borderColor: "var(--line)",
                  background: "rgba(255,255,255,0.03)",
                  color: "var(--text)",
                  boxShadow: "0 0 0 0 rgba(106,168,255,0)",
                }}
                onFocus={(e) => (e.currentTarget.style.boxShadow = "0 0 0 4px rgba(106,168,255,0.12)")}
                onBlur={(e) => (e.currentTarget.style.boxShadow = "0 0 0 0 rgba(106,168,255,0)")}
              />
            </div>

            {/* EMAIL */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input
                name="email"
                type="email"
                required
                placeholder="name@company.com"
                className="w-full rounded-2xl border px-4 py-3 text-sm outline-none transition"
                style={{
                  borderColor: "var(--line)",
                  background: "rgba(255,255,255,0.03)",
                  color: "var(--text)",
                  boxShadow: "0 0 0 0 rgba(106,168,255,0)",
                }}
                onFocus={(e) => (e.currentTarget.style.boxShadow = "0 0 0 4px rgba(106,168,255,0.12)")}
                onBlur={(e) => (e.currentTarget.style.boxShadow = "0 0 0 0 rgba(106,168,255,0)")}
              />
            </div>

            {/* TOPIC */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Topic</label>
              <select
                name="topic"
                className="w-full rounded-2xl border px-4 py-3 text-sm outline-none transition"
                style={{
                  borderColor: "var(--line)",
                  background: "rgba(255,255,255,0.03)",
                  color: "var(--text)",
                  boxShadow: "0 0 0 0 rgba(106,168,255,0)",
                }}
                onFocus={(e) => (e.currentTarget.style.boxShadow = "0 0 0 4px rgba(106,168,255,0.12)")}
                onBlur={(e) => (e.currentTarget.style.boxShadow = "0 0 0 0 rgba(106,168,255,0)")}
                defaultValue="General"
              >
                <option>General</option>
                <option>Trade / Trading</option>
                <option>Investment</option>
                <option>Real Estate</option>
                <option>IT Solutions</option>
              </select>
            </div>

            {/* MESSAGE */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows={7}
                required
                placeholder="Objective, timeline, constraints, and any relevant links or documents…"
                className="w-full rounded-2xl border px-4 py-3 text-sm outline-none transition"
                style={{
                  borderColor: "var(--line)",
                  background: "rgba(255,255,255,0.03)",
                  color: "var(--text)",
                  boxShadow: "0 0 0 0 rgba(106,168,255,0)",
                }}
                onFocus={(e) => (e.currentTarget.style.boxShadow = "0 0 0 4px rgba(106,168,255,0.12)")}
                onBlur={(e) => (e.currentTarget.style.boxShadow = "0 0 0 0 rgba(106,168,255,0)")}
              />
            </div>

            {/* SUBMIT */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-medium text-white transition"
                style={{
                  background: "linear-gradient(135deg, var(--accent), var(--accent2))",
                  opacity: status === "sending" ? 0.78 : 1,
                  boxShadow: "0 16px 50px rgba(47,108,255,0.22)",
                }}
              >
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>

              {status === "success" && (
                <div className="text-sm" style={{ color: "var(--accent2)" }}>
                  Submitted — we’ll respond soon.
                </div>
              )}
              {status === "error" && (
                <div className="text-sm" style={{ color: "var(--muted)" }}>
                  Submission failed. Please try again.
                </div>
              )}
            </div>

            {/* Hidden routing marker for future filtering */}
            <input type="hidden" name="destination" value="gloriel.group@gmail.com" />
          </form>
        </div>

        {/* Right: “What to include” */}
        <aside
          className="md:col-span-2 rounded-2xl border p-6 md:p-8"
          style={{
            borderColor: "var(--line)",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <div className="text-sm font-semibold">What to include</div>
          <ul className="mt-4 space-y-3 text-sm" style={{ color: "var(--muted)" }}>
            <li className="flex gap-2">
              <span style={{ color: "var(--accent2)" }}>•</span>
              Objective (what “done” looks like)
            </li>
            <li className="flex gap-2">
              <span style={{ color: "var(--accent2)" }}>•</span>
              Timeline and urgency
            </li>
            <li className="flex gap-2">
              <span style={{ color: "var(--accent2)" }}>•</span>
              Constraints (budget, compliance, stakeholders)
            </li>
            <li className="flex gap-2">
              <span style={{ color: "var(--accent2)" }}>•</span>
              Links/docs that matter
            </li>
          </ul>

          <div className="mt-8 rounded-2xl border p-5" style={{ borderColor: "var(--line)", background: "rgba(0,0,0,0.12)" }}>
            <div className="text-sm font-semibold">Confidentiality</div>
            <div className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
              Submissions are handled discreetly. We only use your contact information to respond to this request.
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
