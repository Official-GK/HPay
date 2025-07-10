
import React from 'react';

const Footer = () => {
  const footerLinks = {
    'Products': ['H Pay Wallet', 'Travel Buddy', 'Community Banking', 'Business Solutions'],
    'Company': ['About Us', 'Careers', 'Press', 'Blog'],
    'Support': ['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service'],
    'Community': ['Partner Program', 'Developer API', 'Community Forum', 'Local Chapters']
  };

  return (
    <footer className="bg-hpay-black text-white">
      <div className="container-custom section-padding">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-hpay-blue to-hpay-sky rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <span className="text-3xl font-bold">Pay</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Empowering underserved communities across India with accessible digital 
              banking and travel solutions. Building bridges to financial inclusion.
            </p>
            <div className="flex space-x-4">
              {['📱', '💬', '📧', '🐦'].map((icon, index) => (
                <div key={index} className="w-10 h-10 bg-hpay-blue/20 hover:bg-hpay-blue/40 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-lg font-semibold text-white">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="max-w-2xl">
            <h3 className="text-xl font-bold mb-4">Stay Connected with Our Community</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email for updates"
                className="flex-1 px-4 py-3 bg-white/10 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-hpay-blue focus:border-transparent min-h-[48px]"
              />
              <button className="btn-primary px-8">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-center md:text-left">
            © 2024 H Pay. All rights reserved. Building financial bridges for every community.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
