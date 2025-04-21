import NavBar from '../components/NavBar';

export default function About() {
  return (
    <>
      <NavBar />
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">About Axion Capitals</h1>
        <p className="mb-4">
          Axion Capitals is a next-generation real estate investment platform helping individuals and organizations discover, analyze,
          and manage high-potential property assets across the U.S. market.
        </p>
        <p className="mb-4">
          We combine cutting-edge technology with expert insights to streamline the investment and property management journey from start to finish.
        </p>
      </div>
    </>
  );
}
