import React from 'react';
import { Routes, Route } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';


function App() {

  return (
    <div className='app'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={ <Services />} /> 
      </Routes>
      
        <Footer />
    </div>
  )
}

export default App
