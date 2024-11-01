import React from 'react'
import './success.css';
import img from '../../../../assets/icons/green-check-icon.svg';

function success({ action }) {
  return (
    <div className='success-cover'>
      <img className='half-size' src={img} onClick={action} />
      <p>&uarr; click to close &uarr;</p>
      <h2>Success!</h2>
      <p>More information will be sent to ...</p>
    </div>
  );
};

export default success;
