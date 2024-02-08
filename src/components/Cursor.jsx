import { useState, useEffect } from 'react'
import { motion } from 'framer-motion' 

const Cursor = () => {
    const [position, setPosition] = useState({x:0, y:0})

    useEffect(() => {
      const mouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY })
      }

      window.addEventListener("mousemove", mouseMove)
    
      return () => {
        window.removeEventListener("mousemove", mouseMove)
      }
    }, [])

  return (
    <motion.div 
      className = 'fixed w-[30px] h-[30px] rounded-full border border-[#A2A2A2] z-50'
      animate = {{ x:position.x+5 , y:position.y+5 }}
    >
    </motion.div>
  )
}

export default Cursor