// pages/trading.tsx
import Head from 'next/head';

export default function Trading() {
  return (
    <>
      <Head>
        <title>Trading | Axion Capitals</title>
        <meta name="description" content="Explore our international trading services at Axion Capitals." />
      </Head>

      <main className="pt-28 max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Global Trading</h1>
        <p className="text-lg text-gray-600 mb-6">
          Axion Capitals connects verified suppliers and buyers across continents. Our team ensures reliability,
          compliance, and speed in confidential global transactions.
        </p>
        <p className="text-gray-700">
          We specialize in high-demand commodities between strategic markets such as Brazil and China.
          Product details remain strictly confidential and are only shared upon engagement.
        </p>
      </main>
    </>
  );
}
