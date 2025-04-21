
import PropertyCard from '../components/PropertyCard'
import FilterBar from '../components/FilterBar'
import properties from '../data/properties.json'

export default function Properties() {
  return (
    <div>
      <FilterBar />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {properties.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
    </div>
  )
}