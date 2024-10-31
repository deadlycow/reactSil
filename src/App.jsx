
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import './App.css'
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Nav from './components/Navigation/Nav.jsx'
import Footer from './components/Footer/Footer.jsx';

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
