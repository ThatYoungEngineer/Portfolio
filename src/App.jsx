import { lazy, Suspense, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Preloader from './components/Preloader'

const App = () => {

  const Cursor = lazy(() => import('./components/Cursor'))
  const Navbar = lazy(() => import('./components/Navbar'))
  const Hero = lazy(() => import('./components/Hero'))
  const Service = lazy(() => import('./components/Service'))
  const About = lazy(() => import('./components/About'))
  const Accomplishments = lazy(() => import('./components/Accomplishments'))
  const Projects = lazy(() => import('./components/Projects'))
  const Footer = lazy(() => import('./components/Footer'))
  const ScrollToTop = lazy(() => import('./components/ScrollToTop'))

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Suspense fallback={<Preloader />} >
      <Cursor />
      <Navbar />
      <Hero />
      <Service />
      <About />
      <Accomplishments />
      <Projects />
      <Footer />
      <ScrollToTop />
    </Suspense>
  );
};

export default App;

