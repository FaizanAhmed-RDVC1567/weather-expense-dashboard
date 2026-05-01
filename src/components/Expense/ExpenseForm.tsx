import React, { useState } from 'react';
import type { ExpenseCategory } from '../../types/expense';

interface ExpenseFormProps {
  onAdd: (description: string, amount: number, category: ExpenseCategory, date: string) => void;
  onClose: () => void;
}

export const ExpenseForm: React.FC<ExpenseFormProps> = ({ onAdd, onClose }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState<ExpenseCategory>('other');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (description.trim() && amount) {
      onAdd(description, parseFloat(amount), category, date);
      setDescription('');
      setAmount('');
      setCategory('other');
      setDate(new Date().toISOString().split('T')[0]);
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
          step="0.01"
          required
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as ExpenseCategory)}
          className="px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
        >
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="entertainment">Entertainment</option>
          <option value="utilities">Utilities</option>
          <option value="other">Other</option>
        </select>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold"
      >
        Add Expense
      </button>
    </form>
  );
};