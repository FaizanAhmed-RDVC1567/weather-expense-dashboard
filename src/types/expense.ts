/*
This interface is all about the user being able to keep track of their expenses on a particular date,
by using drag and drop functionality provided by Tailwind CSS and other libraries.
*/

export interface Expense {
  id: string;
  description: string;
  amount: number;
  category: 'food' | 'transport' | 'entertainment' | 'utilities' | 'other';
  date: string;
}

export type ExpenseCategory = Expense['category'];