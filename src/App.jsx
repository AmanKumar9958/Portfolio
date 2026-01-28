import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { Route, Routes, useLocation } from 'react-router-dom';
import Service from './components/Service';
import WebDevelopment from './components/WebDevelopment';
import AppDevelopment from './components/AppDevelopment';
import WebDevelopmentInfo from './components/WebDevelopmentInfo';
import AppDevelopmentInfo from './components/AppDevelopmentInfo';
import HandAnimation from './components/HandAnimation'
import ScrollToTop from './components/ScrollToTop';
import SmoothScroll from './components/SmoothScroll';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/PageTransition';

const App = () => {
  const location = useLocation();

  return (
      <div>
        <ScrollToTop />
        <SmoothScroll />
        <HandAnimation delay={2000} />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<PageTransition><Home /></PageTransition>} />
            <Route path='/contact' element={<PageTransition><Contact /></PageTransition>} />
            <Route path='/projects' element={<PageTransition><Projects /></PageTransition>} />
            <Route path='/service' element={<PageTransition><Service /></PageTransition>} />
            <Route path='/service-web-development' element={<PageTransition><WebDevelopment /></PageTransition>} />
            <Route path='/service-app-development' element={<PageTransition><AppDevelopment /></PageTransition>} />
            <Route path='/web-development-info' element={<PageTransition><WebDevelopmentInfo /></PageTransition>} />
            <Route path='/app-development-info' element={<PageTransition><AppDevelopmentInfo /></PageTransition>} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
  );
}

export default App