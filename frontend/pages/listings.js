import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Listings() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/properties/')
      .then(res => res.json())
      .then(data => setProperties(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4">Property Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {properties.map(property => (
          <Link key={property.id} href={`/property/${property.id}`}>
            <div className="border rounded p-4 hover:shadow-lg cursor-pointer">
              <img src={property.image_url} alt={property.title} className="w-full h-48 object-cover rounded mb-2" />
              <h2 className="text-xl font-bold">{property.title}</h2>
              <p className="text-gray-600">{property.location}</p>
              <p className="text-green-600">${property.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
