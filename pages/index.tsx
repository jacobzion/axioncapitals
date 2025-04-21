
import Link from 'next/link'
export default function Home() {
  return (
    <div>
      <h1>Welcome to Axion Capitals</h1>
      <p><Link href="/properties">View Properties</Link></p>
    </div>
  )
}