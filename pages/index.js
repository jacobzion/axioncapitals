
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-gradient-to-r from-blue-900 to-indigo-700 text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold">Axion Capitals</h1>
        <p className="text-sm">Invest in Premium Real Estate with Confidence</p>
      </header>
      <main className="p-8">
        <section className="mb-12">
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
      </main>
      <footer className="bg-gray-100 text-center p-4 text-sm text-gray-600">
        © 2025 Axion Capitals. All rights reserved.
      </footer>
    </div>
  );
}
