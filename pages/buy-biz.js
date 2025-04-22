
export default function Page() {
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
    </nav>
  </div>
</header>

      <main className="max-w-3xl mx-auto space-y-4 text-base leading-relaxed">
        <h2 className="text-2xl font-bold mb-2">Buy a Business</h2>
        
<p>Looking to purchase a U.S.-based business? Axion Capitals helps E2 visa applicants and global entrepreneurs acquire profitable ventures:</p>
<ul className="list-disc list-inside my-4 space-y-1">
  <li>✔️ Vetted franchise and small business listings</li>
  <li>✔️ Financial due diligence and legal coordination</li>
  <li>✔️ Visa-friendly investment structuring</li>
</ul>
<p>Our team connects you with reliable sellers and ensures compliance every step of the way.</p>
<p className="mt-4 font-semibold text-blue-800">Own and operate a business with strategic support.</p>

      </main>
    </div>
  );
}
