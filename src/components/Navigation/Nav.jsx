import './Nav.css';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Theme from '../Theme/Theme';
import { useTheme } from '../Theme/ThemeContext';
import { SignInBtn } from '../Buttons/Buttons';
import Hamburger from '../Buttons/Hamburger';

import icon from '../../assets/icons/signin-icon.svg';
import logoLight from '../../assets/images/logo-light.svg';
import logoDark from '../../assets/images/logo-dark.svg';

const navImages = {
    'light': logoLight,
    'dark': logoDark,
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
        <img className='img-logo' src={navImages[theme]} alt='Logo' />
        <div className={`link-list ${menuOpen ? 'open' : ''}`}>
          <div className="link-items">
            <NavLink className='link' to='/'>Features</NavLink>
            <NavLink className='link' to='/Contact'>Contact</NavLink>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='flex-center gap-1'>
          <p>Darkmode</p>
          <Theme />
        </div>
        <Hamburger onClick={toggleMenu} isOpen={menuOpen} />
        <SignInBtn src={icon} alt={'icon'} />
      </div>
    </div>
  );
};

export default Nav;