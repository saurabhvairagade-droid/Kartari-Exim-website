import React from 'react';
import { CheckCircle, Clock, Shield, Globe, Users, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useFadeIn } from '../hooks/useFadeIn';

const WhyChooseUs = () => {
  const { containerVariants, itemVariants } = useFadeIn();
  
  const luxuryAdvantages = [
    {
      icon: CheckCircle,
      title: 'Consistent Quality',
      description: 'Every shipment is lab-tested and graded before dispatch. What you see in the sample is what arrives in the container — every time.'
    },
    {
      icon: Shield,
      title: 'APEDA Registered Exporter',
      description: 'Fully registered with APEDA and compliant with international export standards. We provide COO, phytosanitary certificates, and COA with every shipment.'
    },
    {
      icon: Clock,
      title: 'Fast Quote Turnaround',
      description: 'Send us your requirement and get a detailed quote within 24 hours. We have offices in both India and UAE to serve buyers across time zones.'
    },
    {
      icon: Globe,
      title: 'Exporting to 10+ Countries',
      description: 'Active supply relationships with buyers across Southeast Asia, the Middle East, East Africa, and South Asia — built on repeat orders and trust.'
    },
    {
      icon: Users,
      title: 'Direct Farm Sourcing',
      description: 'We work directly with farmers and processors across India — cutting out middlemen to give you better pricing and traceable supply chains.'
    },
    {
      icon: Truck,
      title: 'End-to-End Export Handling',
      description: 'We manage everything from procurement and quality checks to packaging, documentation, and container loading at Nhava Sheva port and Mundra port.'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-luxury-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-20" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6" variants={itemVariants}>
            The Kartari <span className="bg-gradient-to-r from-champagne-400 to-luxury-400 bg-clip-text text-transparent">Advantage</span>
          </motion.h2>
          <motion.p className="text-xl text-platinum-300 max-w-4xl mx-auto leading-relaxed" variants={itemVariants}>
            We are a Pune-based agricultural exporter with 15 years of combined expertise — supplying verified quality, reliable documentation, and competitive pricing to buyers worldwide.
          </motion.p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {luxuryAdvantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div key={index} className="group p-8 bg-gradient-to-br from-midnight-800/60 to-midnight-700/60 backdrop-blur-sm rounded-3xl border border-champagne-800/30 hover:border-champagne-500/50 hover:shadow-2xl hover:shadow-champagne-500/10 transition-all duration-500 hover:transform hover:scale-105" variants={itemVariants}>
                <div className="bg-gradient-to-br from-champagne-500/20 to-luxury-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:from-champagne-500/30 group-hover:to-luxury-500/30 transition-all duration-300">
                  <Icon className="h-8 w-8 text-champagne-400" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-champagne-400 transition-colors duration-300">
                  {advantage.title}
                </h3>
                <p className="text-platinum-300 leading-relaxed">{advantage.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;