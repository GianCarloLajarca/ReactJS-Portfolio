import React from 'react'
import { baseImgUrl } from '../../../../helpers/functions-general'
import { Form, Link } from 'react-router-dom'
import { MdArrowRightAlt, MdEmail, MdOutlineHorizontalRule } from 'react-icons/md'
import { FaBriefcase, FaFacebook, FaHome, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
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



const Home = () => {
  const [certTab, setCertTab] = React.useState('honors');

  const handleChangeCert = (cert) => {
    setCertTab(cert)
}

  return (
    <>
    <section className='h-screen w-screen'>
        <Header />
    
    <div className='hero-banner grid grid-cols-2 gap-12 relative'>
        <div className='banner-content flex flex-col gap-8 ml-56 mt-64'>
            <h3 className='flex gap-2 items-center text-accent text-2xl tracking-wide uppercase'><MdOutlineHorizontalRule />Hello</h3>
            <h1 className='text-5xl'>I'm <span className='text-accent'>Gian Carlo</span> Lajarca</h1>
            <p className='w-auto leading-8'>This is <span className='text-accent'>Gian Carlo Lajarca</span>, 
            a passionate and creative BS Information Technology student specializing in web design and development.</p>

             <button className='py-4 px-10 uppercase bg-accent text-primary font-thick w-48'>Download CV</button>
             <div className='hero-banner-icons flexitems-end'>
              <ul className='flex flex-row gap-6 text-2xl mt-48'>
                <li><FaFacebook /></li>
                <li><FaLinkedin className='text-accent'/></li>
                <li><FaInstagram /></li>
                <li><FaTwitter /></li>
              </ul>
            </div>
        </div>

        <div className='banner-profilepic object-cover size-[550px]'>
            <div className='banner-img '>
                <img src={`${baseImgUrl}/home/lajarca-gian.png`} alt="" />
            </div>
        </div>
      <div className='banner-scroll rotate-90 absolute translate-y-[44rem] translate-x-[100rem]'>
            <h4 className='flex flex-row items-center gap-5 uppercase text-md text-accent font-normal'>Scroll Down <MdArrowRightAlt className='text-3xl'/></h4>
      </div>
    </div>
    
    </section>

    <section className='aboutMe py-24 bg-darkblue'>
        <div className="container grid grid-cols-2 gap-36">
              <div className='aboutme-image size-[500px] mt-10'>
               <img src={`${baseImgUrl}/home/Profile-aboutme.png`} alt="" />
              </div>
              <div className='aboutme-content flex flex-col gap-10'>
                <h2 className='flex gap-2 items-center text-accent text-2xl tracking-wide uppercase'><MdOutlineHorizontalRule />About Me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos totam labore, quam inventore suscipit nulla. Magnam iusto aspernatur, 
                  illum est laborum deleniti in dolorem voluptatem quos, mollitia consequuntur reiciendis dolore maiores, ad aliquid ratione.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quae quas aliquam illo ipsam quis, ratione adipisci?</p>

                <ul className='flex flex-col gap-3'>
                  <li className='flex gap-24'>Name: <span>Gian Carlo Lajarca</span></li>
                  <li className='flex gap-24'>Email: <span>gianlajarca14@gmail.com</span></li>
                  <li className='flex gap-[5.9rem]'>Phone: <span>09286889888</span></li>
                  <li className='flex gap-[3.2rem]'>Date of Birth: <span>March 20,2001</span></li>
                  <li className='flex gap-[4rem]'>Nationality: <span>Filipino</span></li>
                  <li className='flex gap-[5rem]'>Address: <span>Brgy. Anilao-Labac Lipa City, Batangas</span></li>
                </ul>

                <div className='aboutme-btn flex flex-row gap-12'>
                    <button className='uppercase bg-accent py-2 px-10 text-primary font-semibold'>Hire me</button>
                    <button className='uppercase flex flex-row items-center gap-2 bg-accent  py-2 px-10  text-primary font-semibold'><MdOutlineHorizontalRule className='font-bold text-lg'/> <span><MdArrowRightAlt className='text-4xl'/></span></button>
                </div>
              </div>
        </div>
    </section>

    <SliderSkills/>

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
                  <li className='font-bold'><button className={`${certTab==="honors" ? "text-accent border-b border-accent" : ""}`} onClick={() => handleChangeCert("honors")}>Honors</button></li>
                  <li className='font-bold whitespace-nowrap'><button className={`${certTab==="topstudent" ? "text-accent border-b border-accent" : ""}`} onClick={() => handleChangeCert("topstudent")}>Top Performing Student</button></li>
                  <li className='font-bold'><button className={`${certTab==="certifications" ? "text-accent border-b border-accent" : ""}`} onClick={() => handleChangeCert("certifications")}>Certifications</button></li>
            </ul>

          </div>

          {certTab === "honors" && <Honors />}
          {certTab === "topstudent" && <TopPerforming />}
          {certTab === "certifications" && <Certifications />}

    </section>

    <SliderProjects/>
    
    <section className='cta bg-darkblue py-28'>
            <div className='cta-content flex flex-col gap-12 text-center'>
                <h3 className='text-2xl text-stone-400'>Have any project in Mind ?</h3>
                <h2 className='text-6xl text-accent font-extralight'>Just Say Hello !</h2>
            
                <button className='py-4 px-10 uppercase bg-accent text-primary font-thick w-48 mx-auto'>Hire Me</button>

            </div>               
    </section>


    <section className='contact py-40 px-72'>
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
                              <input type="text" placeholder='' className='text-primary w-full border-[none] border-b-[1px_solid_#ccc] outline-[none] pb-[5px] bg-none'/>
                          </div>
                    </div>

                    <div className="input-row flex justify-between mb-[20px] basis-full">
                          <div className="input-group">
                              <label className='mb-[6px] block text-[#5A5A5A]'>Email</label>
                              <input type="text" placeholder='' className='text-primary w-full border-[none] border-b-[1px_solid_#ccc] outline-[none] pb-[5px] bg-none'/>
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


    <Footer />
    </>
    
  )
}

export default Home