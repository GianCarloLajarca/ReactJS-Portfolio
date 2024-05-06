import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import { MdOutlineSecurity } from 'react-icons/md';
import Slider from "react-slick";

const SliderSkills = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3, 
        arrows: false,
      };
  return (
    <>
        <div className='slider-skills py-20 relative'>
            <div className='slider-skills-title flex flex-col gap-4 mb-20'>
                <h2 className='text-accent text-4xl text-center'>Skills</h2>
                <p className='text-md text-stone-300 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nam exercitationem at aspernatur eligendi labore corrupti.</p>
            </div>
        
            <Slider {...settings}>
                <div className='skills-card p-5 text-center bg-darkblue shadow-md'>
                    <div className='flex flex-col gap-4 p-12'>
                        <FaLaptopCode className='max-w-50 mx-auto text-5xl'/>
                        <h3>C++ Programming</h3>
                        <p>Proficient in C++ programming, I excel in developing efficient and robust software solutions. With a strong grasp of object-oriented programming principles, 
                            I leverage C++ to create high-performance applications across various domains.</p>
                    </div>   
                </div>
                {/* <div className='skills-card p-5 text-center bg-darkblue shadow-md'>
                    <div className='flex flex-col gap-4 p-12'>
                        <MdOutlineSecurity className='max-w-50 mx-auto text-5xl'/>
                        <h3>Information Security</h3>
                        <p>Skilled in information security, I specialize in safeguarding digital assets and mitigating cybersecurity risks. 
                            From implementing encryption protocols to conducting vulnerability assessments, I ensure the confidentiality, integrity, and availability of data.</p>
                    </div>   
                </div>
                <div className='skills-card p-5 text-center bg-darkblue shadow-md'>
                    <div className='flex flex-col gap-4 p-12'>
                        <MdOutlineSecurity className='max-w-50 mx-auto text-5xl'/>
                        <h3>Database Management</h3>
                        <p>Experienced in database management, I proficiently design, optimize, and maintain relational databases using MySQL and MS Access. 
                            With expertise in SQL querying and database administration, I ensure efficient data storage, retrieval, and management.</p>
                    </div>   
                </div>
                <div className='skills-card p-5 text-center bg-darkblue shadow-md'>
                    <div className='flex flex-col gap-4 p-12'>
                        <MdOutlineSecurity className='max-w-50 mx-auto text-5xl'/>
                        <h3>Database Management</h3>
                        <p>Experienced in database management, I proficiently design, optimize, and maintain relational databases using MySQL and MS Access. 
                            With expertise in SQL querying and database administration, I ensure efficient data storage, retrieval, and management.</p>
                    </div>   
                </div> */}
            </Slider>
        </div>
    </>
  );
}

export default SliderSkills