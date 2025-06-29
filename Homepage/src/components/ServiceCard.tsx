
import React from 'react';

interface ServiceCardProps {
  title: string;
  icon: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showPlusButton?: boolean;
  isCustomService?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  icon,
  onClick,
  className = "",
  isCustomService = false
}) => {
  // Comprehensive debug logging
  console.log('=== ServiceCard Debug ===');
  console.log('Title:', title);
  console.log('IsCustomService:', isCustomService);
  console.log('Icon exists:', !!icon);
  console.log('Icon length:', icon?.length || 0);

  const cardContent = (
    <div className="relative w-[225px] h-[132px] bg-white shadow-[0px_2px_2px_rgba(0,0,0,0.14)] rounded-[20px] overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10">
        {isCustomService && icon ? (
          <>
            {/* Icon container with proper sizing and positioning */}
            <div className="w-12 h-12 mb-3 bg-blue-50 border-2 border-blue-200 rounded-lg flex items-center justify-center overflow-hidden">
              <div 
                dangerouslySetInnerHTML={{ __html: icon }}
                className="w-8 h-8 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>svg]:max-w-8 [&>svg]:max-h-8"
              />
            </div>
            
            {/* Title with proper visibility */}
            <div className="text-center text-gray-700 text-sm font-medium leading-tight max-w-[180px] truncate">
              {title}
            </div>
          </>
        ) : !isCustomService ? (
          <>
            {/* Add service text centered without plus sign */}
            <div className="text-center text-gray-500 text-sm font-medium">
              {title}
            </div>
          </>
        ) : (
          <div className="text-xs text-red-500 text-center">
            Custom service but no icon data
          </div>
        )}
      </div>
    </div>
  );

  const baseClasses = `transition-transform duration-200 hover:scale-105 cursor-pointer ${className}`;

  return (
    <button
      onClick={onClick}
      className={baseClasses}
      aria-label={isCustomService ? `Access ${title} service` : 'Add new service'}
    >
      {cardContent}
    </button>
  );
};
