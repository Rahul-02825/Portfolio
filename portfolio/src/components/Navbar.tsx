import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(''); 

  const handleScroll = () => {
    const sections = document.querySelectorAll('section'); 
    const scrollPosition = window.scrollY + 60; 

    sections.forEach(section => {
      const sectionTop = section.offsetTop; 
      const sectionHeight = section.clientHeight; 
      if (scrollPosition >= sectionTop-sectionHeight/2) {
        setActiveLink(section.id); // Set active link based on section id
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return ( 
    <div className="bg-black flex justify-end w-screen fixed ">
      <div className="flex mx-32">
        <a href="#home" className={` p-5 hover:text-gray-300 ${activeLink === 'home' ? 'text-gray-300' : 'text-white'}`}>Home</a>
        <a href="#about" className={`p-5 hover:text-gray-300 ${activeLink === 'about' ? 'text-gray-300' : 'text-white'}`}>About</a>
        <a href="#projects" className={`p-5 hover:text-gray-300 ${activeLink === 'projects' ? 'text-gray-300' : 'text-white'}`}>projects</a>
        <a href="#resume" className='text-white p-5'>Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
