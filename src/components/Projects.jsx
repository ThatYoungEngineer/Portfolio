import castro from '../assets/images/castro.png'
import anyhand from '../assets/images/anyhand.png'
import material from '../assets/images/material.webp'
import pf from '../assets/images/pf.webp'
import wheelmoto from '../assets/images/wmoto.png'
import mGen from '../assets/images/mGen.png'

import Marquee from "react-fast-marquee"

const portfolio = [
    {
        delay: "0",
        link: 'https://perspectiveforge.onrender.com/',
        image: pf,
        title: "Perspective Forge",
        description: "A fully secure modern blog-site for developers and tech enthusiasts to get theirselves updated. Featuring authentication for users and admins, dual theme, data caching, modern dashboard with complete validation and error handling. This project is built using MERN Stack."

    },
    {
        delay: "0",
        link: 'https://shopcastro.netlify.app/',
        image: castro,
        title: "Castro",
        description: "An E-commerce platform that deals in clothing. The project was built using the MERN stack."
    },
    {
        delay: "600",
        link: 'https://anyhandy.netlify.app/',
        image: anyhand,
        title: "anyhand",
        description: "A marketplace when users can acquire heroes for their services, and heroes can provide their service as well by signing up to platform."
    },
    {
        delay: "800",
        link: 'https://4material.store/',
        image: material,
        title: "4Material",
        description: "A marketplace in the domain of construction, having automated quotation system removing the need of traditional e-commerce."
    },
    {
        delay: "1600",
        link: 'https://memesgenerator-home.netlify.app/',
        image: mGen,
        title: "Memes Generator",
        description: "A web app that uses an Meme Images API to get humorous images and you can add text on top and bottom of the image."
    },
    {
        link: '3000',
        image: wheelmoto,
        title: "Wheel Moto",
        description: "An e-car rental service to get on-demand available car on your doorsteps."
    },
]

const Projects = () => {
  return (
    <main id='projects' className="w-screen min-h-screen bg-[#02050a] flex flex-col gap-24 items-center justify-start py-28 px-3 sm_desktop:px-0">
        <header className="w-screen sm_tablet:max-w-[700px] sm_desktop:max-w-[1120px] flex flex-col gap-5 px-3 sm_desktop:px-0" data-aos="fade-up" data-aos-duration="1500"  data-aos-once="true">
            <h3 className="font-Poppins-Medium text-xl text-primary uppercase">my recent portfolio</h3>
            <h2 className="font-Poppins-SemiBold text-2xl lg_mobile:text-3xl sm_desktop:text-4xl text-white leading-relaxed"> Elevate your brand to new <br className='hidden sm_desktop:block' /> heights with our portfolio expertise </h2>
        </header>
        <div className='w-screen sm_tablet:max-w-[700px] sm_desktop:max-w-[1120px] flex items-center justify-between flex-wrap gap-y-5 px-3 sm_desktop:px-0'>
            { portfolio.map((port, index) => (
                <a href={port.link} target='__blank' key={index} className='w-screen sm_desktop:max-w-[550px] overflow-hidden relative group/overlay' data-aos="fade-right" data-aos-duration="1500" data-aos-delay={port.delay} data-aos-once="true">
                    <img src={port.image} alt={`Project ${index}`} className='w-full sm_desktop:w-[550px] h-fit object-contain group-hover/overlay:scale-105 transition-all ease-in-out duration-300' />
                    <section >
                        <div className='hidden absolute bottom-0 left-0 w-full h-full items-end justify-end bg-transparent group-hover/overlay:flex animate__animated animate__fadeInUp animate__faster' >
                            <div
                                className='flex flex-col gap-2 px-5 items-start py-10'
                                style={{
                                    background: 'linear-gradient(0deg, #02050ad3 0%, rgba(2, 5, 10, 0.5802696078431373) 61%, rgba(2, 5, 10, 0) 100%)'
                                }}
                            >
                                <h3 className='font-Poppins-SemiBold text-white'>{port.title}</h3>
                                <span className='flex gap-2'>
                                    <hr className='mt-1 min-w-[30px] h-1 border-primary self-start'/>
                                    <p className='text-slate-200 text-xs font-Poppins-Regular'>{port.description}</p>
                                </span>
                            </div>
                        </div>
                    </section>
                </a>
            ))}
        </div>
        <Marquee
            className='w-screen flex justify-start py-7 bg-primary whitespace-nowrap overflow-hidden'
            speed={150}
        >
            <p className='marqueeText'>WEB DEVELOPMENT</p>
            <p className='marqueeText'>*</p>
            <p className='marqueeText'>HTML5</p>
            <p className='marqueeText'>*</p>
            <p className='marqueeText'>CSS3</p>
            <p className='marqueeText'>*</p>
            <p className='marqueeText'>JAVASCRIPT</p>
            <p className='marqueeText'>*</p>
            <p className='marqueeText'>REACT JS</p>
            <p className='marqueeText'>*</p>
            <p className='marqueeText'>REDUX-TOOLKIT</p>
            <p className='marqueeText'>*</p>
            <p className='marqueeText'>PHP</p>
            <p className='marqueeText'>*</p>
            <p className='marqueeText'>LARAVEL</p>
            <p className='marqueeText'>*</p>
            <p className='marqueeText'>FIGMA</p>
            <p className='marqueeText'>*</p>
            <p className='marqueeText'>SPA</p>
            <p className='marqueeText'>*</p>
            <p className='marqueeText'>MPA</p>
            <p className='marqueeText'>*</p>
            <p className='marqueeText'>MYSQL</p>
            <p className='marqueeText'>*</p>
            <p className='marqueeText'>MONGO DB</p>
            <p className='marqueeText'>*</p>
            <p className='marqueeText'>REST API</p>
            <p className='marqueeText'>*</p>
            <p className='marqueeText'>NODE JS</p>
            <p className='marqueeText'>*</p>
            <p className='marqueeText'>ANGULAR JS</p>
            <p className='marqueeText'>*</p>
            <p className='marqueeText'>WEB DESIGN</p>
            <p className='marqueeText'>*</p>
            <p className='marqueeText'>NEXT JS</p>
            <p className='marqueeText'>*</p>
        </Marquee>
    </main>
  )
}

export default Projects
