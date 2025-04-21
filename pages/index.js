export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f4f8',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', color: '#1e3a8a' }}>Welcome to My Simple Next.js Site</h1>
      <p style={{ fontSize: '1.2rem', marginTop: '1rem', color: '#374151' }}>
        This is a lightweight Next.js example using the pages/ directory.
      </p>
    </div>
  );
}