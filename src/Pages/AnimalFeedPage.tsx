import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AnimalFeedPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as any).toString(),
      });
      setSubmitted(true);
    } catch (error) {
      alert('Something went wrong. Please try again or email us at info@kartariexim.com');
    }
  };

  const faqs = [
    {
      q: 'What is the difference between soybean meal and Soya DOC?',
      a: 'There is no difference — Soya DOC (De-Oiled Cake) and soybean meal refer to the same product. Soya DOC is the term commonly used in India and Asian markets, while soybean meal is the international term used globally.',
    },
    {
      q: 'What protein percentage does your soybean meal contain?',
      a: 'Our Soya DOC contains 46–50% crude protein, suitable for all major livestock, poultry, and aquaculture feed formulations.',
    },
    {
      q: 'Do you supply samples before bulk orders?',
      a: 'Yes, we can arrange product samples for quality testing and verification before confirming bulk orders.',
    },
    {
      q: 'Which countries do you export soybean meal to?',
      a: 'We export to buyers across Southeast Asia, the Middle East, East Africa, and South Asia.',
    },
    {
      q: 'What is the minimum order quantity?',
      a: 'We accommodate both small trial orders and full container loads. Please contact us with your requirement for a custom quote.',
    },
    {
      q: 'What certifications and documents do you provide?',
      a: 'We provide export documentation, phytosanitary certificates, COA, and quality analysis reports with every shipment.',
    },
  ];

  return (
    <div className="bg-midnight-900 text-platinum-100 min-h-screen">

      <Helmet>
        {/* Primary SEO */}
        <title>Soybean Meal Exporter in India | Soya DOC 46–50% Protein | Kartari Exim</title>
        <meta name="description" content="Buy Non-GMO Soybean Meal (Soya DOC) from Kartari Exim, Pune, India. 46–50% crude protein. Bulk export in 50kg PP bags for poultry, cattle, swine & aquaculture. Request a quote within 24 hours." />
        <meta name="keywords" content="soybean meal exporter India, soya DOC supplier Pune, de-oiled cake export, SBM 46% 48%, non-GMO soybean meal, animal feed India, bulk soya DOC" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph — WhatsApp, LinkedIn, Facebook previews */}
        <meta property="og:type" content="product" />
        <meta property="og:title" content="Soybean Meal (Soya DOC) Exporter from India | Kartari Exim" />
        <meta property="og:description" content="Non-GMO Soya DOC with 46–50% protein. Bulk export from Pune, India for poultry, cattle, swine & aquaculture feed. Get a quote within 24 hours." />
        <meta property="og:url" content="https://kartariexim.com/products/soybean-meal" />
        <meta property="og:image" content="https://kartariexim.com/soyaDOC.webp" />
        <meta property="og:image:alt" content="Soybean Meal Soya DOC bulk export India Kartari Exim" />
        <meta property="og:site_name" content="Kartari Exim" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Soybean Meal Exporter India | Kartari Exim" />
        <meta name="twitter:description" content="Non-GMO Soya DOC 46–50% protein. Bulk export from Pune, India. Get a quote within 24 hours." />
        <meta name="twitter:image" content="https://kartariexim.com/soyaDOC.webp" />

        {/* Product Schema */}
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Soybean Meal (Soya DOC)",
  "alternateName": ["Soya DOC", "De-Oiled Cake", "SBM 46%", "SBM 48%", "Soya De-Oiled Cake"],
  "description": "Non-GMO Soya DOC (De-Oiled Cake) with 46–50% crude protein. Exported from Pune, Maharashtra, India for poultry, cattle, dairy, swine and aquaculture feed. Available in 50kg PP bags or bulk container loads.",
  "image": "https://kartariexim.com/soyaDOC.webp",
  "brand": { "@type": "Brand", "name": "Kartari Exim" },
  "manufacturer": {
    "@type": "Organization",
    "name": "Kartari Exim",
    "url": "https://kartariexim.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    }
  },
  "offers": {
    "@type": "Offer",
    "url": "https://kartariexim.com/products/soybean-meal",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "seller": { "@type": "Organization", "name": "Kartari Exim" }
  },
  "additionalProperty": [
    { "@type": "PropertyValue", "name": "Protein Content", "value": "46–50%" },
    { "@type": "PropertyValue", "name": "Moisture", "value": "Max 11%" },
    { "@type": "PropertyValue", "name": "Crude Fiber", "value": "Max 3%" },
    { "@type": "PropertyValue", "name": "Urease Activity", "value": "0.2–0.3 mg N/g/min" },
    { "@type": "PropertyValue", "name": "Sand & Silica", "value": "Max 1%" },
    { "@type": "PropertyValue", "name": "GMO Status", "value": "Non-GMO" },
    { "@type": "PropertyValue", "name": "Origin", "value": "Pune, Maharashtra, India" },
    { "@type": "PropertyValue", "name": "Packaging", "value": "50kg PP bags or bulk container loads" }
  ]
}
        `}</script>

        {/* FAQ Schema — helps Google show FAQ rich results */}
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between soybean meal and Soya DOC?",
      "acceptedAnswer": { "@type": "Answer", "text": "There is no difference — Soya DOC (De-Oiled Cake) and soybean meal refer to the same product. Soya DOC is the term commonly used in India and Asian markets, while soybean meal is the international term used globally." }
    },
    {
      "@type": "Question",
      "name": "What protein percentage does your soybean meal contain?",
      "acceptedAnswer": { "@type": "Answer", "text": "Our Soya DOC contains 46–50% crude protein, suitable for all major livestock, poultry, and aquaculture feed formulations." }
    },
    {
      "@type": "Question",
      "name": "Do you supply samples before bulk orders?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, we can arrange product samples for quality testing and verification before confirming bulk orders." }
    },
    {
      "@type": "Question",
      "name": "Which countries do you export soybean meal to?",
      "acceptedAnswer": { "@type": "Answer", "text": "We export to buyers across Southeast Asia, the Middle East, East Africa, and South Asia." }
    },
    {
      "@type": "Question",
      "name": "What is the minimum order quantity?",
      "acceptedAnswer": { "@type": "Answer", "text": "We accommodate both small trial orders and full container loads. Please contact us with your requirement for a custom quote." }
    },
    {
      "@type": "Question",
      "name": "What certifications and documents do you provide?",
      "acceptedAnswer": { "@type": "Answer", "text": "We provide export documentation, phytosanitary certificates, COA, and quality analysis reports with every shipment." }
    }
  ]
}
        `}</script>
      </Helmet>

      {/* Hidden Netlify form for build-time detection */}
      <form name="soybean-meal-inquiry" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <input type="text" name="company" />
        <textarea name="message" />
      </form>

      <main className="pt-32 px-4 md:px-8 max-w-7xl mx-auto">

        {/* Hero */}
        <h1 className="text-4xl md:text-5xl font-bold text-champagne-400 mb-2">
          Soybean Meal — Soya DOC Exporter in India
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-platinum-100 mb-4">
          Trusted Soybean Meal Exporter in India
        </h2>
        <p className="text-lg md:text-xl text-platinum-300 mb-10 max-w-3xl">
          Kartari Exim is a trusted Non-GMO soybean meal supplier and exporter based in Pune, Maharashtra, 
          supplying high-protein Soya DOC (De-Oiled Cake) to feed manufacturers, traders, and importers
          across Asia, the Middle East, and Africa.
        </p>

        {/* Product Detail Row */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-start bg-midnight-800 rounded-xl p-6 mb-12">
          <div>
            <img
              src="/soyaDOC.webp"
              alt="Soybean meal exporter in India loading bulk Soya DOC 46% protein"
              className="w-96 h-64 object-cover rounded-lg shadow"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">Soya DOC (De-Oiled Cake)</h2>
            <p className="text-platinum-400 mb-4">
              High-protein soybean meal processed from Non-GMO soybeans using hygienic methods to preserve
              nutritional integrity. Ideal for poultry, dairy, swine, and aquaculture feed
              formulations. Available for bulk export in 50kg PP bags or loose container loads.
            </p>
            <ul className="list-disc list-inside text-platinum-300 space-y-2">
              <li><strong>Protein Content:</strong> 46–50%</li>
              <li><strong>Moisture:</strong> Max 11%</li>
              <li><strong>Crude Fiber:</strong> Max 3%</li>
              <li><strong>Urease Activity:</strong> 0.2–0.3 mg N/g/min</li>
              <li><strong>Sand &amp; Silica:</strong> Max 1%</li>
              <li><strong>Packaging:</strong> 50kg PP bags or bulk as per requirement</li>
              <li><strong>Origin:</strong> India</li>
              <li><strong>Use:</strong> Poultry feed, cattle feed, swine feed, fish feed</li>
            </ul>
          </div>
        </div>

        {/* What is Soya DOC */}
        <div className="mb-12 max-w-4xl">
          <h2 className="text-2xl font-bold text-champagne-400 mb-4">What is Soya DOC (De Oiled Cake)?</h2>
          <p className="text-platinum-300 mb-4">
            Soya DOC — short for Soya De-Oiled Cake — is the same product as soybean meal, commonly used term in India, 
            Bangladesh, Sri Lanka, and the Middle East. After soybean oil is extracted, the remaining high-protein cake is called Soya DOC. 
            It contains 46–50% crude protein and is used identically to soybean meal in all livestock and poultry feed formulations.
          </p>
          <p className="text-platinum-300">
            With a crude protein content of 46–50%, our Soya DOC meets the nutritional requirements
            of all major livestock species. It is a primary ingredient in commercial poultry, cattle,
            dairy, swine, and aquaculture feed formulations globally.
            Whether you are searching for soybean meal, Soya DOC, de-oiled cake, 
            or SBM 46%, Kartari Exim supplies the same premium quality product 
            for all your animal feed requirements.  
          </p>
        </div>

        {/* Applications */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-champagne-400 mb-6">Applications</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Poultry Feed', desc: 'Broilers, layers & breeders' },
              { label: 'Cattle & Dairy Feed', desc: 'Milk production & growth' },
              { label: 'Swine Feed', desc: 'Pig farming operations' },
              { label: 'Fish & Aquaculture', desc: 'Shrimp & fish farming' },
              { label: 'Organic Fertilizer', desc: 'Soil enrichment base' },
              { label: 'Pet Food', desc: 'Premium pet nutrition' },
            ].map((item) => (
              <div key={item.label} className="bg-midnight-800 rounded-xl p-4">
                <p className="font-semibold text-white mb-1">{item.label}</p>
                <p className="text-sm text-platinum-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Kartari Exim */}
        <div className="mb-12 max-w-4xl">
          <h2 className="text-2xl font-bold text-champagne-400 mb-4">Why Source Soybean Meal from Kartari Exim?</h2>
          <ul className="space-y-3 text-platinum-300">
            <li className="flex gap-3"><span className="text-champagne-400 font-bold">✓</span> Consistent protein quality — 46–50% crude protein guaranteed</li>
            <li className="flex gap-3"><span className="text-champagne-400 font-bold">✓</span> Competitive pricing for bulk and container-load orders</li>
            <li className="flex gap-3"><span className="text-champagne-400 font-bold">✓</span> Flexible packaging — 50kg PP bags or loose bulk</li>
            <li className="flex gap-3"><span className="text-champagne-400 font-bold">✓</span> Full export documentation and phytosanitary certificates</li>
            <li className="flex gap-3"><span className="text-champagne-400 font-bold">✓</span> Responsive team for quotes, samples, and logistics support</li>
            <li className="flex gap-3"><span className="text-champagne-400 font-bold">✓</span> Trusted by feed manufacturers and traders across Asia, Middle East &amp; Africa</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="mb-12 max-w-4xl">
          <h2 className="text-2xl font-bold text-champagne-400 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-midnight-800 rounded-xl p-5">
                <p className="font-semibold text-white mb-2">{faq.q}</p>
                <p className="text-platinum-300 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Internal links to blog — helps SEO and buyer engagement */}
        <div className="mb-12 max-w-4xl">
          <h2 className="text-2xl font-bold text-champagne-400 mb-4">Further Reading</h2>
          <div className="space-y-3">
            <Link to="/blog/soybean-meal-vs-soya-doc/" className="flex items-center gap-2 text-champagne-400 hover:underline">
              → Soybean Meal vs Soya DOC — Are They the Same Thing?
            </Link>
            <Link to="/blog/soybean-meal-protein-content-guide/" className="flex items-center gap-2 text-champagne-400 hover:underline">
              → Soybean Meal Protein Content — 46% vs 48% vs 50% Explained
            </Link>
            <Link to="/blog/how-to-import-soybean-meal-from-india/" className="flex items-center gap-2 text-champagne-400 hover:underline">
              → How to Source Soybean Meal from India — A Buyer's Guide
            </Link>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="bg-midnight-800 p-8 rounded-xl shadow-md mb-20">
          <h2 className="text-2xl font-semibold text-champagne-400 mb-4">
            Bulk pricing available for container loads. Get a quote within 24 hours.
          </h2>
          <p className="text-platinum-300 mb-6">
            Ready to source soybean meal from India? Submit your details below and our team will
            respond within 24 hours with pricing and availability.
          </p>

          {submitted ? (
            <div className="text-center py-12">
              <p className="text-2xl font-bold text-champagne-400 mb-3">Thank you for your inquiry!</p>
              <p className="text-platinum-300">We've received your message and will get back to you within 24 hours.</p>
            </div>
          ) : (
            <form
              name="soybean-meal-inquiry"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="grid md:grid-cols-2 gap-6"
            >
              <input type="hidden" name="form-name" value="soybean-meal-inquiry" />
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
                type="tel"
                name="phone"
                placeholder="Phone / WhatsApp (include country code)"
                aria-label="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                className="p-4 rounded bg-midnight-700 border border-champagne-500 text-white md:col-span-2"
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                aria-label="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="p-4 rounded bg-midnight-700 border border-champagne-500 text-white md:col-span-2"
              />
              <textarea
                name="message"
                placeholder="Your requirement — quantity, destination country, packaging preference"
                aria-label="Message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="p-4 rounded bg-midnight-700 border border-champagne-500 text-white md:col-span-2"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-champagne-500 to-luxury-500 text-midnight-900 font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-all md:col-span-2"
              >
                Send Inquiry
              </button>
            </form>
          )}
        </div>

      </main>
    </div>
  );
};

export default AnimalFeedPage;