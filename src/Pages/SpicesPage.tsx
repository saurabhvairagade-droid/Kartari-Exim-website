import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const SpicesPage = () => {
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
        <title>Premium Indian Spices Exporter | Turmeric & Red Chilli | Kartari Exim</title>
        <meta name="description" content="Buy premium Indian spices including Turmeric Powder, Red Chilli Powder, and Dried Red Chilli. Bulk export from India with highest quality standards." />
        <meta name="keywords" content="indian spices exporter, turmeric powder export, red chilli powder supplier, bulk spices india" />
        <meta property="og:title" content="Premium Indian Spices Exporter | Kartari Exim" />
        <meta property="og:description" content="Bulk export of premium Turmeric and Red Chilli from India." />
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Premium Indian Spices (Turmeric, Red Chilli)",
  "description": "Bulk export of premium Indian spices including Turmeric Powder, Red Chilli Powder, and Dried Red Chilli.",
  "brand": { "@type": "Brand", "name": "Kartari Exim" },
  "offers": {
    "@type": "Offer",
    "url": "https://kartariexim.com/products/spices",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition"
  }
}
        `}</script>
      </Helmet>
      <main className="pt-32 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-champagne-400 mb-4">
          Spices
        </h1>
        <p className="text-lg md:text-xl text-platinum-300 mb-10">
          Discover our finest selection of Indian spices, including Turmeric Powder, Red Chilli Powder, and Dried Red Chilli. Each product is sun-dried, sorted, and packed with flavor and nutrition.
        </p>

        {/* Turmeric Powder */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-start bg-midnight-800 rounded-xl p-6 mb-20">
          <div>
            <img
              src="https://images.pexels.com/photos/6220710/pexels-photo-6220710.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Turmeric Powder"
              width="384"
              height="256"
              fetchPriority="high"
              decoding="async"
              className="w-96 h-64 object-cover rounded-lg shadow"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">Turmeric Powder</h2>
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
              src="https://images.pexels.com/photos/4198417/pexels-photo-4198417.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Red Chilli Powder"
              width="384"
              height="256"
              loading="lazy"
              decoding="async"
              className="w-96 h-64 object-cover rounded-lg shadow"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">Red Chilli Powder</h2>
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
              src="/Red onion flakes.webp"
              alt="Dehydrated Onion Flakes"
              width="384"
              height="256"
              loading="lazy"
              decoding="async"
              className="w-96 h-64 object-cover rounded-lg shadow"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">Dehydrated Red Onion Flakes</h2>
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
              to="/products/dehydrated-onion-flakes/"
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
              src="https://images.pexels.com/photos/7094360/pexels-photo-7094360.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Dried Red Chilli"
              width="384"
              height="256"
              loading="lazy"
              decoding="async"
              className="w-96 h-64 object-cover rounded-lg shadow"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">Dried Red Chilli</h2>
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
            name="spices-inquiry"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="grid md:grid-cols-2 gap-6"
          >
            <input type="hidden" name="form-name" value="spices-inquiry" />
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

export default SpicesPage;
