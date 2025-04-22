
import { useState } from 'react';

export default function Admin() {
  const [form, setForm] = useState({ type: 'Property', title: '', price: '', description: '', image: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Listing Submitted:\n" + JSON.stringify(form, null, 2));
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 p-4 md:p-6">
      <header className="bg-gradient-to-r from-blue-900 to-indigo-700 text-white px-4 py-4 shadow-md mb-6">
        <div className="flex items-center space-x-4">
          <img src="/axion-logo.png" alt="Axion Capitals Logo" className="h-16 w-auto" />
          <div>
            <h1 className="text-xl font-bold md:text-2xl">Axion Capitals Admin</h1>
            <p className="text-xs">Add New Property or Business Listing</p>
          </div>
        </div>
      </header>

      <main className="max-w-xl mx-auto space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Listing Type</label>
            <select name="type" onChange={handleChange} value={form.type} className="w-full border border-gray-300 p-2 rounded">
              <option value="Property">Property</option>
              <option value="Business">Business</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input name="title" onChange={handleChange} value={form.title} className="w-full border border-gray-300 p-2 rounded" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input name="price" onChange={handleChange} value={form.price} className="w-full border border-gray-300 p-2 rounded" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input name="image" onChange={handleChange} value={form.image} className="w-full border border-gray-300 p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea name="description" rows="4" onChange={handleChange} value={form.description} className="w-full border border-gray-300 p-2 rounded" />
          </div>
          <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition">Submit Listing</button>
        </form>
      </main>
    </div>
  );
}
