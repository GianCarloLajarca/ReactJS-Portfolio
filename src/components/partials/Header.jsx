import React from 'react'
import { baseImgUrl } from '../helpers/functions-general'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex py-10 px-2 justify-around'>
            <div className='header-logo w-24 h-11 object-cover'>
                <img src={`${baseImgUrl}/home/logo.png`} alt="" />
            </div>
            <div className='header-nav text-stone-500'>
                <ul className='flex gap-16'>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/project">Project</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className='header-language'>
                <ul className='flex gap-4 text-stone-500 font-bold'>
                    <li><Link to="/home">FRA</Link></li>
                    <li><Link to="/skills">FER</Link></li>
                    <li><Link to="/project" className='text-accent'>ENG</Link></li>
                </ul>
            </div>
        </header> 
  )
}

export default Header