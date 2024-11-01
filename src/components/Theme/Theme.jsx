import React from 'react';
import './Theme.css'
import { useTheme } from './ThemeContext';

const ThemeToggle = () => {
  const {theme, toggleTheme } = useTheme();

  return (
    <label className='switch'>
      <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
      <span className='slider round'></span>
    </label>
  );
};

export default ThemeToggle;