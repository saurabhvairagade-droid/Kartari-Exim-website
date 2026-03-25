import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const VegetablesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-midnight-900 text-platinum-100 min-h-screen">
      <Header />

      <main className="pt-32 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-champagne-400 mb-4">
          Fresh Vegetables Collection
        </h1>
        <p className="text-lg md:text-xl text-platinum-300 mb-10">
          We bring you handpicked fresh vegetables like Nasik Red Onion and G4 Green Chilli — grown with care, packed with nutrition, and shipped globally with care.
        </p>

        {/* Nasik Red Onion */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-start bg-midnight-800 rounded-xl p-6 mb-20">
          <div>
            <img
              src="https://images.unsplash.com/photo-1668295037469-8b0e8d11cd2a?auto=compress&cs=tinysrgb&w=600"
              alt="Nasik Red Onion"
              className="w-96 h-64 object-cover rounded-lg shadow"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Nasik Red Onion</h3>
            <p className="text-platinum-400 mb-4">
              Deep red, high shelf-life onions grown in the fertile lands of Nasik. Popular for their rich flavor and uniform size.
            </p>
            <ul className="list-disc list-inside text-platinum-300 space-y-2">
              <li><strong>Size:</strong> 40mm - 70mm (as per requirement)</li>
              <li><strong>Color:</strong> Dark red to purplish hue</li>
              <li><strong>Moisture:</strong> Less than 14%</li>
              <li><strong>Packaging:</strong> 5kg, 10kg, 18kg mesh bags</li>
              <li><strong>Use:</strong> Cooking, salads, export markets</li>
            </ul>
          </div>
        </div>

        {/* G4 Green Chilli */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-start bg-midnight-800 rounded-xl p-6 mb-20">
          <div>
            <img
              src="https://images.unsplash.com/photo-1576763595295-c0371a32af78?auto=compress&cs=tinysrgb&w=600"
              alt="G4 Green Chilli"
              className="w-96 h-64 object-cover rounded-lg shadow"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">G4 Green Chilli</h3>
            <p className="text-platinum-400 mb-4">
              Crisp, spicy G4 variety green chillies with vibrant color and excellent shelf life — perfect for exports.
            </p>
            <ul className="list-disc list-inside text-platinum-300 space-y-2">
              <li><strong>Length:</strong> 7 to 10 cm</li>
              <li><strong>Color:</strong> Glossy dark green</li>
              <li><strong>Spice Level:</strong> Medium to Hot</li>
              <li><strong>Packaging:</strong> 3kg or 5kg cartons with liners</li>
              <li><strong>Use:</strong> Cooking, pickles, sauces</li>
            </ul>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="bg-midnight-800 p-8 rounded-xl shadow-md mb-20">
          <h2 className="text-2xl font-semibold text-champagne-400 mb-4">
            Submit an Inquiry
          </h2>
          <p className="text-platinum-300 mb-6">
            Want to import premium Indian vegetables? Let us know your interest and we’ll connect soon.
          </p>
          <form className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded bg-midnight-700 border border-champagne-500 text-white"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-4 rounded bg-midnight-700 border border-champagne-500 text-white"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="p-4 rounded bg-midnight-700 border border-champagne-500 text-white md:col-span-2"
            />
            <textarea
              placeholder="Your Message / Product Requirement"
              rows={5}
              className="p-4 rounded bg-midnight-700 border border-champagne-500 text-white md:col-span-2"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-champagne-500 to-luxury-500 text-midnight-900 font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-all md:col-span-2"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default VegetablesPage;
