
import Link from 'next/link'
import LanguageToggle from '../components/LanguageToggle'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white font-sans">
      <header className="flex flex-col md:flex-row md:items-center md:justify-between p-6 bg-gray-900 shadow-lg border-b border-gray-800">
        <div className="flex items-center space-x-4">
          <img src="/axion-logo.png" alt="Axion Capitals Logo" className="h-16 w-auto" />
          <div>
            <h1 className="text-3xl font-extrabold text-blue-400">Axion Capitals</h1>
            <p className="text-sm text-gray-400">AI-Powered Real Estate & Smart Investments</p>
          </div>
        </div>
        <nav className="flex flex-wrap justify-center md:justify-end gap-4 text-sm font-medium text-blue-300 mt-4 md:mt-0">
          <Link href="/">Home</Link>
          <Link href="/invest">Invest</Link>
          <Link href="/management">Management</Link>
          <Link href="/find-home">Find Home</Link>
          <Link href="/buy-biz">Buy Biz</Link>
          <Link href="/contact">Contact</Link>
          <LanguageToggle />
        </nav>
      </header>

      <main className="px-4 md:px-12 py-10 space-y-16">
        <section className="flex justify-center">
          <img src="/hero-banner.png" alt="Hero Banner" className="rounded-xl shadow-2xl w-full max-w-5xl border border-blue-800" />
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-4">Explore Investment Domains</h2>
          <div className="grid md:grid-cols-3 gap-6 text-gray-200">
            <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-2xl transition transform hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-2">Smart Real Estate</h3>
              <p>AI-curated listings and predictive analytics for optimal property decisions across residential and commercial markets.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-2xl transition transform hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-2">AI Investment & Automation</h3>
              <p>Machine learning models for ROI prediction, portfolio balancing, and automated growth strategies.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-2xl transition transform hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-2">Smart Contract Platforms</h3>
              <p>Blockchain-backed legal automation for global property transactions and secure digital investment deals.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 border-t border-gray-800 text-center text-sm text-gray-500 p-4">
        © 2025 Axion Capitals. All rights reserved.
      </footer>
    </div>
  );
}
