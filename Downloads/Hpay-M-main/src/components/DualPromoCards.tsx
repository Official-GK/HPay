import React from 'react';
import { ArrowRight } from 'lucide-react';

const DualPromoCards = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-hpay-bg to-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Banking Card */}
          <div className="relative group animate-on-scroll">
            <div className="absolute inset-0 bg-gradient-to-br from-hpay-blue to-hpay-sky rounded-3xl rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
            <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-hpay-gray-blue/20 card-hover">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-hpay-blue to-hpay-sky rounded-2xl flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">₹</span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-hpay-black mb-4">
                    Secure Digital Banking
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Experience the future of banking with our comprehensive digital platform. 
                    From instant transfers to investment opportunities, manage your finances 
                    with confidence and security. Built specifically for the needs of 
                    Indian communities with local language support and rural accessibility.
                  </p>
                </div>
                <button className="btn-primary group">
                  Start Banking
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Travel Card */}
          <div className="relative group animate-on-scroll" style={{ animationDelay: '200ms' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-hpay-orange to-hpay-red rounded-3xl -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
            <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-hpay-gray-blue/20 card-hover">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-hpay-orange to-hpay-red rounded-2xl flex items-center justify-center">
                  <span className="text-white text-2xl">✈</span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-hpay-black mb-4">
                    Smart Travel Solutions
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Discover seamless travel experiences with integrated booking, payments, and support. 
                    From local transportation to domestic flights, we make travel accessible and 
                    affordable for everyone. Special community rates and flexible payment options 
                    ensure you can explore India without financial barriers.
                  </p>
                </div>
                <button className="btn-secondary group">
                  Plan Your Journey
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualPromoCards;
