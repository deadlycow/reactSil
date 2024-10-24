import React from 'react';
import './ImageContainers.css';

import chart from '../../../assets/images/chart.svg';
import list from '../../../assets/images/list.svg';


function List() {
  return (
    <div className='image-container'>
      <img src={list} />
    </div>
  );
};

function Chart() {
  return (
    <div className='image-container'>
      <img src={chart} />
    </ div>
  );
};

export { Chart, List };
