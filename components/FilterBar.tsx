
export default function FilterBar() {
  return (
    <div style={{ marginBottom: '20px' }}>
      <input placeholder="Search by city" />
      <select><option>All Types</option><option>House</option><option>Apartment</option></select>
      <button>Filter</button>
    </div>
  )
}