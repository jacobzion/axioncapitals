import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/axion-logo.png';
import heroBanner from '../public/hero-banner.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Axion Capitals</title>
        <meta name="description" content="Strategic Global Trade and Investment Advisory" />
      </Head>

      {/* Header with dropdown menu */}
      <header className="bg-white border-b border-gray-200 fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image src={logo} alt="Axion Logo" width={40} height={40} />
            <span className="text-xl font-light text-gray-800 tracking-tight">Axion Capitals</span>
          </div>

          {/* Navigation */}
          <nav className="flex space-x-6 relative">
            <NavItem label="Home" href="/" />
            <NavItem label="Trading" href="/trading" />
            <NavItem label="Investment" href="/investment" />
            <NavItem label="About" href="/about" />
            <NavItem label="Contact" href="/contact" />

            {/* Dropdown: Insights */}
            <Dropdown label="Insights">
              <DropdownItem href="/insights/reports">Reports</DropdownItem>
              <DropdownItem href="/insights/market-trends">Market Trends</DropdownItem>
              <DropdownItem href="/insights/blog">Blog</DropdownItem>
            </Dropdown>

            {/* Dropdown: Industries */}
            <Dropdown label="Industries">
              <DropdownItem href="/industries/trade">Global Trade</DropdownItem>
              <DropdownItem href="/industries/agriculture">Agriculture</DropdownItem>
              <DropdownItem href="/industries/metals">Metals</DropdownItem>
            </Dropdown>

            {/* Dropdown: Careers */}
            <Dropdown label="Careers">
              <DropdownItem href="/careers/openings">Open Roles</DropdownItem>
              <DropdownItem href="/careers/internships">Internships</DropdownItem>
              <DropdownItem href="/careers/culture">Culture</DropdownItem>
            </Dropdown>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-28 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="w-full max-w-4xl mx-auto">
            <Image
              src={heroBanner}
              alt="Global Strategy Hero"
              className="rounded-lg shadow-md"
              priority
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 text-center text-gray-400 text-sm py-6">
        © 2025 Axion Capitals, LLC
      </footer>
    </>
  );
}

// Nav item component
function NavItem({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="text-gray-700 hover:text-blue-700 text-sm font-medium px-2 py-1"
    >
      {label}
    </Link>
  );
}

// Dropdown wrapper
function Dropdown({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="group relative">
      <button className="text-gray-700 hover:text-blue-700 text-sm font-medium px-2 py-1">
        {label}
      </button>
      <div className="absolute left-0 mt-2 w-44 bg-white border border-gray-200 shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-200 z-50">
        <div className="py-2">{children}</div>
      </div>
    </div>
  );
}

// Dropdown link item
function DropdownItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-700"
    >
      {children}
    </Link>
  );
}
