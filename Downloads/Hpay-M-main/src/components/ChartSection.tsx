import React from 'react';

interface ChartSectionProps {
  title?: string;
  chartImage: string;
}

export const ChartSection: React.FC<ChartSectionProps> = ({
  title = "AMOUNT RECEIVED",
  chartImage
}) => {
  return (
    <article className="grow pt-1.5 max-md:max-w-full max-md:mt-10">
      <div className="bg-[rgba(232,246,255,1)] flex w-full flex-col items-stretch pb-[49px] rounded-[15px] max-md:max-w-full">
        <header className="text-[#212529] bg-[rgba(232,246,255,1)] z-10 text-base font-medium leading-[1.1] -mt-1.5 px-4 py-[21px] rounded-[15px] max-md:max-w-full max-md:mr-2.5 max-md:pr-5">
          {title}
        </header>
        <div className="self-center flex w-[542px] max-w-full items-stretch gap-1 flex-wrap mt-3.5">
          <div className="text-[#767676] text-right text-sm font-normal leading-[1.1] grow">
            40k
          </div>
          <div className="flex flex-col items-stretch justify-center grow shrink-0 basis-0 w-fit my-auto p-1 max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/354535e10c58679c5dd935977bb303805600221e?placeholderIfAbsent=true"
              alt="Chart grid line"
              className="aspect-[500] object-contain w-full stroke-[1px] stroke-[#313131] max-md:max-w-full"
            />
          </div>
        </div>
        <img
          src={chartImage}
          alt={`${title} chart visualization`}
          className="aspect-[3.57] object-contain w-full ml-4 mt-1 max-md:max-w-full"
        />
      </div>
    </article>
  );
};
