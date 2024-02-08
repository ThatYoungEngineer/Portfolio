import {useState, useEffect, useRef} from 'react'
import { CSSTransition } from 'react-transition-group'
import { Fade as Hamburger } from 'hamburger-react'
import { Link } from 'react-scroll'
import emailjs from '@emailjs/browser'
import Logo from '../assets/images/logo.png'
import CloseIcon from '@mui/icons-material/Close'

const navList = [
    { title: "Home", id: "hero", offset: 0 }, { title: "Services", id: "service", offset: 0 },
    { title: "About", id: "about", offset: 0 }, { title: "Skills", id: "accomplishments", offset: 0 },
    { title: "Projects", id: "projects", offset: 0 }, { title: "Contact", id: "footer", offset: 0 }
]

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const nodeRef = useRef(null)
    const formRef = useRef(null)

    const sendEmail = (e) => {
        e.preventDefault()
        setError(null)
        setSuccess(null)
        emailjs.sendForm('service_zprwz5d', 'template_lbyvb9e', formRef.current, 'aX79ws_jVJHWrXn-F')
        .then((result) => {
            setSuccess(true)
        }, (error) => {
            setError(true)
        });
    }

    useEffect(() => {
        if (isOpen) {
          document.body.style.overflowY = 'hidden'
        } else {
          document.body.style.overflowY = 'scroll'
        }    
        return () => {
          document.body.style.overflowY = 'scroll'
        };
    }, [isOpen])
    
    return (
        <>
            <CSSTransition
                in={isOpen}
                nodeRef={nodeRef}
                timeout={600}
                classNames={{
                    enter: 'slide-left',
                    exit: 'slide-left-close',
                }}
                unmountOnExit
            >
                <>
                    <div
                        onClick={() => setOpen(false)}
                        className={`w-screen h-screen overflow-hidden fixed bg-black bg-opacity-60 z-40
                        head-enter ${!isOpen && 'head-exit'}`}
                    >
                    </div>
                    <div
                        className='w-screen max-w-[400px] h-full bg-[#09101a] fixed top-0 right-0 z-50'
                        ref={nodeRef}
                        onClose={() => setOpen(false)}
                    >
                        <div
                            className='w-full h-fit bg-[#141C27] px-7 py-5 sm_desktop:p-5 flex items-center justify-between'
                        >
                            <img 
                                src={Logo}
                                alt="Logo"
                                className='w-1/3 h-14'
                            />
                            <span
                                className='bg-primary w-10 h-10 rounded-full hover:bg-black active:border-2 border-secondary ease-in-out duration-300 cursor-pointer flex items-center justify-center group/icon'
                                onClick={() => setOpen(false)}
                            >
                                <CloseIcon className='text-[#222] group-hover/icon:text-yellow-300' />
                            </span>
                        </div>
                        <div className='w-full h-full overflow-y-scroll flex flex-col gap-10 px-7 sm_desktop:px-10 py-20'>
                            <span className='flex flex-col gap-3'>
                                <h2 className='font-Poppins-Medium text-xl text-white uppercase'>about me</h2>
                                <p className='font-Poppins-Regular text-[1rem] text-secondary leading-7'>
                                    A young and enthusiastic professional who is eager to kickstart his career and bring development skills to contribute to the success of the dynamic company.
                                </p>
                            </span>
                            <form
                                ref={formRef}
                                onSubmit={sendEmail}
                                className='w-full flex flex-col gap-7 pb-20'
                            >
                                <h2 className='font-Poppins-Medium text-2xl text-white uppercase'>get in touch</h2>
                                <input type="text" name='name' className='w-full p-5 font-Poppins-Medium text-lg bg-transparent text-white border border-primary focus:outline-none ' placeholder='Your Name' required />
                                <input type="email" name='email' className='w-full p-5 font-Poppins-Medium text-lg bg-transparent text-white border border-primary focus:outline-none' placeholder='Your Email' required />
                                <textarea name='message' className='w-full h-40 p-5 font-Poppins-Medium text-lg bg-transparent text-white border border-primary focus:outline-none resize-none' placeholder='Message' required></textarea>
                                <button
                                    type="submit" 
                                    className='w-fit px-14 py-5 bg-primary rounded-sm font-Poppins-Medium text-[#02050a] hover:bg-[#141c27] focus:outline-none focus:shadow-md focus:shadow-white hover:text-white cursor-pointer disabled:cursor-not-allowed transition ease-in-out duration-300'
                                    disabled={success || error}
                                >
                                    Submit
                                </button>
                                {success && <h2 className='w-full font-Poppins-Regular text-base text-primary text-center'>"An email has been sent successfully!"</h2>}  
                                {error && <h2 className='w-full font-Poppins-Regular text-base text-[#ff4135] text-center'>"Something went wrong with the email."</h2>}                 
                            </form>
                        </div>
                    </div>
                </>
            </CSSTransition>        
            <nav className='w-screen h-[80px] flex justify-center bg-transparent fixed z-30'>
                <section className='w-full h-fit sm_tablet:max-w-[700px] sm_desktop:max-w-[1120px] bg-[#141C27] flex items-center justify-between p-3 sm_tablet:p-2 sm_desktop:p-0'> 
                    <img 
                        src={Logo} 
                        alt="Logo"
                        className='w-[90px] h-[40px] sm_desktop:w-[180px] sm_desktop:h-[80px]'
                    />
                    <ul id='navList' className='hidden w-fit sm_desktop:flex items-center justify-center gap-10'>
                        { navList.map( (listItem, index) => (
                            <Link key={index} to={listItem.id} spy={true} smooth={true} offset={listItem.offset} duration={0} activeClass="activeLi"                             >
                                <li className='font-Poppins-Medium text-[1rem] text-white cursor-pointer leading-[70px]'> {listItem.title} </li>
                            </Link>
                        ))}
                    </ul>
                    <div
                        className='w-fit h-fit sm_desktop:w-[80px] sm_desktop:h-[80px] bg-primary flex items-center justify-center
                        cursor-pointer hover:bg-[#4ace92] transition ease-in-out duration-300'
                        onClick={() => setOpen(!isOpen)}
                    >
                        <div className='hidden sm_desktop:block'>
                            <Hamburger toggled={isOpen} toggle={setOpen} size={30}/>
                        </div>
                        <div className='block sm_desktop:hidden'>
                            <Hamburger toggled={isOpen} toggle={setOpen} size={20}/>
                        </div>
                    </div>
                </section>
            </nav>
        </>
    ) 
}

export default Navbar