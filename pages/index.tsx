
import Layout from '../components/Layout'
import Link from 'next/link'
export default function Home() {
  return (
    <Layout>
      <h1>Welcome to Axion Capitals</h1>
      <p><Link href="/properties">View Properties</Link></p>
    </Layout>
  )
}