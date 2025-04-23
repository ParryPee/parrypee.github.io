import React, { useState, useEffect } from 'react'
import useScrollToSection from '../hooks/useScrollToSection'
import { Link, useLocation } from 'react-router-dom';




const Navbar = () => {
  // Add style element to handle main content padding
  useEffect(() => {
    // Create style element
    const style = document.createElement('style');
    style.innerHTML = `
      body {
        padding-top: 96px; /* This should match your navbar height (h-24 = 6rem = 96px) */
      }
    `;
    // Append style to document head
    document.head.appendChild(style);
    
    // Clean up function
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  const [nav, setNav] = useState(false)
  const scrollToSection = useScrollToSection()
  const location = useLocation();
  
  // This effect runs when the location changes
  useEffect(() => {
    // Close mobile menu whenever location changes
    setNav(false);
    
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

  // Custom link component that closes the menu
  const NavLink = ({ to, children }) => (
    <Link to={to} onClick={() => setNav(false)}>
      {children}
    </Link>
  );

  return (
    <div className='fixed top-0 left-0 right-0 flex justify-between items-center h-24 w-full mx-auto px-4 text-secondary font-bold font-body bg-primary z-50'>
      <h1 className='w-full text-3xl font-bold text-secondary'><NavLink to="/">ParryPee</NavLink></h1>
      
      {/* Desktop Menu */}
      <ul className='hidden md:flex'>
        <li className='p-6 hover:text-accent cursor-pointer'><NavLink to="/">Home</NavLink></li>
        <li className='p-6 hover:text-accent cursor-pointer'><NavLink to="/#about">About Me</NavLink></li>
        <li className='p-6 hover:text-accent cursor-pointer'><NavLink to="/#projects">Projects</NavLink></li>
        <li className='p-6 hover:text-accent cursor-pointer'><NavLink to="/#cocurricular">Co-curricular</NavLink></li>
        <li className='p-6 hover:text-accent cursor-pointer'><NavLink to="/#contact">Contact</NavLink></li>
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
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-light ease-in-out duration-500 md:hidden z-[60]' : 'fixed left-[-100%] ease-in-out duration-500'}>
        <div className="flex justify-between items-center">
          <h1 className='w-full text-3xl font-bold text-secondary m-4'>ParryPee</h1>
          <div onClick={handleNav} className="mr-4 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
        <ul className='uppercase p-4'>
          <li className='p-4 border-b border-gray-600 hover:text-accent cursor-pointer'><NavLink to="/">Home</NavLink></li>
          <li className='p-4 border-b border-gray-600 hover:text-accent cursor-pointer'><NavLink to="/#about">About Me</NavLink></li>
          <li className='p-4 border-b border-gray-600 hover:text-accent cursor-pointer'><NavLink to="/#projects">Projects</NavLink></li>
          <li className='p-4 border-b border-gray-600 hover:text-accent cursor-pointer'><NavLink to="/#cocurricular">Co-curricular</NavLink></li>
          <li className='p-4 hover:text-accent cursor-pointer'><NavLink to="/#contact">Contact</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar