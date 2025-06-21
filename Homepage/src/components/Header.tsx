import React from 'react';

interface HeaderProps {
  userName?: string;
  userId?: string;
}

export const Header: React.FC<HeaderProps> = ({ 
  userName = "Abhinav mishra", 
  userId = "EPWR000019 (hpay)" 
}) => {
  return (
    <header className="bg-[rgba(205,227,243,0)] self-stretch flex w-full flex-col items-center max-md:max-w-full">
      <div className="bg-[rgba(255,255,255,0.00)] w-full max-w-[1440px] max-md:max-w-full">
        <div className="flex w-full items-stretch justify-center flex-wrap max-md:max-w-full">
          <div className="max-w-[1440px] flex min-w-60 w-full items-stretch gap-5 flex-wrap h-full justify-between flex-1 shrink basis-[0%] pb-1.5 px-[13px] max-md:max-w-full">
            <div className="flex items-stretch max-md:max-w-full">
              <div className="flex flex-col items-stretch justify-center px-2 py-1">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/bd257b50a4a7d802828e6c009dcfbf364d945c89?placeholderIfAbsent=true"
                  alt="Company Logo"
                  className="aspect-[2.6] object-contain w-[131px] max-w-full"
                />
              </div>
              <nav className="flex items-center text-[15px] text-[#222222] font-semibold flex-wrap grow shrink basis-auto mt-2 max-md:max-w-full">
                <div className="self-stretch flex min-h-[23px] my-auto" />
                <div className="self-stretch grow shrink w-[122px] my-auto">
                  <button className="flex max-w-full w-[131px] items-stretch gap-1 px-[11px] py-2 hover:bg-gray-50 rounded-md transition-colors">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/35dd3534a66708e16a9b10b05fb37d16d6cce0e0?placeholderIfAbsent=true"
                      alt="Payments icon"
                      className="aspect-[1.04] object-contain w-6 shrink-0"
                    />
                    <span className="text-[15px] font-semibold leading-[22.5px]">
                      Payments
                    </span>
                  </button>
                </div>
                <div className="self-stretch grow shrink w-[124px] my-auto">
                  <button className="flex max-w-full w-[133px] items-stretch gap-1 px-[11px] py-2 hover:bg-gray-50 rounded-md transition-colors">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/0f6abf24bf46c4817026624d4a7361d01deb0674?placeholderIfAbsent=true"
                      alt="Recharge icon"
                      className="aspect-[1] object-contain w-[30px] shrink-0"
                    />
                    <span className="text-[15px] font-semibold leading-[22.5px]">
                      Recharge
                    </span>
                  </button>
                </div>
                <div className="self-stretch grow shrink w-[162px] my-auto">
                  <button className="flex w-full gap-[3.75px] px-[11px] py-2 hover:bg-gray-50 rounded-md transition-colors">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/7d3b9d6f945b5356aa067c9fcb455d05b9db7999?placeholderIfAbsent=true"
                      alt="Wallet Transfer icon"
                      className="aspect-[0.96] object-contain w-6 shrink-0"
                    />
                    <span className="text-[15px] font-semibold leading-[22.5px]">
                      Wallet Transfer
                    </span>
                  </button>
                </div>
                <div className="self-stretch grow shrink w-36 my-auto">
                  <button className="flex w-full gap-[3.75px] px-[11px] py-2 hover:bg-gray-50 rounded-md transition-colors">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/64e446a7b0fbeefa454ba490447937faa2219b8b?placeholderIfAbsent=true"
                      alt="Bill Payments icon"
                      className="aspect-[0.96] object-contain w-6 shrink-0"
                    />
                    <span className="text-[15px] font-semibold leading-[22.5px]">
                      BillPayments
                    </span>
                  </button>
                </div>
                <div className="self-stretch grow shrink w-[131px] my-auto">
                  <button className="flex max-w-full w-[140px] items-stretch gap-1 px-[11px] py-2 hover:bg-gray-50 rounded-md transition-colors">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/291517745a825ed466aa90091eae4583370db2dc?placeholderIfAbsent=true"
                      alt="Credit card icon"
                      className="aspect-[1] object-contain w-6 shrink-0"
                    />
                    <span className="text-[15px] font-semibold leading-[22.5px]">
                      Credit card
                    </span>
                  </button>
                </div>
                <div className="self-stretch grow shrink w-[92px] my-auto">
                  <button className="flex w-full gap-[3.75px] px-[11px] py-2 hover:bg-gray-50 rounded-md transition-colors">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/0618dbec78fcf8f4826e996dcfce3f3a28a7c962?placeholderIfAbsent=true"
                      alt="Travel icon"
                      className="aspect-[0.96] object-contain w-6 shrink-0"
                    />
                    <span className="text-[15px] font-semibold leading-[22.5px]">
                      Travel
                    </span>
                  </button>
                </div>
              </nav>
            </div>
            <div className="flex gap-[40px_42px]">
              <button className="bg-[rgba(46,56,41,1)] flex min-h-10 items-center gap-2 overflow-hidden w-10 justify-center h-10 mt-[13px] px-2.5 rounded-[20px] hover:bg-[rgba(46,56,41,0.8)] transition-colors">
                <div className="self-stretch w-full flex-1 shrink basis-[0%] my-auto">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/86cafdf5d9d4c92cd6ceb5ad50abba6197c8d7e9?placeholderIfAbsent=true"
                    alt="Notifications"
                    className="aspect-[1] object-contain w-5 flex-1"
                  />
                </div>
              </button>
              <div className="flex gap-4">
                <div className="flex flex-col items-stretch text-xs mt-4">
                  <div className="flex items-stretch gap-1">
                    <span className="text-[#6c757d] text-xs font-normal leading-[18px]">
                      Welcome:
                    </span>
                    <span className="text-[#222222] text-xs font-medium leading-[18px]">
                      {userName}
                    </span>
                  </div>
                  <div className="text-[#222222] text-xs font-medium leading-[18px]">
                    {userId}
                  </div>
                </div>
                <button className="flex items-center text-[15px] text-[#582a80] font-semibold whitespace-nowrap py-2 hover:text-[#582a80]/80 transition-colors">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/6935c58a53bdbf8fe928db4cd852d1906c5ee715?placeholderIfAbsent=true"
                    alt="User menu"
                    className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                  />
                  <span className="text-[15px] font-semibold leading-[22.5px]">
                    ▾
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
