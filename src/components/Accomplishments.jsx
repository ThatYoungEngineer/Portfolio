const accomplishments = [
  {
    date: 'Oct, 2024 - Present',
    headline: 'Software Engineer',
    company: "HazenTech",
    content: 'I am currently working as a junior software engineer on React/React Native technologies with a demonstrated history in the field of UI design and development, with a flair for innovation and a commitment to excellence.'
  },
  {
    date: 'Jan, 2024 - June, 2024',
    headline: 'Full-Stack Dev (@SolutionSurface)',
    content: `Worked as a Full Stack developer, managed and created modules for the in-house project's dashboard including API creation, UI designing and API integration, also implemented role based authentication.`
  },
  {
    date: 'Aug, 2023 - Nov, 2023',
    headline: 'Frontend Dev (@MAF Tech)',
    content: 'I completed my internship in frontend as a React JS developer. I developed the complete responsive and visually appealing interface for their e-commerce platform.'
  },
  {
    date: 'July, 2022 - April, 2023',
    headline: 'Junior Dev (@Nesco Associates)',
    content: 'I joined Nesco as a part-time junior developer where i got my hands on web development, web design and data entry related work.'
  },
  {
    date: 'Nov, 2019 - Aug, 2023',
    headline: 'BS-IT (University of Education)',
    content: 'Bachelor of Science in Information Technology (BS-IT) from the UOE has equipped me with a comprehensive understanding of cutting-edge technologies and their practical applications.'
  },
  {
    date: 'Oct, 2017 - March, 2019',
    headline: 'ICS-Physics (PGC)',
    content: 'Completed ICS-Physics at Punjab College, delving into the fascinating world of Physics and Computer Science. Equipped with a strong foundation in both disciplines.'
  }
]

const skills = [
  { language: 'JS', proficiency: '90%' }, { language: 'React JS', proficiency: '85%' }, 
  { language: 'Node JS', proficiency: '60%' }, { language: 'Express JS', proficiency: '70%' }, 
  { language: 'Mongo DB', proficiency: '80%' }, { language: 'SQL', proficiency: '70%' }, 
  { language: 'PHP', proficiency: '60%' }, { language: 'Laravel', proficiency: '75%' }, 
  { language: 'Tailwind CSS', proficiency: '90%' }, { language: 'Figma', proficiency: '60%' },
]

const Accomplishments = () => {
  return (
    <main id="accomplishments" className='w-screen bg-[#09101a] flex items-start justify-center'>
      <section className='w-screen sm_tablet:max-w-[700px] sm_desktop:max-w-[1120px] h-full flex flex-col gap-24 items-start justify-start py-28 px-3 sm_desktop:px-0'>
        <header className="w-full flex flex-col gap-5 items-center justify-center" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true" >
          <h3 className="font-Poppins-Medium text-xl text-primary uppercase text-center">education & skills</h3>
          <h2 className="font-Poppins-SemiBold text-2xl lg_mobile:text-3xl sm_desktop:text-4xl text-white leading-relaxed text-center">Showcasing your talent, <br className="hidden sm_desktop:block" /> amplifying your impact</h2>
        </header> 
        <section className='w-full flex flex-col gap-24'>
          <div className='flex justify-between gap-y-20 flex-wrap'>
            { accomplishments.map((accomplishment, index) => (
              <div key={index} className='w-full sm_desktop:min-w-[48%] sm_desktop:max-w-[48%] sm_desktop:w-[48%] flex flex-col gap-7'>
                <span className='font-Poppins-Medium text-primary text-lg border border-primary w-fit p-5'> {accomplishment.date} </span>
                <h2 className='font-Poppins-SemiBold text-white text-2xl lg_mobile:text-3xl leading-normal'> 
                  {accomplishment.headline} 
                  {accomplishment.company && 
                    <a href="https://hazentech.com/" className="text-white" target="__blank">
                      (@<span className="navList">{accomplishment.company}</span>)
                    </a> 
                  }
                 </h2>
                <p className='font-Poppins-Medium text-[#A2A2A2] leading-7'> {accomplishment.content} </p>
              </div>
            ))}
          </div>
          <div className="flex justify-between gap-y-20 flex-wrap">
            { skills.map((skill, index) => (
              <div key={index} className="w-full sm_desktop:min-w-[48%] sm_desktop:max-w-[48%] sm_desktop:w-[48%] relative pl-7 pt-5 pb-10 bg-[#151c25] overflow-hidden">
                <h2 className="font-Poppins-SemiBold text-lg text-white "> {skill.language} </h2>
                <div
                  id="skillsBorderBottom"
                  className='absolute bottom-0 left-0 bg-primary h-2 rounded-r-full'
                  style={{ width: skill.proficiency }}
                  data-aos="slide-right" data-aos-duration="1500" data-aos-once="true"
                >
                  <p className="text-white text-xs absolute bottom-4 -right-5"> {skill.proficiency} </p>
                </div>
              </div>
            ))}
          </div>          
        </section>
      </section>
    </main>
  ) 
}

export default Accomplishments