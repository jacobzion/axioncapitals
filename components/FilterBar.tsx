
export default function FilterBar({ city, setCity, type, setType, minPrice, setMinPrice, maxPrice, setMaxPrice }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ marginRight: '8px' }}
      />
      <select value={type} onChange={(e) => setType(e.target.value)} style={{ marginRight: '8px' }}>
        <option value="">All Types</option>
        <option value="house">House</option>
        <option value="apartment">Apartment</option>
      </select>
      <input
        placeholder="Min Price"
        type="number"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        style={{ marginRight: '8px' }}
      />
      <input
        placeholder="Max Price"
        type="number"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        style={{ marginRight: '8px' }}
      />
    </div>
  )
}
