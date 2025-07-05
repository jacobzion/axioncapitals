import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '../public/axion-logo.png';
import heroBanner from '../public/hero-banner.png';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const partnerLogos = [
    '/partners/logo1.png',
    '/partners/logo2.png',
    '/partners/logo3.png',
    '/partners/logo4.png',
    '/partners/logo5.png',
    '/partners/logo6.png'
  ];

  return (
    <>
      <Head>
        <title>Axion Capitals - Global Innovation & Trade</title>
        <meta name="description" content="AI Investment, Global Trading, Smart Contracts – Axion Capitals" />
      </Head>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image src={logo} alt="Axion Logo" width={50} height={50} />
            <span className="text-xl font-semibold text-sapphire">Axion Capitals</span>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-sapphire text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <Link key={index} href={item.href} className="text-sapphire hover:text-azure font-medium transition">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden flex flex-col bg-white px-6 py-4 space-y-4 shadow">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-sapphire hover:text-azure font-medium transition"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-28 min-h-screen bg-gradient-to-b from-white via-skymist to-blue-100 text-slategray px-8 pb-20">
        <section className="flex flex-col items-center text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4 text-sapphire">Welcome to Axion Capitals</h1>
          <p className="text-lg max-w-2xl text-slategray">
            Empowering global commerce through artificial intelligence, international trade networks, and smart blockchain contracts.
          </p>
        </section>

        <section className="flex justify-center mb-10">
          <Image src={heroBanner} alt="Axion Hero Banner" width={600} height={600} className="rounded-xl shadow-lg" />
        </section>

        <section className="py-10 bg-white rounded-xl shadow-inner">
          <h2 className="text-2xl font-semibold text-center text-sapphire mb-6">Our Global Partners</h2>
          <div className="flex overflow-x-auto space-x-6 px-6 scrollbar-hide">
            {partnerLogos.map((logo, index) => (
              <div key={index} className="min-w-[120px] h-20 flex items-center justify-center bg-skymist rounded-lg shadow">
                <Image src={logo} alt={`Partner ${index + 1}`} width={100} height={40} objectFit="contain" />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white text-center text-sapphire py-6 border-t">
        © 2025 Axion Capitals, LLC
      </footer>
    </>
  );
}

// Navigation items
const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Global Trading', href: '/global-trading' },
  { label: 'AI & Analytics', href: '/ai-analytics' },
  { label: 'Smart Contracts', href: '/smart-contracts' },
  { label: 'Bridge Network', href: '/bridge-network' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' }
];
