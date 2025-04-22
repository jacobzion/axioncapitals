
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-gradient-to-r from-blue-900 to-indigo-700 text-white px-6 py-4 shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="Axion Capitals Logo" className="h-10 w-auto" />
            <div>
              <h1 className="text-2xl font-bold">Axion Capitals</h1>
              <p className="text-xs">Your Gateway to Premium Real Estate Investment</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Real Estate Investment</a>
            <a href="#" className="hover:underline">Property Management</a>
            <a href="#" className="hover:underline">Find a Home</a>
            <a href="#" className="hover:underline">Buy a Business</a>
            <a href="#" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <main className="p-8 space-y-12">
        <div className="w-full flex justify-center">
          <img src="/property1.jpg" alt="Center Showcase" className="rounded-xl w-full max-w-5xl shadow-lg" />
        </div>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Featured Properties</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-4 shadow hover:shadow-xl transition">
              <img src="/property1.jpg" alt="Property 1" className="rounded-md mb-4"/>
              <h3 className="text-xl font-bold">Luxury Villa in Beverly Hills</h3>
              <p>$4,200,000 · 5 Beds · 6 Baths</p>
            </div>
            <div className="border rounded-lg p-4 shadow hover:shadow-xl transition">
              <img src="/property2.jpg" alt="Property 2" className="rounded-md mb-4"/>
              <h3 className="text-xl font-bold">Downtown NYC Penthouse</h3>
              <p>$7,500,000 · 4 Beds · 4.5 Baths</p>
            </div>
            <div className="border rounded-lg p-4 shadow hover:shadow-xl transition">
              <img src="/property3.jpg" alt="Property 3" className="rounded-md mb-4"/>
              <h3 className="text-xl font-bold">Waterfront Miami Estate</h3>
              <p>$6,900,000 · 6 Beds · 7 Baths</p>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3 text-blue-900">Property Management Services</h2>
          <p className="mb-4">Axion Capitals provides full-service property management for investors and homeowners. Whether you're managing residential rentals or commercial spaces, we've got you covered.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>✅ Tenant screening, leasing, and rent collection</li>
            <li>✅ Maintenance and repair coordination</li>
            <li>✅ Financial reporting and ROI analysis</li>
          </ul>
          <p className="mt-4 font-medium text-blue-700">Your investment, professionally managed.</p>
        </section>
      </main>

      <footer className="bg-gray-100 text-center p-4 text-sm text-gray-600">
        © 2025 Axion Capitals. All rights reserved.
      </footer>
    </div>
  );
}
