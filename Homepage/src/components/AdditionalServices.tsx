import React from 'react';

interface AdditionalService {
  id: string;
  title: string;
  icon: string;
  href?: string;
  onClick?: () => void;
}

interface AdditionalServicesProps {
  services?: AdditionalService[];
}

export const AdditionalServices: React.FC<AdditionalServicesProps> = ({
  services = [
    { id: 'markup', title: 'Markup', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/c8ecc72b2e5c9de58e3b6295bd60fb8dc40f1502?placeholderIfAbsent=true' },
    { id: 'statement', title: 'Statement', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/405781185ebabebf526d0d71b817ad58c290f56a?placeholderIfAbsent=true', href: 'https://hpay.co.in/Account/Statement' },
    { id: 'history', title: 'History', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/5a0497355a5fd8e8e7f2176ffa29a71745968023?placeholderIfAbsent=true' },
    { id: 'bank-details', title: 'Bank Details', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/209695c2f0c2310951c1a09594019712cae21e28?placeholderIfAbsent=true', href: 'https://hpay.co.in/Account/AddBankDetails' },
    { id: 'refund-report', title: 'Refund Report', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/a272c2fb7570b52d7ef63b8ac2e50b6bc68d5d02?placeholderIfAbsent=true', href: 'https://hpay.co.in/Fetch/RefundReport' },
    { id: 'status-queue', title: 'Status Queue', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/cc245e2ae6044dc457b214dbc199d23aae035074?placeholderIfAbsent=true' },
    { id: 'fintech-wallet', title: 'Fintech Wallet To Main Wallet', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/52be6c2ee1a6bf7613b5fdfce40bab7a977eba8c?placeholderIfAbsent=true', href: 'https://hpay.co.in/Account/CreditWallet' }
  ]
}) => {
  const handleServiceClick = (serviceId: string) => {
    console.log(`Additional service ${serviceId} clicked`);
  };

  const renderServiceCard = (service: AdditionalService, className: string = "") => {
    const cardContent = (
      <div className="items-stretch rounded-[0px_0px_var(--radius-2,2.35px)_var(--radius-2,2.35px)] flex w-full flex-col gap-[8.814px] py-[26px]">
        <img
          src={service.icon}
          alt={`${service.title} icon`}
          className="aspect-[1] object-contain w-[47px] self-center"
        />
        <div className="font-medium w-full mt-[9px]">
          {service.href ? (
            <a
              href={service.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              {service.title.includes('Fintech') ? (
                <>
                  Fintech Wallet To
                  <br />
                  Main Wallet
                </>
              ) : (
                service.title
              )}
            </a>
          ) : (
            service.title
          )}
        </div>
      </div>
    );

    const baseClasses = `bg-white shadow-[0px_2px_2px_rgba(0,0,0,0.14)] overflow-hidden rounded-[20px] transition-transform duration-200 hover:scale-105 ${className}`;

    if (service.href) {
      return (
        <a
          key={service.id}
          href={service.href}
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
        key={service.id}
        onClick={() => handleServiceClick(service.id)}
        className={`${baseClasses} cursor-pointer`}
        aria-label={`Access ${service.title} service`}
      >
        {cardContent}
      </button>
    );
  };

  return (
    <section className="flex w-full flex-col self-stretch items-center text-lg text-[#336699] font-medium text-center my-auto max-md:max-w-full max-md:mt-10">
      <div className="flex items-center gap-[40px_70px] leading-[1.2] max-md:max-w-full">
        {renderServiceCard(services[0], "self-stretch min-h-[141px] whitespace-nowrap w-[179px] my-auto")}
        {renderServiceCard(services[1], "self-stretch min-h-[141px] w-[179px] my-auto")}
      </div>
      
      <div className="self-stretch flex w-full items-center gap-[40px_65px] leading-[1.2] flex-wrap mt-[66px] max-md:max-w-full max-md:mt-10">
        {renderServiceCard(services[2], "self-stretch min-h-[141px] whitespace-nowrap grow shrink w-36 my-auto")}
        {renderServiceCard(services[3], "self-stretch min-h-[141px] grow shrink w-[143px] my-auto")}
        {renderServiceCard(services[4], "self-stretch min-h-[142px] grow shrink w-[142px] my-auto")}
      </div>
      
      <div className="flex items-center gap-[40px_76px] mt-[66px] max-md:max-w-full max-md:mt-10">
        {renderServiceCard(services[5], "self-stretch min-h-[141px] leading-[1.2] w-[179px] my-auto")}
        {renderServiceCard(services[6], "self-stretch leading-[21px] w-[179px] my-auto")}
      </div>
    </section>
  );
};
