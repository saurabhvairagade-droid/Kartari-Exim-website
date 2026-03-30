import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Download, CheckCircle, AlertCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useFadeIn } from '../hooks/useFadeIn';

const Contact = () => {
  const { containerVariants, itemVariants } = useFadeIn();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    productInterest: '',
    orderVolume: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        country: '',
        productInterest: '',
        orderVolume: '',
        message: ''
      });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setIsSubmitting(false);
      setSubmitStatus('error');
    }
  };

  const productCategories = [
    'Soybean Meal (Soya DOC) — 46% Protein',
    'Soybean Meal Semi-Pro (Soya DOC) — 48% Protein',
    'Soybean Meal HiPro (Soya DOC) — 50% Protein',
    'Basmati Rice 1121 — White',
    'Basmati Rice 1121 — Golden Sella',
    'Basmati Rice 1121 — Steamed',
    'Red Onion — Nasik (Gulf / Dubai Super 55mm+)',
    'Red Onion — Nasik (Colombo Quality 45mm+)',
    'Red Onion — Nasik (Malaysia Quality 45-55mm)',
    'Green Chilli — G4',
    'G9 Cavendish Banana',
    'Refined White Sugar — S30 (ICUMSA 100-150)',
    'Jaggery Powder',
    'Pasta — Penne / Macaroni / Fusilli',
    'Turmeric',
    'Red Chilli',
    'Coriander',
    'Cumin',
    'Other — Please specify in message',
  ];

  const orderVolumes = [
    'Sample (< 10 kg)',
    '100 kg - 1 ton',
    '1 - 10 tons',
    '10 - 50 tons',
    'more than 50 tons'
  ];

  return (
    <>
      {/* Hidden Netlify form for build-time detection */}
      <form name="contact-inquiry" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
        <input type="text" name="firstName" />
        <input type="text" name="lastName" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <input type="text" name="company" />
        <input type="text" name="country" />
        <input type="text" name="productInterest" />
        <input type="text" name="orderVolume" />
        <textarea name="message" />
      </form>

      <section id="contact" className="py-24 bg-midnight-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-20" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6" variants={itemVariants}>
            Lets work <span className="bg-gradient-to-r from-champagne-400 to-luxury-400 bg-clip-text text-transparent">Together</span>
          </motion.h2>
          <motion.p className="text-xl text-platinum-300 max-w-4xl mx-auto leading-relaxed" variants={itemVariants}>
            Send us your product requirement and we'll get back to you with pricing, availability, and shipping details within 24 hours.
          </motion.p>
        </motion.div>

        {/* Premium Services */}
        <motion.div className="grid md:grid-cols-3 gap-8 mb-16" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div className="group bg-gradient-to-br from-midnight-800/60 to-midnight-700/60 backdrop-blur-sm p-8 rounded-3xl text-center hover:shadow-2xl hover:shadow-champagne-500/10 transition-all duration-500 border border-champagne-800/30 hover:border-champagne-500/50 hover:transform hover:scale-105" variants={itemVariants}>
            <div className="bg-gradient-to-br from-champagne-500/20 to-luxury-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-champagne-500/30 group-hover:to-luxury-500/30 transition-all duration-300">
              <Download className="h-8 w-8 text-champagne-400" />
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-4">Catalog</h3>
            <p className="text-platinum-300 mb-6 leading-relaxed">Download our product catalog featuring products and their specifications</p>
            <a
              href="/Kartari-Exim-Catalogue.pdf"
              download
              className="text-champagne-400 font-semibold hover:text-champagne-300 transition-colors duration-300 flex items-center justify-center mx-auto group"
            >
              Download Catalog
              <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
            </a>
          </motion.div>

          <motion.div className="group bg-gradient-to-br from-midnight-800/60 to-midnight-700/60 backdrop-blur-sm p-8 rounded-3xl text-center hover:shadow-2xl hover:shadow-champagne-500/10 transition-all duration-500 border border-champagne-800/30 hover:border-champagne-500/50 hover:transform hover:scale-105" variants={itemVariants}>
            <div className="bg-gradient-to-br from-champagne-500/20 to-luxury-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-champagne-500/30 group-hover:to-luxury-500/30 transition-all duration-300">
              <Star className="h-8 w-8 text-champagne-400" />
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-4">Certifications</h3>
            <p className="text-platinum-300 mb-6 leading-relaxed">View our comprehensive quality certifications </p>
          </motion.div>

          <motion.div className="group bg-gradient-to-br from-midnight-800/60 to-midnight-700/60 backdrop-blur-sm p-8 rounded-3xl text-center hover:shadow-2xl hover:shadow-champagne-500/10 transition-all duration-500 border border-champagne-800/30 hover:border-champagne-500/50 hover:transform hover:scale-105" variants={itemVariants}>
            <div className="bg-gradient-to-br from-champagne-500/20 to-luxury-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-champagne-500/30 group-hover:to-luxury-500/30 transition-all duration-300">
              <CheckCircle className="h-8 w-8 text-champagne-400" />
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-4">24hr Response</h3>
            <p className="text-platinum-300 mb-6 leading-relaxed">Send us your requirement and get a detailed quote with pricing, specs, and shipping terms within 24 hours.</p>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div className="space-y-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-serif font-bold text-white mb-8">Connect With Us</h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-br from-champagne-500/20 to-luxury-500/20 p-4 rounded-2xl">
                    <Mail className="h-7 w-7 text-champagne-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Email</h4>
                    <a
                      href="mailto:info@kartariexim.com"
                      className="text-platinum-300 hover:text-champagne-400 transition-colors duration-300"
                    >
                      info@kartariexim.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-br from-champagne-500/20 to-luxury-500/20 p-4 rounded-2xl">
                    <Phone className="h-7 w-7 text-champagne-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Phone & WhatsApp</h4>

                    {/* India 1 — Call + WhatsApp buttons */}
                    <p className="text-platinum-300 mb-2">+91 749 904 3190 (India)</p>
                    <div className="flex gap-3 mb-3">
                      <a href="tel:+917499043190" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-champagne-800/50 text-platinum-300 hover:text-champagne-400 hover:border-champagne-500 transition-all duration-300 text-sm">
                        <Phone className="h-4 w-4" /> Call
                      </a>
                      <a href="https://wa.me/917499043190" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-green-700/50 text-green-400 hover:border-green-500 hover:bg-green-900/20 transition-all duration-300 text-sm">
                        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        WhatsApp
                      </a>
                    </div>

                    {/* UAE — static */}
                    <p className="text-platinum-300 mb-1">+971 50 265 9676 (UAE)</p>

                    {/* India 2 — static */}
                    <p className="text-platinum-300">+91 916 888 1415 (India)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-br from-champagne-500/20 to-luxury-500/20 p-4 rounded-2xl">
                    <MapPin className="h-7 w-7 text-champagne-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2"> Headquarters</h4>
                    <p className="text-platinum-300">
                      Pune - 411041, Maharashtra<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Luxury Trust Indicators */}
            <motion.div className="bg-gradient-to-br from-champagne-500/10 to-luxury-500/10 p-8 rounded-3xl border border-champagne-800/30" variants={itemVariants}>
              <h4 className="text-xl font-serif font-bold text-champagne-400 mb-6">The Kartari Promise</h4>
              <ul className="space-y-4">
                <li className="flex items-center text-platinum-300">
                  <CheckCircle className="h-5 w-5 text-champagne-400 mr-4" />
                  15 years of combined expertise in agricultural exports
                </li>
                <li className="flex items-center text-platinum-300">
                  <CheckCircle className="h-5 w-5 text-champagne-400 mr-4" />
                  Supplying buyers across 10+ countries in Asia, Middle East & Africa
                </li>
                <li className="flex items-center text-platinum-300">
                  <CheckCircle className="h-5 w-5 text-champagne-400 mr-4" />
                  APEDA registered — COO, phytosanitary & COA with every shipment
                </li>
                <li className="flex items-center text-platinum-300">
                  <CheckCircle className="h-5 w-5 text-champagne-400 mr-4" />
                  Quote within 24 hours — no follow-up needed
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div className="bg-gradient-to-br from-midnight-800/80 to-midnight-700/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-champagne-800/30" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.2 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-serif font-bold text-white mb-3">Request Quote</h3>
            <p className="text-platinum-300 mb-8">Tell us what you need and we'll send you pricing, availability and shipping details within 24 hours.</p>
            
            {submitStatus === 'success' && (
              <div className="mb-8 p-6 bg-gradient-to-r from-green-900/50 to-green-800/50 border border-green-700/50 rounded-2xl flex items-center">
                <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                <span className="text-green-300">Thank you! We will contact you within 24 hours.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-8 p-6 bg-gradient-to-r from-red-900/50 to-red-800/50 border border-red-700/50 rounded-2xl flex items-center">
                <AlertCircle className="h-6 w-6 text-red-400 mr-3" />
                <span className="text-red-300">There was an error. Please try again or contact us directly.</span>
              </div>
            )}

            <form 
              onSubmit={handleSubmit} 
              name="contact-inquiry"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact-inquiry" />
              <p hidden><input name="bot-field" /></p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-champagne-400 mb-3">
                    First Name *
                  </label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-midnight-800/60 border border-champagne-800/50 rounded-xl focus:ring-2 focus:ring-champagne-500 focus:border-transparent text-white placeholder-platinum-400 transition-all duration-300"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-champagne-400 mb-3">
                    Last Name *
                  </label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-midnight-800/60 border border-champagne-800/50 rounded-xl focus:ring-2 focus:ring-champagne-500 focus:border-transparent text-white placeholder-platinum-400 transition-all duration-300"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-champagne-400 mb-3">
                  Business Email *
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-midnight-800/60 border border-champagne-800/50 rounded-xl focus:ring-2 focus:ring-champagne-500 focus:border-transparent text-white placeholder-platinum-400 transition-all duration-300"
                  placeholder="your@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-champagne-400 mb-3">
                  Phone / WhatsApp *
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-midnight-800/60 border border-champagne-800/50 rounded-xl focus:ring-2 focus:ring-champagne-500 focus:border-transparent text-white placeholder-platinum-400 transition-all duration-300"
                  placeholder="+1 234 567 8900 (include country code)"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-champagne-400 mb-3">
                    Company Name *
                  </label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-midnight-800/60 border border-champagne-800/50 rounded-xl focus:ring-2 focus:ring-champagne-500 focus:border-transparent text-white placeholder-platinum-400 transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-champagne-400 mb-3">
                    Country *
                  </label>
                  <input 
                    type="text" 
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-midnight-800/60 border border-champagne-800/50 rounded-xl focus:ring-2 focus:ring-champagne-500 focus:border-transparent text-white placeholder-platinum-400 transition-all duration-300"
                    placeholder="Your country"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-champagne-400 mb-3">
                    Product *
                  </label>
                  <select 
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-midnight-800/60 border border-champagne-800/50 rounded-xl focus:ring-2 focus:ring-champagne-500 focus:border-transparent text-white transition-all duration-300"
                  >
                    <option value="">Select a product</option>
                    {productCategories.map((category, index) => (
                      <option key={index} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-champagne-400 mb-3">
                    Expected Volume
                  </label>
                  <select 
                    name="orderVolume"
                    value={formData.orderVolume}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-midnight-800/60 border border-champagne-800/50 rounded-xl focus:ring-2 focus:ring-champagne-500 focus:border-transparent text-white transition-all duration-300"
                  >
                    <option value="">Select volume</option>
                    {orderVolumes.map((volume, index) => (
                      <option key={index} value={volume}>{volume}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-champagne-400 mb-3">
                  Special Requirements
                </label>
                <textarea 
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-midnight-800/60 border border-champagne-800/50 rounded-xl focus:ring-2 focus:ring-champagne-500 focus:border-transparent text-white placeholder-platinum-400 transition-all duration-300"
                  placeholder="Your requirement — quantity needed, destination port/country, packaging preference, any specific certifications required"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-champagne-600 to-luxury-600 text-midnight-900 py-4 rounded-xl font-bold hover:from-champagne-500 hover:to-luxury-500 transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl hover:shadow-champagne-500/30 transform hover:scale-105"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-midnight-900 mr-3"></div>
                    Processing Request...
                  </>
                ) : (
                  <>
                    Request Quote
                    <Send className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>

            <p className="mt-6 text-xs text-platinum-400 text-center leading-relaxed">
              By submitting this form, you agree to receive communications from Kartari Exim. 
              We respect your privacy and maintain the highest standards of confidentiality.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
