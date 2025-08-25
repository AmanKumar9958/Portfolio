import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { Route, Routes } from 'react-router-dom';
import Service from './components/Service';
import WebDevelopment from './components/WebDevelopment';
import AppDevelopment from './components/AppDevelopment';
import WebDevelopmentInfo from './components/WebDevelopmentInfo';
import AppDevelopmentInfo from './components/AppDevelopmentInfo';
import HandAnimation from './components/HandAnimation'

const App = () => {
  return (
      <div>
        <HandAnimation delay={2000} />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/service' element={<Service />} />
          <Route path='/service-web-development' element={<WebDevelopment />} />
          <Route path='/service-app-development' element={<AppDevelopment />} />
          <Route path='/web-development-info' element={<WebDevelopmentInfo />} />
          <Route path='/app-development-info' element={<AppDevelopmentInfo />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App