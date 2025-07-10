import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './ui/dropdown-menu';

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

export const LineChartComponent: React.FC<LineChartComponentProps> = ({ title, data: initialData }) => {
  const [view, setView] = React.useState<'weekly' | 'monthly' | 'annually'>('monthly');
  const [data, setData] = React.useState(initialData);

  const weeklyData = [
    { month: "W1", line1: 20, line2: 10, line3: 30, line4: 25 },
    { month: "W2", line1: 22, line2: 15, line3: 25, line4: 20 },
    { month: "W3", line1: 32, line2: 18, line3: 20, line4: 15 },
    { month: "W4", line1: 35, line2: 30, line3: 18, line4: 8 }
  ];
  const monthlyData = initialData;
  const annualData = [
    { month: "2021", line1: 200, line2: 150, line3: 300, line4: 250 },
    { month: "2022", line1: 220, line2: 180, line3: 250, line4: 200 },
    { month: "2023", line1: 320, line2: 280, line3: 200, line4: 150 }
  ];

  const handleViewChange = (newView: 'weekly' | 'monthly' | 'annually') => {
    setView(newView);
    if (newView === 'weekly') setData(weeklyData);
    else if (newView === 'monthly') setData(monthlyData);
    else setData(annualData);
  };

  // Set legend labels based on the chart title
  let chartConfig;
  if (title.toLowerCase().includes('received')) {
    chartConfig = {
      line1: {
        label: 'Recharge',
        color: '#10b981',
      },
      line2: {
        label: 'AEPS',
        color: '#3b82f6',
      },
      line3: {
        label: 'Bill Payment',
        color: '#f59e0b',
      },
      line4: {
        label: 'DMT',
        color: '#ef4444',
      },
    };
  } else if (title.toLowerCase().includes('spent')) {
    chartConfig = {
      line1: {
        label: 'Credit Card Bill',
        color: '#10b981',
      },
      line2: {
        label: 'Bus Search',
        color: '#3b82f6',
      },
      line3: {
        label: 'Travel',
        color: '#f59e0b',
      },
      line4: {
        label: 'Wallet Transfer',
        color: '#ef4444',
      },
    };
  } else {
    chartConfig = {
      line1: {
        label: 'Line 1',
        color: '#10b981',
      },
      line2: {
        label: 'Line 2',
        color: '#3b82f6',
      },
      line3: {
        label: 'Line 3',
        color: '#f59e0b',
      },
      line4: {
        label: 'Line 4',
        color: '#ef4444',
      },
    };
  }

  const multipliedData = data.map((d) => ({
    ...d,
    line1: d.line1 * 2500,
    line2: d.line2 * 2500,
    line3: d.line3 * 2500,
    line4: d.line4 * 2500,
  }));

  return (
    <article className="grow pt-1.5 max-md:max-w-full max-md:mt-10">
      <div className="bg-[rgba(232,246,255,1)] flex w-full flex-col items-stretch pb-[49px] rounded-[15px] max-md:max-w-full">
        <header className="text-[#212529] bg-[rgba(232,246,255,1)] z-10 text-base font-medium leading-[1.1] -mt-1.5 px-4 py-[21px] rounded-[15px] max-md:max-w-full max-md:mr-2.5 max-md:pr-5 flex justify-between items-center">
          <span>{title}</span>
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
        </header>
        
        <div className="px-4 pt-4 pb-2 flex gap-6 items-center">
          <div className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full" style={{background: chartConfig.line1.color}}></span>
            <span className="text-[#212529] text-sm">{chartConfig.line1.label}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full" style={{background: chartConfig.line2.color}}></span>
            <span className="text-[#212529] text-sm">{chartConfig.line2.label}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full" style={{background: chartConfig.line3.color}}></span>
            <span className="text-[#212529] text-sm">{chartConfig.line3.label}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full" style={{background: chartConfig.line4.color}}></span>
            <span className="text-[#212529] text-sm">{chartConfig.line4.label}</span>
          </div>
        </div>

        <div className="px-4 py-6">
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <LineChart data={multipliedData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
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
