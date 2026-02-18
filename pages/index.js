// pages/index.tsx
import Head from 'next/head';
import Image from 'next/image';
import hero from '../public/hero-banner.png';
import logo from '../public/axion-logo.png';
import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Axion Capitals</title>
        <meta name="description" content="Axion Capitals Global Bridge" />
      </Head>

      <header className="bg-black border-b border-gray-800 fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image src={logo} alt="Axion Logo" width={100} height={100} />
            <span className="text-xl font-light text-white tracking-tight">Axion Capitals</span>
          </div>

          <button
            className="md:hidden text-white text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-white hover:text-blue-400 text-sm font-medium">Home</a>
            <a href="/trading" className="text-white hover:text-blue-400 text-sm font-medium">Trading</a>
            <a href="/investment" className="text-white hover:text-blue-400 text-sm font-medium">Investment</a>
            <a href="/real-estate" className="text-white hover:text-blue-400 text-sm font-medium">Real Estate</a>
            <a href="/it-solutions" className="text-white hover:text-blue-400 text-sm font-medium">IT Solutions</a> 
            <a href="/about" className="text-white hover:text-blue-400 text-sm font-medium">About</a>
            <a href="/contact" className="text-white hover:text-blue-400 text-sm font-medium">Contact</a>
          </nav>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800 px-6 py-4 space-y-2">
            <a href="/" className="block text-white hover:text-blue-400 text-sm font-medium">Home</a>
            <a href="/trading" className="block text-white hover:text-blue-400 text-sm font-medium">Trading</a>
            <a href="/investment" className="block text-white hover:text-blue-400 text-sm font-medium">Investment</a>
            <a href="/real-estate" className="text-white hover:text-blue-400 text-sm font-medium">Real Estate</a>
            <a href="/it-solutions" className="text-white hover:text-blue-400 text-sm font-medium">IT Solutions</a>
            <a href="/about" className="block text-white hover:text-blue-400 text-sm font-medium">About</a>
            <a href="/contact" className="block text-white hover:text-blue-400 text-sm font-medium">Contact</a>
          </div>
        )}
      </header>

      <main className="pt-28 bg-black min-h-screen text-white">
        <section className="flex flex-col items-center justify-center text-center px-6 py-20">
          <Image src={hero} alt="Hero Banner" className="rounded-lg shadow-lg mb-8" />
          <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">Axion Capitals Global Bridge</h1>
          <p className="text-gray-300 max-w-xl">
            Empowering strategic global trade and investments across East Asia, South America, and Europe.
          </p>
        </section>

        {/* Business Description Section */}
        <section className="bg-gray-900 py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-blue-400 mb-6">Our Business</h2>
            <p className="text-gray-300 text-lg mb-4">
              Axion Capitals serves as a confidential and strategic bridge between international suppliers, buyers, and investors.
            </p>
            <p className="text-gray-400">
              We focus on high-demand global commodities and discreet investment channels, offering a reliable gateway between East Asian countries, South America, and European nations. Our operations prioritize security, speed, and insight—empowering clients to trade and grow in a volatile global market.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-black border-t border-gray-800 text-center text-gray-500 text-sm py-6">
        <div>
          © 2025 Axion Capitals, LLC<br />
        </div>
      </footer>
    </>
  );
}
