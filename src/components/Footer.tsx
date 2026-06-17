import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-midnight-900 text-white border-t border-champagne-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="/Kartari Logo.webp" 
                alt="Kartari Exim Logo" 
                className="h-12 w-auto filter brightness-110"
              />
              <div>
                <h3 className="text-2xl font-serif font-bold bg-gradient-to-r from-champagne-400 to-luxury-400 bg-clip-text text-transparent">
                  Kartari Exim
                </h3>
                <p className="text-sm text-champagne-400 font-medium tracking-wider">
                  PREMIUM AGRICULTURAL EXPORTS
                </p>
              </div>
            </div>
            <p className="text-platinum-300 leading-relaxed mb-6 max-w-md">
              Kartari Exim is a trusted soybean meal and agricultural products exporter from Pune, India — supplying Soya DOC, Basmati Rice, Spices, and Fresh Produce to importers worldwide
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gradient-to-br from-champagne-500/20 to-luxury-500/20 p-3 rounded-xl text-champagne-400 hover:from-champagne-500/30 hover:to-luxury-500/30 transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              
              <a 
                href="https://www.linkedin.com/company/kartari-exim/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-champagne-500/20 to-luxury-500/20 p-3 rounded-xl text-champagne-400 hover:from-champagne-500/30 hover:to-luxury-500/30 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gradient-to-br from-champagne-500/20 to-luxury-500/20 p-3 rounded-xl text-champagne-400 hover:from-champagne-500/30 hover:to-luxury-500/30 transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold text-champagne-400 mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="/#home" className="text-platinum-300 hover:text-champagne-400 transition-colors duration-300">Home</a></li>
              <li><a href="/#about" className="text-platinum-300 hover:text-champagne-400 transition-colors duration-300">About Us</a></li>
              <li><a href="/#products" className="text-platinum-300 hover:text-champagne-400 transition-colors duration-300">Products</a></li>
              <li><a href="/#why-us" className="text-platinum-300 hover:text-champagne-400 transition-colors duration-300">Why Us</a></li>
              <li><a href="/blog" className="text-platinum-300 hover:text-champagne-400 transition-colors duration-300">Blog</a></li>
              <li><a href="/#contact" className="text-platinum-300 hover:text-champagne-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-serif font-bold text-champagne-400 mb-6">Products</h4>
            <ul className="space-y-3">
              <li><Link to="/products/soybean-meal" className="text-platinum-300 hover:text-champagne-400 transition-colors duration-300">Soybean Meal</Link></li>
              <li><Link to="/products/spices" className="text-platinum-300 hover:text-champagne-400 transition-colors duration-300">Artisan Spices</Link></li>
              <li><Link to="/products/basmati-rice" className="text-platinum-300 hover:text-champagne-400 transition-colors duration-300">Basmati Rice</Link></li>
              <li><Link to="/products/vegetables" className="text-platinum-300 hover:text-champagne-400 transition-colors duration-300">Fresh Vegetables</Link></li>
              <li><Link to="/products/fruits" className="text-platinum-300 hover:text-champagne-400 transition-colors duration-300">Fresh Fruits</Link></li>
              <li><Link to="/products/gourmet-processed-foods" className="text-platinum-300 hover:text-champagne-400 transition-colors duration-300">Processed Foods</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="mt-12 pt-8 border-t border-champagne-800/30">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-champagne-500/20 to-luxury-500/20 p-3 rounded-xl">
                <Mail className="h-5 w-5 text-champagne-400" />
              </div>
              <div>
                <p className="text-sm text-champagne-400 font-medium">Email</p>
                <p className="text-platinum-300">info@kartariexim.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-champagne-500/20 to-luxury-500/20 p-3 rounded-xl">
                <Phone className="h-5 w-5 text-champagne-400" />
              </div>
              <div>
                <p className="text-sm text-champagne-400 font-medium">Phone</p>
                <p className="text-platinum-300">+971 50 265 9676 (UAE)</p>
		<p className="text-platinum-300">+91 749 904 3190 (India)</p>
		<p className="text-platinum-300">+91 916 888 1415 (India)</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-champagne-500/20 to-luxury-500/20 p-3 rounded-xl">
                <MapPin className="h-5 w-5 text-champagne-400" />
              </div>
              <div>
                <p className="text-sm text-champagne-400 font-medium">Headquarters</p>
                <p className="text-platinum-300">Pune, India</p>
                <p className="text-platinum-400 text-sm mt-1">GSTIN: 27ANFPV9020R1Z5</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-champagne-800/30 mt-12 pt-8 text-center">
          <p className="text-platinum-400">
            © 2025 Kartari Exim. All rights reserved. | Privacy Policy | Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;