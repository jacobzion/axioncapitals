
import { useState } from 'react';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || '';

export default function Search() {
  const [query, setQuery] = useState('');
  const [propertyType, setPropertyType] = useState('residential');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const search = async () => {
    setLoading(true);
    const res = await fetch(`${API_BASE}/api/nwmls/search?q=${query}&type=${propertyType}`);
    const data = await res.json();
    setResults(data?.listings || []);
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Search NWMLS Listings</h1>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mb-6">
        <input
          className="p-2 border rounded"
          placeholder="Search by city, address, MLS ID..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select
          className="p-2 border rounded"
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
        >
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
        </select>
        <button
          onClick={search}
          className="bg-blue-600 text-white rounded px-4 py-2 col-span-1"
        >
          Search
        </button>
      </div>

      {loading && <p>Loading listings...</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {results.map((item, idx) => (
          <div key={idx} className="border p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{item?.address || 'Listing'}</h2>
            <p className="text-sm text-gray-600">{item.city}, {item.state}</p>
            <p className="text-blue-600 font-bold">${item.price}</p>
            {item.image && (
              <img src={item.image} alt="property" className="mt-2 w-full h-48 object-cover rounded" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
