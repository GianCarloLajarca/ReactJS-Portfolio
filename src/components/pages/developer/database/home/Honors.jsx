import React from 'react'
import { baseImgUrl } from '../../../../helpers/functions-general'

const Honors = () => {
  return (
    <div className='honors-grid grid grid-cols-3 gap-7 py-20 bg-darkblue'>
        <div className='honor-card pb-44 pt-5 px-10 '>
            <div className='honor-image bg-primary'>
                <img src={`${baseImgUrl}/home/honor-1.jpg`} alt="" className=' object-cover'/>
            </div>
            <div className='honor-details flex flex-col gap-5 mt-5'>
                <div className='honor-title'>
                    <h3 className='text-accent text-xl'>Third Honor Awardee - Second Semester of A.Y. 2022-2023</h3>
                </div>
                   <div className='honor-date'>
                    <h4 className='text-stone-400'>November 2023</h4>
                  </div>  

                <div className='honor-school'>
                    <h3 className='text-stone-400'>De La Salle Lipa</h3>
                </div>      

            </div>    
        </div>
        <div className='honor-card pb-44 pt-5 px-10 '>
            <div className='honor-image bg-primary'>
                <img src={`${baseImgUrl}/home/honor-2.jpg`} alt="" className=' object-cover'/>
            </div>
            <div className='honor-details flex flex-col gap-5 mt-5'>
                <div className='honor-title'>
                    <h3 className='text-accent text-xl'>Second Honor Awardee - First Semester of A.Y. 2022-2023</h3>
                </div>
                   <div className='honor-date'>
                    <h4 className='text-stone-400'>April 2021</h4>
                  </div>  

                <div className='honor-school'>
                    <h3 className='text-stone-400'>De La Salle Lipa</h3>
                </div>      

            </div>


            

           
                
        </div>

        <div className='honor-card pb-44 pt-5 px-10 '>
            <div className='honor-image bg-primary'>
                <img src={`${baseImgUrl}/home/honor-3.png`} alt="" className=' object-cover'/>
            </div>
            <div className='honor-details flex flex-col gap-5 mt-5'>
                <div className='honor-title'>
                    <h3 className='text-accent text-xl'>First Honor Awardee - Second Semester of A.Y. 2021 - 2022</h3>
                </div>
                   <div className='honor-date'>
                    <h4 className='text-stone-400'>December 2021</h4>
                  </div>  

                <div className='honor-school'>
                    <h3 className='text-stone-400'>De La Salle Lipa</h3>
                </div>      

            </div>

        </div>
        <div className='honor-card pb-44 pt-5 px-10 '>
            <div className='honor-image bg-primary'>
                <img src={`${baseImgUrl}/home/honor-4.png`} alt="" className=' object-cover'/>
            </div>
            <div className='honor-details flex flex-col gap-5 mt-5'>
                <div className='honor-title'>
                    <h3 className='text-accent text-xl'>First Honor Awardee - First Semester of A.Y. 2021-2022</h3>
                </div>
                   <div className='honor-date'>
                    <h4 className='text-stone-400'>May 2022</h4>
                  </div>  

                <div className='honor-school'>
                    <h3 className='text-stone-400'>De La Salle Lipa</h3>
                </div>      

            </div>

        </div>
        <div className='honor-card pb-44 pt-5 px-10 '>
            <div className='honor-image bg-primary'>
                <img src={`${baseImgUrl}/home/honor-5.png`} alt="" className=' object-cover'/>
            </div>
            <div className='honor-details flex flex-col gap-5 mt-5'>
                <div className='honor-title'>
                    <h3 className='text-accent text-xl'>First Honor Awardee - Second Semester of A.Y. 2020 - 2021</h3>
                </div>
                   <div className='honor-date'>
                    <h4 className='text-stone-400'>November 2021</h4>
                  </div>  

                <div className='honor-school'>
                    <h3 className='text-stone-400'>De La Salle Lipa</h3>
                </div>      

            </div>

        </div>
        <div className='honor-card pb-44 pt-5 px-10 '>
            <div className='honor-image bg-primary'>
                <img src={`${baseImgUrl}/home/honor-6.jpg`} alt="" className=' object-cover'/>
            </div>
            <div className='honor-details flex flex-col gap-5 mt-5'>
                <div className='honor-title'>
                    <h3 className='text-accent text-xl'>Dean’s List - Third Honor for the 1st Semester A.Y. 2020-2021</h3>
                </div>
                   <div className='honor-date'>
                    <h4 className='text-stone-400'>May 2022</h4>
                  </div>  

                <div className='honor-school'>
                    <h3 className='text-stone-400'>De La Salle Lipa</h3>
                </div>      

            </div>

        </div>
    </div>
  )
}

export default Honors