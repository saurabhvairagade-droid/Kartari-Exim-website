import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };



  return (
    <header className="fixed top-0 w-full bg-midnight-900/95 backdrop-blur-md border-b border-champagne-800/20 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity duration-300">
            <img 
              src="/Kartari Logo.webp" 
              alt="Kartari Exim Logo" 
              className="h-12 w-auto filter brightness-110"
            />
            <div>
              <span className="text-2xl font-serif font-bold bg-gradient-to-r from-champagne-400 to-luxury-500 bg-clip-text text-transparent block">
                Kartari Exim
              </span>
              <p className="text-xs text-champagne-400 font-medium tracking-wider uppercase">
                Premium Agricultural Exports
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <button onClick={() => scrollToSection('home')} className="mt-2 text-platinum-300 hover:text-champagne-400 transition-all duration-300 font-medium tracking-wide">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="mt-2 text-platinum-300 hover:text-champagne-400 transition-all duration-300 font-medium tracking-wide">
              About Us
            </button>
            <button onClick={() => scrollToSection('products')} className="mt-2 text-platinum-300 hover:text-champagne-400 transition-all duration-300 font-medium tracking-wide">
              Products
            </button>
            <button onClick={() => scrollToSection('why-us')} className="mt-2 text-platinum-300 hover:text-champagne-400 transition-all duration-300 font-medium tracking-wide">
              Why Choose Us
            </button>
            <button onClick={() => window.location.href = '/blog'} className="mt-2 text-platinum-300 hover:text-champagne-400 transition-all duration-300 font-medium tracking-wide">
              Blog
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-champagne-600 to-luxury-600 text-midnight-900 px-8 py-3 rounded-full hover:from-champagne-500 hover:to-luxury-500 transition-all duration-300 font-semibold shadow-lg hover:shadow-champagne-500/25 transform hover:scale-105"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
            className="md:hidden p-3 rounded-full text-platinum-300 hover:text-champagne-400 hover:bg-midnight-800/50 transition-all duration-300"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-champagne-800/20 bg-midnight-900/98 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-platinum-300 hover:text-champagne-400 transition-all duration-300 py-3 font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-platinum-300 hover:text-champagne-400 transition-all duration-300 py-3 font-medium">
                About Us
              </button>
              <button onClick={() => scrollToSection('products')} className="text-platinum-300 hover:text-champagne-400 transition-all duration-300 py-3 font-medium">
                Products
              </button>
              <button onClick={() => scrollToSection('why-us')} className="text-platinum-300 hover:text-champagne-400 transition-all duration-300 py-3 font-medium">
                Why Choose Us
              </button>
              <button onClick={() => window.location.href = '/blog'} className="text-platinum-300 hover:text-champagne-400 transition-all duration-300 py-3 font-medium">
                Blog
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-champagne-600 to-luxury-600 text-midnight-900 px-8 py-3 rounded-full hover:from-champagne-500 hover:to-luxury-500 transition-all duration-300 font-semibold shadow-lg inline-block text-center mt-4"
              >
                Contact Us
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
