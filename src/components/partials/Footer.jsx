import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { MdEmail, MdOutlineHorizontalRule } from 'react-icons/md'
import { baseImgUrl } from '../helpers/functions-general'
import { HiDevicePhoneMobile } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    // <footer>
    //       <div className='footer-primary pt-14 pb-20 container'>
    //         <div className='footer-contact'>
    //             <ul className='flex flex-col gap-4'>
    //                 <li className='flex items-center gap-4'><MdOutlineHorizontalRule className='text-stone-500'/> <span className='text-accent'>09286889888</span></li>
    //                 <li className='flex items-center gap-4'><MdOutlineHorizontalRule className='text-stone-500'/> <span className='text-accent'>gianlajarca14@gmail.com</span></li>
    //                 <li className='flex items-center gap-4'><MdOutlineHorizontalRule className='text-stone-500'/> <span className='text-accent'>0045 Lardizabal Street Brgy. Anilao-Labac, Lipa City, Batangas</span></li>
    //             </ul>
    //         </div>

    //         <div className='footer-icon'>
    //           <ul className='flex flex-row gap-6 text-2xl mt-10'>
    //               <li><FaFacebook /></li>
    //               <li><FaLinkedin className='text-accent'/></li>
    //               <li><FaInstagram /></li>
    //               <li><FaTwitter /></li>
    //           </ul>
    //         </div>
              
    //       </div>

    //       <div className="footer-secondary bg-darkblue py-10">
    //             <div className='footer-secondary-content text-center'>
    //                 <h3 className='text-stone-300'>Copyright &copy; 2024 Gian Carlo Lajarca, All Rights Reserved.</h3>
    //                 <h3 className='text-stone-300'>Created by Gian Carlo Lajarca</h3>
    //             </div>
    //       </div>
    // </footer>

    <footer class="footer bg-darkblue py-14">
    <div class="container">
      <div class="footer__wrapper text-light lg:grid lg:grid-cols-3 ml-56">
      <div class="footer__socials">
        <img src={`${baseImgUrl}/home/logo.png`} alt="" className=' object-contain size-24'/>
        <p className='mb-5'>Copyright © 2024</p>
        <ul className='flex gap-[2rem]'>
            <li><FaFacebook className='text-accent cursor-pointer text-2xl'/></li>
            <li><FaLinkedin className='text-accent cursor-pointer text-2xl'/></li>
            <li><FaInstagram className='text-accent cursor-pointer text-2xl'/></li>
            <li><FaTwitter className='text-accent cursor-pointer text-2xl'/></li>
        </ul>
      </div>
      <div class="footer__links">
        <ul className='flex flex-col text-center gap-5'>
        <li><Link to="/database/home">Home</Link></li>
          <li><Link to="/database/skills">Skills</Link></li>
          <li><Link to="/database/project">Project</Link></li>
          <li><Link to="/database/contact">Contact</Link></li>
        </ul>
      </div>
      <div class="footer__contact">
        <h2 className='mb-5'>CONTACT DETAILS</h2>
        <ul className='flex flex-col text-center lg:text-left gap-5'>
          <li className='flex items-center gap-5'><HiDevicePhoneMobile className='text-2xl'/> +63 928 688 9888</li>
          <li className='flex items-center gap-5'><MdEmail className='text-2xl'/>gianlajarca14@gmail.com</li>
          <li className='flex items-center gap-5'><FaHome className='text-2xl'/>Brgy. Anilao-Labac, Lipa City, Batangas</li>
        </ul>
      </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer