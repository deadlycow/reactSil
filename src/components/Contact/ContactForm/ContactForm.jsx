import React, { useState, useEffect } from 'react';
import './contactForm.css';

function ContactForm({ success }) {
  const [regform, setRegform] = useState({ fullName: '', email: '', specialist: '' });
  const [errors, setErrors] = useState({ fullName: '', email: '', specialist: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setRegform(prevState => ({ ...prevState, [name]: value }));
    setErrors(prevState => ({ ...prevState, [name]: '' }))
  };

  const validate = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const namePattern = /^[\p{L}]+(?:[\s'-][\p{L}]+)*$/u;
    const wordPattern = /^[a-zA-ZåäöÅÄÖ]+$/;

    let newErrors = { fullName: '', email: '', specialist: '' };
    let valid = true;

    if (!namePattern.test(regform.fullName)) {
      newErrors.fullName = 'Please provide a full name.';
      valid = false;
    }
    if (!emailPattern.test(regform.email)) {
      newErrors.email = 'Please provide a valid e-mail.';
      valid = false;
    }
    if (regform.specialist === '' || !wordPattern.test(regform.specialist) ) {
      newErrors.specialist = 'Please select a specializasion.';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  }

  const test = async (e) => {
    e.preventDefault();

    if (validate()) {

      try {
        const response = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullName: regform.fullName,
            email: regform.email,
            specialist: regform.specialist
          }),
        });

        if (!response.ok) {
          throw new Error(response.status);
        }
        else {
          console.log(response.status);
          setRegform({ fullName: '', email: '', specialist: '' })
          success(true);
        }
      }
      catch (error) {
        console.log(error.message);
      }
    }
  }

  return (
    <>
      <form className="contact-form-container" onSubmit={test}>
        <h3 className='contact-form-header'>Get Online Consultation</h3>
        <div className='relative-box'>
          <label className='contact-form-label' htmlFor="fullname">Full name</label>
          <input id='fullname' name='fullName' className={`contact-form-input ${errors.fullName === '' ? '' : 'error'}`} type="text" value={regform.fullName} onChange={handleChange} />
          <label className={`error-label ${errors.fullName === '' ? '' : 'error'}`}>{errors.fullName}</label>
        </div>
        <div className='relative-box'>
          <label className='contact-form-label' htmlFor="email">Email address</label>
          <input id='email' name='email' className={`contact-form-input ${errors.email === '' ? '' : 'error'}`} type="text" value={regform.email} onChange={handleChange} />
          <label className={`error-label ${errors.email === '' ? '' : 'error'}`}>{errors.email}</label>
        </div>
        <div className='relative-box'>
          <label className='contact-form-label' htmlFor="specialist">Specialist</label>
          <label className={`error-label ${errors.specialist === '' ? '' : 'error'}`}>{errors.specialist}</label>
          <select id='specialist' name='specialist' className={`contact-form-input drop ${errors.specialist === '' ? '' : 'error'}`} type="drop-down" value={regform.specialist} onChange={handleChange}>
            {regform.specialist === '' && <option value='' disabled>....</option>}
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
