import React from 'react';

const GrowthTimeline = () => {
  const milestones = [
    { year: '2020', achievement: 'Founded with a vision to serve underserved communities' },
    { year: '2021', achievement: 'Launched digital banking services in 5 states' },
    { year: '2022', achievement: 'Integrated travel booking platform with community discounts' },
    { year: '2023', achievement: 'Reached 2M+ active users across rural and urban India' },
    { year: '2024', achievement: 'Expanding to serve 50M+ users with enhanced AI features' }
  ];

  return (
    <section id="growth-timeline" className="section-padding bg-gradient-to-br from-hpay-blue/5 via-hpay-sky/5 to-hpay-orange/5">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-hpay-black mb-6">
            Our Growth Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From humble beginnings to serving millions, every milestone represents 
            our commitment to financial inclusion.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-hpay-gray-blue/20 card-hover">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-hpay-blue to-hpay-sky rounded-full flex items-center justify-center text-white font-bold">
                      {milestone.year.slice(2)}
                    </div>
                    <div className="text-2xl font-bold text-hpay-blue">{milestone.year}</div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{milestone.achievement}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Central Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-hpay-blue via-hpay-sky to-hpay-orange h-full rounded-full"></div>

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`flex items-center animate-on-scroll ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-hpay-gray-blue/20 card-hover">
                      <div className="text-3xl font-bold text-hpay-blue mb-4">{milestone.year}</div>
                      <p className="text-gray-600 text-lg leading-relaxed">{milestone.achievement}</p>
                    </div>
                  </div>
                  
                  {/* Center Dot */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-6 h-6 bg-gradient-to-br from-hpay-blue to-hpay-sky rounded-full border-4 border-white shadow-lg relative z-10 animate-glow"></div>
                  </div>
                  
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthTimeline;
