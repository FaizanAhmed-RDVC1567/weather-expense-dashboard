import React from 'react';
import type { Expense } from '../../types/expense';

interface ExpenseListProps {
  expenses: Expense[];
  onDelete: (id: string) => void;
}

const categoryColors: Record<string, string> = {
  food: 'bg-red-100 text-red-800',
  transport: 'bg-blue-100 text-blue-800',
  entertainment: 'bg-purple-100 text-purple-800',
  utilities: 'bg-yellow-100 text-yellow-800',
  other: 'bg-gray-100 text-gray-800',
};

export const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, onDelete }) => {
  const sortedExpenses = [...expenses].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b font-semibold">Recent Expenses</div>
      <div className="divide-y max-h-96 overflow-y-auto">
        {sortedExpenses.length === 0 ? (
          <div className="p-4 text-center text-gray-500">No expenses yet</div>
        ) : (
          sortedExpenses.map((expense) => (
            <div key={expense.id} className="p-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700">
              <div className="flex-1">
                <p className="font-semibold">{expense.description}</p>
                <p className="text-sm text-gray-500">{expense.date}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold mr-4 ${categoryColors[expense.category]}`}>
                {expense.category}
              </span>
              <div className="flex items-center gap-4">
                <p className="font-bold text-lg">${expense.amount.toFixed(2)}</p>
                <button
                  onClick={() => onDelete(expense.id)}
                  className="text-red-600 hover:text-red-800 font-semibold"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};