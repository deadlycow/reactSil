import React from 'react';
import './Makemoney.css';
import Transfer from './Transfer.jsx';
import Bank from './Bank.jsx';
import { Chart, List } from './ImageContainers/ImagesContainers.jsx'





function Makemoney() {
  return (
    <>
      <div className='makemoney-grid wrapper'>
        <div className="pad">
          <Transfer />
        </div>
        <div className="pad-2">
          <Chart />
        </div>
        <List />
        <Bank />
      </div>
    </>
  )
}

export default Makemoney
