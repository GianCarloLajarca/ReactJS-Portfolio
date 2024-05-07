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
                    <li><Link to="/database/home">Home</Link></li>
                    <li><Link to="/database/skills">Skills</Link></li>
                    <li><Link to="/database/project">Project</Link></li>
                    <li><Link to="/database/contact">Contact</Link></li>
                </ul>
            </div>
            <div className='header-language'>
                <ul className='flex gap-4 text-stone-500 font-bold'>
                    <li>FRA</li>
                    <li>FER</li>
                    <li className='text-accent'>ENG</li>
                </ul>
            </div>
        </header> 
  )
}

export default Header