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
        <meta name="description" content="Axion Capitals – Global Trade and Investment" />
      </Head>

      {/* Top Navigation */}
      <header className="bg-white shadow-md fixed top-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image src={logo} alt="Axion Logo" width={40} height={40} />
            <span className="text-lg font-semibold text-gray-800">Axion Capitals</span>
          </div>

          {/* Menu */}
          <nav className="space-x-6 hidden md:flex">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="/trading" className="text-gray-700 hover:text-blue-600">Trading</Link>
            <Link href="/investment" className="text-gray-700 hover:text-blue-600">Investment</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-28 flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 px-4">
        {/* Hero Image */}
        <div className="w-full max-w-3xl">
          <Image
            src={heroBanner}
            alt="Hero Banner"
            className="rounded-xl shadow-lg"
            priority
          />
        </div>
      </main>
    </>
  );
}
