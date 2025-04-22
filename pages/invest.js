


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
          </nav><div className="mt-2 md:mt-0"><a href="/index-ko" className="bg-white text-blue-900 px-3 py-1 rounded text-sm hover:bg-blue-100 transition">한국어</a></div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto space-y-4 text-base leading-relaxed">
        <h2 className="text-2xl font-bold mb-2">Real Estate Investment</h2>
        
<p>Axion Capitals offers strategic real estate investment opportunities tailored for international investors, first-time buyers, and seasoned professionals. Our portfolio includes:</p>
<ul className="list-disc list-inside my-4 space-y-1">
  <li>✔️ Residential rentals with strong cash flow</li>
  <li>✔️ Commercial properties in prime U.S. metros</li>
  <li>✔️ Multi-family buildings for scalable returns</li>
</ul>
<p className="mt-6 font-semibold text-blue-900">How We Help:</p>
<ol className="list-decimal list-inside my-3 space-y-1">
  <li>We analyze your financial goals and suggest the best investment strategy.</li>
  <li>We source, vet, and present pre-screened properties for your portfolio.</li>
  <li>We guide you through the acquisition, financing, and legal process.</li>
  <li>We offer ongoing support, performance reviews, and resale guidance.</li>
</ol>
<p className="mt-4 font-semibold text-blue-800">Build long-term wealth through smart property acquisition.</p>

      </main>
    </div>
  );
}
