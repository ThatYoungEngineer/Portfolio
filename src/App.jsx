
import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Service from './components/Service'
import About from './components/About'
import Accomplishments from './components/Accomplishments'
import Projects from './components/Projects'
import Footer from './components/Footer'

import Cursor from './components/Cursor'
import ScrollToTop from './components/ScrollToTop'
import Preloader from './components/Preloader'

import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [])

  useEffect(() => {
    AOS.init()
  }, [])

  return loading ? <Preloader /> : (
    <div className='w-screen max-w-screen overflow-x-hidden'>
      <Cursor />
      <Navbar />
      <Hero />
      <Service />
      <About />
      <Accomplishments />
      <Projects />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;

