import React from 'react'
import { baseImgUrl } from '../../../../helpers/functions-general'

const TopPerforming = () => {
  return (
    <div className='honors-grid grid grid-cols-3 gap-7 py-20 bg-darkblue'>
        <div className='honor-card pb-44 pt-5 px-10 '>
            <div className='honor-image bg-primary'>
                <img src={`${baseImgUrl}/home/topperforming-1.jpg`} alt="" className=' object-cover'/>
            </div>
            <div className='honor-details flex flex-col gap-5 mt-5'>
                <div className='honor-title'>
                    <h3 className='text-accent text-xl'>Top Student in Data Structure and Algorithms </h3>
                </div>
                   <div className='honor-date'>
                    <h4 className='text-stone-400'>May 2022</h4>
                  </div>  

                <div className='honor-school'>
                    <h3 className='text-stone-400'> De La Salle Lipa Junior Philippine Computer Society DLSL CHAPTER</h3>
                </div>      

            </div>    
        </div>

        <div className='honor-card pb-44 pt-5 px-10 '>
            <div className='honor-image bg-primary'>
                <img src={`${baseImgUrl}/home/topperforming-2.png`} alt="" className=' object-cover'/>
            </div>
            <div className='honor-details flex flex-col gap-5 mt-5'>
                <div className='honor-title'>
                    <h3 className='text-accent text-xl'>Top Student in IT Elective 2 Information Security</h3>
                </div>
                   <div className='honor-date'>
                    <h4 className='text-stone-400'>June 2023</h4>
                  </div>  

                <div className='honor-school'>
                    <h3 className='text-stone-400'>De La Salle Lipa Junior Philippine Computer Society DLSL CHAPTER</h3>
                </div>      

            </div>    
        </div>

        <div className='honor-card pb-44 pt-5 px-10 '>
            <div className='honor-image bg-primary'>
                <img src={`${baseImgUrl}/home/topperforming-3.png`} alt="" className=' object-cover'/>
            </div>
            <div className='honor-details flex flex-col gap-5 mt-5'>
                <div className='honor-title'>
                    <h3 className='text-accent text-xl'>Top Student in Fundamentals of Database Systems</h3>
                </div>
                   <div className='honor-date'>
                    <h4 className='text-stone-400'>June 2023</h4>
                  </div>  

                <div className='honor-school'>
                    <h3 className='text-stone-400'>De La Salle Lipa Junior Philippine Computer Society DLSL CHAPTER</h3>
                </div>      

            </div>    
        </div>

        <div className='honor-card pb-44 pt-5 px-10 '>
            <div className='honor-image bg-primary'>
                <img src={`${baseImgUrl}/home/topperforming-4.png`} alt="" className=' object-cover'/>
            </div>
            <div className='honor-details flex flex-col gap-5 mt-5'>
                <div className='honor-title'>
                    <h3 className='text-accent text-xl'>Top Student in Applications Development and Emerging Technologies</h3>
                </div>
                   <div className='honor-date'>
                    <h4 className='text-stone-400'>June 2023</h4>
                  </div>  

                <div className='honor-school'>
                    <h3 className='text-stone-400'>De La Salle Lipa Junior Philippine Computer Society DLSL CHAPTER</h3>
                </div>      

            </div>    
        </div>
    </div>
  )
}

export default TopPerforming