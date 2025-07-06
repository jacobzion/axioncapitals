import Head from 'next/head';
import Image from 'next/image';
import logo from '../public/axion-logo.png';
import heroBanner from '../public/hero-banner.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Axion Capitals</title>
        <meta name="description" content="Strategic Global Trade – Axion Capitals" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 px-4">
        {/* Logo */}
        <div className="mb-6">
          <Image src={logo} alt="Axion Capitals Logo" width={80} height={80} />
        </div>

        {/* Hero Image */}
        <div className="w-full max-w-3xl">
          <Image
            src={heroBanner}
            alt="Global Trade Banner"
            className="rounded-xl shadow-lg"
            priority
          />
        </div>
      </main>
    </>
  );
}
