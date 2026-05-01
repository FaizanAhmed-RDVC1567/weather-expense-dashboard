// For charting user expenses; investigate refactoring code to remove use of deprecated 'Cell' element.
import React, { useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import type { Expense } from '../../types/expense';

interface ExpenseChartProps {
  expenses: Expense[];
}

const COLORS = {
  food: '#ef4444',
  transport: '#3b82f6',
  entertainment: '#a855f7',
  utilities: '#eab308',
  other: '#6b7280',
};

export const ExpenseChart: React.FC<ExpenseChartProps> = ({ expenses }) => {
  const chartData = useMemo(() => {
    const grouped = expenses.reduce(
      (acc, expense) => {
        const existing = acc.find((item) => item.name === expense.category);
        if (existing) {
          existing.value += expense.amount;
        } else {
          acc.push({ name: expense.category, value: expense.amount });
        }
        return acc;
      },
      [] as Array<{ name: string; value: number }>
    );
    return grouped;
  }, [expenses]);

  const total = useMemo(() => expenses.reduce((sum, e) => sum + e.amount, 0), [expenses]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">Spending by Category</h3>
      {chartData.length === 0 ? (
        <div className="text-center text-gray-500">No data to display</div>
      ) : (
        <>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={chartData} cx="50%" cy="50%" labelLine={false} label={({ name }) => name} outerRadius={80} fill="#8884d8" dataKey="value">
                {chartData.map((entry) => (
                  <Cell key={`cell-${entry.name}`} fill={COLORS[entry.name as keyof typeof COLORS]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `$${Number(value).toFixed(2)}`} />
            </PieChart>
          </ResponsiveContainer>
          <p className="text-center mt-4 font-semibold">Total: ${total.toFixed(2)}</p>
        </>
      )}
    </div>
  );
};