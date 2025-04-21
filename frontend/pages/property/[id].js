import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function PropertyDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8000/properties/`)
        .then(res => res.json())
        .then(data => {
          const match = data.find(p => p.id === parseInt(id));
          setProperty(match);
        });
    }
  }, [id]);

  if (!property) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
      <img src={property.image_url} alt={property.title} className="w-full h-96 object-cover rounded mb-4" />
      <p className="text-gray-700 mb-2">{property.description}</p>
      <p className="text-lg text-gray-600 mb-1"><strong>Location:</strong> {property.location}</p>
      <p className="text-lg text-green-700"><strong>Price:</strong> ${property.price}</p>
    </div>
  );
}
