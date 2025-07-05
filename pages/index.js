
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white font-sans">
      <header className="flex flex-col md:flex-row md:items-center md:justify-between p-6 bg-gray-900 shadow-lg border-b border-gray-800">
        <div className="flex items-center space-x-4">
          <img src="/axion-logo.png" alt="Axion Capitals Logo" className="h-16 w-auto" />
          <div>
            <h1 className="text-3xl font-extrabold text-blue-400">Axion Capitals Global Bridge</h1>
            <p className="text-sm text-gray-400">Bridging Global Markets, Empowering Your Trade</p>
          </div>
        </div>
        <nav className="flex flex-wrap justify-center md:justify-end gap-4 text-sm font-medium text-blue-300 mt-4 md:mt-0">
          <Link href="/">Home</Link>
          <Link href="/invest">Invest</Link>
          <Link href="/management">Management</Link>
          <Link href="/buy-biz">International Trading</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <main className="px-4 md:px-12 py-10 space-y-16">
        <section className="flex justify-center">
          <img src="/hero-banner.png" alt="Hero Banner" className="rounded-xl shadow-2xl w-full max-w-5xl border border-blue-800" />
        </section>
      </main>

      <footer className="bg-gray-900 border-t border-gray-800 text-center text-sm text-gray-500 p-4">
        © 2025 Axion Capitals. All rights reserved.
      </footer>
    </div>
  );
}
