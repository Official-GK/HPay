import React, { useState } from 'react';
import { ServiceCard } from './ServiceCard';
import { AddServiceDropdown } from './AddServiceDropdown';

interface Service {
  id: string;
  title: string;
  icon: string;
  href?: string;
  onClick?: () => void;
}

interface ServiceGridProps {
  services?: Service[];
  columns?: number;
}

export const ServiceGrid: React.FC<ServiceGridProps> = ({
  services: initialServices = [
    { id: '1', title: 'PPI WALLET GOLD', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/d9d164360b1fbc4d980f7c15fcadd75539949710?placeholderIfAbsent=true' },
    { id: '2', title: 'DMT', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/38c4e30b0af84f9cbe6bf2a7f8b80b54c6e7b123?placeholderIfAbsent=true' },
    { id: '3', title: 'AEPS', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/2bf3c7a8d1e04f5f8e9b3c4a6f5e8d7c9b2a1e3f?placeholderIfAbsent=true' },
    { id: '4', title: 'UPI PAY', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/4a8f2b6e3c9d1f7a5e8b2c4f6d9a3b7e1c5f8a2d?placeholderIfAbsent=true' },
    { id: '5', title: 'PPI WALLET', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/6d3a8f1b9c4e7f2a5b8d1e6f3c9a2b7e4f1a8d5c?placeholderIfAbsent=true' },
    { id: '6', title: 'RECHARGE', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/8b5e2f9c1a7d4b6f3e8a9c2f5d1b4e7a6c3f9b2e?placeholderIfAbsent=true' },
    { id: '7', title: 'FINTECH WALLET TO BANK TRANSFER', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/1f7a3c9e5b8d2f6a4e9c3b7f1a5d8c2e6b4f9a3d?placeholderIfAbsent=true' },
    { id: '8', title: 'BILL PAYMENT OFFLINE', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/3c6f9b2e8a1d5f4b7e9c2a6f3d8b1e5c4f7a9b2d?placeholderIfAbsent=true' },
    { id: '9', title: 'CREDIT CARD BILL', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/9d4b7f2e5c8a1f6b3e9a4c7f2d5b8e1c6f4a9b3e?placeholderIfAbsent=true' }
  ],
  columns = 3
}) => {
  const [services, setServices] = useState<Service[]>(initialServices);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);

  const handleServiceClick = (serviceId: string) => {
    console.log(`Service ${serviceId} clicked`);
  };

  const handleAddService = (serviceIndex: number, newService: any) => {
    console.log('Adding service:', newService, 'at index:', serviceIndex);
    
    // Create a completely new array to force re-render
    const updatedServices = services.map((service, index) => {
      if (index === serviceIndex) {
        return {
          id: `${newService.id}-${Date.now()}`, // Ensure unique ID
          title: newService.title.toUpperCase(), // Match the existing format
          icon: newService.icon,
          onClick: () => handleServiceClick(newService.id)
        };
      }
      return service;
    });
    
    console.log('Updated services:', updatedServices);
    setServices(updatedServices);
    setOpenDropdownIndex(null);
  };

  const handleDropdownToggle = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const rows = [];
  for (let i = 0; i < services.length; i += columns) {
    rows.push(services.slice(i, i + columns));
  }

  return (
    <section className="flex min-h-[671px] w-full flex-col items-stretch text-sm text-[#336699] font-normal text-center justify-center pb-2.5 max-md:max-w-full max-md:mt-9">
      {rows.map((row, rowIndex) => (
        <div 
          key={`row-${rowIndex}`}
          className={`flex w-full items-center gap-[34px] justify-center flex-wrap max-md:max-w-full ${
            rowIndex > 0 ? 'mt-[70px] max-md:mt-10' : ''
          }`}
        >
          {row.map((service, serviceIndex) => {
            const globalIndex = rowIndex * columns + serviceIndex;
            return (
              <div key={`service-container-${globalIndex}-${service.id}`} className="relative">
                <ServiceCard
                  key={`service-card-${service.id}`}
                  title={service.title}
                  icon={service.icon}
                  href={service.href}
                  onClick={service.onClick || (() => handleServiceClick(service.id))}
                  showPlusButton={false}
                />
                <AddServiceDropdown
                  key={`dropdown-${globalIndex}`}
                  onServiceAdd={(newService) => handleAddService(globalIndex, newService)}
                  isOpen={openDropdownIndex === globalIndex}
                  onToggle={() => handleDropdownToggle(globalIndex)}
                />
              </div>
            );
          })}
        </div>
      ))}
    </section>
  );
};