export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: "var(--line)" }}>
      <div className="mx-auto w-full max-w-6xl px-4 py-10 text-sm" style={{ color: "var(--muted)" }}>
        © {new Date().getFullYear()} Axion Capitals Global Bridge LLC. All rights reserved.
      </div>
    </footer>
  );
}
