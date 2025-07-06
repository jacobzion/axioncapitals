// pages/trading.tsx
import Head from 'next/head';
import Image from 'next/image';
import logo from '../public/axion-logo.png';
import { useState } from 'react';

export default function Trading() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Trading | Axion Capitals</title>
        <meta name="description" content="Explore our international trading services at Axion Capitals." />
      </Head>

      {/* Header */}
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Global Trading
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Axion Capitals connects verified suppliers and buyers across continents.
            Our team ensures reliability, compliance, and speed in confidential global transactions.
          </p>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We specialize in high-demand commodities between strategic markets such as East Asian countries,
            South America, and European nations.
          </p>
        </section>

        {/* Security Section */}
        <section className="bg-blue-50 py-16 px-6 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Confidential & Secure Transactions</h2>
            <p className="text-gray-700 text-md mb-4">
              Our trading protocols ensure full compliance and confidentiality with zero data exposure.
            </p>
            <p className="text-sm text-gray-500">
              Axion Capitals uses secure smart contracts and verified logistics partners across borders.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 text-center text-gray-500 text-sm py-6">
        © 2025 Axion Capitals, LLC
      </footer>
    </>
  );
}
