
export default function handler(req, res) {
  res.status(200).json([
    {
      title: 'Beverly Hills Villa',
      price: '$4.2M',
      beds: 5,
      baths: 6,
      image: '/property1.jpg'
    },
    {
      title: 'Downtown NYC Penthouse',
      price: '$7.5M',
      beds: 4,
      baths: 4.5,
      image: '/property2.jpg'
    },
    {
      title: 'Waterfront Miami Estate',
      price: '$6.9M',
      beds: 6,
      baths: 7,
      image: '/property3.jpg'
    }
  ])
}
