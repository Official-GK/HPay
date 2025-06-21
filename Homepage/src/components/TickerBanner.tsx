import React, { useState, useEffect } from 'react';

interface TickerBannerProps {
  messages?: string[];
  speed?: number;
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
  speed = 50
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <section className="bg-[rgba(115,205,220,1)] self-stretch flex items-stretch gap-[29px] overflow-hidden text-xl text-black font-normal text-center leading-none flex-wrap pr-20 py-[19px] max-md:pr-5">
      {messages.map((message, index) => (
        <div 
          key={index}
          className={`grow shrink w-[86px] transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-70'
          }`}
        >
          {message}
        </div>
      ))}
    </section>
  );
};
