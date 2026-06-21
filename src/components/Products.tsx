import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wheat, ChefHat, Leaf, Apple, Carrot, Tractor, UtensilsCrossed } from 'lucide-react';
import { useFadeIn } from '../hooks/useFadeIn';

const Products = () => {
  const { containerVariants, itemVariants } = useFadeIn();
  
  const collections = [
    {
      name: 'Artisan Spices & Seasonings',
      slug: 'spices',
      description: 'Hand-selected premium spices including turmeric, red chilli, and heritage masala blends crafted by master spice artisans.',
      icon: ChefHat,
      image: 'https://images.pexels.com/photos/4198711/pexels-photo-4198711.jpeg?auto=compress&cs=tinysrgb&w=600&q=60',
      premium: false 
    },
    {
      name: 'Basmati Rice',
      slug: 'basmati-rice',
      description: 'Long-grain 1121 Basmati Rice (Golden Sella, Steam, White)',
      icon: Wheat,
      image: 'https://images.pexels.com/photos/8108170/pexels-photo-8108170.jpeg?auto=format&w=600&q=60',
      premium: true
    },
    {
      name: 'Garden Fresh Vegetables',
      slug: 'vegetables',
      description: 'Export-grade Red Onions, Garlic, Ginger, and Green Chilies',
      icon: Leaf,
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=60&w=600',
      premium: false
    },
    {
      name: 'Fruits',
      slug: 'fruits',
      description: 'Premium Pomegranates, Grapes, Mangoes, and Bananas',
      icon: Apple,
      image: 'https://images.pexels.com/photos/20349779/pexels-photo-20349779.jpeg?auto=compress&cs=tinysrgb&w=600&q=60',
      premium: true
    },
    {
      name: 'Gourmet Processed Foods',
      slug: 'gourmet-processed-foods',
      description: 'Ready-to-Eat curries, frozen delicacies, and pickles',
      icon: UtensilsCrossed,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&q=60',
      premium: false
    },
    {
      name: 'Animal Feed',
      slug: 'soybean-meal',
      description: 'High-protein Soya DOC, Yellow Maize, and Barley',
      icon: Tractor,
      image: 'https://images.pexels.com/photos/1153756/pexels-photo-1153756.jpeg?auto=compress&cs=tinysrgb&w=600&q=60',
      premium: false
    }
  ];

  return (
    <section id="products" className="py-24 bg-midnight-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-20" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6" variants={itemVariants}>
            Product <span className="bg-gradient-to-r from-champagne-400 to-luxury-400 bg-clip-text text-transparent">Collections</span>
          </motion.h2>
          <motion.p className="text-xl text-platinum-300 max-w-4xl mx-auto leading-relaxed" variants={itemVariants}>
            Discover our curated selection of India's finest agricultural treasures, 
            each product representing the pinnacle of quality and authenticity.
          </motion.p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {collections.map((collection, index) => {
            const Icon = collection.icon;
            return (
              <motion.div key={index} className="group relative bg-gradient-to-br from-midnight-800/80 to-midnight-700/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden hover:shadow-champagne-500/20 transition-all duration-500 border border-champagne-800/30 hover:border-champagne-500/50 hover:transform hover:scale-105" variants={itemVariants}>
                {collection.premium && (
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-champagne-500 to-luxury-600 text-midnight-900 px-3 py-1 rounded-full text-xs font-bold">
                    PREMIUM
                  </div>
                )}
                
                <div className="relative overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.name} 
                    width="400"
                    height="256"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-900/80 via-transparent to-transparent"></div>
                  <div className="absolute top-6 left-6 bg-gradient-to-br from-champagne-500/20 to-luxury-500/20 backdrop-blur-sm p-3 rounded-2xl border border-champagne-800/30">
                    <Icon className="h-7 w-7 text-champagne-400" />
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-champagne-400 transition-colors duration-300">
                    {collection.name}
                  </h3>
                  <p className="text-platinum-300 leading-relaxed mb-6">{collection.description}</p>
                  <Link
                    to={`/products/${collection.slug}`}
                    className="text-champagne-400 font-semibold hover:text-champagne-300 transition-colors duration-300 flex items-center group"
                  >
                    Explore Collection
                    <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;