import React from 'react';
import './newsletter.css';
import notificationIcon from '../../assets/icons/notification-icon.svg';
import mailIcon from '../../assets/icons/mail-icon.svg';

function Newsletter() {
  return (
    <div className='newsletter'>
      <div className='newsletter-header'>
        <img src={notificationIcon}/>
        <h4>Subscribe to our newsletter</h4>
        {/* <h4>to stay informed about latest updates</h4> */}
      </div>
      <form>
        <input placeholder='Your email' type="email" />
        <img src={mailIcon}/>
        <button className='btn'>Subscribe</button>
      </form>
    </div>
  )
};

export default Newsletter;
