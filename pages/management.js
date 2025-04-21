import { useState, useEffect } from 'react';

export default function Management() {
  const [properties, setProperties] = useState([]);
  const [form, setForm] = useState({ name: '', location: '', owner: '', notes: '', value: '' });
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('managedProperties');
    if (saved) setProperties(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('managedProperties', JSON.stringify(properties));
  }, [properties]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addProperty = () => {
    if (!form.name || !form.location || !form.owner) return;
    const newProperty = { ...form, id: Date.now() };
    setProperties([...properties, newProperty]);
    setForm({ name: '', location: '', owner: '', notes: '', value: '' });
  };

  const removeProperty = id => {
    setProperties(properties.filter(p => p.id !== id));
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', color: '#1a237e' }}>
      <h1 style={{ fontSize: '2.2rem', textAlign: 'center' }}>Property Management</h1>

      <div style={{ maxWidth: '600px', margin: '2rem auto', display: 'flex', gap: '1rem', flexDirection: 'column' }}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Property Name" style={{ padding: '0.5rem' }} />
        <input name="location" value={form.location} onChange={handleChange} placeholder="Location" style={{ padding: '0.5rem' }} />
        <input name="owner" value={form.owner} onChange={handleChange} placeholder="Owner" style={{ padding: '0.5rem' }} />
        <input name="value" value={form.value} onChange={handleChange} placeholder="Est. Value (optional)" style={{ padding: '0.5rem' }} />
        <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Notes or Investment Detail" style={{ padding: '0.5rem' }} rows="3" />
        <button onClick={addProperty} style={{ padding: '0.75rem', backgroundColor: '#1a237e', color: '#fff', border: 'none', borderRadius: '6px' }}>
          ➕ Add Property
        </button>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', marginTop: '2rem' }}>
        {properties.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#555' }}>No properties added yet.</p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#e3f2fd' }}>
                <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Name</th>
                <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Location</th>
                <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Owner</th>
                <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {properties.map((p) => (
                <tr key={p.id}>
                  <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{p.name}</td>
                  <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{p.location}</td>
                  <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{p.owner}</td>
                  <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>
                    <button onClick={() => setSelected(p)} style={{ color: '#1a237e', border: 'none', background: 'none', cursor: 'pointer' }}>🔍 View</button>{' '}
                    <button onClick={() => removeProperty(p.id)} style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}>🗑️ Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {selected && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex',
          justifyContent: 'center', alignItems: 'center', zIndex: 1000
        }}>
          <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', width: '90%', maxWidth: '600px', position: 'relative' }}>
            <button onClick={() => setSelected(null)} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', fontSize: '1.5rem' }}>×</button>
            <h2 style={{ marginBottom: '0.5rem' }}>{selected.name}</h2>
            <p><strong>Location:</strong> {selected.location}</p>
            <p><strong>Owner:</strong> {selected.owner}</p>
            {selected.value && <p><strong>Estimated Value:</strong> ${selected.value}</p>}
            {selected.notes && <p><strong>Notes:</strong> {selected.notes}</p>}
          </div>
        </div>
      )}
    </div>
  );
}