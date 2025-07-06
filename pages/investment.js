// pages/investment.tsx
import Head from 'next/head';
import Image from 'next/image';
import logo from '../public/axion-logo.png';
import { useState } from 'react';

export default function Investment() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Investment | Axion Capitals</title>
        <meta name="description" content="Discover investment opportunities at Axion Capitals." />
      </Head>

      <header className="bg-white border-b border-gray-200 fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image src={logo} alt="Axion Logo" width={100} height={100} />
            <span className="text-xl font-light text-gray-800 tracking-tight">Axion Capitals Global Bridge</span>
          </div>

          <button
            className="md:hidden text-gray-700 text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-700 hover:text-blue-700 text-sm font-medium">Home</a>
            <a href="/trading" className="text-gray-700 hover:text-blue-700 text-sm font-medium">Trading</a>
            <a href="/investment" className="text-gray-700 hover:text-blue-700 text-sm font-medium">Investment</a>
            <a href="/about" className="text-gray-700 hover:text-blue-700 text-sm font-medium">About</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-700 text-sm font-medium">Contact</a>
          </nav>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-2">
            <a href="/" className="block text-gray-700 hover:text-blue-700 text-sm font-medium">Home</a>
            <a href="/trading" className="block text-gray-700 hover:text-blue-700 text-sm font-medium">Trading</a>
            <a href="/investment" className="block text-gray-700 hover:text-blue-700 text-sm font-medium">Investment</a>
            <a href="/about" className="block text-gray-700 hover:text-blue-700 text-sm font-medium">About</a>
            <a href="/contact" className="block text-gray-700 hover:text-blue-700 text-sm font-medium">Contact</a>
          </div>
        )}
      </header>

      <main className="pt-28 bg-gradient-to-b from-white via-gray-50 to-blue-100 min-h-screen">
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Strategic Investment</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            At Axion Capitals, we focus on cross-border investment strategies that prioritize confidentiality,
            opportunity, and long-term growth.
          </p>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Our portfolios include private equity ventures, infrastructure initiatives, and technology
            partnerships across East Asian countries, South America, and European nations. We serve
            institutional and qualified investors with tailored capital allocations.
          </p>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 text-center text-gray-500 text-sm py-6">
        © 2025 Axion Capitals, LLC
      </footer>
    </>
  );
}
