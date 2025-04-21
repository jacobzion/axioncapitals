export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to right, #eef2f7, #ffffff)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', color: '#1a237e' }}>AxionCapitals.com</h1>
      <p style={{ fontSize: '1.2rem', marginTop: '1rem', maxWidth: '600px', color: '#333' }}>
        Welcome to Axion Capitals – a forward-thinking real estate investment platform built on technology, insight, and trust.
      </p>
      <div style={{ marginTop: '2rem' }}>
        <a href="#listings" style={{
          display: 'inline-block',
          backgroundColor: '#1a237e',
          color: '#fff',
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          View Listings
        </a>
      </div>
    </div>
  );
}