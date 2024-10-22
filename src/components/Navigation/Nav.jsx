import './Nav.css';
import React, { useState } from 'react';
import { useTheme } from '../Theme/ThemeContext';

import Theme from '../Theme/Theme';
import { SignInBtn, Hamburger } from '../Buttons/Buttons';

import icon from '../../assets/icons/signin-icon.svg';
import logoLight from '../../assets/images/logo-light.svg';
import logoDark from '../../assets/images/logo-dark.svg';
import burgerLight from '../../assets/icons/hamburger-light-icon.svg';
import burgerDark from '../../assets/icons/hamburger-dark-icon.svg';

const navImages = {
  logo: {
    light: logoLight,
    dark: logoDark
  },
  burger: {
    light: burgerLight,
    dark: burgerDark
  }
};

function Nav() {
  const { theme } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <nav>
      <div className='flex-center gap-3'>
        <div className="img-container-logo">
          <img src={navImages.logo[theme]} alt='Logo' />
        </div>
        <ul className={`list ${menuOpen ? 'open' : ''}`}>
          <li><a className='nav-link' href='#'>Features</a></li>
          <li><a className='nav-link' href='#'>Contact</a></li>
        </ul>
      </div>

      <div className='container'>
        <div className='flex-center gap-1'>
          <p>Darkmode</p>
          <Theme />
        </div>
        <Hamburger src={navImages.burger[theme]} alt={'hamburger-icon'} onClick={toggleMenu} />
        <SignInBtn src={icon} alt={'icon'} />
      </div>
    </nav>
  );
};

export default Nav;