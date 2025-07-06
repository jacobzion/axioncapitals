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
        <section className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">Contact Us</h1>
          <p className="text-center text-gray-600 mb-12">
            Reach out to our team for business inquiries, strategic partnerships, or general questions.
          </p>

          <form className="bg-white rounded-lg shadow-md p-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows={5}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="inline-block bg-blue-600 text-white text-sm font-medium px-6 py-2 rounded-md hover:bg-blue-700"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 text-center text-gray-500 text-sm py-6">
        © 2025 Axion Capitals, LLC
      </footer>
    </>
  );
}
