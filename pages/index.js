// pages/index.tsx
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '../public/axion-logo.png';
import heroBanner from '../public/hero-banner.png';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Axion Capitals</title>
        <meta name="description" content="Strategic Global Trade and Investment Solutions by Axion Capitals" />
      </Head>

      {/* Header */}
      <header className="bg-white border-b border-gray-200 fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image src={logo} alt="Axion Logo" width={100} height={100} />
            <span className="text-xl font-light text-gray-800 tracking-tight">Axion Capitals Global Bridge</span>
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-gray-700 text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-700 text-sm font-medium">Home</Link>
            <Link href="/trading" className="text-gray-700 hover:text-blue-700 text-sm font-medium">Trading</Link>
            <Link href="/investment" className="text-gray-700 hover:text-blue-700 text-sm font-medium">Investment</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-700 text-sm font-medium">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-700 text-sm font-medium">Contact</Link>
          </nav>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-2">
            <Link href="/" className="block text-gray-700 hover:text-blue-700 text-sm font-medium">Home</Link>
            <Link href="/trading" className="block text-gray-700 hover:text-blue-700 text-sm font-medium">Trading</Link>
            <Link href="/investment" className="block text-gray-700 hover:text-blue-700 text-sm font-medium">Investment</Link>
            <Link href="/about" className="block text-gray-700 hover:text-blue-700 text-sm font-medium">About</Link>
            <Link href="/contact" className="block text-gray-700 hover:text-blue-700 text-sm font-medium">Contact</Link>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="pt-28 bg-gradient-to-b from-white via-gray-50 to-blue-100 min-h-screen">
        <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Bridging Trade. Building Trust.
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mb-10">
            Empowering strategic trade between global markets through integrity, intelligence, and innovation.
          </p>
          <div className="w-full max-w-4xl">
            <Image
              src={heroBanner}
              alt="Global Business Hero"
              className="rounded-xl shadow-lg"
              priority
            />
          </div>
        </section>

        {/* Highlights Section */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Cross-Border Trading</h3>
              <p className="text-gray-600 text-sm">
                We connect trusted suppliers and buyers across continents through discreet and efficient trade practices.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Confidential Investment</h3>
              <p className="text-gray-600 text-sm">
                We align strategic capital with emerging markets using insight-driven risk evaluation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">AI-Enabled Insights</h3>
              <p className="text-gray-600 text-sm">
                We leverage intelligent analytics to empower every decision across the supply and investment chain.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 text-center text-gray-500 text-sm py-6">
        © 2025 Axion Capitals, LLC
      </footer>
    </>
  );
}
