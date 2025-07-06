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

      <header className="bg-white border-b border-gray-200 fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image src={logo} alt="Axion Logo" width={100} height={100} />
            <span className="text-xl font-light text-gray-800 tracking-tight">Axion Capitals Global Bridge</span>
          </div>

          <button
            className="md:hidden text-gray-700 text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-700 hover:text-blue-700 text-sm font-medium">Home</a>
            <a href="/trading" className="text-gray-700 hover:text-blue-700 text-sm font-medium">Trading</a>
            <a href="/investment" className="text-gray-700 hover:text-blue-700 text-sm font-medium">Investment</a>
            <a href="/about" className="text-gray-700 hover:text-blue-700 text-sm font-medium">About</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-700 text-sm font-medium">Contact</a>
          </nav>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-2">
            <a href="/" className="block text-gray-700 hover:text-blue-700 text-sm font-medium">Home</a>
            <a href="/trading" className="block text-gray-700 hover:text-blue-700 text-sm font-medium">Trading</a>
            <a href="/investment" className="block text-gray-700 hover:text-blue-700 text-sm font-medium">Investment</a>
            <a href="/about" className="block text-gray-700 hover:text-blue-700 text-sm font-medium">About</a>
            <a href="/contact" className="block text-gray-700 hover:text-blue-700 text-sm font-medium">Contact</a>
          </div>
        )}
      </header>

      <main className="pt-28 bg-gradient-to-b from-white via-gray-50 to-blue-100 min-h-screen">
        <section className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Get in Touch</h1>
          <p className="text-lg text-gray-600 mb-8">
            We welcome inquiries, partnerships, and international collaborations.
          </p>

          <div className="bg-white shadow-lg rounded-lg p-8 mx-auto max-w-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Head Office</h2>
            <p className="text-gray-700">
              Axion Capitals Global Bridge, LLC<br />
              8 The Green STE B<br />
              Dover, DE 19901<br />
              United States<br />
              <br />
              <span className="text-sm text-gray-500">Email: gloriel.group@gmail.com</span><br />
              <span className="text-sm text-gray-500">Phone: +1 (778) 402-3327</span>
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 text-center text-gray-500 text-sm py-6">
        <div>
          © 2025 Axion Capitals, LLC<br />
          1234 Global Trade Blvd, Suite 501, Wilmington, DE 19801, USA
        </div>
      </footer>
    </>
  );
}
