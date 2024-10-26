import React from 'react';
import Nav from './components/Navigation/Nav.jsx'
import Hero from './components/Hero/Hero.jsx'

import './App.css'
import DisplayLogos from './components/DisplayLogos/DisplayLogos.jsx';
import AppFeatures from './components/AppFeatures/AppFeatures.jsx';
import HowItWorks from './components/HowItWorks/HowItWorks.jsx';
import Makemoney from './components/Makemoney/Makemoney.jsx';
import Clientsfeedback from './components/Clientsfeedback/Clientsfeedback.jsx';
import Footer from './components/Footer/Footer.jsx';
import Faq from './components/Faq/Faq.jsx';
import Newsletter from './components/Newsletter/Newsletter.jsx';

function App() {

  return (
    <>
      <div className='bg-cover'>
        <div className='wrapper'>
          <Nav />
          <Hero />
        </div>
      </div>
      <div className='wrapper'>
        <DisplayLogos />
        <AppFeatures />
      </div>
      <div className='bg-cover-solid'>
        <div className="wrapper">
          <HowItWorks />
        </div>
      </div>
      <div className='wrapper'>
        <Makemoney />
      </div>
      <div className='bg-cover-solid'>
        <div className='wrapper'>
          <Clientsfeedback />
        </div>
      </div>
      <div className="wrapper">
        <Faq />
        <Newsletter />
        <Footer />
      </div>
    </>
  )
}

export default App
