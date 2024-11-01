import React from 'react';
import './contactMap.css';
import map from '../../assets/images/map.svg';
import Socials from './ContactForm/Socials';

function ContactMap() {
  return (
    <div className='map-container wrapper'>
      <div className="map">
        <img src={map} alt="map" />
      </div>
      <div className="center-info">
        <h4 className='center-info-header'>Medical Center 1</h4>
        <ul className='center-unorder-list'>
          <li className='center-list-item map-icon'>4517 Washington Ave. Manchester, Kentucky 39495</li>
          <li className='center-list-item phone-icon'>(406) 555-0120</li>
          <li className='center-list-item time-icon'><div className='mini-container'>
            <p><span className='time-header'>Mon - Fri: </span>9:00 am – 22:00 am</p>
            <p><span className='time-header'>Sat - Sun: </span>9:00 am – 20:00 am</p>
          </div></li>
        </ul>
      </div>
      <div className="center-info">
        <h4 className='center-info-header'>Medical Center 2</h4>
        <ul className='center-unorder-list'>
          <li className='center-list-item map-icon'>2464 Royal Ln. Mesa,New Jersey 45463</li>
          <li className='center-list-item phone-icon'>(406) 544-0123</li>
          <li className='center-list-item time-icon'><div className='mini-container'>
            <p><span className='time-header'>Mon - Fri: </span>9:00 am – 22:00 am</p>
            <p><span className='time-header'>Sat - Sun: </span>9:00 am – 20:00 am</p>
          </div></li>
        </ul>
      </div>
      <div className="socials">
        <Socials />
      </div>
    </div>
  );
};

export default ContactMap;
