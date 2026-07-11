import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';


const VegetablesPage = () => {
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
        <title>Fresh Indian Vegetables Exporter | Red Onion & Green Chilli | Kartari Exim</title>
        <meta name="description" content="Exporting premium fresh vegetables from India. Buy Nasik Red Onions and G4 Green Chillies in bulk. Global shipping and strict quality control." />
        <meta name="keywords" content="fresh vegetables exporter india, nasik red onion export, g4 green chilli supplier, bulk vegetables india" />
        <meta property="og:title" content="Fresh Indian Vegetables Exporter | Kartari Exim" />
        <meta property="og:description" content="Bulk export of premium Nasik Red Onions and G4 Green Chillies from India." />
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Fresh Indian Vegetables (Red Onion, Green Chilli)",
  "description": "Exporting premium fresh vegetables from India including Nasik Red Onions and G4 Green Chillies.",
  "brand": { "@type": "Brand", "name": "Kartari Exim" },
  "offers": {
    "@type": "Offer",
    "url": "https://kartariexim.com/products/vegetables",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition"
  }
}
        `}</script>
      </Helmet>

      <main className="pt-32 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-champagne-400 mb-4">
          Fresh Vegetables
        </h1>
        <p className="text-lg md:text-xl text-platinum-300 mb-10">
          We bring you handpicked fresh vegetables like Nasik Red Onion and G4 Green Chilli — grown with care, packed with nutrition, and shipped globally with care.
        </p>

        {/* Nasik Red Onion */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-start bg-midnight-800 rounded-xl p-6 mb-20">
          <div>
            <img
              src="https://images.unsplash.com/photo-1668295037469-8b0e8d11cd2a?auto=format,compress&q=60&w=800"
              alt="Nasik Red Onion"
              width="384"
              height="256"
              fetchPriority="high"
              decoding="async"
              className="w-96 h-64 object-cover rounded-lg shadow"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">Nasik Red Onion</h2>
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
              src="https://images.unsplash.com/photo-1576763595295-c0371a32af78?auto=format,compress&q=60&w=800"
              alt="G4 Green Chilli"
              width="384"
              height="256"
              loading="lazy"
              decoding="async"
              className="w-96 h-64 object-cover rounded-lg shadow"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">G4 Green Chilli</h2>
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
            name="vegetables-inquiry"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="grid md:grid-cols-2 gap-6"
          >
            <input type="hidden" name="form-name" value="vegetables-inquiry" />
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

    </div>
  );
};

export default VegetablesPage;
