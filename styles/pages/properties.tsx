
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import PropertyCard from '../components/PropertyCard'
import { supabase } from '../utils/supabaseClient'

export default function Properties() {
  const [properties, setProperties] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('properties').select('*')
      if (!error) setProperties(data)
    }
    fetchData()
  }, [])

  return (
    <Layout>
      <h2>Property Listings</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {properties.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
    </Layout>
  )
}
