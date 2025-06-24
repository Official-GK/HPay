import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel } from './ui/dropdown-menu';

interface ServiceOption {
  id: string;
  title: string;
  icon: JSX.Element;
  category: string;
}

interface AddServiceDropdownProps {
  onServiceAdd: (service: ServiceOption) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export const AddServiceDropdown: React.FC<AddServiceDropdownProps> = ({
  onServiceAdd,
  isOpen,
  onToggle
}) => {
  const serviceOptions: ServiceOption[] = [
    // Payments
    { 
      id: 'ppi-wallet-gold', 
      title: 'PPI Wallet Gold', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V8H4v4"/><path d="M4 8a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8z"/><path d="M12 15l-2 2 2 2 2-2-2-2z"/></svg>
      ),
      category: 'Payments' 
    },
    { 
      id: 'dmt', 
      title: 'DMT', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1976D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8c-3.333 0-5 1.333-5 4s1.667 4 5 4M12 8h.01"/><path d="M12 16h.01"/><path d="M15 12h-3"/><path d="M12 12V8M12 12v4M8 12h1m5 0h1m-6-3h.01M14 9h.01M10 15h.01M14 15h.01"/></svg>
      ),
      category: 'Payments' 
    },
    { 
      id: 'aeps', 
      title: 'AEPS', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF5722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a9 9 0 00-9 9 9 9 0 009 9 8 8 0 008-8 9 9 0 00-9-9z"/><path d="M22 12h-4"/><path d="M2 12h4"/><path d="M12 2v4"/><path d="M12 22v-4"/></svg>
      ),
      category: 'Payments' 
    },
    { 
      id: 'upi-pay', 
      title: 'UPI Pay', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#39c3e8"><path d="M4 4h6v6H4zM4 14h6v6H4zM14 4h6v6h-6zM14 14h6v6h-6z"/></svg>
      ),
      category: 'Payments' 
    },
    { 
      id: 'ppi-wallet', 
      title: 'PPI Wallet', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6c757d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V8H4v4"/><path d="M4 8a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8z"/></svg>
      ),
      category: 'Payments' 
    },
    
    // Recharge
    { 
      id: 'recharge', 
      title: 'Recharge', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#29B6F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2h-2"/><path d="M12 18V6l-3 3 3-3 3 3"/><rect x="8" y="3" width="8" height="4" rx="1" ry="1"/></svg>
      ),
      category: 'Recharge' 
    },
    
    // Wallet Transfer
    { 
      id: 'fintech-wallet-transfer', 
      title: 'Fintech Wallet to Bank Transfer', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFB300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 8l4-4 4 4"/><path d="M6 4v16"/><path d="M20 12V8H8v4"/><path d="M8 8a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H10a2 2 0 01-2-2V8z"/></svg>
      ),
      category: 'Wallet Transfer' 
    },
    
    // Bill Payments
    { 
      id: 'bill-payment-offline', 
      title: 'Bill Payment Offline', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1976D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><path d="M9 14h6"/><path d="M9 17h6"/><path d="M14 14l-4-4 4-4"/></svg>
      ),
      category: 'Bill Payments' 
    },
    { 
      id: 'bill-payment-online', 
      title: 'Bill Payment Online', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1976D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><path d="M10 17l-3-3 3-3"/><path d="M13 17h1"/></svg>
      ),
      category: 'Bill Payments' 
    },
    { 
      id: 'igl-commercial-bill', 
      title: 'IGL Commercial Bill', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF5722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13.43 3.32a3.5 3.5 0 00-4.86 4.86L3.32 13.43a3.5 3.5 0 004.86 4.86l5.25-5.25a3.5 3.5 0 004.86-4.86l-5.25-5.25z"/><path d="M22 6s-2 6-6 6"/></svg>
      ),
      category: 'Bill Payments' 
    },
    
    // Credit Card
    { 
      id: 'credit-card-bill', 
      title: 'Credit Card Bill', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1976D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
      ),
      category: 'Credit Card' 
    },
    
    // Travel
    { 
      id: 'airline', 
      title: 'Airline', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20l-4-4m4 4l-4 4"/><path d="M12 2l4 10h-8l4-10z"/></svg>
      ),
      category: 'Travel' 
    },
    { 
      id: 'bus', 
      title: 'Bus', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#795548" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2" ry="2"/><line x1="7" y1="11" x2="7" y2="3"/><line x1="17" y1="11" x2="17" y2="3"/><line x1="3" y1="16" x2="21" y2="16"/><circle cx="7" cy="20" r="1"/><circle cx="17" cy="20" r="1"/></svg>
      ),
      category: 'Travel' 
    }
  ];

  const handleServiceSelect = (service: ServiceOption) => {
    console.log('Service selected:', service);
    onServiceAdd(service);
  };

  const groupedServices = serviceOptions.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, ServiceOption[]>);

  return (
    <DropdownMenu open={isOpen} onOpenChange={onToggle}>
      <DropdownMenuTrigger asChild>
        <button 
          className="absolute -top-2 -right-2 bg-white text-[rgba(51,102,153,1)] w-8 h-8 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-10 border border-gray-200"
          aria-label="Add service"
          type="button"
        >
          {isOpen ? <X size={16} className="stroke-2" /> : <Plus size={16} className="stroke-2" />}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-72 max-h-96 overflow-y-auto bg-white border border-gray-200 shadow-xl z-50 rounded-lg"
        align="end"
        side="bottom"
        sideOffset={8}
      >
        {Object.entries(groupedServices).map(([category, services]) => (
          <div key={category}>
            <DropdownMenuLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-3 py-2 bg-gray-50">
              {category}
            </DropdownMenuLabel>
            {services.map((service) => (
              <DropdownMenuItem
                key={service.id}
                onClick={() => handleServiceSelect(service)}
                className="flex items-center gap-3 px-3 py-3 cursor-pointer hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-lg flex-shrink-0">
                  {service.icon}
                </div>
                <span className="text-sm font-medium text-gray-700 truncate flex-1">
                  {service.title}
                </span>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator className="my-1" />
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};