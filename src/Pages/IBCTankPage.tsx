import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const IBCTankPage = () => {
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
      alert('Something went wrong. Please try again or contact us on WhatsApp at +91 749 904 3190');
    }
  };

  const faqs = [
    {
      q: 'What is an IBC tank?',
      a: 'An IBC (Intermediate Bulk Container) tank is an industrial-grade container used for storing and transporting bulk liquids, semi-solids, chemicals, food-grade products, and hazardous materials. The standard size is 1000 litres. It consists of an HDPE inner bottle fitted inside a galvanised steel cage, mounted on a pallet base — making it stackable, forklift-compatible, and reusable.',
    },
    {
      q: 'What is the difference between a new and used/reconditioned IBC tank?',
      a: 'A new IBC tank is unused, comes directly from the manufacturer, and is suitable for food-grade, pharmaceutical, and sensitive chemical applications. A used or reconditioned IBC tank has been cleaned, inspected, and refurbished for reuse — ideal for industrial chemicals, water storage, agricultural use, and general storage where cost saving is the priority. We supply both grades.',
    },
    {
      q: 'What is the price of a 1000 litre IBC tank in Pune?',
      a: 'New 1000 litre IBC tanks are priced at ₹8,500 per unit depending on brand and pallet type. Used/reconditioned IBC tanks are priced at ₹5,500 per unit depending on condition and previous contents. Contact us for current pricing and bulk order discounts.',
    },
    {
      q: 'Do you supply IBC tanks across Maharashtra?',
      a: 'Yes — we supply IBC tanks across Maharashtra including Pune, Mumbai, Nashik, Aurangabad, Nagpur, Kolhapur, Solapur, and surrounding areas. Delivery can be arranged directly to your facility.',
    },
    {
      q: 'What materials were previously stored in your used IBC tanks?',
      a: 'Our used IBC tanks are sourced from reputable industrial suppliers. We clearly disclose the previous contents — which typically include food-grade liquids, water, non-hazardous chemicals, and industrial oils. We do not supply used tanks that previously contained highly hazardous or reactive chemicals without full disclosure.',
    },
    {
      q: 'Are your IBC tanks stackable?',
      a: 'Yes — all our 1000 litre HDPE IBC tanks are fully stackable. The steel cage is designed to support stacking of up to 2–3 units when properly loaded, saving significant floor space in your warehouse or storage facility.',
    },
    {
      q: 'Can IBC tanks be used for food-grade or drinking water storage?',
      a: 'Yes — new IBC tanks with food-grade HDPE inner bottles are suitable for food and beverage applications and potable water storage. For this application, we strongly recommend using new tanks only. Used tanks should not be used for food or drinking water unless they have been cleaned and certified for that purpose.',
    },
    {
      q: 'What is the minimum order quantity?',
      a: 'We accept orders from single units upwards. For bulk orders of 10 or more units, we offer preferential pricing. Contact us with your requirement and we will provide a custom quote.',
    },
    {
      q: 'Do you offer delivery or do buyers need to arrange their own transport?',
      a: 'We can arrange delivery within Maharashtra. Delivery charges depend on quantity and destination. Please contact us for a delivered price to your location.',
    },
    {
      q: 'What brands of IBC tanks do you supply?',
      a: 'We supply IBC tanks from leading brands including Schutz, Mauser, GNX, and other reputable manufacturers. Both original branded and generic industrial-grade IBC tanks are available depending on your budget and application.',
    },
  ];

  const specs = [
    { label: 'Capacity', value: '1000 Litres' },
    { label: 'Dimensions (L × W × H)', value: '1200 mm × 1000 mm × 1160 mm' },
    { label: 'Inner Container Material', value: 'HDPE (High Density Polyethylene)' },
    { label: 'Outer Frame', value: 'Galvanised Steel Cage' },
    { label: 'Pallet Type', value: 'Composite Plastic / Wooden / GI' },
    { label: 'Discharge Valve', value: '2 Inch Butterfly Valve (bottom discharge)' },
    { label: 'Filling Opening', value: '6 Inch Top Opening' },
    { label: 'Stackable', value: 'Yes' },
    { label: 'Forklift Compatible', value: 'Yes' },
    { label: 'UN Rating', value: 'Available on new tanks' },
    { label: 'Condition Available', value: 'New & Used / Reconditioned' },
    { label: 'Origin', value: 'India (Pune, Maharashtra)' },
  ];

  return (
    <div className="bg-midnight-900 text-platinum-100 min-h-screen">

      <Helmet>
        {/* Primary SEO */}
        <title>IBC Tank 1000 Litre Supplier in Pune, Maharashtra | New & Used | Kartari Exim</title>
        <meta name="description" content="Buy new and used 1000 litre IBC tanks in Pune, Maharashtra. New: ₹8,500 | Used: ₹5,500. HDPE inner bottle, steel cage, stackable. Fast delivery across Maharashtra. Call or WhatsApp +91 749 904 3190." />
        <meta name="keywords" content="IBC tank Pune, IBC tank 1000 litre Maharashtra, used IBC tank Pune, reconditioned IBC tank supplier, HDPE IBC tank price India, intermediate bulk container Pune" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://kartariexim.com/ibc-tanks" />

        {/* Open Graph */}
        <meta property="og:type" content="product" />
        <meta property="og:title" content="IBC Tank 1000 Litre Supplier in Pune, Maharashtra | Kartari Exim" />
        <meta property="og:description" content="New and used 1000 litre IBC tanks. New: ₹8,500 | Used: ₹5,500. Fast delivery across Maharashtra. WhatsApp +91 749 904 3190." />
        <meta property="og:url" content="https://kartariexim.com/ibc-tanks" />
        <meta property="og:site_name" content="Kartari Exim" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IBC Tank 1000 Litre Supplier Pune | Kartari Exim" />
        <meta name="twitter:description" content="New and used 1000 litre IBC tanks in Pune, Maharashtra. Fast delivery. Competitive pricing." />

        {/* Product Schema */}
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "IBC Tank 1000 Litre",
  "alternateName": ["Intermediate Bulk Container", "IBC Tote", "Pallet Tank", "HDPE IBC Tank"],
  "description": "1000 litre HDPE IBC tank with galvanised steel cage, composite pallet, 2 inch butterfly discharge valve. Available new and used/reconditioned. Supplied across Maharashtra from Pune.",
  "brand": { "@type": "Brand", "name": "Kartari Exim" },
  "offers": [
    {
      "@type": "Offer",
      "name": "New IBC Tank 1000 Litre",
      "url": "https://kartariexim.com/ibc-tanks",
      "priceCurrency": "INR",
      "price": "8500",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "seller": { "@type": "Organization", "name": "Kartari Exim" },
      "areaServed": { "@type": "State", "name": "Maharashtra" }
    },
    {
      "@type": "Offer",
      "name": "Used / Reconditioned IBC Tank 1000 Litre",
      "url": "https://kartariexim.com/ibc-tanks",
      "priceCurrency": "INR",
      "price": "5500",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/UsedCondition",
      "seller": { "@type": "Organization", "name": "Kartari Exim" },
      "areaServed": { "@type": "State", "name": "Maharashtra" }
    }
  ],
  "additionalProperty": [
    { "@type": "PropertyValue", "name": "Capacity", "value": "1000 Litres" },
    { "@type": "PropertyValue", "name": "Inner Material", "value": "HDPE" },
    { "@type": "PropertyValue", "name": "Outer Frame", "value": "Galvanised Steel Cage" },
    { "@type": "PropertyValue", "name": "Dimensions", "value": "1200 x 1000 x 1160 mm" },
    { "@type": "PropertyValue", "name": "Stackable", "value": "Yes" },
    { "@type": "PropertyValue", "name": "Location", "value": "Pune, Maharashtra, India" }
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
      "name": "What is an IBC tank?",
      "acceptedAnswer": { "@type": "Answer", "text": "An IBC (Intermediate Bulk Container) tank is an industrial-grade container used for storing and transporting bulk liquids, semi-solids, chemicals, food-grade products, and hazardous materials. The standard size is 1000 litres. It consists of an HDPE inner bottle inside a galvanised steel cage, mounted on a pallet base — making it stackable, forklift-compatible, and reusable." }
    },
    {
      "@type": "Question",
      "name": "What is the price of a 1000 litre IBC tank in Pune?",
      "acceptedAnswer": { "@type": "Answer", "text": "New 1000 litre IBC tanks are priced at ₹8,500 per unit. Used/reconditioned IBC tanks are priced at ₹5,500 per unit. Contact Kartari Exim at +91 749 904 3190 for current pricing and bulk order discounts." }
    },
    {
      "@type": "Question",
      "name": "Do you supply IBC tanks across Maharashtra?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes — we supply IBC tanks across Maharashtra including Pune, Mumbai, Nashik, Aurangabad, Nagpur, Kolhapur, Solapur, and surrounding areas." }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a new and used IBC tank?",
      "acceptedAnswer": { "@type": "Answer", "text": "New IBC tanks are unused and suitable for food-grade and pharmaceutical applications. Used or reconditioned IBC tanks have been cleaned and refurbished — ideal for industrial chemicals, water storage, and general storage where cost saving is the priority." }
    },
    {
      "@type": "Question",
      "name": "Are IBC tanks stackable?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes — all our 1000 litre HDPE IBC tanks are fully stackable and forklift-compatible." }
    }
  ]
}
        `}</script>

        {/* Local Business Schema */}
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Kartari Exim — IBC Tank Supplier Pune",
  "description": "Supplier of new and used 1000 litre IBC tanks in Pune, Maharashtra. Fast delivery across Maharashtra.",
  "url": "https://kartariexim.com/ibc-tanks",
  "telephone": "+91-749-904-3190",
  "email": "info@kartariexim.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN"
  },
  "areaServed": { "@type": "State", "name": "Maharashtra" },
  "priceRange": "₹₹"
}
        `}</script>
      </Helmet>

      {/* Hidden Netlify form */}
      <form name="ibc-tank-inquiry" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <input type="text" name="company" />
        <textarea name="message" />
      </form>

      <main className="pt-32 px-4 md:px-8 max-w-7xl mx-auto">

        {/* Hero */}
        <h1 className="text-4xl md:text-5xl font-bold text-champagne-400 mb-4">
          IBC Tank 1000 Litre — New & Used Supplier in Pune, Maharashtra
        </h1>
        <p className="text-lg md:text-xl text-platinum-300 mb-6 max-w-3xl">
          Kartari Exim supplies new and used 1000 litre IBC (Intermediate Bulk Container) tanks
          to chemical manufacturers, food processors, pharma companies, and industrial buyers
          across Maharashtra. Fast delivery, competitive pricing, and reliable stock availability.
        </p>

        {/* Price Badges */}
        <div className="flex flex-wrap gap-4 mb-12">
          <div className="bg-midnight-800 border border-champagne-500/40 rounded-xl px-6 py-4 text-center">
            <p className="text-sm text-platinum-400 mb-1">New IBC Tank</p>
            <p className="text-2xl font-bold text-champagne-400">₹8,500</p>
            <p className="text-xs text-platinum-400 mt-1">per unit</p>
          </div>
          <div className="bg-midnight-800 border border-green-700/40 rounded-xl px-6 py-4 text-center">
            <p className="text-sm text-platinum-400 mb-1">Used / Reconditioned</p>
            <p className="text-2xl font-bold text-green-400">₹5,500</p>
            <p className="text-xs text-platinum-400 mt-1">per unit</p>
          </div>
          <div className="bg-midnight-800 border border-champagne-800/30 rounded-xl px-6 py-4 flex items-center gap-3">
            <div>
              <p className="text-sm text-platinum-400 mb-1">Call / WhatsApp</p>
              <a href="tel:+917499043190" className="text-lg font-bold text-white hover:text-champagne-400 transition-colors">+91 749 904 3190</a>
            </div>
          </div>
        </div>

        {/* Two product cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">

          {/* New IBC */}
          <div className="bg-midnight-800 rounded-xl p-6 border border-champagne-800/30">
            <h2 className="text-xl font-bold text-champagne-400 mb-2">New IBC Tank — 1000 Litre</h2>
            <p className="text-platinum-300 text-sm mb-4">
              Brand new, unused 1000 litre HDPE IBC tanks sourced from leading manufacturers including Schutz, Mauser, and GNX. Ideal for food-grade, pharma, and sensitive chemical applications where contamination risk must be zero.
            </p>
            <ul className="space-y-2 text-sm text-platinum-300">
              <li className="flex gap-2"><span className="text-champagne-400">✓</span> Unused — no prior contents</li>
              <li className="flex gap-2"><span className="text-champagne-400">✓</span> Food-grade and pharmaceutical suitable</li>
              <li className="flex gap-2"><span className="text-champagne-400">✓</span> UN rated options available</li>
              <li className="flex gap-2"><span className="text-champagne-400">✓</span> Composite plastic or wooden pallet</li>
              <li className="flex gap-2"><span className="text-champagne-400">✓</span> Brands: Schutz, Mauser, GNX, others</li>
            </ul>
            <p className="mt-4 text-champagne-400 font-bold text-lg">₹8,500 / unit</p>
          </div>

          {/* Used IBC */}
          <div className="bg-midnight-800 rounded-xl p-6 border border-green-800/30">
            <h2 className="text-xl font-bold text-green-400 mb-2">Used / Reconditioned IBC Tank — 1000 Litre</h2>
            <p className="text-platinum-300 text-sm mb-4">
              Inspected, cleaned, and reconditioned IBC tanks in good working condition. Previous contents clearly disclosed. Cost-effective solution for industrial chemicals, water storage, agricultural spraying, and general bulk liquid storage.
            </p>
            <ul className="space-y-2 text-sm text-platinum-300">
              <li className="flex gap-2"><span className="text-green-400">✓</span> Inspected and cleaned before supply</li>
              <li className="flex gap-2"><span className="text-green-400">✓</span> Previous contents disclosed upfront</li>
              <li className="flex gap-2"><span className="text-green-400">✓</span> Good structural condition — cage and bottle</li>
              <li className="flex gap-2"><span className="text-green-400">✓</span> Ideal for industrial, agricultural, water use</li>
              <li className="flex gap-2"><span className="text-green-400">✓</span> Significant cost saving vs new</li>
            </ul>
            <p className="mt-4 text-green-400 font-bold text-lg">₹5,500 / unit</p>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-champagne-400 mb-6">Technical Specifications — 1000 Litre IBC Tank</h2>
          <div className="bg-midnight-800 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {specs.map((spec, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-midnight-800' : 'bg-midnight-700/50'}>
                    <td className="px-6 py-3 font-semibold text-champagne-400 w-1/3">{spec.label}</td>
                    <td className="px-6 py-3 text-platinum-300">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Applications */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-champagne-400 mb-6">Applications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Chemical Storage', desc: 'Acids, solvents, industrial chemicals' },
              { label: 'Food & Beverage', desc: 'Edible oils, syrups, food-grade liquids' },
              { label: 'Water Storage', desc: 'Industrial and agricultural water' },
              { label: 'Pharma', desc: 'API ingredients, pharmaceutical liquids' },
              { label: 'Agriculture', desc: 'Pesticides, fertilisers, crop chemicals' },
              { label: 'Paint & Coatings', desc: 'Resins, thinners, coating materials' },
              { label: 'Lubricants & Oils', desc: 'Industrial oils, motor oils, grease' },
              { label: 'Waste Management', desc: 'Industrial effluent and waste liquids' },
            ].map((item) => (
              <div key={item.label} className="bg-midnight-800 rounded-xl p-4">
                <p className="font-semibold text-white mb-1 text-sm">{item.label}</p>
                <p className="text-xs text-platinum-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Kartari Exim */}
        <div className="mb-14 max-w-4xl">
          <h2 className="text-2xl font-bold text-champagne-400 mb-6">Why Buy IBC Tanks from Kartari Exim?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              ['Competitive Pricing', 'We offer some of the most competitive prices for both new and used IBC tanks in Maharashtra. Bulk order discounts available for 10+ units.'],
              ['Fast Delivery Across Maharashtra', 'We deliver to Pune, Mumbai, Nashik, Aurangabad, Nagpur, Kolhapur, Solapur, and surrounding areas. Delivery arranged directly to your facility.'],
              ['Good Condition Used Tanks', 'Every used IBC tank is inspected before dispatch. We disclose previous contents upfront so you know exactly what you are buying.'],
              ['Both New & Used Available', 'Whether you need brand new tanks for sensitive applications or reconditioned tanks to reduce costs, we can supply both from a single source.'],
              ['Quick Response', 'Call or WhatsApp us at +91 749 904 3190 and get a quote within hours — not days.'],
              ['Trusted by Industry', 'We supply to chemical manufacturers, food processors, traders, and industrial buyers across Maharashtra.'],
            ].map(([title, desc]) => (
              <div key={title} className="flex gap-4 bg-midnight-800 rounded-xl p-5">
                <span className="text-champagne-400 font-bold text-lg flex-shrink-0">✓</span>
                <div>
                  <p className="font-semibold text-white mb-1">{title}</p>
                  <p className="text-platinum-300 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-14 max-w-4xl">
          <h2 className="text-2xl font-bold text-champagne-400 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-midnight-800 rounded-xl p-5">
                <p className="font-semibold text-white mb-2">{faq.q}</p>
                <p className="text-platinum-300 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Area */}
        <div className="mb-14 max-w-4xl">
          <h2 className="text-2xl font-bold text-champagne-400 mb-4">Areas We Supply IBC Tanks in Maharashtra</h2>
          <p className="text-platinum-300 mb-4">
            We supply 1000 litre IBC tanks across Maharashtra including the following cities and districts:
          </p>
          <div className="flex flex-wrap gap-2">
            {['Pune', 'Mumbai', 'Pimpri-Chinchwad', 'Nashik', 'Aurangabad', 'Nagpur', 'Kolhapur', 'Solapur', 'Navi Mumbai', 'Thane', 'Raigad', 'Satara', 'Sangli', 'Jalgaon', 'Latur', 'Ahmednagar'].map((city) => (
              <span key={city} className="bg-midnight-800 text-platinum-300 text-sm px-4 py-2 rounded-full border border-champagne-800/30">
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* CTA + Form */}
        <div className="bg-midnight-800 p-8 rounded-xl shadow-md mb-20 max-w-4xl">
          <h2 className="text-2xl font-semibold text-champagne-400 mb-2">
            Get a Quote for IBC Tanks in Maharashtra
          </h2>
          <p className="text-platinum-300 mb-2">
            Tell us your requirement — new or used, quantity, and your location — and we will respond within a few hours with pricing and availability.
          </p>
          <div className="flex gap-4 mb-6">
            <a href="tel:+917499043190" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-champagne-800/50 text-platinum-300 hover:text-champagne-400 hover:border-champagne-500 transition-all duration-300 text-sm">
              📞 Call
            </a>
            <a href="https://wa.me/917499043190" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-green-700/50 text-green-400 hover:border-green-500 hover:bg-green-900/20 transition-all duration-300 text-sm">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </div>

          {submitted ? (
            <div className="text-center py-10">
              <p className="text-2xl font-bold text-champagne-400 mb-3">Thank you!</p>
              <p className="text-platinum-300">We have received your inquiry and will get back to you shortly.</p>
            </div>
          ) : (
            <form
              name="ibc-tank-inquiry"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="grid md:grid-cols-2 gap-6"
            >
              <input type="hidden" name="form-name" value="ibc-tank-inquiry" />
              <p hidden><input name="bot-field" /></p>

              <input type="text" name="name" placeholder="Your Name" required
                value={formData.name} onChange={handleChange}
                className="p-4 rounded bg-midnight-700 border border-champagne-500 text-white" />
              <input type="email" name="email" placeholder="Email Address" required
                value={formData.email} onChange={handleChange}
                className="p-4 rounded bg-midnight-700 border border-champagne-500 text-white" />
              <input type="tel" name="phone" placeholder="Phone / WhatsApp (include country code)" required
                value={formData.phone} onChange={handleChange}
                className="p-4 rounded bg-midnight-700 border border-champagne-500 text-white md:col-span-2" />
              <input type="text" name="company" placeholder="Company Name"
                value={formData.company} onChange={handleChange}
                className="p-4 rounded bg-midnight-700 border border-champagne-500 text-white md:col-span-2" />
              <textarea name="message" rows={4} required
                placeholder="Your requirement — new or used, quantity needed, delivery location in Maharashtra"
                value={formData.message} onChange={handleChange}
                className="p-4 rounded bg-midnight-700 border border-champagne-500 text-white md:col-span-2" />
              <button type="submit"
                className="bg-gradient-to-r from-champagne-500 to-luxury-500 text-midnight-900 font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-all md:col-span-2">
                Send Inquiry
              </button>
            </form>
          )}
        </div>

      </main>
    </div>
  );
};

export default IBCTankPage;
