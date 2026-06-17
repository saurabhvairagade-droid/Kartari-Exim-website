import React from 'react';
import { Users, Award, TrendingUp, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useFadeIn } from '../hooks/useFadeIn';

const About = () => {
  const { containerVariants, itemVariants } = useFadeIn();
  
  const achievements = [
    { label: 'Years of Expertise', value: '15+', icon: Award },
    { label: 'Global Markets', value: '5+', icon: Users },
    { label: 'Premium Products', value: '15', icon: TrendingUp },
    { label: 'Satisfied Partners', value: '20+', icon: Heart }
  ];

  return (
    <section id="about" className="py-24 bg-premium-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-20" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6" variants={itemVariants}>
            Our <span className="bg-gradient-to-r from-champagne-400 to-luxury-400 bg-clip-text text-transparent">Heritage</span>
          </motion.h2>
          <motion.p className="text-xl text-platinum-300 max-w-4xl mx-auto leading-relaxed" variants={itemVariants}>
            A trusted name in agricultural exports, connecting India's rich agricultural heritage with global markets.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div className="space-y-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-serif font-bold bg-gradient-to-r from-champagne-400 to-luxury-500 bg-clip-text text-transparent mb-6">
                The Kartari Legacy
              </h3>
              <div className="space-y-6 text-platinum-300 leading-relaxed">
                <p className="text-lg">
                  Founded in 2025 by visionary entrepreneurs Saurabh and Sanjay, Kartari Exim represents
                  the pinnacle of agricultural export excellence. With 25 years of combined expertise in international trade, our founders recognized the untapped potential of India's agricultural heritage.
                </p>
                <p className="text-lg">
                  Our commitment to quality, sustainability, and customer satisfaction has made us a preferred partner for businesses worldwide. We work directly with farmers and cooperatives to ensure ethical sourcing and the highest standards of quality control.
                  Every grain tells a story, every spice carries tradition.
                </p>
                <p className="text-lg">
                  From traditional spices to modern organic products, we carry forward India's agricultural legacy while embracing innovation and sustainable practices with an unwavering commitment to quality.
                </p>
              </div>
            </motion.div>

            <motion.div className="bg-gradient-to-br from-champagne-500/10 to-luxury-500/10 p-8 rounded-2xl border border-champagne-800/30" variants={itemVariants}>
              <h4 className="text-xl font-semibold text-champagne-400 mb-4">Our Promise</h4>
              <p className="text-platinum-300 leading-relaxed">
                "To bridge continents through the finest agricultural treasures,
                ensuring every product reflects our commitment to excellence and authenticity."
              </p>
              <div className="mt-4 text-right">
                <span className="text-champagne-400 font-medium">— Saurabh & Sanjay, Founders</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="relative" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.2 }} viewport={{ once: true }}>
            <div className="bg-gradient-to-br from-midnight-800/50 to-midnight-700/50 backdrop-blur-sm rounded-3xl p-8 border border-champagne-800/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1678182451047-196f22a4143e?auto=format,compress&q=60&w=800"
                alt="Container Shipping Dock"
                width="600"
                height="384"
                loading="lazy"
                decoding="async"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </motion.div>
        </div>

        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div key={index} className="group text-center p-8 bg-gradient-to-br from-midnight-800/60 to-midnight-700/60 backdrop-blur-sm rounded-2xl border border-champagne-800/30 hover:border-champagne-500/50 transition-all duration-500 hover:transform hover:scale-105" variants={itemVariants}>
                <div className="bg-gradient-to-br from-champagne-500/20 to-luxury-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-champagne-500/30 group-hover:to-luxury-500/30 transition-all duration-300">
                  <Icon className="h-8 w-8 text-champagne-400" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-champagne-400 to-luxury-400 bg-clip-text text-transparent mb-2">
                  {achievement.value}
                </div>
                <div className="text-sm text-platinum-400 font-medium">{achievement.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;