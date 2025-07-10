import React from 'react';

interface TickerBannerProps {
  messages?: string[];
  speed?: number; // speed in seconds for one full scroll
}

export const TickerBanner: React.FC<TickerBannerProps> = ({ 
  messages = [
    "Hello World",
    "Hello World", 
    "Hello World",
    "gg's guys",
    "Hello World",
    "Hello World",
    "Hello World",
    "Hello World",
    "Hello World",
    "Hello World"
  ],
  speed = 20 // seconds for one full scroll
}) => {
  // Concatenate messages with spacing
  const marqueeText = messages.join('   •   ');

  return (
    <section className="bg-[rgba(115,205,220,1)] self-stretch overflow-hidden text-xl text-black font-normal text-center leading-none pr-20 py-[19px] max-md:pr-5">
      <div className="relative w-full h-8 flex items-center">
        <div
          className="whitespace-nowrap animate-marquee"
          style={{
            animationDuration: `${speed}s`,
          }}
        >
          {marqueeText} &nbsp; {marqueeText}
        </div>
      </div>
    </section>
  );
};

// Add the following CSS to your global styles (e.g., index.css or a relevant CSS file):
//
// @keyframes marquee {
//   0% { transform: translateX(0%); }
//   100% { transform: translateX(-50%); }
// }
// .animate-marquee {
//   display: inline-block;
//   min-width: 100%;
//   will-change: transform;
//   animation-name: marquee;
//   animation-timing-function: linear;
//   animation-iteration-count: infinite;
// }
