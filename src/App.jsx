
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import React from 'react';
import Nav from './components/Navigation/Nav.jsx'

import './App.css'
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
