import React, { useState } from 'react'
import './contactinfo.css';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import mail from '../../assets/icons/mail-icon-primary.svg';
import add from '../../assets/icons/add-group-primary-icon.svg';
import ContactForm from './ContactForm/ContactForm';
import Success from './ContactForm/formsuccess/Success.jsx';

function ContactInfo() {

  const [sent, setSent] = useState(false);

  function changeSent(value) {
    setSent(value);
  }
  
  return (
    <div className='nav-padding wrapper'>
      <Breadcrumb />
      <div className="info-container">
        <h1>Contact us</h1>
        <div className="mail-container">
          <div className="icon-round">
            <img src={mail} />
          </div>
          <div className="info">
            <h4>Email us</h4>
            <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
            <a className='contact-link' href="#">Leave a message</a>
          </div>
        </div>
        <div className="career-container">
          <div className="icon-round">
            <img src={add} />
          </div>
          <div className="info">
            <h4>Careers</h4>
            <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
            <a className='contact-link' href="#">Send an application</a>
          </div>
        </div>
        <div className="form-pop">
          <div className="pop">
            <ContactForm success={changeSent} />
            {sent ? (<Success action={() => changeSent(false)}/>) : ''}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
