import React from 'react';
import { BsFillHddNetworkFill } from 'react-icons/bs';
import { FaDatabase, FaLaptopCode } from 'react-icons/fa';
import { GrReactjs } from 'react-icons/gr';
import { MdOutlineSecurity } from 'react-icons/md';
import Slider from "react-slick";
import { baseImgUrl } from '../../../../helpers/functions-general';

const SliderSkills = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
      };
      
  return (
    <>
        <div className='slider-skills py-20'>
         <div className='slider-skills-title flex flex-col gap-4 mb-20 max-w-[45rem] mx-auto leading-8'>
                <h2 className='text-accent text-4xl text-center'>Skills</h2>
                <p className='text-md text-stone-300 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nam exercitationem at aspernatur eligendi labore corrupti.</p>
        </div>
            <Slider {...settings} className='px-20'>
                <div className='skills-card p-5 text-center bg-darkblue shadow-md h-[400px]'>
                    <div className='flex flex-col gap-4 p-12'>
                    <img src={`${baseImgUrl}/home/skills-1.png`} alt="" className='w-[7rem] h-[6rem] mx-auto object-contain'/>
                        <h3>C++ Programming</h3>
                        <p>Proficient in C++ programming, I excel in developing efficient and robust software solutions. With a strong grasp of object-oriented programming principles, 
                            I leverage C++ to create high-performance applications across various domains. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        
                    </div>   
                </div>
                <div className='skills-card p-5 text-center bg-darkblue shadow-md h-[400px]'>
                    <div className='flex flex-col gap-4 p-12'>
                    <img src={`${baseImgUrl}/home/skills-2.png`} alt="" className='w-[7rem] h-[6rem] mx-auto object-contain'/>
                        <h3>Information Security</h3>
                        <p>Skilled in information security, I specialize in safeguarding digital assets and mitigating cybersecurity risks. 
                            From implementing encryption protocols to conducting vulnerability assessments, I ensure the confidentiality, integrity, and availability of data.</p>
                    </div>   
                </div>

                <div className='skills-card p-5 text-center bg-darkblue shadow-md h-[400px]'>
                    <div className='flex flex-col gap-4 p-12'>
                    <img src={`${baseImgUrl}/home/skills-3.png`} alt="" className='w-[7rem] h-[6rem] mx-auto object-contain'/>
                        <h3>MS Access</h3>
                        <p>Experienced in database management, I proficiently design, optimize, and maintain relational databases using MySQL and MS Access. 
                            With expertise in SQL querying and database administration, I ensure efficient data storage, retrieval, and management.</p>
                    </div>   
                </div>

                <div className='skills-card p-5 text-center bg-darkblue shadow-md h-[400px]'>
                    <div className='flex flex-col gap-4 p-12'>
                        <img src={`${baseImgUrl}/home/skills-4.png`} alt="" className='w-[7rem] h-[6rem] mx-auto object-contain'/>
                        <h3>MySQL</h3>
                        <p>Experienced in database management, I proficiently design, optimize, and maintain relational databases using MySQL and MS Access. 
                            With expertise in SQL querying and database administration, I ensure efficient data storage, retrieval, and management.</p>
                    </div>   
                </div>

                <div className='skills-card p-5 text-center bg-darkblue shadow-md h-[400px]'>
                    <div className='flex flex-col gap-4 p-12'>
                    <img src={`${baseImgUrl}/home/skills-5.png`} alt="" className='w-[7rem] h-[6rem] mx-auto object-contain'/>
                        <h3>Networking</h3>
                        <p>Knowledgeable in networking principles, I design and configure network infrastructures to facilitate seamless communication and connectivity. 
                            From setting up routers and switches to troubleshooting network issues, I ensure reliable and secure network operations</p>
                    </div>   
                </div>
                <div className='skills-card p-5 text-center bg-darkblue shadow-md h-[400px]'>
                    <div className='flex flex-col gap-4 p-12'>
                        <img src={`${baseImgUrl}/home/skills-6.png`} alt="" className='w-[7rem] h-[6rem] mx-auto object-contain'/>
                        <h3>ReactJS</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio laborum impedit natus accusantium eos doloribus ad facilis sunt nihil placeat porro expedita, ut non. Vero sunt dolores dignissimos nam doloremque officia, cumque quisquam quae totam?</p>
                    </div>   
                </div>
                <div className='skills-card p-5 text-center bg-darkblue shadow-md h-[400px]'>
                    <div className='flex flex-col gap-4 p-12'>
                        <img src={`${baseImgUrl}/home/skills-7.png`} alt="" className='w-[7rem] h-[6rem] mx-auto object-contain'/>
                        <h3>HTML</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio laborum impedit natus accusantium eos doloribus ad facilis sunt nihil placeat porro expedita, ut non. Vero sunt dolores dignissimos nam doloremque officia, cumque quisquam quae totam?</p>
                    </div>   
                </div>
                <div className='skills-card p-5 text-center bg-darkblue shadow-md h-[400px]'>
                    <div className='flex flex-col gap-4 p-12'>
                        <img src={`${baseImgUrl}/home/skills-8.png`} alt="" className='w-[7rem] h-[6rem] mx-auto object-contain'/>
                        <h3>Tailwind CSS</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio laborum impedit natus accusantium eos doloribus ad facilis sunt nihil placeat porro expedita, ut non. Vero sunt dolores dignissimos nam doloremque officia, cumque quisquam quae totam?</p>
                    </div>   
                </div>
                <div className='skills-card p-5 text-center bg-darkblue shadow-md h-[400px]'>
                    <div className='flex flex-col gap-4 p-12'>
                        <img src={`${baseImgUrl}/home/skills-9.png`} alt="" className='w-[7rem] h-[6rem] mx-auto object-contain'/>
                        <h3>SASS</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio laborum impedit natus accusantium eos doloribus ad facilis sunt nihil placeat porro expedita, ut non. Vero sunt dolores dignissimos nam doloremque officia, cumque quisquam quae totam?</p>
                    </div>   
                </div>
            </Slider>
        </div>
    </>
  );
}

export default SliderSkills