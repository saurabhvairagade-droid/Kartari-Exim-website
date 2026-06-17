import React, { useEffect, useState } from 'react';

const BasmatiRicePage = () => {
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

      <main className="pt-32 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-champagne-400 mb-4">
          Basmati Rice
        </h1>
        <p className="text-lg md:text-xl text-platinum-300 mb-10">
          Our premium 1121 Basmati Rice varieties are renowned for their extra-long grain, aromatic fragrance, and excellent cooking quality. Sourced from trusted mills and processed for purity.
        </p>

        {/* 1121 Sella White / Creamy */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-start bg-midnight-800 rounded-xl p-6 mb-20">
          <div>
            <img
              src="https://images.unsplash.com/photo-1723475158229-894679ca024e?auto=format,compress&q=60&w=800"
              alt="1121 Sella White / Creamy"
              width="384"
              height="256"
              fetchPriority="high"
              decoding="async"
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
              src="https://images.unsplash.com/photo-1627482265910-5c0ff6bee088?auto=format,compress&q=60&w=800"
              alt="1121 Golden Sella Basmati"
              width="384"
              height="256"
              loading="lazy"
              decoding="async"
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
              src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format,compress&q=60&w=800"
              alt="1121 Steam Basmati"
              width="384"
              height="256"
              loading="lazy"
              decoding="async"
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
            name="basmati-rice-inquiry"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="grid md:grid-cols-2 gap-6"
          >
            <input type="hidden" name="form-name" value="basmati-rice-inquiry" />
            <p hidden><input name="bot-field" /></p>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="p-4 rounded bg-midnight-700 border border-champagne-500 text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="p-4 rounded bg-midnight-700 border border-champagne-500 text-white"
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              required
              value={formData.company}
              onChange={handleChange}
              className="p-4 rounded bg-midnight-700 border border-champagne-500 text-white md:col-span-2"
            />
            <textarea
              name="message"
              placeholder="Your Message / Product Requirement"
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

export default BasmatiRicePage;
