import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #e3f2fd, #ffffff)',
      fontFamily: 'Arial, sans-serif',
      color: '#1a237e'
    }}>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #ccc'
      }}>
        <img src="/axioncapitals-logo.png" alt="Logo" style={{ height: '50px' }} />
        <nav style={{ display: 'flex', gap: '1.5rem' }}>
          <Link href="/sales"><a style={{ textDecoration: 'none', color: '#1a237e', fontWeight: 'bold' }}>Sales</a></Link>
          <Link href="/rentals"><a style={{ textDecoration: 'none', color: '#1a237e', fontWeight: 'bold' }}>Rentals</a></Link>
          <Link href="/management"><a style={{ textDecoration: 'none', color: '#1a237e', fontWeight: 'bold' }}>Management</a></Link>
        </nav>
      </header>

      <main style={{
        textAlign: 'center',
        padding: '4rem 2rem'
      }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Axion Capitals</h1>
        <p style={{
          fontSize: '1.2rem',
          marginTop: '1rem',
          maxWidth: '600px',
          margin: '0 auto',
          color: '#37474f'
        }}>
          Empowering smarter real estate decisions through technology, transparency, and trust. Explore investment opportunities in property sales, rentals, and full-service management.
        </p>
        <div style={{ marginTop: '2rem' }}>
          <a href="/sales" style={{
            backgroundColor: '#1a237e',
            color: '#ffffff',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            fontWeight: 'bold',
            textDecoration: 'none'
          }}>
            Explore Opportunities
          </a>
        </div>
      </main>
    </div>
  );
}