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
        <meta name="description" content="Global Innovation, Trade & AI Solutions" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image src={logo} alt="Axion Logo" width={40} height={40} />
            <span className="text-xl font-semibold text-gray-800">Axion Capitals</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link href="/global-trading" className="text-gray-600 hover:text-blue-600">Trading</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-28 bg-gradient-to-b from-white via-blue-50 to-blue-100 min-h-screen">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to Axion Capitals</h1>
          <p className="text-lg text-gray-600 max-w-2xl mb-10">
            Connecting global businesses through smart AI technology, innovative trade solutions, and blockchain-powered bridges.
          </p>
          <div className="w-full max-w-3xl">
            <Image
              src={heroBanner}
              alt="Hero Banner"
              className="rounded-xl shadow-lg"
              priority
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t text-center text-gray-500 text-sm py-6">
        © 2025 Axion Capitals, LLC
      </footer>
    </>
  );
}
