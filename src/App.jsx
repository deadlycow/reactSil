import React from 'react';
import Nav from './components/Navigation/Nav.jsx'
import Hero from './components/Hero/Hero.jsx'

import './App.css'
import DisplayLogos from './components/DisplayLogos/DisplayLogos.jsx';

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
        {/* App Features */}
        {/* How Does It Work */}
        {/* FAQ */}
        {/* Newsletter */}
        {/* Footer */}
      </div>
    </>
  )
}

export default App
