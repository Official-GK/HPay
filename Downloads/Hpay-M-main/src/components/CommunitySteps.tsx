
import React from 'react';

const CommunitySteps = () => {
  const steps = [
    {
      step: '01',
      title: 'Download & Register',
      description: 'Get the H Pay app and create your account with simple verification process'
    },
    {
      step: '02',
      title: 'Connect Your Community',
      description: 'Join local groups and access community-specific benefits and discounts'
    },
    {
      step: '03',
      title: 'Start Banking & Traveling',
      description: 'Begin your journey with secure banking and seamless travel experiences'
    },
    {
      step: '04',
      title: 'Earn & Share Rewards',
      description: 'Accumulate rewards and share benefits with your community members'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-hpay-bg to-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-hpay-black mb-6">
            Join Our Growing Community
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting started with H Pay is simple. Follow these easy steps to become 
            part of India's most inclusive financial community.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Mobile Steps */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="animate-on-scroll"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-hpay-gray-blue/20 card-hover">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-hpay-blue to-hpay-sky rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-hpay-black">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Steps */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group animate-on-scroll"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-hpay-gray-blue/20 card-hover h-full">
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-hpay-blue to-hpay-sky rounded-2xl flex items-center justify-center text-white text-xl font-bold mx-auto group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-hpay-black mb-4">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>

                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-hpay-blue to-hpay-sky transform -translate-y-1/2 z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <button className="btn-primary text-lg px-8 py-4">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySteps;
