export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f4faff] via-white to-[#eef3f8] text-gray-900 px-6 py-20 flex flex-col items-center justify-center">
      <div className="max-w-5xl text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-blue-500 drop-shadow-sm">
          Invest Smarter. Grow Faster.  
        </h1>
        <p className="text-lg md:text-xl text-gray-700 font-medium mb-10 max-w-3xl mx-auto">
          <span className="font-semibold text-blue-600">Axion Capitals</span> is your AI-driven gateway to premium real estate investments—blending data, strategy, and technology to unlock new wealth opportunities across the U.S.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-7 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition transform">
            🏙️ View Investment Listings
          </button>
          <button className="bg-white border border-blue-600 text-blue-700 px-7 py-3 rounded-xl font-semibold hover:bg-blue-50 transition shadow">
            🤝 Join the Investor Network
          </button>
        </div>
      </div>

      <div className="mt-16 text-center text-sm text-gray-500">
        <span className="inline-block px-3">🔒 Secure Platform</span> •
        <span className="inline-block px-3">📊 AI-Driven Insights</span> •
        <span className="inline-block px-3">🌍 Nationwide Reach</span>
      </div>

      <div className="mt-12 text-xs text-gray-400">
        © {new Date().getFullYear()} Axion Capitals. All rights reserved.
      </div>
    </section>
  );
}
