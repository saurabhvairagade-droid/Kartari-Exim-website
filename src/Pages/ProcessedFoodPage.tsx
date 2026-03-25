import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProcessedFoodPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-midnight-900 text-platinum-100 min-h-screen">
      <Header />

      <main className="pt-32 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-champagne-400 mb-4">
          Processed Food Collection
        </h1>
        <p className="text-lg md:text-xl text-platinum-300 mb-10">
          Explore our selection of gourmet processed foods, starting with premium jaggery powder. Sourced from natural sugarcane and processed without chemicals, our offerings meet global standards for purity, nutrition, and taste ideal for health-conscious and organic focused markets.
        </p>

        {/* Jaggery Powder */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-start bg-midnight-800 rounded-xl p-6 mb-20">
          <div>
            <img
              src="/jaggery powder.png"
              alt="Jaggery Powder"
              className="w-96 h-64 object-cover rounded-lg shadow"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Jaggery Powder</h3>
            <p className="text-platinum-400 mb-4">
             Our chemical-free jaggery powder is a rich, unrefined natural sweetener packed with iron and essential minerals. Ideal for health-conscious, organic, and clean-label food applications in global markets.
            </p>
            <ul className="list-disc list-inside text-platinum-300 space-y-2">
              <li><strong>Color:</strong>Light Golden to Brown (uniform, no dark clumps)</li>
              <li><strong>Purity:</strong>Minimum 98% Natural Cane Jaggery (no additives, no chemicals)</li>
              <li><strong>Moisture:</strong> Max 3–5%</li>
              <li><strong>Sulphur Content:</strong> {'<'}10 ppm </li>
              <li><strong>Packaging:</strong> 25kg food-grade PP bags or as per buyer requirement </li>
              <li><strong>Use:</strong> Natural sweetener, Confectionery, Ayurveda, Beverage blends</li>
            </ul>
          </div>
        </div>

      
{/* Sugar S30 */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-start bg-midnight-800 rounded-xl p-6 mb-20">
          <div>
            <img
              src="/s30 sugar.png"
              alt="Refined white sugar"
              className="w-96 h-64 object-cover rounded-lg shadow"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Refined White Sugar — S30</h3>
            <p className="text-platinum-400 mb-4">
             S30 Sugar is a highly refined white sugar known for its fine crystal size, high purity, and excellent solubility. Sourced from top tier Indian mills, it’s widely used in confectionery, beverages, bakeries, and everyday cooking.
            </p>
            <ul className="list-disc list-inside text-platinum-300 space-y-2">
              <li><strong>Color:</strong>White (ICUMSA 100–150)</li>
              <li><strong>Polarization:</strong>99.6% minimum</li>
              <li><strong>Moisture:</strong> Max 0.06%</li>
              <li><strong>Sulphur Content:</strong> Less than 20 ppm </li>
              <li><strong>Grain Size:</strong> Fine/Uniform (0.6 – 1.0 mm)</li>
              <li><strong>Use:</strong> Confectionery, Beverages, Bakeries, and Everyday cooking</li>
            </ul>
          </div>
        </div>



        {/* Inquiry Form */}
        <div className="bg-midnight-800 p-8 rounded-xl shadow-md mb-20">
          <h2 className="text-2xl font-semibold text-champagne-400 mb-4">
            Submit an Inquiry
          </h2>
          <p className="text-platinum-300 mb-6">
            Interested in sourcing processed foods from us? Submit your details and we’ll get back to you shortly.
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

export default ProcessedFoodPage;
