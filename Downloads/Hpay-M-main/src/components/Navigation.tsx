
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-hpay-gray-blue z-50">
      <div className="container-custom section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.jpg" alt="HPay Logo" className="w-14 h-14 object-contain rounded-xl" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('advantages')} 
              className="text-hpay-black hover:text-hpay-blue transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('products')} 
              className="text-hpay-black hover:text-hpay-blue transition-colors"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('growth-timeline')} 
              className="text-hpay-black hover:text-hpay-blue transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-hpay-black hover:text-hpay-blue transition-colors"
            >
              Contact
            </button>
            <Link to="/login" className="btn-primary">Login</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-hpay-black hover:text-hpay-blue transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 py-6 border-t border-hpay-gray-blue animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('advantages')} 
                className="text-hpay-black hover:text-hpay-blue transition-colors py-2 text-left"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('products')} 
                className="text-hpay-black hover:text-hpay-blue transition-colors py-2 text-left"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('growth-timeline')} 
                className="text-hpay-black hover:text-hpay-blue transition-colors py-2 text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-hpay-black hover:text-hpay-blue transition-colors py-2 text-left"
              >
                Contact
              </button>
              <Link to="/login" className="btn-primary w-full mt-4">Login</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
