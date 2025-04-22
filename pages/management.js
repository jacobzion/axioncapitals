


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
          </nav><div className="mt-2 md:mt-0"><a href="/index-ko" className="text-sm text-white underline hover:text-blue-300">한국어</a></div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto space-y-4 text-base leading-relaxed">
        <h2 className="text-2xl font-bold mb-2">Property Management</h2>
        
<p>Let Axion Capitals handle your properties with precision and care. Our dedicated team provides 360° support including:</p>
<ul className="list-disc list-inside my-4 space-y-1">
  <li>✔️ End-to-end tenant lifecycle management</li>
  <li>✔️ 24/7 maintenance coordination</li>
  <li>✔️ Digital rent collection & reporting</li>
</ul>
<p className="mt-6 font-semibold text-blue-900">How We Help:</p>
<ol className="list-decimal list-inside my-3 space-y-1">
  <li>We onboard your property and assess condition, rental rates, and compliance.</li>
  <li>We list, advertise, and screen tenants with verified credit/background checks.</li>
  <li>We handle leases, maintenance, rent collection, and monthly statements.</li>
  <li>We provide transparent communication, renewals, and dispute handling.</li>
</ol>
<p className="mt-4 font-semibold text-blue-800">Own stress-free real estate — we do the heavy lifting.</p>

      </main>
    </div>
  );
}
