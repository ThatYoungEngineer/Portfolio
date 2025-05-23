import {useState, useEffect, useRef} from 'react'
import { CSSTransition } from 'react-transition-group'
import { Fade as Hamburger } from 'hamburger-react'
import { Link } from 'react-scroll'
import emailjs from '@emailjs/browser'
import Logo from '../assets/images/logo.png'
import CloseIcon from '@mui/icons-material/Close'
import CircularProgress from '@mui/material/CircularProgress';


const navList = [
    { title: "Home", id: "hero", offset: 0 }, { title: "Services", id: "service", offset: 0 },
    { title: "About", id: "about", offset: 0 }, { title: "Skills", id: "accomplishments", offset: 0 },
    { title: "Projects", id: "projects", offset: 0 }, { title: "Contact", id: "footer", offset: 0 }
]

const Navbar = () => {

    const [isOpen, setOpen] = useState(false)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState("")
    const nodeRef = useRef("")
    const formRef = useRef("")

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const sendEmail = (e) => {
        setLoading(true)
        e.preventDefault()
        setError("")
        setSuccess("")
        emailjs.sendForm('service_zprwz5d', 'template_lbyvb9e', formRef.current, 'aX79ws_jVJHWrXn-F')
        .then((result) => {
            console.log(result)
            setName('')
            setEmail('')
            setMessage('')
            setSuccess(true)
            setLoading(false)
        })
        .catch((error) => {
            setError(true)
            setLoading(false)
        })
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
                        <header
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
                        </header>
                        <div className='w-full h-full overflow-y-scroll flex flex-col gap-10 px-7 sm_desktop:px-10 py-20'>
                            <span className='flex flex-col gap-3'>
                                <h2 className='font-Poppins-Medium text-xl text-white uppercase'>about me</h2>
                                <p className='font-Poppins-Regular text-[1rem] text-secondary leading-7'>
                                Passionate and dedicated Software Engineer with a focus on building optimized and user-centric software solutions. I bring a strong foundation in Full Stack Development and am driven to create clean, scalable, and impactful code.
                                </p>
                            </span>
                            <form
                                ref={formRef}
                                onSubmit={sendEmail}
                                className='w-full flex flex-col gap-7 pb-20'
                            >
                                <h2 className='font-Poppins-Medium text-2xl text-white uppercase'>get in touch</h2>
                                <input type="text" name='name' className='w-full p-4 font-Poppins-Medium text-lg bg-transparent text-white border border-primary focus:outline-none' placeholder='Your Name' value={name} onInput={(e) => setName(e.target.value)} required />
                                <input type="email" name='email' className='w-full p-4 font-Poppins-Medium text-lg bg-transparent text-white border border-primary focus:outline-none' placeholder='Your Email' value={email} onInput={(e) => setEmail(e.target.value)} required />
                                <textarea name='message' className='w-full h-40 p-4 font-Poppins-Medium text-lg bg-transparent text-white border border-primary focus:outline-none resize-none' placeholder='Please enter your message..' value={message} onInput={(e) => setMessage(e.target.value)} required></textarea>
                                <button
                                    type="submit" 
                                    className='w-fit px-14 py-5 bg-primary rounded-sm font-Poppins-Medium text-[#02050a] hover:bg-[#141c27] focus:outline-none focus:shadow-md focus:shadow-white hover:text-white cursor-pointer disabled:cursor-not-allowed transition ease-in-out duration-300'
                                    disabled={ success || loading || error || name === "" || email === '' || message === '' }
                                >
                                    { loading ? <CircularProgress size={30}/> : "Submit" }
                                </button>
                                {success && <h2 className='w-full font-Poppins-Regular text-base text-primary text-center'>ThankYou for reaching out! <br /> Your message has been sent successfuly.</h2>}  
                                {error && <h2 className='w-full font-Poppins-Regular text-base text-[#ff4135] text-center'>"Something went wrong! Please try again."</h2>}                 
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