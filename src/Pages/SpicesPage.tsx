import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SpicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-midnight-900 text-platinum-100 min-h-screen">
      <main className="pt-32 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-champagne-400 mb-4">
          Spices Collection
        </h1>
        <p className="text-lg md:text-xl text-platinum-300 mb-10">
          Discover our finest selection of Indian spices, including Turmeric Powder, Red Chilli Powder, and Dried Red Chilli. Each product is sun-dried, sorted, and packed with flavor and nutrition.
        </p>

        {/* Turmeric Powder */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-start bg-midnight-800 rounded-xl p-6 mb-20">
          <div>
            <img
              src="https://images.pexels.com/photos/6220710/pexels-photo-6220710.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Turmeric Powder"
              className="w-96 h-64 object-cover rounded-lg shadow"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Turmeric Powder</h3>
            <p className="text-platinum-400 mb-4">
              Vibrant golden turmeric powder known for its rich aroma, strong flavor, and high curcumin content.
            </p>
            <ul className="list-disc list-inside text-platinum-300 space-y-2">
              <li><strong>Color:</strong> Natural bright yellow</li>
              <li><strong>Curcumin:</strong> 2.5% to 5%</li>
              <li><strong>Moisture:</strong> Max 8%</li>
              <li><strong>Mesh Size:</strong> 80 to 100</li>
              <li><strong>Packaging:</strong> 25kg or 50kg bags</li>
              <li><strong>Use:</strong> Culinary, Ayurvedic, cosmetic</li>
            </ul>
          </div>
        </div>

        {/* Red Chilli Powder */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-start bg-midnight-800 rounded-xl p-6 mb-20">
          <div>
            <img
              src="https://images.pexels.com/photos/4198417/pexels-photo-4198417.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Red Chilli Powder"
              className="w-96 h-64 object-cover rounded-lg shadow"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Red Chilli Powder</h3>
            <p className="text-platinum-400 mb-4">
              Fiery and flavorful chilli powder made from sun-dried whole chillies, ground and preserved naturally.
            </p>
            <ul className="list-disc list-inside text-platinum-300 space-y-2">
              <li><strong>Color:</strong> Deep red</li>
              <li><strong>Heat Level:</strong> 15,000 - 90,000 SHU</li>
              <li><strong>Moisture:</strong> Max 10%</li>
              <li><strong>Mesh Size:</strong> 60 to 100</li>
              <li><strong>Packaging:</strong> 25kg or 50kg HDPE bags</li>
              <li><strong>Use:</strong> Cooking, seasoning, spice blends</li>
            </ul>
          </div>
        </div>

        {/* Dehydrated Onion Flakes */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-start bg-midnight-800 rounded-xl p-6 mb-20">
          <div>
            <img
              src="/Red onion flakes.png"
              alt="Dehydrated Onion Flakes"
              className="w-96 h-64 object-cover rounded-lg shadow"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Dehydrated Red Onion Flakes</h3>
            <p className="text-platinum-400 mb-4">
              Dehydrated onion flakes made from fresh red onions, retaining flavor and aroma for convenient use.
            </p>
            <ul className="list-disc list-inside text-platinum-300 space-y-2">
              <li><strong>Color:</strong> Deep reddish-purple to pinkish </li>
              <li><strong>Purity:</strong> Free from foreign matter, often 100% pure onion, no preservatives.</li>
              <li><strong>Moisture:</strong> Max 7%</li>
              <li><strong>Form:</strong> Flakes </li>
              <li><strong>Packaging:</strong> Available in bulk, polybags, or laminated bags e.g., 10-25kg.</li>
              <li><strong>Use:</strong> Versatile for soups/sauces/seasonings, time-saving, and cost-effective.  </li>
            </ul>
            <Link
              to="/products/dehydrated-onion-flakes"
              className="inline-block mt-6 bg-gradient-to-r from-champagne-500 to-luxury-500 text-midnight-900 font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-all text-sm"
            >
              View Full Product Details →
            </Link>
          </div>
        </div>

        {/* Dried Red Chilli */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-start bg-midnight-800 rounded-xl p-6 mb-20">
          <div>
            <img
              src="https://images.pexels.com/photos/7094360/pexels-photo-7094360.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Dried Red Chilli"
              className="w-96 h-64 object-cover rounded-lg shadow"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Dried Red Chilli</h3>
            <p className="text-platinum-400 mb-4">
              Whole sun-dried red chillies that retain intense color and heat, perfect for direct use or grinding.
            </p>
            <ul className="list-disc list-inside text-platinum-300 space-y-2">
              <li><strong>Varieties:</strong> Byadgi, Sannam, Teja</li>
              <li><strong>Length:</strong> 4 to 7 cm</li>
              <li><strong>Moisture:</strong> Max 12%</li>
              <li><strong>Stem:</strong> With or without stem</li>
              <li><strong>Packaging:</strong> 25kg jute or PP bags</li>
              <li><strong>Use:</strong> Culinary, extraction, grinding</li>
            </ul>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="bg-midnight-800 p-8 rounded-xl shadow-md mb-20">
          <h2 className="text-2xl font-semibold text-champagne-400 mb-4">
            Submit an Inquiry
          </h2>
          <p className="text-platinum-300 mb-6">
            Interested in sourcing premium spices from us? Submit your details and we’ll get back to you shortly.
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

export default SpicesPage;
