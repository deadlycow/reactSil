import React from "react";
import './Buttons.css';

import appleLight from '../../assets/images/appstore-light.svg';
import appleDark from '../../assets/images/appstore-dark.svg';
import googleLight from '../../assets/images/googlestore-light.svg';
import googleDark from '../../assets/images/googlestore-dark.svg';
import chevronLight from '../../assets/icons/chevron-dark.svg';
import chevronDark from '../../assets/icons/chevron-light.svg';

import blueArrow from '../../assets/icons/arrow-right-blue.svg';
import greenArrow from '../../assets/icons/arrow-right-green.svg';
import { NavLink, Link } from "react-router-dom";

const images = {
  apple: {
    light: appleDark,
    dark: appleLight,
  },
  google: {
    light: googleDark,
    dark: googleLight,
  },
  chevron: {
    light: chevronDark,
    dark: chevronLight,
  }
};

const arrows = {
  blue: blueArrow,
  green: greenArrow,
};


function StoreButton({ brand, altText, theme }) {
  return (
    <button className="btn btn-store">
      <img src={images[brand][theme]} alt={altText} />
    </button>
  );
}

function SignInBtn({ src, altText }) {
  return (
    <button className="btn btn-signin">
      <div><img src={src} alt={altText} /></div>
      <span> Sign in / up </span>
    </button>
  );
};

function RoundMoreBtn({ theme }) {
  return (
    <button className="btn btn-round">
      <img className="btn-img-size" src={images.chevron[theme]} alt="chevron-icon" />
    </button>
  )
}

function ContactUs({ color }) {
  return (
    <Link to='/Contact' className={`btn btn-contact-us btn-${color}`}>
      Contact us
      <img src={arrows[color]} />
    </Link>
  )
};

function ContactUsNow() {
  return (
    <NavLink to='/Contact' className="btn btn-contact-us-now">
      Contact us now
    </NavLink>
  )
};

export { SignInBtn, StoreButton, RoundMoreBtn, ContactUs, ContactUsNow };