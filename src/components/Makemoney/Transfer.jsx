import React from 'react';
import './Transfer.css';

import checkIcon from '../../assets/icons/check-circle-icon.svg';
import arrow from '../../assets/icons/arrow-icon.svg';

function Transfer() {
  return (
    <div>
      <h2>Make your money <br />
        transfer simple and clear</h2>
      <ul className='makemoney-ul'>
        <li className='makemoney-li'><img className='list-icon' src={checkIcon} />Banking transaction are free for you</li>
        <li className='makemoney-li'><img className='list-icon' src={checkIcon} />No monthly cash commission</li>
        <li className='makemoney-li'><img className='list-icon' src={checkIcon} />Manage payments and transactions online</li>
      </ul>
      <button className='btn btn-more'>Learn more <img src={arrow} /></button>
    </div>
  )
}

export default Transfer;
