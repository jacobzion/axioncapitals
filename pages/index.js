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

      {/* Header */}
      <header className="bg-white border-b border-gray-200 fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image src={logo} alt="Axion Logo" width={40} height={40} />
            <span className="text-xl font-light text-gray-800 tracking-tight">Axion Capitals</span>
          </div>

          {/* Top Menu */}
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
