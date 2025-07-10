
import React, { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section className="section-padding bg-white" id="contact">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-hpay-black mb-6">
            Connect With Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our services? We're here to help you on your 
            financial journey. Reach out to our community support team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info & Map */}
          <div className="space-y-8 animate-on-scroll">
            <div className="bg-gradient-to-br from-hpay-blue/5 to-hpay-sky/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-hpay-black mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-hpay-blue rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-hpay-black mb-1">Visit Our Office</div>
                    <div className="text-gray-600">123 Tech Hub, Bangalore, Karnataka 560001</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-hpay-orange rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-hpay-black mb-1">Email Us</div>
                    <div className="text-gray-600">support@hpay.in</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-hpay-red rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-hpay-black mb-1">Call Us</div>
                    <div className="text-gray-600">1800-HPAY-123 (Toll Free)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map Placeholder */}
            <div className="bg-gradient-to-br from-hpay-gray-blue/20 to-hpay-sky/10 rounded-2xl h-64 flex items-center justify-center border border-hpay-gray-blue/20">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-hpay-blue rounded-2xl flex items-center justify-center text-white mx-auto">
                  <MapPin size={24} />
                </div>
                <div className="text-hpay-black font-semibold">Interactive Map</div>
                <div className="text-gray-600 text-sm">Bangalore, Karnataka</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll" style={{ animationDelay: '200ms' }}>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-hpay-gray-blue/20">
              <h3 className="text-2xl font-bold text-hpay-black mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-hpay-black mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-hpay-gray-blue rounded-xl focus:outline-none focus:ring-2 focus:ring-hpay-blue focus:border-transparent transition-all min-h-[48px]"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-hpay-black mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-hpay-gray-blue rounded-xl focus:outline-none focus:ring-2 focus:ring-hpay-blue focus:border-transparent transition-all min-h-[48px]"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-hpay-black mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-hpay-gray-blue rounded-xl focus:outline-none focus:ring-2 focus:ring-hpay-blue focus:border-transparent transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
