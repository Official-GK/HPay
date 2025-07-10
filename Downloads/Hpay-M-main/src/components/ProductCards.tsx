import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProductCards = () => {
  const products = [
    {
      name: 'H Pay Wallet',
      description: 'Digital wallet for instant payments, money transfers, and bill payments with multi-language support',
      icon: '💳',
      features: ['Instant Transfers', 'Bill Payments', 'QR Code Support'],
      color: 'from-hpay-blue to-hpay-sky'
    },
    {
      name: 'Travel Buddy',
      description: 'Comprehensive travel booking platform with community discounts and flexible payment options',
      icon: '✈️',
      features: ['Flight Booking', 'Hotel Reservations', 'Local Transport'],
      color: 'from-hpay-orange to-hpay-red'
    },
    {
      name: 'Community Banking',
      description: 'Savings accounts and investment options designed for rural and semi-urban communities',
      icon: '🏦',
      features: ['High Interest Savings', 'Micro Investments', 'Group Savings'],
      color: 'from-hpay-sky to-hpay-blue'
    },
    {
      name: 'Business Solutions',
      description: 'Payment processing and business banking tools for small and medium enterprises',
      icon: '💼',
      features: ['Payment Gateway', 'Business Loans', 'Inventory Management'],
      color: 'from-hpay-red to-hpay-orange'
    }
  ];

  return (
    <section className="section-padding bg-white" id="products">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-hpay-black mb-6">
            Our Product Suite
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive financial and travel solutions designed to meet the diverse needs 
            of Indian communities, from rural villages to bustling cities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative animate-on-scroll"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative bg-white border border-hpay-gray-blue/20 rounded-3xl p-8 md:p-10 shadow-lg card-hover">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                      {product.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-hpay-black">
                      {product.name}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="text-sm font-semibold text-hpay-black mb-2">Key Features:</div>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className={`px-3 py-1 bg-gradient-to-r ${product.color} text-white text-sm rounded-full`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="btn-outline group w-full sm:w-auto">
                    Learn More
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCards;
