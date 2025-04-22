import React, { useState } from 'react'
import useScrollToSection from '../hooks/useScrollToSection'
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const scrollToSection = useScrollToSection()
  const location = useLocation();
  
  // This effect runs when the location changes
  useEffect(() => {
    // Check if there is a hash in the URL
    if (location.hash) {
      // Get the element with the id that matches the hash
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // Scroll to that element
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  const handleNav = () => {
    setNav(!nav)
  }

  const handleScrollToSection = (sectionId) => {
    setNav(false); // Close mobile menu if open
    scrollToSection(sectionId);
  };

  return (
    <div className='flex justify-between items-center h-24 w-full mx-auto px-4 text-secondary font-bold font-body'>
      <h1 className='w-full text-3xl font-bold text-secondary'>ParryPee</h1>
      
      {/* Desktop Menu */}
      <ul className='hidden md:flex'>
        <li className='p-6 hover:text-accent cursor-pointer' ><Link to="/">Home</Link></li>
        <li className='p-6 hover:text-accent cursor-pointer' ><Link to="/#about">About Me</Link></li>
        <li className='p-6 hover:text-accent cursor-pointer' ><Link to="/#projects">Projects</Link></li>
        <li className='p-6 hover:text-accent cursor-pointer' ><Link to="/#cocurricular">Co-curricular</Link></li>
        <li className='p-6 hover:text-accent cursor-pointer' ><Link to="/#contact">Contact</Link></li>
      </ul>

      {/* Mobile Menu Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </div>

      {/* Mobile Menu */}
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-light ease-in-out duration-500 md:hidden z-10' : 'fixed left-[-100%] ease-in-out duration-500'}>
        <h1 className='w-full text-3xl font-bold text-secondary m-4'>ParryPee</h1>
        <ul className='uppercase p-4'>
          <li className='p-4 border-b border-gray-600 hover:text-accent cursor-pointer' onClick={() => handleScrollToSection('home')}>Home</li>
          <li className='p-4 border-b border-gray-600 hover:text-accent cursor-pointer' onClick={() => handleScrollToSection('about')}>About me</li>
          <li className='p-4 border-b border-gray-600 hover:text-accent cursor-pointer' onClick={() => handleScrollToSection('projects')}>Projects</li>
          <li className='p-4 border-b border-gray-600 hover:text-accent cursor-pointer' onClick={() => handleScrollToSection('cocurricular')}>Co-curricular</li>
          <li className='p-4 hover:text-accent cursor-pointer' onClick={() => handleScrollToSection('contact')}>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar