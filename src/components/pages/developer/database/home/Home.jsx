import React from 'react'
import { baseImgUrl } from '../../../../helpers/functions-general'
import { Form, Link } from 'react-router-dom'
import { MdArrowRightAlt, MdDownload, MdEmail, MdOutlineDevices, MdOutlineHorizontalRule } from 'react-icons/md'
import { FaBriefcase, FaCode, FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import Header from '../../../../partials/Header'
import Footer from '../../../../partials/Footer'
import { RiVipCrownLine } from 'react-icons/ri'
import { education, experience } from './data'
import SliderSkills from './SliderSkills'
import SliderProjects from './SliderProjects'
import Honors from './Honors'
import { FaLocationDot } from 'react-icons/fa6'
import { HiDevicePhoneMobile } from 'react-icons/hi2'
import TopPerforming from './TopPerforming'
import Certifications from './Certifications'
import ModalProject from './ModalProject'
import 'animate.css';
import { IoDiamondSharp } from 'react-icons/io5'



const Home = () => {
  const [showProjectInterface, setProjectInterface] = React.useState(false)
  const [certTab, setCertTab] = React.useState('honors');

  const handleChangeCert = (cert) => {
    setCertTab(cert)
  }

  //download resume
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '../../img/home/CV-RESUME-LAJARCA.pdf';
    link.download = 'CV-RESUME-LAJARCA.pdf';
    link.click();
  };

const handleShowProject = () => setProject(true);

  return (
    <>
    <section id='banner' className='h-screen w-screen'>
        <Header />
    
    <div className='hero-banner grid grid-cols-2 gap-12 relative'>
        <div className='banner-content flex flex-col gap-8 ml-56 mt-64'>
            <h3 className='flex gap-2 items-center text-accent text-2xl tracking-wide uppercase'><MdOutlineHorizontalRule />Hello</h3>
            <h1 className='text-5xl'>I'm <span className='text-accent'>Gian Carlo</span> Lajarca</h1>
            <p className='w-auto leading-8'>This is <span className='text-accent'>Gian Carlo Lajarca</span>, 
            a passionate and creative BS Information Technology student specializing in web design and development.</p>

             <button className='py-4  uppercase bg-accent text-primary font-thick w-48 text-center 
             border border-accent hover:bg-transparent hover:text-white hover:border hover:border-light transition-all
             flex gap-2 items-center justify-center' onClick={handleDownloadResume}>Download CV <span className='text-xl'><MdDownload /></span></button>
             <div className='hero-banner-icons flexitems-end'>
              <ul className='flex flex-row gap-6 text-2xl mt-48'>
                <li className='cursor-pointer hover:text-accent transition-all'><FaFacebook /></li>
                <li className='cursor-pointer hover:text-accent transition-all'><FaLinkedin /></li>
                <li className='cursor-pointer hover:text-accent transition-all'><FaGithub /></li>
                <li className='cursor-pointer hover:text-accent transition-all'><FaInstagram /></li>
                <li className='cursor-pointer hover:text-accent transition-all'><FaTwitter /></li>
                <li className='cursor-pointer hover:text-accent transition-all'><MdEmail /></li>
              </ul>
            </div>
        </div>

        <div className='banner-profilepic object-cover size-[550px]'>
            <div className='banner-img '>
                <img src={`${baseImgUrl}/home/lajarca-gian.png`} alt="" />
            </div>
        </div>
      <div  className='banner-scroll rotate-90 absolute translate-y-[44rem] translate-x-[100rem]'>
            <h4 className='flex flex-row items-center gap-5 uppercase text-md text-accent font-normal' >Scroll Down <MdArrowRightAlt className='text-3xl'/></h4>
      </div>
    </div>
    
    </section>

    <section className='aboutMe py-24 bg-darkblue grid place-items-center'>
        <div className="container grid grid-cols-2 gap-36 justify-center items-center place-items-center">
              <div className='aboutme-image size-[500px]'>
               <img src={`${baseImgUrl}/home/Profile-aboutme.png`} alt="" />
              </div>
              <div className='aboutme-content flex flex-col gap-10'>
                <h2 className='flex gap-2 items-center text-accent text-2xl tracking-wide uppercase'><MdOutlineHorizontalRule />About Me</h2>
                <p className='text-justify'>Hello! I'm Gian Carlo Lajarca, a fourth-year college student at De La Salle Lipa pursuing a Bachelor of Science in Information Technology. Throughout my academic journey, I have consistently demonstrated a passion for excellence and a dedication to learning.</p>

                <p className='text-justify'>As a Dean's lister from my first year to my current fourth year, I have maintained high academic standards while actively engaging in various courses and projects.
My time at De La Salle Lipa has not only equipped me with technical skills and knowledge but also instilled in me a strong work ethic and a commitment to continuous improvement. I am eager to apply my expertise in Information Technology to real-world challenges and contribute positively to the field.
 Thank you for visiting my portfolio. I invite you to explore my projects and experiences to learn more about my journey and accomplishments</p>

                <ul className='flex flex-col gap-3'>
                  <li className='flex gap-24'>Name: <span>Gian Carlo Lajarca</span></li>
                  <li className='flex gap-24'>Email: <span>gianlajarca14@gmail.com</span></li>
                  <li className='flex gap-[5.9rem]'>Phone: <span>09286889888</span></li>
                  <li className='flex gap-[3.2rem]'>Date of Birth: <span>March 20,2001</span></li>
                  <li className='flex gap-[4rem]'>Nationality: <span>Filipino</span></li>
                  <li className='flex gap-[5rem]'>Address: <span>Brgy. Anilao-Labac Lipa City, Batangas</span></li>
                </ul>

                <div className='aboutme-btn flex flex-row gap-12'>
                    <button className='uppercase bg-accent py-2 px-10 text-primary font-semibold  border border-accent hover:bg-transparent hover:text-white hover:border hover:border-light transition-all'>Hire me</button>
                    <a href={`${baseImgUrl}/home/resume-1.png`} data-lightbox="image-1" data-title="Resume" className='py-4 px-10 uppercase bg-accent text-primary font-thick w-48 text-center 
             border border-accent hover:bg-transparent hover:text-white hover:border hover:border-light transition-all'>View Resume</a>
                </div>
              </div>
        </div>
    </section>

    <section className='service-area bg-primary pt-[115px] px-[0] pb-[120px] block box-border text-[16px] text-[#818181] font-[400] leading-[1.5] text-left grid place-content-center'>
      <div className="container w-full px-[15px] box-border ">

          <div className='flex flex-wrap mx-[-15px] box-border'>
            <div className='text-center relative w-full min-h-[1px] px-[15px] box-border'>
                <div className='section-title text-center mb-[57px] '>
                    <span className='subtitle text-[16px] font-semibold text-[#d1d1d1] leading-[26px] block box-border text-center'>Service</span>
                    <h2 className='mb-[16px] text-[32px] leading-[38px] font-bold text-accent'>What I do</h2>
                    <p className='text-[16px] text-[#d0d0d0] max-w-[720px] mx-[auto] my-[0] leading-[1.625] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo orci odio, ut bus sed. Phasellus vitae ullamcorper
                    purus. Curabitur vel vestibulum justo.</p>

                </div>
            </div>

          </div>

          <div className='flex flex-row flex-wrap gap-8'>
            <div className='row flex flex-wrap mr-[15px] ml-[15px] box-border basis[49%]'>
                              <div className='service-card relative w-full min-h-[1px] pr-[15px] pl-[15px] w-72'>
                                    <div className='single-service-box text-center border-[1px] border-[solid] border-[rgba(255,255,255,0.3)] rounded-[5px] px-[0] py-[60px]
                                    [transition:all_0.3s_ease-in] relative z-0 hover:bg-accent hover:text-darkblue transition-all hover:bg-opacity-70'>
                                          <div className="icon text-[52px] leading-[62px] text-[#fff] mb-[18px] box-border visible text-center">
                                                <IoDiamondSharp className='!font-[IcoFont] not-italic font-normal [font-variant:normal] normal-case whitespace-nowrap [word-wrap:normal] [direction:ltr] leading-none antialiased
                                                text-[52px] text-white text-center mx-auto hover:text-darkblue'/>
                                          </div>

                                          <div className="service-card-content box-border visible text-center text-[16px] text-[#818181] font-[400] leading-[1.5]">
                                                <h4 className='text-[20px] font-semibold text-[#fff] leading-[1.2380952380952381] mb-[.5rem] mt-0 text-center hover:text-darkblue'>UI / UX</h4>
                                          </div>
                                    </div>
                              </div>
            </div>
            <div className='row flex flex-wrap mr-[15px] ml-[15px] box-border basis[49%]'>
                              <div className='service-card relative w-full min-h-[1px] pr-[15px] pl-[15px] w-72'>
                                    <div className='single-service-box text-center border-[1px] border-[solid] border-[rgba(255,255,255,0.3)] rounded-[5px] px-[0] py-[60px]
                                    [transition:all_0.3s_ease-in] relative z-0 hover:bg-accent hover:text-darkblue transition-all hover:bg-opacity-70'>
                                          <div className="icon text-[52px] leading-[62px] text-[#fff] mb-[18px] box-border visible text-center">
                                                <MdOutlineDevices className='!font-[IcoFont] not-italic font-normal [font-variant:normal] normal-case whitespace-nowrap [word-wrap:normal] [direction:ltr] leading-none antialiased
                                                text-[52px] text-white text-center mx-auto'/>
                                          </div>

                                          <div className="service-card-content box-border visible text-center text-[16px] text-[#818181] font-[400] leading-[1.5]">
                                                <h4 className='text-[20px] font-semibold text-[#fff] leading-[1.2380952380952381] mb-[.5rem] mt-0 text-center'>Web Development</h4>
                                          </div>
                                    </div>
                              </div>
            </div>
            <div className='row flex flex-wrap mr-[15px] ml-[15px] box-border basis[49%]'>
                              <div className='service-card relative w-full min-h-[1px] pr-[15px] pl-[15px] w-72'>
                                    <div className='single-service-box text-center border-[1px] border-[solid] border-[rgba(255,255,255,0.3)] rounded-[5px] px-[0] py-[60px]
                                    [transition:all_0.3s_ease-in] relative z-0 hover:bg-accent hover:text-darkblue transition-all hover:bg-opacity-70'>
                                          <div className="icon text-[52px] leading-[62px] text-[#fff] mb-[18px] box-border visible text-center">
                                                <FaCode className='!font-[IcoFont] not-italic font-normal [font-variant:normal] normal-case whitespace-nowrap [word-wrap:normal] [direction:ltr] leading-none antialiased
                                                text-[52px] text-white text-center mx-auto'/>
                                          </div>

                                          <div className="service-card-content box-border visible text-center text-[16px] text-[#818181] font-[400] leading-[1.5]">
                                                <h4 className='text-[20px] font-semibold text-[#fff] leading-[1.2380952380952381] mb-[.5rem] mt-0 text-center'>App Development</h4>
                                          </div>
                                    </div>
                              </div>
            </div>
      </div>
</div>

    </section>

<section id='skills'>
  <SliderSkills />
</section>
    

    <section className='resume py-36 bg-darkblue'>
      <div className='container ml-48 '>
          <div className='resume-title flex flex-col gap-4 mb-20'>
                          <h2 className='text-accent text-4xl text-center'>Resume</h2>
                          <p className='text-md text-stone-300 text-center leading-6 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Dicta nam exercitationem at aspernatur eligendi labore corrupti.</p>
            </div>

                  <div className='resume-content grid grid-cols-2 gap-44'>
                    <div className='resume-education block'>
                          <h2 className='flex flex-row items-center gap-3 text-2xl text-center justify-center'><RiVipCrownLine />Education:</h2>

                          <div className='mt-12 flex flex-col gap-5'>
                          {education.map((item, key) =>(
                            <div className="resume-education-card bg-primary py-14 px-10">
                                <div className='resume-education-card-content flex flex-col gap-4'>
                                      <div className='resume-education-card-date'>
                                          <h4>{item.date}</h4>
                                      </div>

                                      <div className='resume-education-card-title text-2xl'>
                                          <h3 className='text-accent'>{item.title}</h3>
                                      </div>

                                      <div className='resume-education-card-paragraph'>
                                        <p>{item.paragraph}</p>
                                      </div>

                                      <div className='resume-education-card-school flex gap-3 items-center mt-2'>
                                          <img src={`${baseImgUrl}/home/${item.image}`} alt="" className='h-full w-14 object-cover' />
                                          <h4 className='text-accent'>{item.school}</h4>
                                      </div>
                                </div>
                            </div>

                        ))}
                          </div>
                          
                    </div>
                    <div className='resume-experience'>
                    <h2 className='flex flex-row items-center gap-3 text-2xl justify-center'><FaBriefcase />Experience:</h2>
                    {experience.map((item, key) =>(
                          <div className="resume-experience-card mt-12 bg-primary py-14 px-10">
                                <div className="resume-experience-card-content flex flex-col gap-4">
                                        <div className='resume-experience-card-date'>
                                            <h4>{item.date}</h4>
                                        </div>
                                        <div className='resume-experience-company flex gap-5 items-center'>
                                            <img src={`${baseImgUrl}/home/${item.logo}`} alt="" className='h-full w-44 object-cover bg-white p-1' />
                                            <h3 className='text-accent text-2xl'>{item.company}</h3>
                                        </div>
                                        <div className='resume-experience-card-paragraph'>
                                              <p>{item.paragraph}</p>
                                        </div>
                                        <div className='resume-experience-card-position'>
                                          <h4>{item.position}</h4>
                                      </div>
                                </div>
                          </div>
                          ))}
                    </div>
                  </div>
      </div>
    
          
    </section>

    <section className='awards-certifications py-12 bg-darkblue px-40'>
          <div className='flex flex-col gap-5 text-center'>
                <div>
                      <h2 className='text-accent text-3xl'>Awards & Certifications</h2>
                </div>

                <div>
                      <p>My awards and certifications during my college years.</p>
                </div>
          </div>
            
          <div className='tab flex justify-between items-center mt-8  mb-8 w-[30rem] max-w-[26rem] mx-auto'>
            <ul className='flex gap-12'>
                  <li className='font-bold'><button className={`${certTab==="honors" ? "text-accent border-b border-accent" : "hover:text-accent transition-all"}`} onClick={() => handleChangeCert("honors")}>Honors</button></li>
                  <li className='font-bold whitespace-nowrap'><button className={`${certTab==="topstudent" ? "text-accent border-b border-accent" : "hover:text-accent transition-all"}`} onClick={() => handleChangeCert("topstudent")}>Top Performing Student</button></li>
                  <li className='font-bold'><button className={`${certTab==="certifications" ? "text-accent border-b border-accent" : "hover:text-accent transition-all"}`} onClick={() => handleChangeCert("certifications")}>Certifications</button></li>
            </ul>

          </div>

          {certTab === "honors" && <Honors />}
          {certTab === "topstudent" && <TopPerforming />}
          {certTab === "certifications" && <Certifications />}

    </section>

<section id='project'>
  <SliderProjects setProjectInterface={setProjectInterface}/>
</section>
    
    
    <section className='cta bg-darkblue py-28'>
            <div className='cta-content flex flex-col gap-12 text-center'>
                <h3 className='text-2xl text-stone-400'>Have any project in Mind ?</h3>
                <h2 className='text-6xl text-accent font-extralight'>Just Say Hello !</h2>
            
                <button className='py-4 px-10 uppercase bg-accent text-primary font-thick w-48 mx-auto'>Hire Me</button>

            </div>               
    </section>


    <section id='contact' className='contact py-40 px-72'>
         <div className='grid grid-cols-2 gap-24'>
              <div className="contact-info flex flex-col gap-12">
                  <h2 className='text-5xl text-accent'>Contact</h2>
                  <p>Have questions or inquiries? 
                    Feel free to reach out to me using the contact form below or through the provided contact details. I'm always eager to hear from you and assist in any way I can.</p>
                
                <ul className='contact-details flex flex-col gap-5'>
                    <li className='flex flex-row gap-5'><FaPhoneAlt className='text-accent text-2xl'/><span className='text-white'>+63 928 688 9888</span></li>
                    <li className='flex flex-row gap-5'><MdEmail className='text-accent text-2xl'/><span className='text-white'>gianlajarca14@gmail.com</span></li>
                    <li className='flex flex-row gap-5'><FaLocationDot className='text-accent text-2xl'/><span className='text-white'>+63 928 688 9888</span></li>
                </ul>
                <ul className='contact-icon flex flex-row gap-5'>
                      <li><FaFacebook  className='text-2xl text-accent'/></li>
                      <li><FaLinkedin className='text-2xl text-accent'/></li>
                      <li><FaInstagram  className='text-2xl text-accent'/></li>
                      <li><FaTwitter  className='text-2xl text-accent'/></li>
                </ul>
              </div>
              <div className='contact-form mt-20'>

                    <div className="input-row flex justify-between mb-[20px] basis-full">
                          <div className="input-group">
                              <label className='mb-[6px] block text-[#5A5A5A]'>Name</label>
                              <input type="text" placeholder='' className='text-primary w-full border-[none] border-b-[1px_solid_#ccc] outline-[none] pb-[5px] bg-none w-[350px]
                              py-2 px-2'/>
                          </div>
                    </div>

                    <div className="input-row flex justify-between mb-[20px] basis-full">
                          <div className="input-group">
                              <label className='mb-[6px] block text-[#5A5A5A]'>Email</label>
                              <input type="text" placeholder='' className='text-primary w-full border-[none] border-b-[1px_solid_#ccc] outline-[none] pb-[5px] bg-none 
                              bg-none w-[350px] py-2 px-2'/>
                          </div>
                    </div>

                    <div className="input-row flex justify-between mb-[20px] basis-full">
                          <div className="message-Group basis-full">
                              <label className='mb-[6px] block text-[#5A5A5A]'>Message</label>
                              <textarea rows="5" placeholder="" className='text-primary w-full border-b-[1px_solid_#ccc] outline-[none] p-[10px] box-border bg-none border-t-[none] border-l-[none] border-r-[none]'></textarea>
                          </div>
                    </div>

                    <div className='contact-send'>
                          <button className='py-4 px-10 uppercase bg-accent text-primary font-thick w-48 mx-auto'>Hire Me</button>
                    </div>

              </div>
         </div>
    </section>

{showProjectInterface && <ModalProject setProjectInterface={setProjectInterface}/>}


{/* {showMovieInfo && <ModalMovieInfo setMovieInfo={setMovieInfo} movieData={movieData}/>} */}

    <Footer />
    </>
    
  )
}

export default Home