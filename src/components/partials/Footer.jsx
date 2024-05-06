import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { MdOutlineHorizontalRule } from 'react-icons/md'

const Footer = () => {
  return (
    <footer>
          <div className='footer-primary pt-14 pb-20 container'>
            <div className='footer-contact'>
                <ul className='flex flex-col gap-4'>
                    <li className='flex items-center gap-4'><MdOutlineHorizontalRule className='text-stone-500'/> <span className='text-accent'>09286889888</span></li>
                    <li className='flex items-center gap-4'><MdOutlineHorizontalRule className='text-stone-500'/> <span className='text-accent'>gianlajarca14@gmail.com</span></li>
                    <li className='flex items-center gap-4'><MdOutlineHorizontalRule className='text-stone-500'/> <span className='text-accent'>0045 Lardizabal Street Brgy. Anilao-Labac, Lipa City, Batangas</span></li>
                </ul>
            </div>

            <div className='footer-icon'>
              <ul className='flex flex-row gap-6 text-2xl mt-10'>
                  <li><FaFacebook /></li>
                  <li><FaLinkedin className='text-accent'/></li>
                  <li><FaInstagram /></li>
                  <li><FaTwitter /></li>
              </ul>
            </div>
              
          </div>

          <div className="footer-secondary bg-darkblue py-10">
                <div className='footer-secondary-content text-center'>
                    <h3 className='text-stone-300'>Copyright &copy; 2024 Gian Carlo Lajarca, All Rights Reserved.</h3>
                    <h3 className='text-stone-300'>Created by Gian Carlo Lajarca</h3>
                </div>
          </div>
    </footer>
  )
}

export default Footer