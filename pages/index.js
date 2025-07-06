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

      {/* Header with right-aligned menu */}
      <header className="bg-white shadow-md fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image src={logo} alt="Axion Logo" width={40} height={40} />
            <span className="text-lg font-semibold text-gray-800">Axion Capitals</span>
          </div>

          {/* Right-aligned Menu */}
          <nav className="flex space-x-4">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-white hover:bg-blue-600 px-4 py-2 rounded-full transition duration-300 text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
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

// Navigation Links
const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Trading', href: '/trading' },
  { label: 'Investment', href: '/investment' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];
