import rumzz from '../assets/images/rumz.png'
import material from '../assets/images/material.png'
import wheelmoto from '../assets/images/wmoto.png'
import mGen from '../assets/images/mGen.png'

const portfolio = [
    {
        delay: "0",
        link: 'https://rumzz.netlify.app/',
        image: rumzz,
        title: "RUMZZ",
        description: "An E-commerce Single Page platform that deals in shoes. The project was built in using MERN stack."
    },
    {
        delay: "300",
        link: 'https://4material.store/',
        image: material,
        title: "4Material",
        description: "A marketplace in the domain of construction, having automated quotation system removing the need of traditional e-commerce."
    },
    {
        delay: "600",
        link: 'https://memesgenerator-home.netlify.app/',
        image: mGen,
        title: "Memes Generator",
        description: "A web app that uses an Meme Images API to get humorous images and you can add text on top and bottom of the image."
    },
    {
        link: '2000',
        image: wheelmoto,
        title: "Wheel Moto",
        description: "An e-car rental service to get on-demand available car on your doorsteps."
    },
]

const Projects = () => {
  return (
    <main id='projects' className="w-screen min-h-screen bg-[#02050a] flex flex-col gap-24 items-center justify-start py-28 px-3 sm_desktop:px-0">
        <header className="w-screen sm_tablet:max-w-[700px] sm_desktop:max-w-[1120px] flex flex-col gap-5 px-3 sm_desktop:px-0" data-aos="fade-up" data-aos-duration="1500">
            <h3 className="font-Poppins-Medium text-xl text-primary uppercase">my recent portfolio</h3>
            <h2 className="font-Poppins-SemiBold text-2xl lg_mobile:text-3xl sm_desktop:text-4xl text-white leading-relaxed"> Elevate your brand to new <br className='hidden sm_desktop:block' /> heights with our portfolio expertise </h2>
        </header>
        <div className='w-screen sm_tablet:max-w-[700px] sm_desktop:max-w-[1120px] flex items-center justify-between flex-wrap gap-y-5 px-3 sm_desktop:px-0'>
            { portfolio.map((port, index) => (
                <section key={index} className='w-screen sm_desktop:max-w-[550px] overflow-hidden relative group/overlay' data-aos="fade-right" data-aos-duration="1500" data-aos-delay={port.delay} data-aos-once="true">
                    <a href={port.link} target='__blank'>
                        <img src={port.image} alt={`Project ${index}`} className='w-full sm_desktop:w-[550px] h-fit object-contain hover:scale-105 transition-all ease-in-out duration-300' />
                    </a>
                    <div
                        className='hidden absolute bottom-0 left-0 w-full h-1/2 flex-col gap-2 items-start justify-center px-5 group-hover/overlay:flex animate__animated animate__fadeInUp animate__faster' 
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
                </section>
            ))}
        </div>
        <div
            id='marqueeContainer'
            className='w-screen flex justify-start py-7 bg-primary whitespace-nowrap overflow-hidden'
        >
            <p id='marqueeText' >
                HTML * CSS * JAVASCRIPT * REACT JS * WEB DEVELOPMENT * PHP * FIGMA * SPA * MPA * MYSQL * MONGODB * REST API * NODE JS * ANGULAR * WEB DESIGN
            </p>
        </div>
    </main>
  )
}

export default Projects



// https://ticktacctoee.netlify.app/