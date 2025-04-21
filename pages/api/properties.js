export default async function handler(req, res) {
  // Simulate external API fetch (replace this with real API like ATTOM or RentCast)
  const simulatedApiResponse = [
    { id: 1, name: "Modern Family Home", location: "Austin, TX", price: 550000, image: "https://unsplash.it/400/250?image=1067" },
    { id: 2, name: "Luxury Beach Villa", location: "Miami, FL", price: 1250000, image: "https://unsplash.it/400/250?image=1050" },
    { id: 3, name: "Downtown Condo", location: "New York, NY", price: 875000, image: "https://unsplash.it/400/250?image=1033" },
    { id: 4, name: "Suburban Home", location: "Dallas, TX", price: 430000, image: "https://unsplash.it/400/250?image=1027" },
    { id: 5, name: "City Loft", location: "San Francisco, CA", price: 980000, image: "https://unsplash.it/400/250?image=1043" },
    { id: 6, name: "Cozy Cottage", location: "Nashville, TN", price: 350000, image: "https://unsplash.it/400/250?image=1019" }
  ];

  const { page = 1, location = "", minPrice = 0, maxPrice = 9999999 } = req.query;
  const pageSize = 3;
  const filtered = simulatedApiResponse.filter(p =>
    (!location || p.location.toLowerCase().includes(location.toLowerCase())) &&
    p.price >= parseInt(minPrice) &&
    p.price <= parseInt(maxPrice)
  );

  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginated = filtered.slice(start, end);

  res.status(200).json({
    total: filtered.length,
    page: parseInt(page),
    pageSize,
    properties: paginated
  });
}