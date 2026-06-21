import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const DehydratedOnionFlakesPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', message: '',
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
    } catch {
      alert('Something went wrong. Please try again or email us at info@kartariexim.com');
    }
  };

  const faqs = [
    {
      q: 'What are dehydrated onion flakes used for?',
      a: 'Dehydrated onion flakes are used in soups, sauces, seasonings, instant noodles, snack foods, ready-to-eat meals, and spice blends. They rehydrate quickly and deliver the same flavor as fresh onions with a much longer shelf life.',
    },
    {
      q: 'What is the shelf life of your dehydrated onion flakes?',
      a: 'Our dehydrated onion flakes have a shelf life of 12–24 months when stored in a cool, dry place away from direct sunlight, in sealed packaging.',
    },
    {
      q: 'Are your onion flakes free from preservatives?',
      a: 'Yes — our dehydrated onion flakes are 100% natural, free from artificial preservatives, colours, and additives. Only fresh red onions are used.',
    },
    {
      q: 'What packaging options are available?',
      a: 'We supply in 10kg, 15kg, and 25kg laminated/poly bags for bulk buyers. Custom packaging is available as per buyer requirements.',
    },
    {
      q: 'Which countries do you export dehydrated onion flakes to?',
      a: 'We export to buyers across the Middle East, Southeast Asia, East Africa, and South Asia. We handle all export documentation and shipping from Pune, India.',
    },
    {
      q: 'Do you provide samples before bulk orders?',
      a: 'Yes, we can arrange samples for quality testing and verification before you confirm a bulk order.',
    },
  ];

  return (
    <div className="bg-midnight-900 text-platinum-100 min-h-screen">

      <Helmet>
        {/* Primary SEO */}
        <title>Dehydrated Red Onion Flakes Exporter India | Kartari Exim, Pune</title>
        <meta name="description" content="Buy premium Dehydrated Red Onion Flakes from Kartari Exim, Pune, India. 100% natural, no preservatives. Max 7% moisture. Bulk export in 10–25kg bags for food processing, seasonings & soups. Get a quote within 24 hours." />
        <meta name="keywords" content="dehydrated onion flakes exporter India, dried onion flakes supplier Pune, red onion flakes bulk export, dehydrated onion manufacturer India, onion flakes food processing" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="product" />
        <meta property="og:title" content="Dehydrated Red Onion Flakes Exporter India | Kartari Exim" />
        <meta property="og:description" content="100% natural dehydrated red onion flakes. No preservatives. Bulk export from Pune, India for food processing, soups, seasonings. Get a quote within 24 hours." />
        <meta property="og:url" content="https://kartariexim.com/products/dehydrated-onion-flakes" />
        <meta property="og:image" content="https://kartariexim.com/Red onion flakes.webp" />
        <meta property="og:image:alt" content="Dehydrated Red Onion Flakes bulk export India Kartari Exim" />
        <meta property="og:site_name" content="Kartari Exim" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dehydrated Red Onion Flakes Exporter India | Kartari Exim" />
        <meta name="twitter:description" content="100% natural dehydrated red onion flakes. No preservatives. Bulk export from Pune, India." />
        <meta name="twitter:image" content="https://kartariexim.com/Red onion flakes.webp" />

        {/* Product Schema */}
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Dehydrated Red Onion Flakes",
  "alternateName": ["Dried Onion Flakes", "Dehydrated Onion", "Red Onion Flakes"],
  "description": "100% natural dehydrated red onion flakes with no artificial preservatives. Exported from Pune, Maharashtra, India for food processing, soups, sauces, and seasoning applications.",
  "image": "https://kartariexim.com/Red onion flakes.webp",
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
    "url": "https://kartariexim.com/products/dehydrated-onion-flakes",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "seller": { "@type": "Organization", "name": "Kartari Exim" }
  },
  "additionalProperty": [
    { "@type": "PropertyValue", "name": "Color", "value": "Deep reddish-purple to pinkish" },
    { "@type": "PropertyValue", "name": "Moisture", "value": "Max 7%" },
    { "@type": "PropertyValue", "name": "Purity", "value": "100% pure onion, no preservatives" },
    { "@type": "PropertyValue", "name": "Form", "value": "Flakes" },
    { "@type": "PropertyValue", "name": "Shelf Life", "value": "12–24 months" },
    { "@type": "PropertyValue", "name": "Packaging", "value": "10kg, 15kg, 25kg laminated/poly bags" },
    { "@type": "PropertyValue", "name": "Origin", "value": "Pune, Maharashtra, India" }
  ]
}
        `}</script>

        {/* FAQ Schema */}
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are dehydrated onion flakes used for?",
      "acceptedAnswer": { "@type": "Answer", "text": "Dehydrated onion flakes are used in soups, sauces, seasonings, instant noodles, snack foods, ready-to-eat meals, and spice blends. They rehydrate quickly and deliver the same flavor as fresh onions with a much longer shelf life." }
    },
    {
      "@type": "Question",
      "name": "What is the shelf life of your dehydrated onion flakes?",
      "acceptedAnswer": { "@type": "Answer", "text": "Our dehydrated onion flakes have a shelf life of 12–24 months when stored in a cool, dry place away from direct sunlight, in sealed packaging." }
    },
    {
      "@type": "Question",
      "name": "Are your onion flakes free from preservatives?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes — our dehydrated onion flakes are 100% natural, free from artificial preservatives, colours, and additives. Only fresh red onions are used." }
    },
    {
      "@type": "Question",
      "name": "What packaging options are available?",
      "acceptedAnswer": { "@type": "Answer", "text": "We supply in 10kg, 15kg, and 25kg laminated/poly bags for bulk buyers. Custom packaging is available as per buyer requirements." }
    },
    {
      "@type": "Question",
      "name": "Which countries do you export dehydrated onion flakes to?",
      "acceptedAnswer": { "@type": "Answer", "text": "We export to buyers across the Middle East, Southeast Asia, East Africa, and South Asia. We handle all export documentation and shipping from Pune, India." }
    }
  ]
}
        `}</script>
      </Helmet>

      {/* Hidden Netlify form for build-time detection */}
      <form name="onion-flakes-inquiry" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <input type="text" name="company" />
        <textarea name="message" />
      </form>

      <main className="pt-32 px-4 md:px-8 max-w-7xl mx-auto">

        {/* Breadcrumb */}
        <p className="text-sm text-platinum-400 mb-6">
          <Link to="/products/spices/" className="hover:text-champagne-400 transition-colors">← Back to Spices Collection</Link>
        </p>

        {/* Hero */}
        <h1 className="text-4xl md:text-5xl font-bold text-champagne-400 mb-4">
          Dehydrated Red Onion Flakes — Exporter from India
        </h1>
        <p className="text-lg md:text-xl text-platinum-300 mb-10 max-w-3xl">
          Kartari Exim is a trusted dehydrated onion flakes supplier and exporter based in Pune, Maharashtra.
          We supply 100% natural, preservative-free red onion flakes to food processors, seasoning manufacturers,
          and importers across Asia, the Middle East, and Africa.
        </p>

        {/* Product Detail Row */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-start bg-midnight-800 rounded-xl p-6 mb-12">
          <div>
            <img
              src="/Red onion flakes.webp"
              alt="Dehydrated red onion flakes bulk export India Kartari Exim Pune"
              className="w-96 h-64 object-cover rounded-lg shadow"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">Dehydrated Red Onion Flakes</h2>
            <p className="text-platinum-400 mb-4">
              Made from fresh Nasik red onions — India's finest — dehydrated using hygienic processing methods
              to retain natural colour, aroma, and flavour. 100% natural with no preservatives, colourants,
              or additives. Ideal for food processing, instant food manufacturing, and seasoning applications.
            </p>
            <ul className="list-disc list-inside text-platinum-300 space-y-2">
              <li><strong>Color:</strong> Deep reddish-purple to pinkish</li>
              <li><strong>Purity:</strong> 100% pure onion — no preservatives or additives</li>
              <li><strong>Moisture:</strong> Max 7%</li>
              <li><strong>Form:</strong> Flakes</li>
              <li><strong>Shelf Life:</strong> 12–24 months</li>
              <li><strong>Packaging:</strong> 10kg, 15kg, 25kg laminated / poly bags or custom</li>
              <li><strong>Origin:</strong> Nasik, Maharashtra, India</li>
              <li><strong>Use:</strong> Soups, sauces, seasonings, instant noodles, snack foods</li>
            </ul>
          </div>
        </div>

        {/* What are Dehydrated Onion Flakes */}
        <div className="mb-12 max-w-4xl">
          <h2 className="text-2xl font-bold text-champagne-400 mb-4">What are Dehydrated Onion Flakes?</h2>
          <p className="text-platinum-300 mb-4">
            Dehydrated onion flakes are fresh onions that have been sliced and dried at controlled temperatures
            to remove moisture while preserving their natural flavour, colour, and nutritional value. The result
            is a lightweight, shelf-stable ingredient that rehydrates quickly and delivers the same taste profile
            as freshly chopped onions — without the peeling, chopping, or spoilage risk.
          </p>
          <p className="text-platinum-300">
            India is one of the world's largest producers of dehydrated onion products, with Nasik in Maharashtra
            being the primary growing region. Nasik red onions are globally recognised for their strong pungency,
            deep colour, and high dry matter content — making them ideal for dehydration. Kartari Exim sources
            directly from Nasik farms, ensuring consistent quality and competitive pricing for bulk buyers.
          </p>
        </div>

        {/* Applications */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-champagne-400 mb-6">Applications</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Soups & Broths', desc: 'Instant and packaged soups' },
              { label: 'Seasonings & Spice Blends', desc: 'Dry rubs, masalas, mixes' },
              { label: 'Instant Noodles', desc: 'Flavour sachets and toppings' },
              { label: 'Snack Foods', desc: 'Crisps, crackers, coatings' },
              { label: 'Ready-to-Eat Meals', desc: 'Frozen and retort meals' },
              { label: 'Sauces & Condiments', desc: 'Gravies, ketchups, pastes' },
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
          <h2 className="text-2xl font-bold text-champagne-400 mb-4">Why Source Dehydrated Onion Flakes from Kartari Exim?</h2>
          <ul className="space-y-3 text-platinum-300">
            <li className="flex gap-3"><span className="text-champagne-400 font-bold">✓</span> Sourced directly from Nasik — India's premier onion growing region</li>
            <li className="flex gap-3"><span className="text-champagne-400 font-bold">✓</span> 100% natural — no preservatives, no artificial colour, no additives</li>
            <li className="flex gap-3"><span className="text-champagne-400 font-bold">✓</span> Consistent colour and moisture across all bulk shipments</li>
            <li className="flex gap-3"><span className="text-champagne-400 font-bold">✓</span> Flexible packaging — 10kg, 15kg, 25kg or custom as per buyer requirement</li>
            <li className="flex gap-3"><span className="text-champagne-400 font-bold">✓</span> Full export documentation — COO, phytosanitary certificate, COA</li>
            <li className="flex gap-3"><span className="text-champagne-400 font-bold">✓</span> Competitive pricing for container-load and bulk orders</li>
            <li className="flex gap-3"><span className="text-champagne-400 font-bold">✓</span> Quote within 24 hours — team available in India and UAE</li>
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

        {/* Internal links */}
        <div className="mb-12 max-w-4xl">
          <h2 className="text-2xl font-bold text-champagne-400 mb-4">Related Products</h2>
          <div className="space-y-3">
            <Link to="/products/spices/" className="flex items-center gap-2 text-champagne-400 hover:underline">
              → View all Spices & Seasonings
            </Link>
            <Link to="/products/vegetables/" className="flex items-center gap-2 text-champagne-400 hover:underline">
              → Fresh Nasik Red Onion (whole)
            </Link>
            <Link to="/products/soybean-meal/" className="flex items-center gap-2 text-champagne-400 hover:underline">
              → Soybean Meal (Soya DOC)
            </Link>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="bg-midnight-800 p-8 rounded-xl shadow-md mb-20">
          <h2 className="text-2xl font-semibold text-champagne-400 mb-4">
            Request a Quote for Dehydrated Onion Flakes
          </h2>
          <p className="text-platinum-300 mb-6">
            Ready to source dehydrated onion flakes from India? Submit your details below and our team will
            respond within 24 hours with pricing and availability.
          </p>

          {submitted ? (
            <div className="text-center py-12">
              <p className="text-2xl font-bold text-champagne-400 mb-3">Thank you for your inquiry!</p>
              <p className="text-platinum-300">We've received your message and will get back to you within 24 hours.</p>
            </div>
          ) : (
            <form
              name="onion-flakes-inquiry"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="grid md:grid-cols-2 gap-6"
            >
              <input type="hidden" name="form-name" value="onion-flakes-inquiry" />
              <p hidden><input name="bot-field" /></p>

              <input
                type="text" name="name" placeholder="Your Name" aria-label="Your Name" required
                value={formData.name} onChange={handleChange}
                className="p-4 rounded bg-midnight-700 border border-champagne-500 text-white"
              />
              <input
                type="email" name="email" placeholder="Email Address" aria-label="Email Address" required
                value={formData.email} onChange={handleChange}
                className="p-4 rounded bg-midnight-700 border border-champagne-500 text-white"
              />
              <input
                type="tel" name="phone" placeholder="Phone / WhatsApp (include country code)" aria-label="Phone Number" required
                value={formData.phone} onChange={handleChange}
                className="p-4 rounded bg-midnight-700 border border-champagne-500 text-white md:col-span-2"
              />
              <input
                type="text" name="company" placeholder="Company Name" aria-label="Company Name"
                value={formData.company} onChange={handleChange}
                className="p-4 rounded bg-midnight-700 border border-champagne-500 text-white md:col-span-2"
              />
              <textarea
                name="message" rows={5} required
                placeholder="Your requirement — quantity, destination country, packaging preference"
                aria-label="Message"
                value={formData.message} onChange={handleChange}
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

export default DehydratedOnionFlakesPage;
