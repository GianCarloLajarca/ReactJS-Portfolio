import React from 'react'
import { baseImgUrl } from '../../../../helpers/functions-general'
import { Link } from 'react-router-dom'
import { MdArrowRightAlt, MdOutlineHorizontalRule } from 'react-icons/md'
import { FaBriefcase, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Header from '../../../../partials/Header'
import Footer from '../../../../partials/Footer'
import SliderSkills from './SliderSkills'
import { RiVipCrownLine } from 'react-icons/ri'


const Home = () => {
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
                  <li className='flex gap-24'>Phone: <span>09286889888</span></li>
                  <li className='flex gap-24'>Date of Birth: <span>March 20,2001</span></li>
                  <li className='flex gap-24'>Nationality: <span>Filipino</span></li>
                  <li className='flex gap-24'>Address: <span>Brgy. Anilao-Labac Lipa City, Batangas</span></li>
                </ul>

                <div className='aboutme-signature'>
                      <img src={`${baseImgUrl}/home/Gian Carlo Lajarca - Signature.png`} className='w-[250px] h-[60px] object-cover bg-accent bg-opacity-50' alt="" />
                </div>
                <div className='aboutme-btn flex flex-row gap-12'>
                    <button className='uppercase bg-accent py-2 px-10 text-primary font-semibold'>Hire me</button>
                    <button className='uppercase flex flex-row items-center gap-2 bg-accent  py-2 px-10  text-primary font-semibold'><MdOutlineHorizontalRule className='font-bold text-lg'/> <span><MdArrowRightAlt className='text-4xl'/></span></button>
                </div>
              </div>
        </div>
    </section>

    <SliderSkills/>

    <section className='resume py-52 ml-48'>
      <div className='container'>
          <div className='resume-title flex flex-col gap-4 mb-20'>
                          <h2 className='text-accent text-4xl text-center'>Resume</h2>
                          <p className='text-md text-stone-300 text-center leading-6 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Dicta nam exercitationem at aspernatur eligendi labore corrupti.</p>
            </div>

                  <div className='resume-content grid grid-cols-2 gap-60'>
                    <div className='resume-education block'>
                          <h2 className='flex flex-row items-center gap-3 text-2xl'><RiVipCrownLine />Education:</h2>

                          <div className='mt-12 flex flex-col gap-5'>
                            <div className="resume-education-card bg-darkblue py-14 px-10">
                                <div className='resume-education-card-content flex flex-col gap-4'>
                                      <div className='resume-education-card-date'>
                                          <h4>2020 - Present</h4>
                                      </div>

                                      <div className='resume-education-card-title'>
                                          <h3 className='text-accent'>Bachelor of Science in Information Technology</h3>
                                      </div>

                                      <div className='resume-education-card-paragraph'>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto non asperiores facere eveniet itaque porro aperiam quae harum.</p>
                                      </div>

                                      <div className='resume-education-card-school'>
                                          <h4>De La Salle Lipa</h4>
                                      </div>
                                </div>
                            </div>
                            <div className="resume-education-card bg-darkblue py-14 px-10">
                                <div className='resume-education-card-content flex flex-col gap-4'>
                                      <div className='resume-education-card-date'>
                                          <h4>2014 - 2018</h4>
                                      </div>

                                      <div className='resume-education-card-title'>
                                          <h3 className='text-accent'>Junior High School</h3>
                                      </div>

                                      <div className='resume-education-card-paragraph'>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto non asperiores facere eveniet itaque porro aperiam quae harum.</p>
                                      </div>

                                      <div className='resume-education-card-school'>
                                          <h4>De La Salle Lipa</h4>
                                      </div>
                                </div>
                            </div>
                            <div className="resume-education-card bg-darkblue py-14 px-10">
                                <div className='resume-education-card-content flex flex-col gap-4'>
                                      <div className='resume-education-card-date'>
                                          <h4>2018 - 2020</h4>
                                      </div>

                                      <div className='resume-education-card-title'>
                                          <h3 className='text-accent'>Grade School</h3>
                                      </div>

                                      <div className='resume-education-card-paragraph'>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto non asperiores facere eveniet itaque porro aperiam quae harum.</p>
                                      </div>

                                      <div className='resume-education-card-school'>
                                          <h4>Canossa Academy Lipa</h4>
                                      </div>
                                </div>
                            </div>
                          
                          </div>
                          
                    </div>
                    <div className='resume-experience'>
                    <h2 className='flex flex-row items-center gap-3 text-2xl'><FaBriefcase />Experience:</h2>
                          <div className="resume-experience-card mt-12 bg-darkblue py-14">
                                <div className="resume-experience-card-content flex flex-col gap-4">
                                        <div className='resume-experience-card-date'>
                                            <h4>February 19, 2024 - Present</h4>
                                        </div>

                                        <div className=''>

                                        </div>
                                </div>
                          </div>
                    </div>
                  </div>
      </div>
    
          
    </section>
    <Footer />
    </>
    
  )
}

export default Home