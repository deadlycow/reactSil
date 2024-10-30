import React from 'react';
import Carousel from './Carousel/Carousel';

import './HowItWorks.css';

import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';

function HowItWorks() {

  return (
    <section className='section-howitworks wrapper'>
      <h3>How Does It Work?</h3>
      
        <Carousel />
      
      <h5>Transfer to people from <br /> your contact list</h5>
      <p>
        Proin volutpat mollis egestas. Nam luctus facilisis
        ultrices. Pellentesque volutpat ligula est. Mattis
        fermentum, at nec lacus.
      </p>
    </section>
  )
}

export default HowItWorks;
