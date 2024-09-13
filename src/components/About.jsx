import me from '../assets/images/mey.jpg'
import pie from '../assets/images/pie-chart.png'

const About = () => {
  return (
    <main id='about' className='w-screen max-w-screen overflow-hidden min-h-screen bg-[#02050a] flex items-center justify-center py-28'>
        <div className='w-screen sm_tablet:max-w-[700px] sm_desktop:max-w-[1120px]  flex items-start justify-start pb-32 flex-col gap-y-16 gap-x-10 sm_desktop:flex-row px-3 sm_desktop:px-0'>
            <section className='flex-1'>
                <header className="w-full max-w-[1120px] flex flex-col gap-5" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                    <h3 className="font-Poppins-Medium text-xl text-primary uppercase">about me</h3>
                    <h2 className="font-Poppins-SemiBold text-2xl lg_mobile:text-3xl sm_desktop:text-4xl text-white leading-snug">
                        Transforming visions into exceptional portfolios
                    </h2>
                    <p className='font-Poppins-Regular text-[#A2A2A2] text-base leading-relaxed'>
                        Embark on a digital journey with a creative virtuoso passionate about shaping unique online experiences. As a maestro of pixels and lines, I wield the artistry of website design, sculpting virtual landscapes that marry innovation with aesthetics. In the realm of logo design, I craft visual symphonies – distinctive, harmonious, and eternally resonant.
                    </p>
                </header>
            </section>
            <section className='flex-1 w-full h-full object-cover flex items-center justify-center sm_desktop:justify-end relative' data-aos="fade-left" data-aos-duration="1000" data-aos-once="true" > 
                <div className='w-[90%] relative'>
                    <img
                        src={me}
                        alt='me'
                        className='w-full h-full border-8 border-primary rounded-2xl object-cover'
                    />
                    <div className='w-72 hidden lg_mobile:flex gap-3 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-[#232323] py-3 px-5'>
                        <img
                            src={pie}
                            alt="shape"
                            className='w-[60px] h-[60px] p-2 rounded-full bg-[#fff1] pointer-events-none'
                        />
                        <span className='space-y-2'>
                            <h3 className='text-white font-Poppins-Medium'>Daily Activity</h3>
                            <p className='text-sm font-Poppins-SemiBold text-[#A2A2A2]'>EAT, CODE, SLEEP, REPEAT</p>
                        </span>
                    </div>
                </div>
            </section>
        </div>
    </main>
  )
}

export default About