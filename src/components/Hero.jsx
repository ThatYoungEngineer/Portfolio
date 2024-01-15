import me from '../assets/images/mine.png'
import shape from '../assets/images/banner_shape.png'
import GetAppIcon from '@mui/icons-material/GetApp'

const Hero = () => {
  return (
    <>
        <section className='w-screen h-screen max-w-[100vw] max-h-screen overflow-hidden bg-hero-pattern bg-cover flex items-center justify-center'>
            <main className='w-full max-w-[1120px] h-full flex items-center justify-between pt-10'>
                <section className='w-1/2 flex flex-col gap-10 pr-10'>
                    <div>
                        <h1 className='font-Poppins-Bold text-[3rem] text-white uppercase leading-10'>hi, i'm talha!</h1>
                        <h1 className='font-Poppins-Bold text-[3rem] text-white uppercase'>
                            Creative
                            <span className='text-primary font-Poppins-Black'> Coder</span>
                        </h1>
                    </div>
                    <p className='font-Poppins-Regular text-[1rem] text-secondary leading-7'>
                        I'm a passionate developer with a mission to create delightful and intuitive digital experiences. With a strong foundation in design principles and a keen eye for detail, I specialize in translating complex ideas into user-friendly interfaces that captivate and engage.
                    </p>
                    <div>
                        <button className='px-10 py-5 bg-primary rounded-sm font-Poppins-Regular text-[#02050a] hover:bg-[#141c27] hover:text-white group/btn transition ease-in-out duration-300'>
                            Download CV <GetAppIcon className=' text-[#222] group-hover/btn:text-white'/>
                        </button>
                    </div>
                </section>
                <section className='w-1/2 relative h-full'>
                    <img
                        src={me}
                        alt="me"
                        className='scale-[0.9] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20'
                    />
                    <img
                        src={shape}
                        alt="shape"
                        id='shape'
                        className='h-[80%] z-30 pointer-events-none' 
                    />
                </section>
            </main>
        </section>
    </>
  )
}

export default Hero