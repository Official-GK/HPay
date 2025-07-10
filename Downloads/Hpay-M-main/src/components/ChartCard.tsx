import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './ui/dropdown-menu';

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
  title = "AMOUNT SPENT & RECEIVED",
  data: initialData = [
    { month: "JAN", value1: 75350, value2: 69690 },
    { month: "FEB", value1: 85350, value2: 80500 },
    { month: "MAR", value1: 99390, value2: 98980 },
    { month: "APR", value1: 80350, value2: 90570 },
    { month: "MAY", value1: 91410, value2: 93630 },
    { month: "JUN", value1: 100350, value2: 99570 }
  ]
}) => {
  const [view, setView] = useState<'weekly' | 'monthly' | 'annually'>('monthly');
  const [data, setData] = useState(initialData);

  const weeklyData = [
    { month: "W1", value1: 12000, value2: 15000 },
    { month: "W2", value1: 18000, value2: 21000 },
    { month: "W3", value1: 22000, value2: 25000 },
    { month: "W4", value1: 17000, value2: 20000 }
  ];
  const monthlyData = initialData;
  const annualData = [
    { month: "2021", value1: 600000, value2: 700000 },
    { month: "2022", value1: 800000, value2: 900000 },
    { month: "2023", value1: 950000, value2: 1000000 }
  ];

  const handleViewChange = (newView: 'weekly' | 'monthly' | 'annually') => {
    setView(newView);
    if (newView === 'weekly') setData(weeklyData);
    else if (newView === 'monthly') setData(monthlyData);
    else setData(annualData);
  };

  const chartConfig = {
    value1: {
      label: "Amount Spent",
      color: "#60a5fa",
    },
    value2: {
      label: "Amount Received",
      color: "#2563eb",
    },
  };

  return (
    <article className="bg-[rgba(232,246,255,1)] min-h-[334px] w-full mt-[47px] rounded-[10px] max-md:max-w-full max-md:mt-10">
      <header className="bg-[rgba(232,246,255,1)] flex w-full items-center gap-[40px_200px] text-base text-[#212529] font-medium leading-[1.1] flex-wrap pl-4 pr-7 py-[18px] rounded-[10px] max-md:max-w-full max-md:pr-5">
        <h3 className="text-[#212529] self-stretch flex-1 shrink basis-[0%] my-auto">
          {title}
        </h3>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <svg width="16" height="4" viewBox="0 0 16 4" fill="none">
                <circle cx="2" cy="2" r="2" fill="currentColor"/>
                <circle cx="8" cy="2" r="2" fill="currentColor"/>
                <circle cx="14" cy="2" r="2" fill="currentColor"/>
              </svg>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => handleViewChange('weekly')}>Weekly</DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleViewChange('monthly')}>Monthly</DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleViewChange('annually')}>Annually</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="self-stretch flex w-6 shrink-0 h-6 my-auto" />
      </header>
      
      <div className="flex w-full flex-col text-sm text-[#212529] font-normal whitespace-nowrap leading-[1.1] justify-center px-1 py-0 mt-0 max-md:max-w-full">
        <div className="flex gap-4 px-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#60a5fa]"></div>
            <span className="text-[#212529] text-sm">{chartConfig.value1.label}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#2563eb]"></div>
            <span className="text-[#212529] text-sm">{chartConfig.value2.label}</span>
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
              tickFormatter={(value) => `₹${value.toLocaleString()}`}
            />
            <ChartTooltip content={<ChartTooltipContent formatter={(value, name) => `₹${value.toLocaleString()}`}/>} />
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
