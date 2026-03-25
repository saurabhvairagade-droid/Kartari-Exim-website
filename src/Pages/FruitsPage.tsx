import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FruitsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-midnight-900 text-platinum-100 min-h-screen">
      <Header />

      <main className="pt-32 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-champagne-400 mb-4">
          Fresh Fruits Collection
        </h1>
        <p className="text-lg md:text-xl text-platinum-300 mb-10">
          Explore our premium fresh fruit exports featuring vibrant Pomegranates and export-grade G9 Cavendish Bananas. Carefully harvested, sorted, and packed for international markets.
        </p>

        {/* Pomegranate */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-start bg-midnight-800 rounded-xl p-6 mb-20">
          <div>
            <img
              src="https://images.pexels.com/photos/65256/pomegranate-open-cores-fruit-fruit-logistica-65256.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Pomegranate"
              className="w-96 h-64 object-cover rounded-lg shadow"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Pomegranate (Bhagwa)</h3>
            <p className="text-platinum-400 mb-4">
              Bright red Bhagwa pomegranates known for their soft seeds, high juice content, and long shelf life.
            </p>
            <ul className="list-disc list-inside text-platinum-300 space-y-2">
              <li><strong>Size:</strong> 250g - 400g per fruit</li>
              <li><strong>Color:</strong> Deep red skin and arils</li>
              <li><strong>Juice Content:</strong> 85%+</li>
              <li><strong>Packaging:</strong> 1.8kg or 2.7kg corrugated boxes</li>
              <li><strong>Use:</strong> Table fruit, juice, fresh exports</li>
            </ul>
          </div>
        </div>

        {/* G9 Cavendish Banana */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-start bg-midnight-800 rounded-xl p-6 mb-20">
          <div>
            <img
              src="https://images.unsplash.com/photo-1709105658917-9c930796648f?auto=compress&cs=tinysrgb&w=600"
              alt="G9 Cavendish Banana"
              className="w-96 h-64 object-cover rounded-lg shadow"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">G9 Cavendish Banana (Green)</h3>
            <p className="text-platinum-400 mb-4">
              Firm, green Cavendish bananas ideal for long-haul exports. Harvested at maturity to ensure maximum shelf life.
            </p>
            <ul className="list-disc list-inside text-platinum-300 space-y-2">
              <li><strong>Length:</strong> 18–25 cm</li>
              <li><strong>Maturity:</strong> 40–46 age index</li>
              <li><strong>Color:</strong> Natural green (ripens yellow)</li>
              <li><strong>Packaging:</strong> 13kg or 18kg export-grade cartons</li>
              <li><strong>Use:</strong> Table consumption, exports</li>
            </ul>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="bg-midnight-800 p-8 rounded-xl shadow-md mb-20">
          <h2 className="text-2xl font-semibold text-champagne-400 mb-4">
            Submit an Inquiry
          </h2>
          <p className="text-platinum-300 mb-6">
            Interested in importing our premium fruits? Let us know your quantity and destination and we’ll be in touch.
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

export default FruitsPage;
