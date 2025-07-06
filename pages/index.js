// pages/index.tsx
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
        <meta name="description" content="Axion Capitals – Modern Global Trade & Investment Solutions" />
      </Head>

      {/* Header */}
      <header className="bg-white border-b border-gray-200 fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image src={logo} alt="Axion Logo" width={40} height={40} />
            <span className="text-xl font-light text-gray-800 tracking-tight">Axion Capitals</span>
          </div>

          {/* Modern Navigation */}
          <nav className="flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-700 text-sm font-medium">Home</Link>
            <Link href="/trading" className="text-gray-700 hover:text-blue-700 text-sm font-medium">Trading</Link>
            <Link href="/investment" className="text-gray-700 hover:text-blue-700 text-sm font-medium">Investment</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-700 text-sm font-medium">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-700 text-sm font-medium">Contact</Link>
          </nav>
        </div>
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
              alt="Hero Banner"
              className="rounded-xl shadow-lg"
              priority
            />
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
