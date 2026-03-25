import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BasmatiRicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-midnight-900 text-platinum-100 min-h-screen">
      <Header />

      <main className="pt-32 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-champagne-400 mb-4">
          Basmati Rice Collection
        </h1>
        <p className="text-lg md:text-xl text-platinum-300 mb-10">
          Our premium 1121 Basmati Rice varieties are renowned for their extra-long grain, aromatic fragrance, and excellent cooking quality. Sourced from trusted mills and processed for purity.
        </p>

        {/* 1121 Sella White / Creamy */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-start bg-midnight-800 rounded-xl p-6 mb-20">
          <div>
            <img
              src="https://images.unsplash.com/photo-1723475158229-894679ca024e?auto=format&q=80&w=800"
              alt="1121 Sella White / Creamy"
              className="w-96 h-64 object-cover rounded-lg shadow"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">1121 Basmati Sella White / Creamy</h3>
            <p className="text-platinum-400 mb-4">
              Elegant long-grain rice with creamy white appearance, perfect for daily cooking and export.
            </p>
            <ul className="list-disc list-inside text-platinum-300 space-y-2">
              <li><strong>Grain Length:</strong> 8.30 mm+ (uncooked)</li>
              <li><strong>Moisture:</strong> Max 12.5%</li>
              <li><strong>Broken Grains:</strong> Max 1%</li>
              <li><strong>Damage/Discolor:</strong> Max 0.5%</li>
              <li><strong>Foreign Matter:</strong> Max 0.2%</li>
              <li><strong>Packaging:</strong> 5kg, 10kg, 25kg, 50kg PP/Non-woven bags</li>
            </ul>
          </div>
        </div>

        {/* 1121 Golden Sella */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-start bg-midnight-800 rounded-xl p-6 mb-20">
          <div>
            <img
              src="https://images.unsplash.com/photo-1627482265910-5c0ff6bee088?auto=compress&cs=tinysrgb&w=600"
              alt="1121 Golden Sella Basmati"
              className="w-96 h-64 object-cover rounded-lg shadow"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">1121 Golden Sella Basmati</h3>
            <p className="text-platinum-400 mb-4">
              Golden-hued rice known for its strong aroma, long grain, and fluffy cooked texture.
            </p>
            <ul className="list-disc list-inside text-platinum-300 space-y-2">
              <li><strong>Grain Length:</strong> 8.30 mm+ (uncooked)</li>
              <li><strong>Moisture:</strong> Max 12.5%</li>
              <li><strong>Broken Grains:</strong> Max 1%</li>
              <li><strong>Damage/Discolor:</strong> Max 0.5%</li>
              <li><strong>Color:</strong> Natural golden tone from parboiling</li>
              <li><strong>Packaging:</strong> 5kg, 10kg, 25kg, 50kg options</li>
            </ul>
          </div>
        </div>

        {/* 1121 Steam Basmati */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-start bg-midnight-800 rounded-xl p-6 mb-20">
          <div>
            <img
              src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=compress&cs=tinysrgb&w=600"
              alt="1121 Steam Basmati"
              className="w-96 h-64 object-cover rounded-lg shadow"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">1121 Steam Basmati Rice</h3>
            <p className="text-platinum-400 mb-4">
              Naturally processed steamed rice with excellent elongation and a non-sticky texture when cooked.
            </p>
            <ul className="list-disc list-inside text-platinum-300 space-y-2">
              <li><strong>Grain Length:</strong> 8.30 mm+ (uncooked)</li>
              <li><strong>Moisture:</strong> Max 12.5%</li>
              <li><strong>Admixture:</strong> Max 1%</li>
              <li><strong>Chalky Kernels:</strong> Max 2%</li>
              <li><strong>Packaging:</strong> Available in 5kg, 10kg, 25kg, 50kg bags</li>
              <li><strong>Use:</strong> Ideal for restaurants, households, and bulk buyers</li>
            </ul>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="bg-midnight-800 p-8 rounded-xl shadow-md mb-20">
          <h2 className="text-2xl font-semibold text-champagne-400 mb-4">
            Submit an Inquiry
          </h2>
          <p className="text-platinum-300 mb-6">
            Ready to import our premium basmati rice? Let us know your quantity and packaging requirements.
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

export default BasmatiRicePage;
