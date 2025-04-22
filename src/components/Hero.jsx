import React, { useEffect, useState } from 'react'
import portrait from '../assets/hero.PNG'
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Set a small timeout to ensure the animation starts after component mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-primary overflow-hidden">
      <div className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content - Slide in from left */}
        <div 
          className={`md:w-1/2 mb-12 md:mb-0 md:pr-12 transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
        >
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-secondary font-display transition-all duration-700 delay-300"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            Hello, I'm <span className="text-dark">Larry Lee</span>
          </h1>
          <p 
            className="text-lg md:text-2xl mb-8 text-light font-body transition-all duration-700 delay-500"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            Aspiring Software Developer. Student at NUS.
          </p>
          <div 
            className="flex flex-wrap gap-4 transition-all duration-700 delay-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <button className="bg-dark hover:bg-accent text-white px-6 py-3 rounded-lg font-medium transition duration-300 hover:scale-105 font-body" onClick={() => window.location.href = '/#contact'}>
              Contact Me
            </button>
            <Link className="bg-dark hover:bg-accent text-white px-6 py-3 rounded-lg font-medium transition duration-300 hover:scale-105 font-body" to={"/projects"}>
              View My Work
            </Link>
          </div>
        </div>
        
        {/* Portrait Image - Fade in and scale up */}
        <div 
          className={`md:w-1/2 flex justify-center transition-all duration-1000 ease-out delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <div className="relative">
            {/* Animated border that draws itself */}
            <div 
              className={`p-4 border-4 border-secondary rounded-lg transition-all duration-1000 ${
                isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              }`}
              style={{
                transitionDelay: '600ms'
              }}
            >
              <img 
                src={portrait} 
                alt="Larry Lee portrait" 
                className={`rounded-lg h-96 object-cover transition-all duration-1000 ${
                  isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                }`}
                style={{
                  transitionDelay: '800ms'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;