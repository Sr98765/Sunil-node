import React, { useState } from 'react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}>
      <button onClick={toggleTheme} className="toggle-button">
        {isDarkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      </button>
      <p className="theme-info">
        Current Theme: {isDarkMode ? 'Dark' : 'Light'}
      </p>
    </div>
  );
};

export default ThemeToggle;
