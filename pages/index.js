
export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-100 px-6 text-gray-900">
      <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-center">
        Smarter Real Estate Investing Starts Here
      </h1>
      <p className="text-lg text-center max-w-2xl mb-8">
        Axion Capitals empowers investors to access high-performing real estate opportunities across the U.S. with transparency, intelligence, and ease.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
          View Investment Listings test test
        </button>
        <button className="border border-black text-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition">
          Join Our Investor Network
        </button>
      </div>
    </section>
  );
}
