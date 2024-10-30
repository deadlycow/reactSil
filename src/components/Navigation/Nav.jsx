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
import { Link } from 'react-router-dom';

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
    <div className='main-nav wrapper'>
      <div className='flex-center gap-3'>
        <img className='img-logo' src={navImages.logo[theme]} alt='Logo' />
        <div className={`link-list ${menuOpen ? 'open' : ''}`}>
          <div className="link-items">
            <Link className='link' to='/'>Features</Link>
            <Link className='link' to='Contact'>Contact</Link>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='flex-center gap-1'>
          <p>Darkmode</p>
          <Theme />
        </div>
        <Hamburger src={navImages.burger[theme]} alt={'hamburger-icon'} onClick={toggleMenu} />
        <SignInBtn src={icon} alt={'icon'} />
      </div>
    </div>
  );
};

export default Nav;