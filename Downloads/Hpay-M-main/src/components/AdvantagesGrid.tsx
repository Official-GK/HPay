import React from 'react';

const AdvantagesGrid = () => {
  const advantages = [
    {
      title: 'Zero Hidden Fees',
      description: 'Transparent pricing with no surprise charges',
      icon: '₹',
      color: 'from-hpay-blue to-hpay-sky'
    },
    {
      title: 'Rural Connectivity',
      description: 'Works seamlessly in areas with limited internet',
      icon: '📶',
      color: 'from-hpay-orange to-hpay-red'
    },
    {
      title: 'Multi-Language Support',
      description: 'Available in 12+ regional Indian languages',
      icon: '🗣',
      color: 'from-hpay-sky to-hpay-blue'
    },
    {
      title: '24/7 Customer Support',
      description: 'Round-the-clock assistance in your language',
      icon: '🎧',
      color: 'from-hpay-red to-hpay-orange'
    },
    {
      title: 'Biometric Security',
      description: 'Advanced fingerprint and face recognition',
      icon: '🔒',
      color: 'from-hpay-blue to-hpay-orange'
    },
    {
      title: 'Community Benefits',
      description: 'Special rates and rewards for local communities',
      icon: '🤝',
      color: 'from-hpay-sky to-hpay-red'
    }
  ];

  return (
    <section id="advantages" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-hpay-black mb-6">
            Why Choose H Pay?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We've built every feature with your community's needs in mind, ensuring accessibility, 
            security, and convenience for everyone.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group relative animate-on-scroll card-hover bg-gradient-to-br from-white to-hpay-bg border border-hpay-gray-blue/20 rounded-2xl p-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${advantage.color} rounded-2xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {advantage.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-hpay-black mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>

              {/* Hover Effect Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${advantage.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesGrid;
