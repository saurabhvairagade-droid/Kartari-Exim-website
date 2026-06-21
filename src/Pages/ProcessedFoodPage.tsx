import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProcessedFoodPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as any).toString(),
      });
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setIsSubmitting(false);
      setSubmitStatus('error');
    }
  };

  return (
    <div className="bg-midnight-900 text-platinum-100 min-h-screen">
      <Helmet>
        <title>Premium Processed Food Exporter | Jaggery & S30 Sugar | Kartari Exim</title>
        <meta name="description" content="Exporting premium processed foods from India. Buy chemical-free Jaggery Powder and highly refined S30 White Sugar in bulk." />
        <meta name="keywords" content="processed food exporter india, jaggery powder export, s30 sugar supplier, bulk sugar india" />
        <meta property="og:title" content="Premium Processed Food Exporter | Kartari Exim" />
        <meta property="og:description" content="Bulk export of premium Jaggery Powder and S30 Sugar from India." />
      </Helmet>
      <Header />

      <main className="pt-32 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-champagne-400 mb-4">
          Processed Food
        </h1>
        <p className="text-lg md:text-xl text-platinum-300 mb-10">
          Explore our selection of gourmet processed foods, starting with premium jaggery powder. Sourced from natural sugarcane and processed without chemicals, our offerings meet global standards for purity, nutrition, and taste ideal for health-conscious and organic focused markets.
        </p>

        {/* Jaggery Powder */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-start bg-midnight-800 rounded-xl p-6 mb-20">
          <div>
            <img
              src="/jaggery powder.webp"
              alt="Jaggery Powder"
              width="384"
              height="256"
              fetchPriority="high"
              decoding="async"
              className="w-96 h-64 object-cover rounded-lg shadow"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">Jaggery Powder</h2>
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
              src="/s30 sugar.webp"
              alt="Refined white sugar"
              width="384"
              height="256"
              loading="lazy"
              decoding="async"
              className="w-96 h-64 object-cover rounded-lg shadow"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">Refined White Sugar — S30</h2>
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
          
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-900/50 border border-green-500 rounded-lg text-green-300">
              Thank you! Your inquiry has been submitted successfully.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-300">
              Something went wrong. Please try again later.
            </div>
          )}

          <form 
            onSubmit={handleSubmit}
            name="processed-food-inquiry"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="grid md:grid-cols-2 gap-6"
          >
            <input type="hidden" name="form-name" value="processed-food-inquiry" />
            <p hidden><input name="bot-field" /></p>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              aria-label="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="p-4 rounded bg-midnight-700 border border-champagne-500 text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              aria-label="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="p-4 rounded bg-midnight-700 border border-champagne-500 text-white"
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              aria-label="Company Name"
              required
              value={formData.company}
              onChange={handleChange}
              className="p-4 rounded bg-midnight-700 border border-champagne-500 text-white md:col-span-2"
            />
            <textarea
              name="message"
              placeholder="Your Message / Product Requirement"
              aria-label="Your Message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="p-4 rounded bg-midnight-700 border border-champagne-500 text-white md:col-span-2"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-champagne-500 to-luxury-500 text-midnight-900 font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-all md:col-span-2 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Inquiry'}
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProcessedFoodPage;
