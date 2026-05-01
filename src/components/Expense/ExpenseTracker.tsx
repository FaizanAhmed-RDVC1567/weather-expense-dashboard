import React, { useState } from 'react';
import { useExpenses } from '../../hooks/useExpenses';
import { ExpenseForm } from './ExpenseForm';
import { ExpenseList } from './ExpenseList';
import { ExpenseChart } from './ExpenseChart';

export const ExpenseTracker: React.FC = () => {
  const { expenses, addExpense, deleteExpense } = useExpenses();
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Expense Tracker</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold"
        >
          {showForm ? 'Cancel' : '+ Add Expense'}
        </button>
      </div>

      {showForm && <ExpenseForm onAdd={addExpense} onClose={() => setShowForm(false)} />}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ExpenseList expenses={expenses} onDelete={deleteExpense} />
        </div>
        <div>
          <ExpenseChart expenses={expenses} />
        </div>
      </div>
    </div>
  );
};