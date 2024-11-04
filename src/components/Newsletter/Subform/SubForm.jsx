import React, { useState } from 'react';
import './subform.css';

function SubForm() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleEmailChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setEmail(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setError('Please provide a valid input.');
      setSuccess(false);
      return;
    }
    setError(false);
    setSuccess('Success!');

    try {
      const response = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error(response.status);
      }
      else {
        console.log(response.status);
      }
      setEmail('');

    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form className='form-label-relative'>
      <div className={`${error ? 'error' : success ? 'success' : ''} input-container`}>
        <input placeholder='Your email' value={email} onChange={handleEmailChange} type="email" required />
        <button type='submit' className='btn btn-sub' onClick={handleSubmit} >Subscribe</button>
      </div>
      <label className={`hover-label ${error ? 'error' : success ? 'success' : ''}`}>
        {error || success || ''}
      </label>
    </form>
  );
};

export default SubForm;
