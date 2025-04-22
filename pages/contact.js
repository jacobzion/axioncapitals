
export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-4 md:p-6">
      <header className="bg-gradient-to-r from-blue-900 to-indigo-700 text-white px-4 py-4 shadow-md mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
          <div className="flex items-center space-x-4">
            <img src="/axion-logo.png" alt="Axion Capitals Logo" className="h-16 w-auto" />
            <div>
              <h1 className="text-xl font-bold md:text-2xl">Axion Capitals</h1>
              <p className="text-xs">Real Estate · AI Investment · Smart Contracts</p>
            </div>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-4 text-sm font-medium">
            <a href="/" className="hover:underline">Home</a>
            <a href="/invest" className="hover:underline">Invest</a>
            <a href="/management" className="hover:underline">Management</a>
            <a href="/find-home" className="hover:underline">Find Home</a>
            <a href="/buy-biz" className="hover:underline">Buy Biz</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </nav><div className="mt-2 md:mt-0"><a href="/index-ko" className="bg-white text-blue-900 px-3 py-1 rounded text-sm hover:bg-blue-100 transition">한국어</a></div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
        <p>We’d love to hear from you. Whether you’re interested in investing, managing properties, or exploring smart contract solutions — drop us a message!</p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="w-full border border-gray-300 p-2 rounded" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea rows="4" className="w-full border border-gray-300 p-2 rounded" required></textarea>
          </div>
          <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition">Send Message</button>
        </form>
      </main>

      <footer className="bg-gray-100 text-center p-4 text-sm text-gray-600 mt-12">
        © 2025 Axion Capitals. All rights reserved.
      </footer>
    </div>
  );
}
