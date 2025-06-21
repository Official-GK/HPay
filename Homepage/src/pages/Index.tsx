
import React from 'react';
import { Header } from '@/components/Header';
import { TickerBanner } from '@/components/TickerBanner';
import { BalanceCard } from '@/components/BalanceCard';
import { ChartCard } from '@/components/ChartCard';
import { ServiceGrid } from '@/components/ServiceGrid';
import { TransactionList } from '@/components/TransactionList';
import { AdditionalServices } from '@/components/AdditionalServices';
import { LineChartComponent } from '@/components/LineChart';

const Index: React.FC = () => {
  const chartData = [
    { month: 'Jan', line1: 20, line2: 10, line3: 30, line4: 25 },
    { month: 'Feb', line1: 22, line2: 15, line3: 25, line4: 20 },
    { month: 'Mar', line1: 32, line2: 18, line3: 20, line4: 15 },
    { month: 'Apr', line1: 35, line2: 30, line3: 18, line4: 8 },
    { month: 'May', line1: 28, line2: 32, line3: 15, line4: 25 },
    { month: 'Jun', line1: 30, line2: 35, line3: 18, line4: 15 },
    { month: 'Jul', line1: 25, line2: 28, line3: 20, line4: 12 },
    { month: 'Aug', line1: 18, line2: 15, line3: 25, line4: 8 },
    { month: 'Sep', line1: 15, line2: 2, line3: 15, line4: 5 },
  ];

  return (
    <div className="flex flex-col items-center py-[19px]">
      <Header />
      
      <TickerBanner />
      
      <main className="w-full max-w-[1348px] mt-[46px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[38%] max-md:w-full max-md:ml-0">
            <div className="max-md:max-w-full max-md:mt-9">
              <BalanceCard />
              <ChartCard />
            </div>
          </div>
          <div className="w-[62%] ml-5 max-md:w-full max-md:ml-0">
            <ServiceGrid />
          </div>
        </div>
      </main>

      <section className="w-full max-w-[1330px] mt-[78px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <LineChartComponent title="AMOUNT RECEIVED" data={chartData} />
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <LineChartComponent title="AMOUNT SPENT" data={chartData} />
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1358px] mt-9 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <TransactionList />
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <AdditionalServices />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
