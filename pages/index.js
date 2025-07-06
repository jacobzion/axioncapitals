// pages/index.tsx
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/axion-logo.png';
import heroBanner from '../public/hero-banner.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Axion Capitals - Global Innovation & Trade</title>
        <meta name="description" content="AI Investment, Global Trading, Smart Contracts – Axion Capitals" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-yellow-100 to-yellow-300 text-gray-800 p-8">
        <div className="flex flex-col items-center mb-10">
          <Image src={logo} alt="Axion Capitals Global Bridge Logo" width={180} height={180} />
          <h1 className="text-4xl font-bold mt-4 text-center">Welcome to Axion Capitals</h1>
          <p className="mt-4 text-lg text-center max-w-xl">
            Bridging innovation and opportunity through AI, international trading, and smart contract solutions.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <Image src={heroBanner} alt="Axion Hero Banner" width={600} height={600} />
        </div>

        <nav className="space-y-4 text-center">
          <Link href="/about" className="block text-blue-800 underline">About Us</Link>
          <Link href="/global-trading" className="block text-blue-800 underline">Global Trading</Link>
          <Link href="/ai-analytics" className="block text-blue-800 underline">AI & Analytics</Link>
          <Link href="/smart-contracts" className="block text-blue-800 underline">Smart Contracts</Link>
          <Link href="/bridge-network" className="block text-blue-800 underline">Bridge Network</Link>
          <Link href="/resources" className="block text-blue-800 underline">Resources</Link>
          <Link href="/contact" className="block text-blue-800 underline">Contact</Link>
        </nav>
      </main>
    </>
  );
}
