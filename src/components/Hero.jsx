import me from '../assets/images/mine.png'
import background from '../assets/images/background.jpg'
import shape from '../assets/images/banner_shape.png'

import resume from '../assets/files/SoftwareEngineer.pdf'

import GetAppIcon from '@mui/icons-material/GetApp'
import { useState, useEffect } from 'react'

const expertise = ["coder", "player", "designer"]

const Hero = () => {
    const [myExpertise, setMyExpertise] = useState(0)

    useEffect(() => {
      const funcInterval = setInterval(() => {
        setMyExpertise((prevIndex) => (prevIndex + 1) % expertise.length);
      }, 3000);
    
      return () => {
        clearInterval(funcInterval) 
      }
    }, [])
    
  return (
    <>
        <section
            id='hero' 
            className='w-screen h-[850px] lg_mobile:h-[740px] sm_tablet:h-[700px] sm_desktop:h-screen max-w-[100vw] bg-center bg-cover bg-no-repeat bg-fixed flex items-center justify-center'
            style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}
        >
            <main className='w-full sm_tablet:max-w-[700px] sm_desktop:max-w-[1120px] h-full flex items-center justify-between pt-10'>
                <section className='w-full sm_desktop:w-1/2 flex flex-col gap-10 px-3 sm_tablet:px-0 sm_desktop:pr-10'>
                    <div className=''>
                        <h1 className='font-Poppins-Bold text-[3rem] text-white uppercase leading-tight'>hi, i&apos;m talha!</h1>
                        <h1 className='font-Poppins-Bold text-[3rem] text-white uppercase relative'>
                            Creative
                            <span id='creative' className='text-primary font-Poppins-Black'> {expertise[myExpertise]} </span>
                        </h1>
                    </div>
                    <br className='sm_desktop:hidden' />
                    <p className='font-Poppins-Regular text-[1rem] text-secondary leading-7'>
                        I&apos;m a Software Engineer with <span className='font-Poppins-Medium text-white'>1+ year of experience</span>, and a mission to create delightful and intuitive digital experiences. With a strong foundation in full stack development and a keen eye for detail, I specialize in translating complex ideas into user-friendly interfaces that captivate and engage.
                    </p>
                    <div>
                        <a href={resume} download='MuhammadTalha_resume' className='border-none outline-none'>
                            <button className='px-10 py-5 bg-primary rounded-sm font-Poppins-Regular text-[#02050a] hover:bg-[#141c27] focus:outline-none focus:shadow-md focus:shadow-white hover:text-white group/btn transition ease-in-out duration-300'>
                                Download CV <GetAppIcon className=' text-[#222] group-hover/btn:text-white'/>
                            </button>
                        </a>
                    </div>
                </section>
                <section className='w-[40%] h-[80vh] sm_desktop:flex items-center justify-center hidden'>
                    <div className='w-full h-[600px] relative flex items-center justify-center'>
                        <img
                            src={me}
                            alt="me"
                            className='relative'
                        />
                        <img
                            src={shape}
                            alt="shape"
                            id='shape'
                            className='pointer-events-none' 
                        />
                    </div>
                </section>
            </main>
        </section>
    </>
  )
}

export default Hero