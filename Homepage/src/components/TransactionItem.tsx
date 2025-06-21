import React from 'react';

interface TransactionItemProps {
  id: string;
  avatar: string;
  title: string;
  type: string;
  amount: string;
  isFirst?: boolean;
  isLast?: boolean;
}

export const TransactionItem: React.FC<TransactionItemProps> = ({
  id,
  avatar,
  title,
  type,
  amount,
  isFirst = false,
  isLast = false
}) => {
  const isPositive = amount.startsWith('+');
  const isNegative = amount.startsWith('-');

  const roundedClasses = isFirst 
    ? "rounded-[20px_20px_0px_0px]" 
    : isLast 
    ? "rounded-[0px_0px_20px_20px]" 
    : "";

  return (
    <article className={`bg-[rgba(247,250,252,1)] flex w-full items-stretch gap-5 flex-wrap justify-between px-4 py-${isFirst || isLast ? '2' : '3'} max-md:max-w-full ${roundedClasses}`}>
      <div className="flex items-stretch gap-4">
        <img
          src={avatar}
          alt={`${title} avatar`}
          className={`aspect-[1] object-contain w-${isFirst || isLast ? '14' : '12'} shrink-0 ${
            isFirst || isLast ? 'rounded-[28px]' : 'rounded-lg'
          }`}
        />
        <div className={`${isFirst || isLast ? 'my-auto' : 'flex flex-col items-stretch my-auto'}`}>
          <h4 className="text-[rgba(13,20,28,1)] text-base font-medium">
            {title}
          </h4>
          <p className="text-[rgba(79,112,150,1)] text-sm font-normal">
            {type}
          </p>
        </div>
      </div>
      <div className={`text-base font-normal my-auto ${
        isPositive ? 'text-green-600' : 
        isNegative ? 'text-red-600' : 
        'text-[rgba(13,20,28,1)]'
      }`}>
        {amount}
      </div>
    </article>
  );
};
