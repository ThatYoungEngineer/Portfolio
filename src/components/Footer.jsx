import connect from '../assets/images/connect.jpg'
import envelope from '../assets/images/envelope.svg'
import phone from '../assets/images/phone.svg'
import map from '../assets/images/map.svg'
import linkedIn from '../assets/images/linkedin.gif'
import twitterX from '../assets/images/twitter.gif'
import gitHub from '../assets/images/github.gif'

const footerContent = [
    {
        image: map,
        headline: "Address",
        link: "https://maps.app.goo.gl/Upb2UGnkN8Ujm6U8A",
        content: "Model Town, Lahore"
    },
    {
        image: phone,
        headline: "Let's Talk",
        link: "tel:+307-8810314",
        content: "0307-881034"
    },
    {
        image: envelope,
        headline: "Send me email",
        link: "mailto:muhammad.talhaah@gmail.com",
        content: "muhammad.talhaah@gmail.com"
    }
]


const Footer = () => {

  return (
    <div id='footer' className='w-screen max-w-screen overflow-hidden bg-[#02050A] flex flex-col items-center justify-center'>
        <div
            className='w-full h-[50vh] relative bg-fixed bg-cover flex flex-col gap-5 items-center justify-center'
            style={{backgroundImage: `url(${connect})`}}
        >
            <div className='w-full h-full absolute top-0 left-0 bg-[#02050A] bg-opacity-80'></div>
            <h2 className='relative z-10 font-Salsa-Regular text-white text-3xl lg_mobile:text-5xl sm_desktop:text-7xl'>Let's Connect!</h2>
            <span className='relative z-30 flex items-center justify-center gap-5'>
                <a href="https://www.linkedin.com/in/muhammad-talhaah/" target='__blank'>
                    <img src={linkedIn} alt="" className='w-14 h-14 rounded-full cursor-pointer pointer-events-none' />
                </a>
                <a href="https://github.com/ThatYoungEngineer" target='__blank'>
                    <img src={gitHub} alt="" className='w-14 h-14 rounded-full cursor-pointer pointer-events-none' />
                </a>
                <a href="https://twitter.com/italhaaah" target='__blank'>
                    <img src={twitterX} alt="" className='w-14 h-14 rounded-full cursor-pointer pointer-events-none' />
                </a>
            </span>
        </div>
        <div className='w-screen sm_tablet:max-w-[700px] sm_desktop:max-w-[1120px] h-fit flex flex-col justify-between text-white px-3 sm_desktop:px-0'>
            <section className='sm_desktop:w-full sm_desktop:justify-between flex flex-col sm_desktop:flex-row py-20 gap-y-10'>
                {footerContent.map((data, index) => (
                    <div key={index} className='flex gap-5' data-aos="fade-left" data-aos-duration="1500"  data-aos-once="true" >
                        <span className='w-16 h-16 rounded-full bg-primary flex items-center justify-center'>
                            <img 
                                src={data.image} 
                                alt="map"
                                className='w-8 h-8'
                            />
                        </span>
                        <span className='flex flex-col justify-between'>
                            <h2 className='font-Poppins-SemiBold text-lg text-white'> {data.headline} </h2>
                            <a 
                                href={data.link}
                                id='footerAnchor'
                                className='text-[#A2A2A2] text-xs lg_mobile:text-base pb-1'
                                target="_blank"
                            >
                                {data.content}
                            </a>
                        </span>
                    </div>
                ))}
            </section>
            <footer className='w-full h-full flex items-center justify-center py-10 border-t border-t-zinc-600'>
                <h2 className='text-[#A2A2A2] font-Poppins-SemiBold text-lg'>© All Rights Reserved.</h2>
            </footer>
        </div>
    </div>
  )
}

export default Footer