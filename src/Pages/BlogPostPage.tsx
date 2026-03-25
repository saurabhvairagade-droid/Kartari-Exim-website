import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { blogPosts } from './BlogPage';

const posts: Record<string, React.ReactNode> = {

  'soybean-meal-vs-soya-doc': (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Soybean Meal vs Soya DOC — Are They the Same Thing?",
  "author": { "@type": "Organization", "name": "Kartari Exim" },
  "publisher": { "@type": "Organization", "name": "Kartari Exim", "url": "https://kartariexim.com" },
  "datePublished": "2026-03-21",
  "description": "Buyers across India, the Middle East, and Southeast Asia use different names for the same product. Here is everything you need to know about soybean meal and Soya DOC."
}
      `}} />

      <h1 className="text-4xl md:text-5xl font-bold text-champagne-400 mb-6">
        Soybean Meal vs Soya DOC — Are They the Same Thing?
      </h1>

      <p className="text-platinum-300 leading-relaxed mb-6">
        If you have been sourcing animal feed ingredients from India, you have probably come across both the terms <strong className="text-white">soybean meal</strong> and <strong className="text-white">Soya DOC</strong>. Buyers from the Middle East often ask for soybean meal, while traders in India and Bangladesh commonly refer to the same product as Soya DOC. This causes confusion — and sometimes even unnecessary back-and-forth between buyers and suppliers.
      </p>
      <p className="text-platinum-300 leading-relaxed mb-8">
        The short answer is yes — soybean meal and Soya DOC are the same product. But understanding why they have different names and what the terminology means will help you buy smarter and communicate more clearly with your suppliers.
      </p>

      <h2 className="text-2xl font-bold text-white mb-4">What is Soybean Meal?</h2>
      <p className="text-platinum-300 leading-relaxed mb-6">
        Soybean meal is the high-protein byproduct left after extracting oil from soybeans. It is one of the most widely used protein sources in commercial animal feed worldwide. Nutritionists and feed manufacturers across Europe, North America, and international markets use the term "soybean meal" or its abbreviation SBM in their feed formulations.
      </p>
      <p className="text-platinum-300 leading-relaxed mb-8">
        Soybean meal typically contains 46–50% crude protein depending on the grade, making it an excellent and cost-effective protein supplement for poultry, cattle, swine, fish, and aquaculture feed.
      </p>

      <h2 className="text-2xl font-bold text-white mb-4">What is Soya DOC?</h2>
      <p className="text-platinum-300 leading-relaxed mb-6">
        Soya DOC stands for <strong className="text-white">Soya De-Oiled Cake</strong>. It is the term used predominantly in India, Bangladesh, Sri Lanka, and parts of the Middle East to describe the same product — the protein-rich residue after soybean oil is extracted. The word "cake" in this context refers to the compressed form the material takes after solvent extraction, not a baked product.
      </p>
      <p className="text-platinum-300 leading-relaxed mb-8">
        In India, the commodity is traded on the NCDEX exchange under the name "Soyabean Meal" and processors commonly refer to it as Soya DOC in their price lists and invoices. You may also see it written as Soya De-Oiled Cake, Soybean De-Oiled Cake, or simply DOC.
      </p>

      <h2 className="text-2xl font-bold text-white mb-4">Other Names for the Same Product</h2>
      <div className="bg-midnight-800 rounded-xl p-6 mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-champagne-800/30">
              <th className="text-left text-champagne-400 pb-3 pr-6">Term</th>
              <th className="text-left text-champagne-400 pb-3">Commonly Used In</th>
            </tr>
          </thead>
          <tbody className="text-platinum-300">
            {[
              ['Soybean Meal', 'USA, Europe, International trade'],
              ['Soya DOC', 'India, Bangladesh, Sri Lanka'],
              ['SBM 46% / SBM 48%', 'Technical / feed formulation specs'],
              ['De-Oiled Soya Cake', 'India'],
              ['Soybean De-Oiled Cake', 'General trade'],
              ['Soya Extraction', 'Some European markets'],
            ].map(([term, region], i) => (
              <tr key={i} className="border-b border-midnight-700">
                <td className="py-3 pr-6 font-semibold text-white">{term}</td>
                <td className="py-3">{region}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-white mb-4">Is There Any Difference in Quality?</h2>
      <p className="text-platinum-300 leading-relaxed mb-6">
        The name does not indicate any difference in quality or composition. What matters is the <strong className="text-white">protein percentage, moisture content, urease activity, and fiber content</strong> — not what the product is called. Always ask your supplier for a Certificate of Analysis (COA) confirming the actual specifications rather than relying on the product name alone.
      </p>
      <p className="text-platinum-300 leading-relaxed mb-8">
        When buying from Indian exporters, the two main grades you will encounter are SBM 46% (standard grade, also called Soya DOC 46%) and SBM 48% / HiPro (high protein grade). The HiPro grade is produced using a dehulling process that removes the outer husk before extraction, resulting in higher protein content and lower fiber.
      </p>

      <h2 className="text-2xl font-bold text-white mb-4">Key Specifications to Check When Buying</h2>
      <div className="bg-midnight-800 rounded-xl p-6 mb-8">
        <ul className="space-y-3 text-platinum-300">
          {[
            ['Crude Protein', '46–48% (standard) or 48–50% (HiPro)'],
            ['Moisture', 'Max 10–12%'],
            ['Crude Fiber', 'Max 3–7% depending on grade'],
            ['Urease Activity', '0.05–0.3 mg N/g/min (lower is better for monogastrics)'],
            ['Sand & Silica', 'Max 1%'],
            ['GMO Status', 'Confirm Non-GMO if required by your market'],
          ].map(([spec, val], i) => (
            <li key={i} className="flex gap-3">
              <span className="text-champagne-400 font-bold flex-shrink-0">✓</span>
              <span><strong className="text-white">{spec}:</strong> {val}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-white mb-4">Summary</h2>
      <p className="text-platinum-300 leading-relaxed mb-6">
        Soybean meal and Soya DOC are the same product — a high-protein animal feed ingredient produced by extracting oil from soybeans. The different names reflect regional terminology rather than any difference in the product itself. Whether you are searching for soybean meal, Soya DOC, de-oiled cake, or SBM 48%, you are looking for the same commodity.
      </p>
      <p className="text-platinum-300 leading-relaxed mb-10">
        At Kartari Exim, we export Non-GMO Soya DOC (46–50% protein) from Pune, India to buyers across Asia, the Middle East, and Africa. If you have a requirement, get in touch and we will respond within 24 hours with pricing and availability.
      </p>

      <Link
        to="/products/soybean-meal"
        className="inline-block bg-gradient-to-r from-champagne-500 to-luxury-500 text-midnight-900 font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-all"
      >
        View our Soybean Meal product page →
      </Link>
    </>
  ),

  'soybean-meal-protein-content-guide': (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Soybean Meal Protein Content — 46% vs 48% vs 50% Explained",
  "author": { "@type": "Organization", "name": "Kartari Exim" },
  "publisher": { "@type": "Organization", "name": "Kartari Exim", "url": "https://kartariexim.com" },
  "datePublished": "2026-03-21",
  "description": "Understanding the difference between SBM 46%, SBM 48%, and HiPro 50% can save you money and improve your feed formulation results."
}
      `}} />

      <h1 className="text-4xl md:text-5xl font-bold text-champagne-400 mb-6">
        Soybean Meal Protein Content — 46% vs 48% vs 50% Explained
      </h1>

      <p className="text-platinum-300 leading-relaxed mb-8">
        When buying soybean meal from India, you will come across different protein grades — most commonly 46%, 48%, and 50% crude protein. These are not just numbers — they represent fundamentally different products with different production processes, prices, and applications. Choosing the wrong grade can either waste money or underperform in your feed formula.
      </p>

      <h2 className="text-2xl font-bold text-white mb-4">How Protein Content is Determined</h2>
      <p className="text-platinum-300 leading-relaxed mb-6">
        Soybean meal protein content is primarily determined by two factors — the quality of the raw soybeans and whether the hulls are removed before oil extraction. The outer hull of a soybean is rich in fiber and contains very little protein. When hulls are removed before processing (dehulling), the resulting meal has a higher protein concentration and lower fiber content.
      </p>
      <p className="text-platinum-300 leading-relaxed mb-8">
        Standard soybean meal (46–47% protein) is produced with the hulls included. HiPro soybean meal (48–50% protein) is produced after dehulling, giving you a more concentrated protein source.
      </p>

      <h2 className="text-2xl font-bold text-white mb-4">Grade Comparison</h2>
      <div className="bg-midnight-800 rounded-xl p-6 mb-8 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-champagne-800/30">
              {['Specification', 'SBM 46%', 'SBM 48%', 'HiPro 50%'].map(h => (
                <th key={h} className="text-left text-champagne-400 pb-3 pr-4">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="text-platinum-300">
            {[
              ['Crude Protein', '44–46%', '47–48%', '49–50%'],
              ['Crude Fiber', '6–7%', '3.5–4%', '2.5–3%'],
              ['Moisture', 'Max 12%', 'Max 11%', 'Max 10%'],
              ['Process', 'With hulls', 'Partly dehulled', 'Fully dehulled'],
              ['Relative Price', 'Lowest', 'Mid', 'Highest'],
              ['Best for', 'Ruminants, aqua', 'Poultry, swine', 'Broilers, piglets'],
            ].map(([spec, v1, v2, v3], i) => (
              <tr key={i} className="border-b border-midnight-700">
                <td className="py-3 pr-4 font-semibold text-white">{spec}</td>
                <td className="py-3 pr-4">{v1}</td>
                <td className="py-3 pr-4">{v2}</td>
                <td className="py-3">{v3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-white mb-4">Which Grade Should You Buy?</h2>
      <p className="text-platinum-300 leading-relaxed mb-4">
        The right grade depends entirely on your animal species, feed formulation, and budget. Here is a practical guide:
      </p>
      <div className="space-y-4 mb-8">
        {[
          { grade: 'SBM 46%', text: 'Best for cattle, dairy, aquaculture, and any ruminant feed where high fiber is tolerated. Most cost-effective option for bulk buyers.' },
          { grade: 'SBM 48%', text: 'The most widely used grade globally. Ideal for poultry layers, broilers, and swine. Balances protein content with price.' },
          { grade: 'HiPro 50%', text: 'Used in high-performance broiler and piglet starter diets where maximum protein density is needed. Commands a price premium.' },
        ].map(({ grade, text }) => (
          <div key={grade} className="bg-midnight-800 rounded-xl p-5">
            <p className="font-semibold text-champagne-400 mb-2">{grade}</p>
            <p className="text-platinum-300 text-sm">{text}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-white mb-4">What Kartari Exim Supplies</h2>
      <p className="text-platinum-300 leading-relaxed mb-10">
        We export Non-GMO Soya DOC in both standard (46–48%) and HiPro (48–50%) grades from Pune, India. All shipments come with Certificate of Analysis (COA), phytosanitary certificate, and full export documentation. Contact us with your protein requirement and we will provide pricing within 24 hours.
      </p>

      <Link
        to="/products/soybean-meal"
        className="inline-block bg-gradient-to-r from-champagne-500 to-luxury-500 text-midnight-900 font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-all"
      >
        View our Soybean Meal product page →
      </Link>
    </>
  ),

  'how-to-import-soybean-meal-from-india': (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Source Soybean Meal from India — A Buyer's Guide",
  "author": { "@type": "Organization", "name": "Kartari Exim" },
  "publisher": { "@type": "Organization", "name": "Kartari Exim", "url": "https://kartariexim.com" },
  "datePublished": "2026-03-21",
  "description": "India is one of the largest exporters of soybean meal globally. This guide covers everything an importer needs to know — from finding suppliers to documentation and shipping."
}
      `}} />

      <h1 className="text-4xl md:text-5xl font-bold text-champagne-400 mb-6">
        How to Source Soybean Meal from India — A Buyer's Guide
      </h1>

      <p className="text-platinum-300 leading-relaxed mb-8">
        India is one of the world's major producers and exporters of soybean meal (Soya DOC), with the bulk of production concentrated in Madhya Pradesh and Maharashtra. If you are an importer in the Middle East, Southeast Asia, or Africa looking to source soybean meal from India, this guide will walk you through everything you need to know — from finding the right supplier to understanding the documentation and shipping process.
      </p>

      <h2 className="text-2xl font-bold text-white mb-4">Why Source Soybean Meal from India?</h2>
      <div className="space-y-3 mb-8">
        {[
          'India is the fourth largest soybean producer globally with reliable annual supply',
          'Indian Soya DOC is competitively priced compared to South American origins',
          'Non-GMO status — India does not grow GM soybeans commercially',
          'Good protein quality — 46–50% crude protein depending on grade',
          'Strong export infrastructure at Nhava Sheva (Mumbai), Kandla, and other ports',
          'APEDA registered exporters provide full documentation compliance',
        ].map((point, i) => (
          <div key={i} className="flex gap-3 text-platinum-300">
            <span className="text-champagne-400 font-bold flex-shrink-0">✓</span>
            <span>{point}</span>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-white mb-4">Step 1 — Define Your Requirement</h2>
      <p className="text-platinum-300 leading-relaxed mb-8">
        Before contacting suppliers, be clear on your specification. You should know your required protein percentage (46%, 48%, or 50%), quantity (in MT), preferred packaging (50kg PP bags or bulk), destination port, and whether Non-GMO certification is required for your market. Having these details ready will get you a faster and more accurate quote.
      </p>

      <h2 className="text-2xl font-bold text-white mb-4">Step 2 — Find a Reliable Exporter</h2>
      <p className="text-platinum-300 leading-relaxed mb-6">
        Look for APEDA registered exporters — this is India's Agricultural and Processed Food Products Export Development Authority and registration is a basic compliance requirement for legitimate agricultural exporters. You can verify APEDA registration on the APEDA website.
      </p>
      <p className="text-platinum-300 leading-relaxed mb-8">
        Other trust signals to look for: GST registration, active presence on IndiaMART or TradeIndia, a professional website with clear product specifications, and willingness to provide samples before bulk orders.
      </p>

      <h2 className="text-2xl font-bold text-white mb-4">Step 3 — Request a Sample</h2>
      <p className="text-platinum-300 leading-relaxed mb-8">
        Always request a sample before placing a bulk order. A reputable exporter will provide a sample of 1–5 kg for your laboratory to test against the quoted specifications. Key parameters to test are crude protein, moisture, urease activity, crude fiber, and aflatoxin levels. This step protects you from receiving substandard product.
      </p>

      <h2 className="text-2xl font-bold text-white mb-4">Step 4 — Agree on Terms and Price</h2>
      <p className="text-platinum-300 leading-relaxed mb-6">
        Indian soybean meal is typically traded on <strong className="text-white">FOB (Free on Board)</strong> terms from Nhava Sheva or Kandla port. You arrange the ocean freight from there. Some exporters also offer CFR (Cost and Freight) or CIF (Cost, Insurance, Freight) terms where they arrange shipping to your destination port.
      </p>
      <p className="text-platinum-300 leading-relaxed mb-8">
        Payment terms typically range from 100% advance for new buyers to 30% advance and 70% against documents for established relationships. Letter of Credit (LC) is also widely accepted.
      </p>

      <h2 className="text-2xl font-bold text-white mb-4">Step 5 — Documentation You Will Receive</h2>
      <div className="bg-midnight-800 rounded-xl p-6 mb-8">
        <ul className="space-y-3 text-platinum-300">
          {[
            ['Commercial Invoice', 'Details of the shipment, buyer, seller, and value'],
            ['Packing List', 'Number of bags, net and gross weight per container'],
            ['Bill of Lading', 'Shipping document — proof of shipment'],
            ['Certificate of Origin (COO)', 'Confirms the product is of Indian origin'],
            ['Phytosanitary Certificate', 'Issued by government — confirms product is pest free'],
            ['Certificate of Analysis (COA)', 'Lab test results confirming protein, moisture, fiber etc.'],
            ['APEDA Certificate', 'Confirms exporter is registered and compliant'],
          ].map(([doc, desc], i) => (
            <li key={i} className="flex gap-3">
              <span className="text-champagne-400 font-bold flex-shrink-0">✓</span>
              <span><strong className="text-white">{doc}:</strong> {desc}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-white mb-4">Ready to Source Soybean Meal from India?</h2>
      <p className="text-platinum-300 leading-relaxed mb-10">
        Kartari Exim is an APEDA registered agricultural exporter based in Pune, Maharashtra. We export Non-GMO Soya DOC (46–48% protein) in 50kg PP bags or bulk container loads to buyers across Asia, the Middle East, and Africa. Send us your requirement and we will respond with pricing, availability, and sample details within 24 hours.
      </p>

      <Link
        to="/#contact"
        className="inline-block bg-gradient-to-r from-champagne-500 to-luxury-500 text-midnight-900 font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-all"
      >
        Get a quote from Kartari Exim →
      </Link>
    </>
  ),
};

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  const post = blogPosts.find(p => p.slug === slug);
  const content = slug ? posts[slug] : null;

  if (!post || !content) {
    return (
      <div className="bg-midnight-900 text-platinum-100 min-h-screen">
        <Header />
        <main className="pt-32 px-4 md:px-8 max-w-3xl mx-auto pb-20">
          <h1 className="text-3xl font-bold text-champagne-400 mb-4">Article not found</h1>
          <Link to="/blog" className="text-champagne-400 hover:underline">← Back to blog</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-midnight-900 text-platinum-100 min-h-screen">
      <Header />
      <main className="pt-32 px-4 md:px-8 max-w-3xl mx-auto pb-20">

        <Link to="/blog" className="text-champagne-400 text-sm hover:underline mb-8 inline-block">
          ← Back to all articles
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold text-champagne-400 bg-champagne-400/10 px-3 py-1 rounded-full">
            {post.category}
          </span>
          <span className="text-sm text-platinum-400">{post.date}</span>
          <span className="text-sm text-platinum-400">· {post.readTime}</span>
        </div>

        <article>{content}</article>

        <div className="mt-16 pt-8 border-t border-champagne-800/30">
          <p className="text-platinum-400 text-sm mb-4">More articles from Kartari Exim:</p>
          <div className="space-y-3">
            {blogPosts.filter(p => p.slug !== slug).map(p => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="block text-champagne-400 hover:underline text-sm"
              >
                → {p.title}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPostPage;
