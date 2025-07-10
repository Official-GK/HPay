import React, { useState } from 'react';

interface BalanceCardProps {
  currentBalance?: string;
  secondaryBalance?: string;
  currency?: string;
}

export const BalanceCard: React.FC<BalanceCardProps> = ({
  currentBalance = "5,750,20",
  secondaryBalance = "5,750,20",
  currency = "$"
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const formatBalance = (balance: string) => {
    return isVisible ? `${currency}${balance}` : `${currency}****.**`;
  };

  return (
    <article className="bg-[rgba(51,102,153,1)] w-[427px] max-w-full text-[22px] text-white font-medium rounded-[47px] relative">
      <div className="flex flex-col px-[43px] py-[27px] rounded-[47px] max-md:max-w-full max-md:px-5">
        <div className="flex items-center justify-between">
          <h2 className="text-center ml-2.5">
            Current Balance
          </h2>
          <button 
            onClick={toggleVisibility}
            className="text-white/80 hover:text-white transition-colors text-sm p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-white/60"
            aria-label={isVisible ? "Hide balance" : "Show balance"}
          >
            {isVisible ? (
              // Eye (show) icon SVG
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M1.5 12S5 5.5 12 5.5 22.5 12 22.5 12 19 18.5 12 18.5 1.5 12 1.5 12z"/><circle cx="12" cy="12" r="3.5"/></svg>
            ) : (
              // Eye-off (hide) icon SVG
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M10.73 10.73A3.5 3.5 0 0112 8.5c3.5 0 7 6.5 7 6.5a15.6 15.6 0 01-2.1 2.88M6.53 6.53C5.09 7.98 1.5 12 1.5 12s3.5 6.5 10.5 6.5c1.61 0 3.13-.23 4.5-.65"/><path strokeLinecap="round" strokeLinejoin="round" d="M14.12 14.12A3.5 3.5 0 019.88 9.88"/></svg>
            )}
          </button>
        </div>
        <div className="text-[44px] mt-[22px]">
          {formatBalance(currentBalance)}
        </div>
        <div className="text-left ml-2.5 mt-[33px]">
          Trade Balance
        </div>
        <div className="text-[44px] mt-[22px]">
          {formatBalance(secondaryBalance)}
        </div>
      </div>
    </article>
  );
};
