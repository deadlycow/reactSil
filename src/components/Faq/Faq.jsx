import React from 'react';
import './faq.css';
import ContactCard from '../Newsletter/ContactCard';
import { ContactUsNow } from '../Buttons/Buttons';
import FaqList from './FaqList/FaqList';

function Faq() {



  return (
    <div className='faq-container wrapper'>
      <div className="faq-header">
        <h2>Any Questions?<br id='br' /> Check out the FAQs</h2>
        <p>Still have unanswered quwstions and need to get in touch?</p>
      </div>
      <div className='list-faq'>
        <FaqList />
      </div>
      <div className='contact-cards'>
        <ContactCard color={'blue'} />
        <ContactCard color={'green'} />
      </div>
      <ContactUsNow />
    </div>
  )
};

export default Faq;
