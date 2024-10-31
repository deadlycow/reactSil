import React from 'react';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactMap from '../components/Contact/ContactMap';

function Contact() {
  return (
    <>
      <div className="bg-cover-solid">
        <ContactInfo />
      </div>
      <ContactMap />
    </>
  );
};

export default Contact;
