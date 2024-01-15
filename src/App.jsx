import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Preloader from './components/Preloader'

const App = () => {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState !== 'complete') {
      setLoading(true);
      window.addEventListener('load', handleLoad);
    } else {
      setLoading(false);
    }
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [])
  
  

  return(
    <> 
    {loading ? <Preloader />
      : <>
        <Navbar />
        <Hero />
      </>
    }  
    </>
  )

}

export default App