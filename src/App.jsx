import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

const App = () => {
  return (
    <Router basename="/Portfolio">
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App