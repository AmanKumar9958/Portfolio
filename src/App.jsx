import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { Route, Routes } from 'react-router-dom';
import Service from './components/Service';
import ComingSoon from './components/ComingSoon';

const App = () => {
  return (
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/service' element={<ComingSoon />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App