import React from 'react';

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
      <div className="z-10 flex min-h-[104px] w-full max-w-[207px] flex-col items-stretch justify-center px-4 py-3">
        <div className="flex items-center justify-center mb-3">
          <img
            src={icon}
            alt={`${title} icon`}
            className="aspect-[1.05] object-contain w-[48px] h-[48px]"
          />
        </div>
        <div className="text-center text-sm font-medium text-[#336699] leading-tight">
          {title}
        </div>
      </div>
    </>
  );

  const baseClasses = `self-stretch relative min-h-[132px] w-[225px] my-auto transition-transform duration-200 hover:scale-105 cursor-pointer ${className}`;

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
      className={baseClasses}
      aria-label={`Access ${title} service`}
    >
      {cardContent}
    </button>
  );
};