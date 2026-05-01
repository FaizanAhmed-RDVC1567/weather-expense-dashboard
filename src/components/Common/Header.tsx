import React from "react";
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
    isDark: false,
    onThemeToggle: () => void
}

export const Header: React.FC<HeaderProps> = ({ isDark, onThemeToggle }) => {
  return (
    <header className={`${isDark ? 'bg-gray-900 text-white' : 'bg-blue-600 text-white'} p-6 shadow-lg`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Weather & Expense Dashboard</h1>
        <ThemeToggle isDark={isDark} onThemeToggle={onThemeToggle} />
      </div>
    </header>
  );
};