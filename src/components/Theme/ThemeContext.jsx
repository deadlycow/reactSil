import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = JSON.parse(localStorage.getItem('theme'));
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('theme', savedTheme);
    }
    else {
      document.documentElement.setAttribute('theme', theme);
    }
  })

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('theme', theme);

    localStorage.setItem('theme', JSON.stringify(newTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};