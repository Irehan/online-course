import React, { useState, useEffect } from 'react';
const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    return (
        <label className="theme-switch" htmlFor="checkbox">
            <input
                type="checkbox"
                id="checkbox"
                checked={theme === 'dark'}
                onChange={toggleTheme}
            />
            <div className="mode-container py-1">
                <i className="gg-sun"></i>
                <i className="gg-moon"></i>
            </div>
        </label>
    );
};
export default ThemeToggle;
