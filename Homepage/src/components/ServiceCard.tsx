
import React from 'react';
import { Plus } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  icon: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showPlusButton?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  icon,
  href,
  onClick,
  className = "",
  showPlusButton = false
}) => {
  const cardContent = (
    <>
      <div className="bg-white shadow-[0px_2px_2px_rgba(0,0,0,0.14)] absolute z-0 flex min-h-[132px] max-w-full w-[225px] items-stretch h-[132px] rounded-[20px] right-0 bottom-0" />
      <div className="z-0 flex min-h-[104px] w-full max-w-[207px] flex-col items-stretch">
        <img
          src={icon}
          alt={`${title} icon`}
          className="aspect-[1.05] object-contain w-[63px] self-center"
        />
        <div className="self-stretch flex-1 shrink basis-[0%] w-full gap-2.5 mt-4">
          {title}
        </div>
      </div>
      
      {showPlusButton && (
        <button 
          className="absolute -top-2 -right-2 bg-white text-[rgba(51,102,153,1)] w-8 h-8 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          aria-label="Add service"
        >
          <Plus size={16} className="stroke-2" />
        </button>
      )}
    </>
  );

  const baseClasses = `self-stretch relative min-h-[132px] w-[225px] my-auto pl-[9px] pr-2 py-3.5 transition-transform duration-200 hover:scale-105 ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} cursor-pointer`}
      aria-label={`Access ${title} service`}
    >
      {cardContent}
    </button>
  );
};
