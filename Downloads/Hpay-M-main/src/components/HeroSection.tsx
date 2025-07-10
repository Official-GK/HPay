
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPulsing(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-hpay-bg via-white to-hpay-sky/10 overflow-hidden">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hpay-black leading-tight">
                Empowering Communities Through 
                <span className="text-hpay-blue block mt-2">Digital Banking</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl">
                H Pay is your trusted partner for secure banking and seamless travel experiences, 
                designed specifically for underserved communities across India.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className={`btn-primary group ${isPulsing ? 'animate-pulse-once' : ''}`}
                onAnimationEnd={() => setIsPulsing(false)}
              >
                Get Started Today
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="btn-outline">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-hpay-gray-blue/20">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-hpay-blue rounded-full"></div>
                      <span className="font-semibold text-hpay-black">H Pay Wallet</span>
                    </div>
                    <div className="text-sm text-gray-500">Mobile Banking</div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-hpay-blue to-hpay-sky rounded-2xl p-6 text-white">
                    <div className="text-sm opacity-90">Available Balance</div>
                    <div className="text-2xl font-bold">₹45,250.00</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-hpay-bg rounded-xl p-4 text-center">
                      <div className="w-10 h-10 bg-hpay-orange rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-white text-sm font-bold">₹</span>
                      </div>
                      <div className="text-sm text-gray-600">Send Money</div>
                    </div>
                    <div className="bg-hpay-bg rounded-xl p-4 text-center">
                      <div className="w-10 h-10 bg-hpay-red rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-white text-sm font-bold">✈</span>
                      </div>
                      <div className="text-sm text-gray-600">Book Travel</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-hpay-sky/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-hpay-orange/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
