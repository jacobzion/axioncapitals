// pages/contact.tsx
import Head from 'next/head';
import Image from 'next/image';
import logo from '../public/axion-logo.png';
import { useState } from 'react';

export default function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Contact | Axion Capitals</title>
        <meta name="description" content="Contact Axion Capitals for inquiries and partnerships." />
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
            <a href="/about" className="text-white hover:text-blue-400 text-sm font-medium">About</a>
            <a href="/contact" className="text-white hover:text-blue-400 text-sm font-medium">Contact</a>
          </nav>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800 px-6 py-4 space-y-2">
            <a href="/" className="block text-white hover:text-blue-400 text-sm font-medium">Home</a>
            <a href="/trading" className="block text-white hover:text-blue-400 text-sm font-medium">Trading</a>
            <a href="/investment" className="block text-white hover:text-blue-400 text-sm font-medium">Investment</a>
            <a href="/about" className="block text-white hover:text-blue-400 text-sm font-medium">About</a>
            <a href="/contact" className="block text-white hover:text-blue-400 text-sm font-medium">Contact</a>
          </div>
        )}
      </header>

      <main className="pt-28 bg-black min-h-screen text-white">
        <section className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">Get in Touch</h1>
          <p className="text-lg text-gray-300 mb-8">
            We welcome inquiries, partnerships, and international collaborations.
          </p>

          <div className="bg-gray-900 shadow-lg rounded-lg p-8 mx-auto max-w-md">
            <h2 className="text-xl font-semibold text-white mb-4">Head Office</h2>
            <p className="text-gray-300">
              Axion Capitals Global Bridge LLC<br />
              8 The Green STE B<br />
              Dover, DE 19901<br />
              United States<br /><br />
              📧 info@axioncapitals.com<br />
              📞 +1 778-402-3327
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
