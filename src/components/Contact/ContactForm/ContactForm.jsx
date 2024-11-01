import React from 'react';
import './contactForm.css';
import Success from './formsuccess/Success.jsx';

function ContactForm() {
  return (
    <>
      <form className="contact-form-container">
        <h3 className='contact-form-header'>Get Online Consultation</h3>
        <div>
          <label className='contact-form-label' htmlFor="fullname">Full name</label>
          <input id='fullname' className='contact-form-input' type="text" />
        </div>
        <div>
          <label className='contact-form-label' htmlFor="email">Email address</label>
          <input id='email' className='contact-form-input' type="text" />
        </div>
        <div>
          <label className='contact-form-label' htmlFor="specialist">Specialist</label>
          <select id='specialist' className='contact-form-input' type="drop-down">
            <option>Designer</option>
            <option>Developer</option>
          </select>
        </div>
        <button className='btn btn-more'>Make an appointment</button>
      </form>
    </>
  );
};

export default ContactForm;
