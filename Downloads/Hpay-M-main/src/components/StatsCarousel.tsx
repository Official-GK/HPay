
import React, { useState, useEffect } from 'react';

const StatsCarousel = () => {
  const stats = [
    { number: '2M+', label: 'Active Users', color: 'from-hpay-blue to-hpay-sky' },
    { number: '500+', label: 'Partner Banks', color: 'from-hpay-orange to-hpay-red' },
    { number: '50K+', label: 'Daily Transactions', color: 'from-hpay-sky to-hpay-blue' },
    { number: '99.9%', label: 'Uptime', color: 'from-hpay-red to-hpay-orange' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [stats.length]);

  return (
    <section className="section-padding bg-gradient-to-r from-hpay-blue/5 to-hpay-sky/5">
      <div className="container-custom">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-hpay-black mb-4">
            Trusted by Millions Across India
          </h2>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative h-48 overflow-hidden rounded-2xl">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                  index === currentIndex ? 'translate-x-0' : 
                  index < currentIndex ? '-translate-x-full' : 'translate-x-full'
                }`}
              >
                <div className={`bg-gradient-to-br ${stat.color} rounded-2xl p-8 text-white text-center h-full flex flex-col justify-center`}>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {stats.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-hpay-blue w-8' : 'bg-hpay-gray-blue'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 animate-on-scroll">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${stat.color} rounded-2xl p-8 text-white text-center card-hover`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCarousel;
