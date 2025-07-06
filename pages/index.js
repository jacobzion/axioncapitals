import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/axion-logo.png';
import heroBanner from '../public/hero-banner.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Axion Capitals – Strategic Global Trade</title>
        <meta name="description" content="Discreet high-volume trade solutions between Brazil and China – powered by Axion Capitals." />
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
            <Link href="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-28 bg-gradient-to-b from-white via-blue-50 to-blue-100 min-h-screen">
        <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Connecting Brazil & China through Trusted Trade Channels
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mb-8">
            We specialize in discreet, high-volume trade operations between Latin America and East Asia.
            Our clients benefit from efficient logistics, rigorous compliance, and secure supply chains.
          </p>
          <div className="w-full max-w-3xl">
            <Image
              src={heroBanner}
              alt="International Trade"
              className="rounded-xl shadow-lg"
              priority
            />
          </div>
        </section>

        {/* Service Overview */}
        <section className="bg-white py-12 px-6 text-center">
          <h2 className="text-2xl font-semibold text-sapphire mb-6">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Cross-Border Trade Facilitation</h3>
              <p className="text-gray-600">
                We manage end-to-end commercial flows between South America and Asia – with expertise in supplier relationships,
                import/export compliance, and global finance.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Confidential Commodity Matching</h3>
              <p className="text-gray-600">
                With trusted networks in Brazil and China, we privately match bulk supply with verified demand – respecting confidentiality,
                quality, and legal standards at every stage.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t text-center text-gray-500 text-sm py-6">
        © 2025 Axion Capitals, LLC
      </footer>
    </>
  );
}
