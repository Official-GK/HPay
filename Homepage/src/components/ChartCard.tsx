
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

interface ChartData {
  month: string;
  value1: number;
  value2: number;
}

interface ChartCardProps {
  title?: string;
  data?: ChartData[];
}

export const ChartCard: React.FC<ChartCardProps> = ({
  title = "AMOUNT RECEIVED",
  data = [
    { month: "JAN", value1: 35, value2: 69 },
    { month: "FEB", value1: 35, value2: 50 },
    { month: "MAR", value1: 39, value2: 98 },
    { month: "APR", value1: 35, value2: 57 },
    { month: "MAY", value1: 41, value2: 63 },
    { month: "JUN", value1: 35, value2: 57 }
  ]
}) => {
  const chartConfig = {
    value1: {
      label: "Series 1",
      color: "#60a5fa",
    },
    value2: {
      label: "Series 2",
      color: "#2563eb",
    },
  };

  return (
    <article className="bg-[rgba(232,246,255,1)] min-h-[334px] w-full mt-[47px] rounded-[10px] max-md:max-w-full max-md:mt-10">
      <header className="bg-[rgba(232,246,255,1)] flex w-full items-center gap-[40px_200px] text-base text-[#212529] font-medium leading-[1.1] flex-wrap pl-4 pr-7 py-[18px] rounded-[10px] max-md:max-w-full max-md:pr-5">
        <h3 className="text-[#212529] self-stretch flex-1 shrink basis-[0%] my-auto">
          {title}
        </h3>
        <div className="self-stretch flex w-6 shrink-0 h-6 my-auto" />
      </header>
      
      <div className="flex w-full flex-col text-sm text-[#212529] font-normal whitespace-nowrap leading-[1.1] justify-center px-1 py-6 max-md:max-w-full">
        <div className="flex gap-4 px-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#60a5fa]"></div>
            <span className="text-[#212529] text-sm">Legend</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#2563eb]"></div>
            <span className="text-[#212529] text-sm">Legend</span>
          </div>
        </div>
      </div>

      <div className="px-4 pb-4">
        <ChartContainer config={chartConfig} className="h-[200px] w-full">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }}
              tickFormatter={(value) => `${value}k`}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar 
              dataKey="value1" 
              fill="var(--color-value1)" 
              radius={[2, 2, 0, 0]}
              barSize={8}
            />
            <Bar 
              dataKey="value2" 
              fill="var(--color-value2)" 
              radius={[2, 2, 0, 0]}
              barSize={8}
            />
          </BarChart>
        </ChartContainer>
      </div>
    </article>
  );
};
