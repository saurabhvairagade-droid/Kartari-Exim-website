import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FruitsPage = () => {
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
        <title>Fresh Indian Fruits Exporter | Pomegranate & Banana | Kartari Exim</title>
        <meta name="description" content="Exporting premium fresh fruits from India. Buy Bhagwa Pomegranates and export-grade G9 Cavendish Bananas in bulk. Global shipping." />
        <meta name="keywords" content="fresh fruits exporter india, pomegranate export, g9 cavendish banana supplier, bulk fruits india" />
        <link rel="canonical" href="https://kartariexim.com/products/fruits" />
        <meta property="og:title" content="Fresh Indian Fruits Exporter | Kartari Exim" />
        <meta property="og:description" content="Bulk export of premium Pomegranates and G9 Cavendish Bananas from India." />
      </Helmet>
      <Header />

      <main className="pt-32 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-champagne-400 mb-4">
          Fresh Fruits
        </h1>
        <p className="text-lg md:text-xl text-platinum-300 mb-10">
          Explore our premium fresh fruit exports featuring vibrant Pomegranates and export-grade G9 Cavendish Bananas. Carefully harvested, sorted, and packed for international markets.
        </p>

        {/* Pomegranate */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-start bg-midnight-800 rounded-xl p-6 mb-20">
          <div>
            <img
              src="https://images.pexels.com/photos/65256/pomegranate-open-cores-fruit-fruit-logistica-65256.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Pomegranate"
              width="384"
              height="256"
              fetchPriority="high"
              decoding="async"
              className="w-96 h-64 object-cover rounded-lg shadow"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">Pomegranate (Bhagwa)</h2>
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
              src="https://images.unsplash.com/photo-1709105658917-9c930796648f?auto=format,compress&q=60&w=800"
              alt="G9 Cavendish Banana"
              width="384"
              height="256"
              loading="lazy"
              decoding="async"
              className="w-96 h-64 object-cover rounded-lg shadow"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">G9 Cavendish Banana (Green)</h2>
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
            name="fruits-inquiry"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="grid md:grid-cols-2 gap-6"
          >
            <input type="hidden" name="form-name" value="fruits-inquiry" />
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

export default FruitsPage;
