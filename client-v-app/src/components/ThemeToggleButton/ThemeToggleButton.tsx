import React from 'react';
import { useTheme } from '../ThemeContext/ThemeContext.tsx';

export const ThemeToggleButton: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            Тема {theme === 'light' ? 'темная' : 'светлая'}
        </button>
    );
};