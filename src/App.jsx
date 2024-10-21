import React from 'react';
import Nav from './components/Navigation/Nav.jsx'
import Hero from './components/Hero/Hero.jsx'

import './App.css'

function App() {

  return (
    <div className='bg-cover'>
      <div className='wrapper'>
        <Nav />
        <Hero />
      </div>
    </div>
  )
}

export default App
