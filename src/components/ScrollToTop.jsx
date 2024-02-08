import { useState, useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import CircularProgress from '@mui/material/CircularProgress'
import 'animate.css'

const ScrollToTop = () => {
  const [scroll, setScroll] = useState(0)
  const [button, setButton] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = (window.scrollY / totalHeight) * 100
      setScroll(scrolled)

      if (window.scrollY > window.innerHeight * 0.15) {
        setButton(true)
      } else {
        setButton(false)
      } 
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <CSSTransition
      in={button}
      nodeRef={scrollRef}
      timeout={2000}
      classNames={{
        enter: 'animate__animated animate__bounceInUp animate__fast',
        exit: 'animate__animated animate__bounceOutUp animate__slow',
      }}
      unmountOnExit
    >
      <div
        className='fixed bottom-10 right-3 lg_mobile:right-10 bg-transparent flex items-center justify-center cursor-pointer'
        onClick={scrollToTop}
        ref={scrollRef}
      >
        <CircularProgress
          variant="determinate"
          value={scroll}
          style={{ color: '#ABB8C3' }}
          thickness={2}
        />
        <KeyboardArrowUpIcon style={{ fontSize: '30px', color: '#A2A2A2' }} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
      </div>
    </CSSTransition>
  )
}

export default ScrollToTop
