import React from 'react';
import Nav from '../components/Navigation/Nav.jsx'
import Hero from '../components/Hero/Hero.jsx'

import DisplayLogos from '../components/DisplayLogos/DisplayLogos.jsx';
import AppFeatures from '../components/AppFeatures/AppFeatures.jsx';
import HowItWorks from '../components/HowItWorks/HowItWorks.jsx';
import Makemoney from '../components/Makemoney/Makemoney.jsx';
import Clientsfeedback from '../components/Clientsfeedback/Clientsfeedback.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Faq from '../components/Faq/Faq.jsx';
import Newsletter from '../components/Newsletter/Newsletter.jsx';

function Home() {

  return (
    <>
      <div className='bg-cover'>
        <Hero />
      </div>
      <DisplayLogos />
      <AppFeatures />
      <div className='bg-cover-solid'>
        <HowItWorks />
      </div>
      <Makemoney />
      <div className='bg-cover-solid'>
        <Clientsfeedback />
      </div>
      <Faq />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;