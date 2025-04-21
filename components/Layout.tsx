
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', borderBottom: '1px solid #ccc' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
          <Link href="/">🏠 AxionCapitals</Link>
        </div>
        <nav style={{ display: 'flex', gap: '16px' }}>
          <Link href="/properties">Properties</Link>
          <Link href="/admin">Admin</Link>
        </nav>
      </header>
      <main style={{ padding: '20px' }}>{children}</main>
    </div>
  )
}
