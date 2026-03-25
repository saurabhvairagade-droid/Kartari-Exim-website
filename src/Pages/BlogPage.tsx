import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const blogPosts = [
  {
    slug: 'soybean-meal-vs-soya-doc',
    title: 'Soybean Meal vs Soya DOC — Are They the Same Thing?',
    excerpt: 'Buyers across India, the Middle East, and Southeast Asia use different names for the same product. Here is everything you need to know about soybean meal and Soya DOC.',
    date: 'March 21, 2026',
    readTime: '4 min read',
    category: 'Animal Feed',
  },
  {
    slug: 'soybean-meal-protein-content-guide',
    title: 'Soybean Meal Protein Content — 46% vs 48% vs 50% Explained',
    excerpt: 'Not all soybean meal is the same. Understanding the difference between SBM 46%, SBM 48%, and HiPro 50% can save you money and improve your feed formulation results.',
    date: 'March 21, 2026',
    readTime: '5 min read',
    category: 'Animal Feed',
  },
  {
    slug: 'how-to-import-soybean-meal-from-india',
    title: 'How to Source Soybean Meal from India — A Buyer\'s Guide',
    excerpt: 'India is one of the largest exporters of soybean meal globally. This guide covers everything an importer needs to know — from finding suppliers to documentation and shipping.',
    date: 'March 21, 2026',
    readTime: '6 min read',
    category: 'Export Guide',
  },
];

const BlogPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-midnight-900 text-platinum-100 min-h-screen">
      <Header />
      <main className="pt-32 px-4 md:px-8 max-w-5xl mx-auto pb-20">

        <h1 className="text-4xl md:text-5xl font-bold text-champagne-400 mb-4">
          Kartari Exim Blog
        </h1>
        <p className="text-lg text-platinum-300 mb-12 max-w-2xl">
          Practical guides and market insights for agricultural commodity importers and feed manufacturers worldwide.
        </p>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="block bg-midnight-800 rounded-xl p-8 border border-champagne-800/30 hover:border-champagne-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold text-champagne-400 bg-champagne-400/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-platinum-400">{post.date}</span>
                <span className="text-sm text-platinum-400">· {post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-champagne-400 transition-colors duration-300">
                {post.title}
              </h2>
              <p className="text-platinum-300 leading-relaxed mb-4">{post.excerpt}</p>
              <span className="text-champagne-400 font-semibold text-sm group-hover:underline">
                Read article →
              </span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
