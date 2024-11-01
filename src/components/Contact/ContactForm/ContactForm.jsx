import React, { useState, useEffect } from 'react';
import './contactForm.css';

function ContactForm() {
  const [regform, setRegform] = useState({fullName: '', email: '', specialist: ''});

  const handleChange = e => {
    const {name, value} = e.target;
    setRegform(prevState => ({...prevState, [name]: value}));
  };

  const test = (e) => {
    e.preventDefault();
    console.log(regform);
  }
  
  return (
    <>
      <form className="contact-form-container" onSubmit={test}>
        <h3 className='contact-form-header'>Get Online Consultation</h3>
        <div>
          <label className='contact-form-label' htmlFor="fullname">Full name</label>
          <input id='fullname' name='fullName' className='contact-form-input' type="text" value={regform.fullName} onChange={handleChange}/>
        </div>
        <div>
          <label className='contact-form-label' htmlFor="email">Email address</label>
          <input id='email' name='email' className='contact-form-input' type="text" value={regform.email} onChange={handleChange} />
        </div>
        <div>
          <label className='contact-form-label' htmlFor="specialist">Specialist</label>
          <select id='specialist' name='specialist' className='contact-form-input' type="drop-down" value={regform.specialist} onChange={handleChange}>
            <option value=''>...</option>
            <option value='Designer'>Designer</option>
            <option value='Developer'>Developer</option>
          </select>
        </div>
        <button className='btn btn-more'>Make an appointment</button>
      </form>
    </>
  );
};

export default ContactForm;
