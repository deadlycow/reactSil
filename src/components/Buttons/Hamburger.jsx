import React from 'react';
import { useTheme } from '../Theme/ThemeContext';
import './Buttons.css';

import burgerLight from '../../assets/icons/hamburger-light-icon.svg';
import burgerDark from '../../assets/icons/hamburger-dark-icon.svg';
import closeLight from '../../assets/icons/close-square-light.svg';
import closeDark from '../../assets/icons/close-square-dark.svg';


const icons = {
  ham: {
    'light': burgerDark,
    'dark': burgerLight,
  },
  cros: {
    'light': closeDark,
    'dark': closeLight,
  }
};

function Hamburger({ onClick, isOpen }) {
  const { theme } = useTheme();
  return (
    <button className="hamburger btn" onClick={onClick}>
      {isOpen ? (<img className='hamburger-icon' src={icons.cros[theme]} />) :
        (<img className='hamburger-icon' src={icons.ham[theme]} />)}
    </button>
  );
};

export default Hamburger;
