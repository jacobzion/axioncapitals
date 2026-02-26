import Link from "next/link";

const links = [
  { href: "/trading", label: "Trading" },
  { href: "/investment", label: "Investment" },
  { href: "/real-estate", label: "Real Estate" },
  { href: "/it-solutions", label: "IT Solutions" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{ borderColor: "var(--line)", background: "rgba(11,18,32,0.72)" }}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 backdrop-blur">
        <Link href="/" className="flex items-center gap-3">
          <span
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border"
            style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.04)" }}
            aria-label="Axion Capitals Global Bridge"
          >
            <span className="text-sm font-semibold" style={{ color: "var(--accent2)" }}>
              A
            </span>
          </span>

          <div className="leading-tight">
            <div className="font-semibold tracking-tight">
              Axion <span style={{ color: "var(--muted)" }}>Capitals</span>
            </div>
            <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--muted)" }}>
              Global Bridge
            </div>
          </div>
        </Link>

        <nav className="hidden gap-5 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm transition hover:text-white" style={{ color: "var(--muted)" }}>
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium text-white"
          style={{ background: "linear-gradient(135deg, var(--accent), var(--accent2))" }}
        >
          Request Intro
        </Link>
      </div>
    </header>
  );
}