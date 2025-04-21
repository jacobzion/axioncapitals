import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to Axion Capitals</h1>
      <p className="mb-6">Explore the finest real estate listings and manage properties with ease.</p>
      <Link href="/listings">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Browse Properties</button>
      </Link>
    </div>
  );
}
