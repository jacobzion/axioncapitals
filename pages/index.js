export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-tr from-[#f4fafe] to-white text-gray-900 px-6 py-20 flex flex-col items-center justify-center">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
          The Future of Real Estate Investment is Here
        </h1>
        <p className="text-xl text-gray-600 mb-10">
          At <span className="text-blue-600 font-semibold">Axion Capitals</span>, we connect visionary investors to high-growth real estate assets using cutting-edge technology, data-driven insights, and trusted partners.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-all shadow-md">
            🔍 Explore Investment Opportunities
          </button>
          <button className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-medium hover:bg-blue-50 transition-all shadow-sm">
            🤝 Join Our Investor Network
          </button>
        </div>
      </div>

      <div className="mt-16 text-sm text-gray-400">
        Powered by AI • Trusted Nationwide • Secure & Scalable
      </div>
    </section>
  );
}
