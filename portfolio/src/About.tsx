import React from 'react'
import aboutData from './constants/about.json'

const About = () => {
  return (
    <div className='shadow-sm shadow-white text-white w-auto m-32 flex flex-col sm:flex-row md:h-1/2 p-10 '>       
            <div className='flex flex-col m-2 w-1/2'>
                <h3 className='text-center font-bold text-3xl m-5 break-words'>About Me</h3>   
                <p className=''>{aboutData[0].about}</p>          
            </div>
            <div className='m-2 w-1/2 '>
                {/* image */}
                {aboutData[0].about}                   
            </div>
    </div>   
  )
}
export default About
