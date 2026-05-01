import { useState, useEffect } from "react";

export const useTheme = () => {
    const [isDark, setIsDark] = useState(() => {
        const stored = localStorage.getItem('theme');
        return stored ? JSON.parse(stored) : false;
    });

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(isDark));
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    // if type for 'prev' is not set, IntelliSense goes off. Investigate later
    const toggleTheme = () => setIsDark((prev: any) => !prev);

    return { isDark, toggleTheme };
}