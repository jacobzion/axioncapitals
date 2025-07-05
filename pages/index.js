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
        <title>Axion Capitals - Global Innovation & Trade</title>
        <meta name="description" content="AI Investment, Global Trading, Smart Contracts – Axion Capitals" />
      </Head>

      <header className="flex items-center justify-between bg-white/80 backdrop-blur-md px-8 py-4 shadow-md fixed w-full top-0 z-50">
        <div className="flex items-center space-x-4">
          <Image src={logo} alt="Axion Logo" width={50} height={50} />
          <span className="text-xl font-semibold text-sapphire">Axion Capitals</span>
        </div>

        <button
          className="md:hidden text-sapphire text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-8 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent px-6 py-4 md:p-0 shadow-md md:shadow-none`}
        >
          <Link href="/about" className="text-sapphire hover:text-azure transition font-medium">About</Link>
          <Link href="/global-trading" className="text-sapphire hover:text-azure transition font-medium">Global Trading</Link>
          <Link href="/ai-analytics" className="text-sapphire hover:text-azure transition font-medium">AI & Analytics</Link>
          <Link href="/smart-contracts" className="text-sapphire hover:text-azure transition font-medium">Smart Contracts</Link>
          <Link href="/bridge-network" className="text-sapphire hover:text-azure transition font-medium">Bridge Network</Link>
          <Link href="/resources" className="text-sapphire hover:text-azure transition font-medium">Resources</Link>
          <Link href="/contact" className="text-sapphire hover:text-azure transition font-medium">Contact</Link>
        </nav>
      </header>

      <main className="pt-28 min-h-screen bg-gradient-to-b from-white via-skymist to-blue-100 text-slategray px-8 pb-12">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4 text-sapphire">Welcome to Axion Capitals</h1>
          <p className="text-lg max-w-2xl text-slategray">
            Empowering global commerce through artificial intelligence, international trade networks, and smart blockchain contracts.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <Image src={heroBanner} alt="Axion Hero Banner" width={600} height={600} className="rounded-xl shadow-lg" />
        </div>
      </main>

      <footer className="bg-white text-center text-sapphire py-6 border-t">
        © 2025 Axion Capitals, LLC
      </footer>
    </>
  );
}
