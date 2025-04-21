
export default function PropertyCard({ property }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '16px', width: '200px' }}>
      <img src={`/images/dummy1.jpg`} width="100%" alt={property.title} />
      <h3>{property.title}</h3>
      <p>${property.price}</p>
      <p>{property.city}</p>
      <p>{property.bedrooms} Bed / {property.bathrooms} Bath</p>
    </div>
  )
}