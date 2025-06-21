
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

interface LineChartComponentProps {
  title: string;
  data: Array<{
    month: string;
    line1: number;
    line2: number;
    line3: number;
    line4: number;
  }>;
}

export const LineChartComponent: React.FC<LineChartComponentProps> = ({ title, data }) => {
  const chartConfig = {
    line1: {
      label: "Dataset 1",
      color: "#10b981",
    },
    line2: {
      label: "Dataset 2", 
      color: "#3b82f6",
    },
    line3: {
      label: "Dataset 3",
      color: "#f59e0b",
    },
    line4: {
      label: "Dataset 4",
      color: "#ef4444",
    },
  };

  return (
    <article className="grow pt-1.5 max-md:max-w-full max-md:mt-10">
      <div className="bg-[rgba(232,246,255,1)] flex w-full flex-col items-stretch pb-[49px] rounded-[15px] max-md:max-w-full">
        <header className="text-[#212529] bg-[rgba(232,246,255,1)] z-10 text-base font-medium leading-[1.1] -mt-1.5 px-4 py-[21px] rounded-[15px] max-md:max-w-full max-md:mr-2.5 max-md:pr-5 flex justify-between items-center">
          <span>{title}</span>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <svg width="16" height="4" viewBox="0 0 16 4" fill="none">
              <circle cx="2" cy="2" r="2" fill="currentColor"/>
              <circle cx="8" cy="2" r="2" fill="currentColor"/>
              <circle cx="14" cy="2" r="2" fill="currentColor"/>
            </svg>
          </button>
        </header>
        
        <div className="px-4 py-6">
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
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
              <Line 
                type="monotone" 
                dataKey="line1" 
                stroke="var(--color-line1)" 
                strokeWidth={2}
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="line2" 
                stroke="var(--color-line2)" 
                strokeWidth={2}
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="line3" 
                stroke="var(--color-line3)" 
                strokeWidth={2}
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="line4" 
                stroke="var(--color-line4)" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </div>
      </div>
    </article>
  );
};
