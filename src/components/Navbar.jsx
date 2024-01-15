import {useState} from 'react'
import Logo from '../assets/images/logo.png'

import { Fade as Hamburger } from 'hamburger-react'


const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    console.log(isOpen)
    return (
    <>
        {/* {isOpen && 
            <div className='w-screen h-screen overflow-hidden fixed bg-black bg-opacity-60 z-20 flex items-center justify-center text-green-400 transition ease-linear duration-200' onClick={() => setOpen(!isOpen)}>
                <div className='w-[400px] h-full bg-[#212529] fixed top-0 right-0 transition-transform ease-linear duration-200'>
                    <header className='w-full bg-[#141C27] p-5 flex items-center justify-between'>
                        <img 
                            src={Logo}
                            alt="Logo"
                            className='w-1/3 h-14'
                        />
                        <span
                            className='bg-primary w-10 h-10 rounded-full hover:bg-black ease-in-out duration-300 cursor-pointer'
                            onClick={() => setOpen(!isOpen)}
                        ></span>

                    </header>
                </div>
            </div>
        } */}
        <nav className='w-screen h-[80px] flex items-center justify-center bg-transparent fixed'>
            <section className='w-full h-full max-w-[1120px] bg-[#141C27] flex items-center justify-between'> 
                <img 
                    src={Logo} 
                    alt="Logo"
                    className='w-[180px] h-[80px]'
                />
                <ul className='w-fit flex items-center justify-center gap-10'>
                    <li className='font-Poppins-Medium text-[1rem] text-white cursor-pointer leading-[80px]'>Home</li>
                    <li className='font-Poppins-Medium text-[1rem] text-white cursor-pointer leading-[80px]'>Services</li>
                    <li className='font-Poppins-Medium text-[1rem] text-white cursor-pointer leading-[80px]'>Projects</li>
                    <li className='font-Poppins-Medium text-[1rem] text-white cursor-pointer leading-[80px]'>About</li>
                    <li className='font-Poppins-Medium text-[1rem] text-white cursor-pointer leading-[80px]'>Contact</li>
                </ul>
                <div className='w-[80px] h-[80px] bg-primary flex items-center justify-center'>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
            </section>
        </nav>
    </>
  )
}

export default Navbar