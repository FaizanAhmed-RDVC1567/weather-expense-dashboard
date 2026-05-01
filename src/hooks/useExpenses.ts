import { useState, useCallback, useEffect } from "react";
import type { Expense, ExpenseCategory } from "../types/expense";
import { expenseService } from "../services/expenseService";

export const useExpenses = () => {
    const [expenses, setExpenses] = useState<Expense[]>([]);

    useEffect(() => {
        setExpenses(expenseService.getExpenses());
    }, [])

    const addExpense = useCallback(
        (description: string, amount: number, category: ExpenseCategory, date: string) => {
            const newExpense = expenseService.addExpense({
                description,
                amount,
                category,
                date
            });
            setExpenses((prev) => [...prev, newExpense]);
        },
        []
    );

    const deleteExpense = useCallback((id: string) => {
        expenseService.deleteExpense(id);
        setExpenses((prev) => prev.filter((e) => e.id !== id));
    }, []);

    const updateExpense = useCallback((id: string, updates: Partial<Expense>) => {
        expenseService.updateExpense(id, updates);
        setExpenses((prev) =>
            prev.map((e) => (e.id === id ? { ...e, ...updates } : e))
        );
    }, []);

    return { expenses, addExpense, deleteExpense, updateExpense };
}