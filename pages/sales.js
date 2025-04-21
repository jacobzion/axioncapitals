import { useEffect, useState } from 'react';

export default function Sales() {
  const [properties, setProperties] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [filters, setFilters] = useState({ location: '', minPrice: '', maxPrice: '' });

  const fetchData = async () => {
    const params = new URLSearchParams({
      page,
      location: filters.location,
      minPrice: filters.minPrice || 0,
      maxPrice: filters.maxPrice || 9999999
    });
    const res = await fetch(`/api/properties?${params.toString()}`);
    const data = await res.json();
    setProperties(data.properties);
    setTotal(data.total);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const handleFilterChange = e => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    setPage(1);
    fetchData();
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#1a237e' }}>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1 style={{ fontSize: '2.8rem' }}>Property Sales</h1>
        <img src="https://unsplash.it/1000/300?image=1041" alt="Sales Banner"
             style={{ marginTop: '1rem', borderRadius: '12px', maxWidth: '100%', height: 'auto' }} />
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <input name="location" placeholder="Location" value={filters.location} onChange={handleFilterChange} style={{ padding: '0.5rem' }} />
        <input name="minPrice" type="number" placeholder="Min Price" value={filters.minPrice} onChange={handleFilterChange} style={{ padding: '0.5rem' }} />
        <input name="maxPrice" type="number" placeholder="Max Price" value={filters.maxPrice} onChange={handleFilterChange} style={{ padding: '0.5rem' }} />
        <button onClick={handleSearch} style={{ padding: '0.5rem 1rem', backgroundColor: '#1a237e', color: '#fff', border: 'none', borderRadius: '6px' }}>Search</button>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        padding: '2rem'
      }}>
        {properties.map((p) => (
          <div key={p.id} style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            overflow: 'hidden',
            backgroundColor: '#ffffff',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <img src={p.image} alt={p.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '1rem' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{p.name}</h3>
              <p style={{ margin: '0.25rem 0', color: '#546e7a' }}>📍 {p.location}</p>
              <p style={{ margin: '0.25rem 0', fontWeight: 'bold' }}>💲 {p.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        {page > 1 && <button onClick={() => setPage(page - 1)} style={{ marginRight: '1rem' }}>⬅ Prev</button>}
        {(page * 3) < total && <button onClick={() => setPage(page + 1)}>Next ➡</button>}
      </div>
    </div>
  );
}