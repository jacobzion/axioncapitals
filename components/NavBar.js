import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link href="/">
        <div className="text-2xl font-bold text-blue-800">Axion Capitals</div>
      </Link>
      <div className="space-x-4">
        <Link href="/listings"><span className="hover:text-blue-600">Listings</span></Link>
        <Link href="/about"><span className="hover:text-blue-600">About</span></Link>
        <Link href="/contact"><span className="hover:text-blue-600">Contact</span></Link>
        <Link href="/login"><button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button></Link>
        <Link href="/signup"><button className="border border-blue-600 text-blue-600 px-4 py-2 rounded">Sign Up</button></Link>
      </div>
    </nav>
  );
}
