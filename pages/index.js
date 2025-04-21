import Link from 'next/link';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="text-center py-20 px-8 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        <h1 className="text-5xl font-extrabold mb-6">Invest in the Future of Real Estate</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Empowering smart investors with high-potential property listings and tools.
        </p>
        <Link href="/listings">
          <button className="bg-white text-blue-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition">
            Browse Properties
          </button>
        </Link>
      </div>
    </>
  );
}
