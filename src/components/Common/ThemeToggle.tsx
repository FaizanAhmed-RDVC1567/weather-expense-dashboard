import React from "react";

interface ThemeToggleProps {
    isDark: boolean,
    onThemeToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onThemeToggle }) => {
    return (
        <button
            onClick={onThemeToggle}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
                isDark
                    ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
        >
            {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
    );
};