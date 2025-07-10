
import React from 'react';

const AppShowcase = () => {
  const features = [
    'Instant money transfers with zero fees',
    'Multi-language support for regional accessibility',
    'Offline transaction capabilities for rural areas',
    'Biometric security for enhanced protection',
    'Travel booking with exclusive community discounts'
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* App Mockup */}
          <div className="relative animate-on-scroll">
            <div className="relative z-10">
              <div className="bg-hpay-black rounded-[3rem] p-4 shadow-2xl max-w-sm mx-auto">
                <div className="bg-white rounded-[2.5rem] p-6 h-[600px] overflow-hidden">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-semibold text-hpay-black">Good Morning</div>
                      <div className="w-10 h-10 bg-gradient-to-r from-hpay-blue to-hpay-sky rounded-full"></div>
                    </div>
                    
                    {/* Balance Card */}
                    <div className="bg-gradient-to-br from-hpay-blue via-hpay-sky to-hpay-blue rounded-2xl p-6 text-white">
                      <div className="text-sm opacity-90 mb-1">Total Balance</div>
                      <div className="text-3xl font-bold mb-4">₹1,25,430</div>
                      <div className="flex items-center justify-between text-sm">
                        <span>**** 1234</span>
                        <span>H Pay</span>
                      </div>
                    </div>
                    
                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-hpay-bg rounded-2xl p-4 text-center">
                        <div className="w-12 h-12 bg-hpay-orange rounded-full mx-auto mb-3 flex items-center justify-center">
                          <span className="text-white font-bold">₹</span>
                        </div>
                        <div className="text-sm font-medium text-hpay-black">Send</div>
                      </div>
                      <div className="bg-hpay-bg rounded-2xl p-4 text-center">
                        <div className="w-12 h-12 bg-hpay-red rounded-full mx-auto mb-3 flex items-center justify-center">
                          <span className="text-white font-bold">✈</span>
                        </div>
                        <div className="text-sm font-medium text-hpay-black">Travel</div>
                      </div>
                    </div>
                    
                    {/* Recent Transactions */}
                    <div className="space-y-4">
                      <div className="text-lg font-semibold text-hpay-black">Recent</div>
                      {[
                        { name: 'Travel Booking', amount: '-₹2,450', type: 'travel' },
                        { name: 'Money Transfer', amount: '-₹1,200', type: 'transfer' },
                        { name: 'Cashback', amount: '+₹150', type: 'cashback' }
                      ].map((transaction, index) => (
                        <div key={index} className="flex items-center justify-between py-2">
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              transaction.type === 'travel' ? 'bg-hpay-red/10 text-hpay-red' :
                              transaction.type === 'transfer' ? 'bg-hpay-blue/10 text-hpay-blue' :
                              'bg-green-100 text-green-600'
                            }`}>
                              {transaction.type === 'travel' ? '✈' : 
                               transaction.type === 'transfer' ? '₹' : '↗'}
                            </div>
                            <div className="text-sm font-medium text-hpay-black">{transaction.name}</div>
                          </div>
                          <div className={`text-sm font-semibold ${
                            transaction.amount.startsWith('+') ? 'text-green-600' : 'text-gray-600'
                          }`}>
                            {transaction.amount}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-hpay-orange/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-hpay-sky/10 rounded-full blur-2xl"></div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-on-scroll">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-hpay-black">
                Experience Banking Designed for You
              </h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-hpay-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-gray-600 text-lg">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="pt-4">
              <button className="btn-primary">
                Download H Pay App
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
