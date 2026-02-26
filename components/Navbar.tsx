import Link from "next/link";

export default function Navbar() {
  return (
    <header style={{borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "1rem"}}>
      <Link href="/" style={{fontWeight: 600}}>
        Axion Capitals Global Bridge
      </Link>
    </header>
  );
}
