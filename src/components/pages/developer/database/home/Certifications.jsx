import React from 'react'
import { baseImgUrl } from '../../../../helpers/functions-general'

const Certifications = () => {
  return (
    <div className='certs-grid grid grid-cols-3 gap-7 py-20 bg-darkblue'>
        <div className='cert-card pb-44 pt-5 px-10 '>
            <div className='cert-image bg-primary'>
                <img src={`${baseImgUrl}/home/cert-1.jpg`} alt="" className=' object-cover'/>
            </div>
            <div className='cert-details flex flex-col gap-5 mt-5'>
                <div className='cert-title'>
                    <h3 className='text-accent text-xl'>CompTIA IT Fundamentals ITF+ Certification</h3>
                </div>
                   <div className='cert-date'>
                    <h4 className='text-stone-400'>July 2022</h4>
                  </div>  

                <div className='cert-school'>
                    <h3 className='text-stone-400'>CompTIA</h3>
                </div>      

            </div>    
        </div>
        <div className='cert-card pb-44 pt-5 px-10 '>
            <div className='cert-image bg-primary'>
                <img src={`${baseImgUrl}/home/cert-2.jpg`} alt="" className=' object-cover'/>
            </div>
            <div className='cert-details flex flex-col gap-5 mt-5'>
                <div className='cert-title'>
                    <h3 className='text-accent text-xl'>SAP Certified Application Associate - SAP Business One</h3>
                </div>
                   <div className='cert-date'>
                    <h4 className='text-stone-400'>December 2022</h4>
                  </div>  

                <div className='cert-school'>
                    <h3 className='text-stone-400'>FIT Academy</h3>
                </div>      

            </div>    
        </div>
        <div className='cert-card pb-44 pt-5 px-10 '>
            <div className='cert-image bg-primary'>
                <img src={`${baseImgUrl}/home/cert-3.jpg`} alt="" className=' object-cover'/>
            </div>
            <div className='cert-details flex flex-col gap-5 mt-5'>
                <div className='cert-title'>
                    <h3 className='text-accent text-xl'>Skills To Succeed Academy Certificate of Achievement</h3>
                </div>
                   <div className='cert-date'>
                    <h4 className='text-stone-400'>March 2023</h4>
                  </div>  

                <div className='cert-school'>
                    <h3 className='text-stone-400'>Accenture</h3>
                </div>      

            </div>    
        </div>

        <div className='cert-card pb-44 pt-5 px-10 '>
            <div className='cert-image bg-primary'>
                <img src={`${baseImgUrl}/home/cert-4.jpg`} alt="" className=' object-cover'/>
            </div>
            <div className='cert-details flex flex-col gap-5 mt-5'>
                <div className='cert-title'>
                    <h3 className='text-accent text-xl'>Gotta Catch-Em All: Introduction to Digital Forensics</h3>
                </div>
                   <div className='cert-date'>
                    <h4 className='text-stone-400'>March 2023</h4>
                  </div>  

                <div className='cert-school'>
                    <h3 className='text-stone-400'>Junior Philippine Computer Society - Mapúa University Junior</h3>
                </div>      

            </div>    
        </div>

        <div className='cert-card pb-44 pt-5 px-10 '>
            <div className='cert-image bg-primary'>
                <img src={`${baseImgUrl}/home/cert-6.jpg`} alt="" className=' object-cover'/>
            </div>
            <div className='cert-details flex flex-col gap-5 mt-5'>
                <div className='cert-title'>
                    <h3 className='text-accent text-xl'>MasterClass 101</h3>
                </div>
                   <div className='cert-date'>
                    <h4 className='text-stone-400'>June 2023</h4>
                  </div>  

                <div className='cert-school'>
                    <h3 className='text-stone-400'>Junior Philippine Computer Society - De La Salle Lipa Chapter</h3>
                </div>      

            </div>    
        </div>
        <div className='cert-card pb-44 pt-5 px-10 '>
            <div className='cert-image bg-primary'>
                <img src={`${baseImgUrl}/home/cert-5.jpg`} alt="" className=' object-cover'/>
            </div>
            <div className='cert-details flex flex-col gap-5 mt-5'>
                <div className='cert-title'>
                    <h3 className='text-accent text-xl'>Campus DEVCON</h3>
                </div>
                   <div className='cert-date'>
                    <h4 className='text-stone-400'>April 2023</h4>
                  </div>  

                <div className='cert-school'>
                    <h3 className='text-stone-400'>Junior Philippine Computer Society - De La Salle Lipa Chapter</h3>
                </div>      

            </div>    
        </div>
    </div>
  )
}

export default Certifications