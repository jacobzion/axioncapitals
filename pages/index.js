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

      <header className="flex items-center justify-between bg-yellow-100 px-6 py-4 shadow-md relative z-10">
        <div className="flex items-center">
          <Image src={logo} alt="Axion Logo" width={60} height={60} />
        </div>

        <button
          className="md:hidden text-blue-800 text-xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className={`${
          menuOpen ? 'block' : 'hidden'
        } absolute top-full left-0 w-full bg-yellow-100 px-6 py-4 md:static md:flex md:items-center md:space-x-6 md:w-auto md:p-0`}>
          <Link href="/about" className="block py-2 text-blue-800 hover:underline">About Us</Link>
          <Link href="/global-trading" className="block py-2 text-blue-800 hover:underline">Global Trading</Link>
          <Link href="/ai-analytics" className="block py-2 text-blue-800 hover:underline">AI & Analytics</Link>
          <Link href="/smart-contracts" className="block py-2 text-blue-800 hover:underline">Smart Contracts</Link>
          <Link href="/bridge-network" className="block py-2 text-blue-800 hover:underline">Bridge Network</Link>
          <Link href="/resources" className="block py-2 text-blue-800 hover:underline">Resources</Link>
          <Link href="/contact" className="block py-2 text-blue-800 hover:underline">Contact</Link>
        </nav>
      </header>

      <main className="min-h-screen bg-gradient-to-b from-yellow-100 to-yellow-300 text-gray-800 p-8">
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-4xl font-bold mt-4 text-center">Welcome to Axion Capitals</h1>
          <p className="mt-4 text-lg text-center max-w-xl">
            Bridging innovation and opportunity through AI, international trading, and smart contract solutions.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <Image src={heroBanner} alt="Axion Hero Banner" width={600} height={600} />
        </div>
      </main>
    </>
  );
}
