import React from 'react'
import { useTheme } from '../../Theme/ThemeContext';

import icon1Light from '../../../assets/icons/socials/facebook-icon-light.svg';
import icon1Dark from '../../../assets/icons/socials/facebook-icon-dark.svg';
import icon2Light from '../../../assets/icons/socials/twitter-icon-light.svg';
import icon2Dark from '../../../assets/icons/socials/twitter-icon-dark.svg';
import icon3Light from '../../../assets/icons/socials/instagram-icon-light.svg';
import icon3Dark from '../../../assets/icons/socials/instagram-icon-dark.svg';
import icon4Light from '../../../assets/icons/socials/youtube-icon-light.svg';
import icon4Dark from '../../../assets/icons/socials/youtube-icon-dark.svg';

const icons = [{
  'light': icon1Light,
  'dark': icon1Dark,
  address: 'https://www.facebook.com/',
}, {
  'light': icon2Light,
  'dark': icon2Dark,
  address: 'https://x.com/',
}, {
  'light': icon3Light,
  'dark': icon3Dark,
  address: 'https://www.instagram.com/',
}, {
  'light': icon4Light,
  'dark': icon4Dark,
  address: 'https://www.youtube.com/',
}];

function Socials() {
  const { theme } = useTheme();

  return (
    <>
      {icons.map((item, index) => (
        <a key={index} href={item.address} target='_blank'>
          <div className='icon-box'>
            <img src={item[theme]} />
          </div>
        </a>
      ))}
    </>
  );
};

export default Socials;
