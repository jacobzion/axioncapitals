import NavBar from '../components/NavBar';

export default function Contact() {
  return (
    <>
      <NavBar />
      <div className="p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-6">Have questions or want to get in touch with our team? Fill out the form below.</p>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full border p-3 rounded" />
          <input type="email" placeholder="Your Email" className="w-full border p-3 rounded" />
          <textarea placeholder="Your Message" className="w-full border p-3 rounded h-32"></textarea>
          <button type="submit" className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
