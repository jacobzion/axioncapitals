export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #e3f2fd, #ffffff)',
      fontFamily: 'Arial, sans-serif',
      padding: '2rem',
      textAlign: 'center',
      color: '#1a237e'
    }}>
      <img src="/axioncapitals-logo.png" alt="Axion Capitals Logo" style={{ width: '200px', marginBottom: '1.5rem' }} />
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Axion Capitals</h1>
      <p style={{ fontSize: '1.2rem', color: '#37474f', marginTop: '1rem', maxWidth: '600px', margin: '0 auto' }}>
        Empowering smarter real estate decisions through technology, transparency, and trust. Explore investment opportunities in property sales, rentals, and full-service management.
      </p>
      <div style={{ marginTop: '2rem' }}>
        <a href="#" style={{
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
    </div>
  );
}