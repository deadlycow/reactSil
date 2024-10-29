import React from 'react';
import './newsletter.css';
import notificationIcon from '../../assets/icons/notification-icon.svg';
import SubForm from './Subform/SubForm';

function Newsletter() {
  return (
    <div className='newsletter'>
      <div className='newsletter-header'>
        <img src={notificationIcon} />
        <h4 className='full-text'>Subscribe to our newsletter to stay <br /> informed about latest updates</h4>
        <h4 className='partial-text'>Subscribe to our newsletter</h4>
      </div>
      <SubForm />
    </div>
  )
};

export default Newsletter;
