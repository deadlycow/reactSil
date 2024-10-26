import React from 'react';
import './contactcard.css';
import { ContactUs } from '../Buttons/Buttons';

import phoneIcon from '../../assets/icons/phone-icon.svg';
import messageIcon from '../../assets/icons/message-green-icon.svg';

const icons = {
  blue: phoneIcon,
  green: messageIcon,
}

function ContactCard({ color }) {
  return (
    <div className='contact-card'>
      <img src={icons[color]} alt="icon" />
      <p>Still have questions?</p>
      <ContactUs color={color} />
    </div>
  )
};

export default ContactCard;
