
import { useState, useEffect } from 'react';
import path from 'path';
import fs from 'fs';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'businesses.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const businesses = JSON.parse(jsonData);
  return { props: { businesses } };
}

export default function Businesses({ businesses }) {
  const [filters, setFilters] = useState({ category: '', location: '', investmentType: '' });
  const [filtered, setFiltered] = useState(businesses);

  useEffect(() => {
    let result = businesses.filter(b => {
      return (!filters.category || b.category === filters.category) &&
             (!filters.location || b.location === filters.location) &&
             (!filters.investmentType || b.investmentType === filters.investmentType);
    });
    setFiltered(result);
  }, [filters]);

  const categories = [...new Set(businesses.map(b => b.category))];
  const locations = [...new Set(businesses.map(b => b.location))];
  const investmentTypes = [...new Set(businesses.map(b => b.investmentType))];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Business Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <select className="p-2 border" onChange={e => setFilters(f => ({ ...f, category: e.target.value }))}>
          <option value="">All Categories</option>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <select className="p-2 border" onChange={e => setFilters(f => ({ ...f, location: e.target.value }))}>
          <option value="">All Locations</option>
          {locations.map(l => <option key={l} value={l}>{l}</option>)}
        </select>
        <select className="p-2 border" onChange={e => setFilters(f => ({ ...f, investmentType: e.target.value }))}>
          <option value="">All Investment Types</option>
          {investmentTypes.map(i => <option key={i} value={i}>{i}</option>)}
        </select>
      </div>
      <div className="grid gap-4">
        {filtered.map(b => (
          <div key={b.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{b.name}</h2>
            <p className="text-sm text-gray-600">{b.category} | {b.location} | {b.investmentType}</p>
            <p className="mt-2">{b.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
