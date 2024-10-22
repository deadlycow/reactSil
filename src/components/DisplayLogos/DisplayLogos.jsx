import React from 'react'
import './DisplayLogos.css';
import brand1 from '../../assets/images/DisplayLogos/brand-1.svg';
import brand2 from '../../assets/images/DisplayLogos/brand-2.svg';
import brand3 from '../../assets/images/DisplayLogos/brand-3.svg';
import brand4 from '../../assets/images/DisplayLogos/brand-4.svg';
import brand5 from '../../assets/images/DisplayLogos/brand-5.svg';
import brand6 from '../../assets/images/DisplayLogos/brand-6.svg';

function DisplayLogos() {

  const test = [brand1, brand2, brand3, brand4, brand5, brand6];


  return (
    <div className='brand-flex'>
      {
        test.map((item, index) => (
          <div key={index} className='brand-container'>
            <img src={item} alt="brand1" />
          </div>))
      }
    </div>
  )
}

export default DisplayLogos
