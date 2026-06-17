import React from 'react';
import { ArrowRight, Globe, Award, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { useFadeIn } from '../hooks/useFadeIn';

const Hero = () => {
  const { ref, containerVariants, itemVariants } = useFadeIn();

  const statVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
      },
    },
  };

  return (
    <section ref={ref} id="home" className="pt-20 min-h-screen bg-luxury-gradient relative overflow-hidden">
      {/* Luxury overlay patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-midnight-900/90 via-midnight-800/80 to-midnight-700/70"></div>

      {/* Premium background texture */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=1600)'
        }}
      ></div>

      {/* Floating luxury elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-champagne-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-luxury-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div className="space-y-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div className="space-y-6" variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
                <motion.span className="block" variants={itemVariants}>Kartari Exim</motion.span>
                <motion.span className="block leading-snug pb-2 text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-champagne-400 via-luxury-400 to-champagne-500 bg-clip-text text-transparent" variants={itemVariants}>
                  Global Trading
                </motion.span>
                <motion.span className="block pt-1 text-4xl md:text-5xl lg:text-6xl text-platinum-300" variants={itemVariants}>
                  Redefined
                </motion.span>
              </h1>
              <motion.p className="text-xl md:text-2xl text-platinum-300 leading-relaxed font-light" variants={itemVariants}>
                Premier import-export company connecting premium Indian food products to over 10 countries worldwide. Kartari Exim leads in essential and processed food exports, delivering quality across 5 continents.
              </motion.p>
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-6" variants={itemVariants}>
              <a href="#products">
                <button className="group bg-gradient-to-r from-champagne-600 to-luxury-600 text-midnight-900 px-10 py-4 rounded-full font-semibold hover:from-champagne-500 hover:to-luxury-500 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-champagne-500/30 transform hover:scale-105">
                  Explore Products
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </a>
              <a href="#contact">
                <button className="border-2 border-champagne-500 text-champagne-400 px-10 py-4 rounded-full font-semibold hover:bg-champagne-500 hover:text-midnight-900 transition-all duration-300 shadow-lg hover:shadow-champagne-500/20">
                  Get Quote
                </button>
              </a>
            </motion.div>

            {/* Premium stats */}
            <motion.div className="grid grid-cols-3 gap-8 pt-8 border-t border-champagne-800/30" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div className="text-center" variants={statVariants}>
                <div className="text-3xl font-bold bg-gradient-to-r from-champagne-400 to-luxury-400 bg-clip-text text-transparent">15+</div>
                <div className="text-sm text-platinum-400 font-medium">Years of Expertise</div>
              </motion.div>
              <motion.div className="text-center" variants={statVariants}>
                <div className="text-3xl font-bold bg-gradient-to-r from-champagne-400 to-luxury-400 bg-clip-text text-transparent">10+</div>
                <div className="text-sm text-platinum-400 font-medium">Global Markets</div>
              </motion.div>
              <motion.div className="text-center" variants={statVariants}>
                <div className="text-3xl font-bold bg-gradient-to-r from-champagne-400 to-luxury-400 bg-clip-text text-transparent">15+</div>
                <div className="text-sm text-platinum-400 font-medium">Elite Clients</div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div className="relative" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.2 }} viewport={{ once: true }}>
            <div className="bg-gradient-to-br from-midnight-800/90 to-midnight-700/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-champagne-800/30">
              <img
                src="https://images.pexels.com/photos/9705821/pexels-photo-9705821.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Premium agricultural products showcase"
                width="600"
                height="320"
                fetchPriority="high"
                decoding="async"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
              <motion.div className="mt-8 grid grid-cols-3 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.div className="text-center group" variants={itemVariants}>
                  <div className="bg-gradient-to-br from-champagne-500/20 to-luxury-500/20 p-4 rounded-2xl mb-3 group-hover:from-champagne-500/30 group-hover:to-luxury-500/30 transition-all duration-300">
                    <Globe className="h-8 w-8 text-champagne-400 mx-auto" />
                  </div>
                  <p className="text-sm font-semibold text-white">Global Presence</p>
                </motion.div>
                <motion.div className="text-center group" variants={itemVariants}>
                  <div className="bg-gradient-to-br from-champagne-500/20 to-luxury-500/20 p-4 rounded-2xl mb-3 group-hover:from-champagne-500/30 group-hover:to-luxury-500/30 transition-all duration-300">
                    <Award className="h-8 w-8 text-champagne-400 mx-auto" />
                  </div>
                  <p className="text-sm font-semibold text-white">Premium Quality</p>
                </motion.div>
                <motion.div className="text-center group" variants={itemVariants}>
                  <div className="bg-gradient-to-br from-champagne-500/20 to-luxury-500/20 p-4 rounded-2xl mb-3 group-hover:from-champagne-500/30 group-hover:to-luxury-500/30 transition-all duration-300">
                    <Shield className="h-8 w-8 text-champagne-400 mx-auto" />
                  </div>
                  <p className="text-sm font-semibold text-white">Certified Excellence</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;