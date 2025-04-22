
import { useState, useEffect } from 'react';
import businessesData from '../data/businesses.json';

export default function Home() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [investmentType, setInvestmentType] = useState('');
  const [filtered, setFiltered] = useState(businessesData);

  useEffect(() => {
    const result = businessesData.filter(b => 
      (b.name.toLowerCase().includes(search.toLowerCase())) &&
      (category ? b.category === category : true) &&
      (location ? b.location === location : true) &&
      (investmentType ? b.investmentType === investmentType : true)
    );
    setFiltered(result);
  }, [search, category, location, investmentType]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white font-sans">
      {/* ...existing header and nav... */}
      
      {/* Business Listings */}
      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-300">Explore Investment Opportunities</h2>
        <div className="grid gap-4 md:grid-cols-4 mb-6">
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="p-2 rounded bg-gray-800 text-white border border-gray-600"
          />
          <select value={category} onChange={e => setCategory(e.target.value)} className="p-2 rounded bg-gray-800 text-white border border-gray-600">
            <option value="">All Categories</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Retail">Retail</option>
            <option value="Energy">Energy</option>
            <option value="Commercial Real Estate">Commercial Real Estate</option>
          </select>
          <select value={location} onChange={e => setLocation(e.target.value)} className="p-2 rounded bg-gray-800 text-white border border-gray-600">
            <option value="">All Locations</option>
            <option value="Los Angeles, CA">Los Angeles, CA</option>
            <option value="Austin, TX">Austin, TX</option>
            <option value="Phoenix, AZ">Phoenix, AZ</option>
            <option value="San Francisco, CA">San Francisco, CA</option>
          </select>
          <select value={investmentType} onChange={e => setInvestmentType(e.target.value)} className="p-2 rounded bg-gray-800 text-white border border-gray-600">
            <option value="">All Types</option>
            <option value="Franchise">Franchise</option>
            <option value="Partnership">Partnership</option>
            <option value="Equity">Equity</option>
            <option value="Lease">Lease</option>
          </select>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map(b => (
            <div key={b.id} className="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700">
              <h3 className="text-xl font-semibold text-blue-400">{b.name}</h3>
              <p className="text-sm text-gray-300">{b.category}</p>
              <p className="text-sm text-gray-400">{b.location}</p>
              <p className="text-sm text-blue-200">{b.investmentType}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
