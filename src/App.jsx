import { lazy, Suspense, useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Preloader from './components/Preloader'

const Cursor = lazy(() => import('./components/Cursor'))
const Navbar = lazy(() => import('./components/Navbar'))
const Hero = lazy(() => import('./components/Hero'))
const Service = lazy(() => import('./components/Service'))
const About = lazy(() => import('./components/About'))
const Accomplishments = lazy(() => import('./components/Accomplishments'))
const Projects = lazy(() => import('./components/Projects'))
const Footer = lazy(() => import('./components/Footer'))
const ScrollToTop = lazy(() => import('./components/ScrollToTop'))

const App = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false)
  const [hidePreloader, setHidePreloader] = useState(false)

  console.log('hidePreloader: ', hidePreloader)

  useEffect(() => {
    AOS.init()

    const handlePageLoad = () => {
      setIsPageLoaded(true)

      // wait for animation to finish (1s delay here, same as CSS animation)
      setTimeout(() => {
        setHidePreloader(true)
      }, 1000)
    }

    if (document.readyState === 'complete') {
      handlePageLoad()
    } else {
      window.addEventListener('load', handlePageLoad)
    }

    return () => {
      window.removeEventListener('load', handlePageLoad)
    }
  }, [])

  return (
    <>
      {!hidePreloader && <Preloader animateOut={isPageLoaded} />}
      <Suspense fallback={null}>
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
    </>
  )
}

export default App
