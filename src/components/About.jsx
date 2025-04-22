import React, { useEffect, useState, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, 100);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark py-16 md:py-24" id="about">
      <div 
        ref={sectionRef}
        className="container mx-auto px-6"
      >
        <h2 
          className={`text-4xl md:text-5xl font-bold mb-12 text-secondary font-body text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          About Me
        </h2>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Skills & Education Section */}
          <div 
            className={`md:w-1/2 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-primary p-8 rounded-lg shadow-xl mb-8">
              <h3 className="text-2xl font-bold text-secondary mb-4 font-body">Education & Experience</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="text-xl font-bold text-accent">National University of Singapore</h4>
                  <p className="text-light">Computer Science Undergraduate (Starting 2025)</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="text-xl font-bold text-accent">Temasek Polytechnic</h4>
                  <p className="text-light">Diploma in Cybersecurity & Digital Forensics with Merit</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="text-xl font-bold text-accent">National Service</h4>
                  <p className="text-light">Currently serving while honing programming skills</p>
                </div>
              </div>
            </div>
            
            <div className="bg-primary p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold text-secondary mb-4 font-display">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-secondary rounded-full mr-2"></div>
                  <span className="text-light">Full-Stack Development</span>
                </div>
                {/* <div className="flex items-center">
                  <div className="w-3 h-3 bg-secondary rounded-full mr-2"></div>
                  <span className="text-light">Database Design</span>
                </div> */}
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-secondary rounded-full mr-2"></div>
                  <span className="text-light">Cybersecurity</span>
                </div>
                {/* <div className="flex items-center">
                  <div className="w-3 h-3 bg-secondary rounded-full mr-2"></div>
                  <span className="text-light">Machine Learning</span>
                </div> */}
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-secondary rounded-full mr-2"></div>
                  <span className="text-light">Python Programming</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-secondary rounded-full mr-2"></div>
                  <span className="text-light">IT Systems & Servers</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bio Section */}
          <div 
            className={`md:w-1/2 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="bg-primary p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold text-dark mb-4 font-body">My Journey</h3>
              
              <p className="text-secondary mb-4 font-display">
              Hi, I'm Larry, a passionate student studying at NUS majoring in Computer Science. I have a strong interest in the field of applied artificial intelligence (AI) in cybersecurity.
              </p>
              
              <p className="text-secondary mb-4 font-display">
                I graduated from Temasek Polytechnic with a diploma in Cybersecurity and Digital Forensics, where I developed a strong foundation in programming and cybersecurity principles.
              </p>
              
              <p className="text-secondary mb-4 font-display">
                I've built full-stack web applications with robust databases, created Python programs using machine learning to detect abnormal network flows, and gained entry-level experience with IT systems and servers.
              </p>
              
              <p className="text-secondary mb-4 font-display">
                Although I am currently serving my mandatory National Service, I continue to hone my programming skills by creating small personal projects. I will be returning to NUS in 2025 where I will be majoring in Computer Science. I hope to create new connections and learn from like-minded individuals!
              </p>
              
              <p className="text-secondary mb-4 font-display">
                My self-driven and curious nature pushes me to learn something new every day. When I'm not coding, you'll find me playing guitar or exercising — maintaining balance is key to my creative process.
              </p>
              
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-secondary mb-4 font-display">Personal Interests</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-secondary px-3 py-1 rounded-full text-dark font-medium">Guitar</span>
                  <span className="bg-secondary px-3 py-1 rounded-full text-dark font-medium">Fitness</span>
                  <span className="bg-secondary px-3 py-1 rounded-full text-dark font-medium">Cybersecurity</span>
                  <span className="bg-secondary px-3 py-1 rounded-full text-dark font-medium">Software Development</span>
                  <span className="bg-secondary px-3 py-1 rounded-full text-dark font-medium">Machine Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;