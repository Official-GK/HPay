import React, { useState } from 'react';
import { TransactionItem } from './TransactionItem';

interface Transaction {
  id: string;
  avatar: string;
  title: string;
  type: string;
  amount: string;
}

interface TransactionListProps {
  title?: string;
  transactions?: Transaction[];
  maxVisible?: number;
}

export const TransactionList: React.FC<TransactionListProps> = ({
  title = "Recent transactions",
  transactions = [
    { id: '1', avatar: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/0a1d57f5dc44b9c6d959eca5577f9ead32049311?placeholderIfAbsent=true', title: 'To Alex', type: 'Transfer', amount: '-$100.00' },
    { id: '2', avatar: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/7df95c06818954a3d1ca936ece51b2d7af1a65f7?placeholderIfAbsent=true', title: 'Grocery Store', type: 'Payment', amount: '-$50.00' },
    { id: '3', avatar: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/97f89fc82dbcc223b211cfc3f9040095c3c4e923?placeholderIfAbsent=true', title: 'Salary', type: 'Deposit', amount: '+$2,000.00' },
    { id: '4', avatar: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/ad94a4718a916e0fd485c02d2dd6a7e1b9e9ffd2?placeholderIfAbsent=true', title: 'To Sarah', type: 'Transfer', amount: '-$200.00' },
    { id: '5', avatar: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/7ed52796e094f51bc5582e2df33e8c321e9dbea8?placeholderIfAbsent=true', title: 'Grocery Store', type: 'Payment', amount: '-$50.00' },
    { id: '6', avatar: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/3b41772b64ccb050ab050393ebee73291eb847f3?placeholderIfAbsent=true', title: 'Salary', type: 'Deposit', amount: '+$2,000.00' },
    { id: '7', avatar: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/ad94a4718a916e0fd485c02d2dd6a7e1b9e9ffd2?placeholderIfAbsent=true', title: 'To Sarah', type: 'Transfer', amount: '-$200.00' },
    { id: '8', avatar: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/ad94a4718a916e0fd485c02d2dd6a7e1b9e9ffd2?placeholderIfAbsent=true', title: 'To Sarah', type: 'Transfer', amount: '-$200.00' },
    { id: '9', avatar: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/ad94a4718a916e0fd485c02d2dd6a7e1b9e9ffd2?placeholderIfAbsent=true', title: 'To Sarah', type: 'Transfer', amount: '-$200.00' },
    { id: '10', avatar: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/bdbd5a286676ea61b8704320e63027c90cff7496?placeholderIfAbsent=true', title: 'Restaurant', type: 'Payment', amount: '-$75.00' }
  ],
  maxVisible = 10
}) => {
  const [filter, setFilter] = useState<'all' | 'income' | 'expense'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTransactions = transactions
    .filter(transaction => {
      const matchesSearch = transaction.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           transaction.type.toLowerCase().includes(searchTerm.toLowerCase());
      
      if (filter === 'income') return matchesSearch && transaction.amount.startsWith('+');
      if (filter === 'expense') return matchesSearch && transaction.amount.startsWith('-');
      return matchesSearch;
    })
    .slice(0, maxVisible);

  return (
    <section className="flex w-full flex-col items-stretch max-md:max-w-full max-md:mt-[30px]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[rgba(51,102,153,1)] text-[22px] font-bold leading-none ml-4 max-md:ml-2.5">
          {title}
        </h2>
        <div className="flex gap-2 mr-4">
          <input
            type="text"
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-3 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as 'all' | 'income' | 'expense')}
            className="px-3 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
      </div>
      
      <div className="flex flex-col">
        {filteredTransactions.length > 0 ? (
          filteredTransactions.map((transaction, index) => (
            <TransactionItem
              key={transaction.id}
              id={transaction.id}
              avatar={transaction.avatar}
              title={transaction.title}
              type={transaction.type}
              amount={transaction.amount}
              isFirst={index === 0}
              isLast={index === filteredTransactions.length - 1}
            />
          ))
        ) : (
          <div className="bg-[rgba(247,250,252,1)] flex w-full items-center justify-center py-8 rounded-[20px] max-md:max-w-full">
            <p className="text-[rgba(79,112,150,1)] text-sm">
              No transactions found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
