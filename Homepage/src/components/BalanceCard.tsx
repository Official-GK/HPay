
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
            className="text-white/80 hover:text-white transition-colors text-sm"
            aria-label={isVisible ? "Hide balance" : "Show balance"}
          >
            {isVisible ? "👁️" : "👁️‍🗨️"}
          </button>
        </div>
        <div className="text-[44px] mt-[22px]">
          {formatBalance(currentBalance)}
        </div>
        <div className="text-center ml-2.5 mt-[33px]">
          Current Balance
        </div>
        <div className="text-[44px] mt-[22px]">
          {formatBalance(secondaryBalance)}
        </div>
      </div>
    </article>
  );
};
