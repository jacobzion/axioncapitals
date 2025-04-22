
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-gradient-to-r from-blue-900 to-indigo-700 text-white px-4 py-4 shadow-md">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
          <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="Axion Capitals Logo" className="h-10 w-auto" />
            <div>
              <h1 className="text-xl font-bold md:text-2xl">Axion Capitals</h1>
              <p className="text-xs">Your Gateway to Premium Real Estate Investment</p>
            </div>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-4 text-sm font-medium">
            <Link href="/">Home</Link>
            <Link href="/invest">Invest</Link>
            <Link href="/management">Management</Link>
            <Link href="/find-home">Find Home</Link>
            <Link href="/buy-biz">Buy Biz</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="p-4 md:p-8 space-y-12">
        <div className="w-full flex justify-center">
          <img src="/hero-banner.png" alt="Hero Banner" className="rounded-xl w-full max-w-4xl shadow-lg" />
        </div>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Featured Residential Properties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border rounded-lg p-4 shadow hover:shadow-xl transition">
              <img src="/property1.jpg" alt="Property 1" className="rounded-md mb-4 w-full"/>
              <h3 className="text-lg font-bold">Luxury Villa in Beverly Hills</h3>
              <p>$4,200,000 · 5 Beds · 6 Baths</p>
            </div>
            <div className="border rounded-lg p-4 shadow hover:shadow-xl transition">
              <img src="/property2.jpg" alt="Property 2" className="rounded-md mb-4 w-full"/>
              <h3 className="text-lg font-bold">Downtown NYC Penthouse</h3>
              <p>$7,500,000 · 4 Beds · 4.5 Baths</p>
            </div>
            <div className="border rounded-lg p-4 shadow hover:shadow-xl transition">
              <img src="/property3.jpg" alt="Property 3" className="rounded-md mb-4 w-full"/>
              <h3 className="text-lg font-bold">Waterfront Miami Estate</h3>
              <p>$6,900,000 · 6 Beds · 7 Baths</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Featured Business Properties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border rounded-lg p-4 shadow hover:shadow-xl transition">
              <img src="/property1.jpg" alt="Business 1" className="rounded-md mb-4 w-full"/>
              <h3 className="text-lg font-bold">Retail Complex in Los Angeles</h3>
              <p>$12,000,000 · 10 Units · High Foot Traffic</p>
            </div>
            <div className="border rounded-lg p-4 shadow hover:shadow-xl transition">
              <img src="/property2.jpg" alt="Business 2" className="rounded-md mb-4 w-full"/>
              <h3 className="text-lg font-bold">Tech Office Space in San Francisco</h3>
              <p>$18,500,000 · 50,000 sqft · Downtown Core</p>
            </div>
            <div className="border rounded-lg p-4 shadow hover:shadow-xl transition">
              <img src="/property3.jpg" alt="Business 3" className="rounded-md mb-4 w-full"/>
              <h3 className="text-lg font-bold">Warehouse & Distribution Hub</h3>
              <p>$9,200,000 · 100,000 sqft · Near Port Access</p>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 p-4 md:p-6 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-3 text-blue-900">Property Management Services</h2>
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
