// In Typescript, when importing interfaces, the 'type' keyword must be immediately used 
// after the import keyword tp prevent an error.
import type { Expense } from '../types/expense';

const STORAGE_KEY = 'expenses';

export const expenseService = {
  getExpenses: (): Expense[] => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  },

  addExpense: (expense: Omit<Expense, 'id'>): Expense => {
    const expenses = expenseService.getExpenses();
    const newExpense: Expense = {
      ...expense,
      id: Date.now().toString(),
    };
    expenses.push(newExpense);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
    return newExpense;
  },

  deleteExpense: (id: string): void => {
    const expenses = expenseService.getExpenses();
    const filtered = expenses.filter((e) => e.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  },

  updateExpense: (id: string, updates: Partial<Expense>): Expense | null => {
    const expenses = expenseService.getExpenses();
    const index = expenses.findIndex((e) => e.id === id);
    if (index === -1) return null;
    expenses[index] = { ...expenses[index], ...updates };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
    return expenses[index];
  },
};