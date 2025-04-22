
import { useState, useEffect } from 'react';

export default function PropertyAdmin() {
  const [properties, setProperties] = useState([]);
  const [form, setForm] = useState({ name: '', location: '', rent: '', tenant: '' });

  const fetchProperties = async () => {
    const res = await fetch('/api/properties');
    const data = await res.json();
    setProperties(data);
  };

  const addProperty = async () => {
    await fetch('/api/properties', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, rent: parseInt(form.rent) }),
    });
    setForm({ name: '', location: '', rent: '', tenant: '' });
    fetchProperties();
  };

  const deleteProperty = async (id) => {
    await fetch(`/api/properties/${id}`, { method: 'DELETE' });
    fetchProperties();
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Property Management Admin Panel</h1>
      <div className="grid gap-2 mb-6">
        <input className="p-2 border" placeholder="Property Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <input className="p-2 border" placeholder="Location" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} />
        <input className="p-2 border" placeholder="Rent" type="number" value={form.rent} onChange={e => setForm({ ...form, rent: e.target.value })} />
        <input className="p-2 border" placeholder="Tenant Name" value={form.tenant} onChange={e => setForm({ ...form, tenant: e.target.value })} />
        <button className="bg-blue-500 text-white py-2 px-4" onClick={addProperty}>Add Property</button>
      </div>

      <h2 className="text-xl font-semibold mb-2">Current Properties</h2>
      <ul className="space-y-2">
        {properties.map(p => (
          <li key={p.id} className="border p-4 rounded flex justify-between items-center">
            <div>
              <p className="font-medium">{p.name}</p>
              <p className="text-sm text-gray-600">{p.location} | Rent: ${p.rent} | Tenant: {p.tenant}</p>
            </div>
            <button className="text-red-600" onClick={() => deleteProperty(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
