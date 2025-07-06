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
        <meta name="description" content="Axion Capitals - Global Trade & Innovation" />
      </Head>

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
        <div className="flex items-center space-x-2">
          <Image src={logo} alt="Axion Logo" width={40} height={40} />
          <span className="text-xl font-semibold text-gray-800">Axion Capitals</span>
        </div>
        <nav className="space-x-4">
          <Link href="/about" className="text-blue-600 hover:underline">About</Link>
          <Link href="/global-trading" className="text-blue-600 hover:underline">Trading</Link>
          <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center text-center px-4 py-20 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Axion Capitals</h1>
        <p className="text-lg text-gray-600 max-w-xl mb-8">
          Building bridges in global commerce with AI and international trade solutions.
        </p>
        <div className="w-full max-w-3xl">
          <Image
            src={heroBanner}
            alt="Global Innovation"
            className="rounded-xl shadow"
            priority
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 bg-white border-t text-gray-500 text-sm">
        © 2025 Axion Capitals, LLC
      </footer>
    </>
  );
}
