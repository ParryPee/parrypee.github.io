import React, { useEffect, useState, useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
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

  // Social media links - replace these with your actual links
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="text-2xl" />,
      url: "https://github.com/ParryPee",
      color: "transition duration-300 hover:scale-105 font-body"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-2xl" />,
      url: "https://www.linkedin.com/in/larry-lee-hy/",
      color: "transition duration-300 hover:scale-105 font-body"
    },
    {
      name: "Email",
      icon: <FaEnvelope className="text-2xl" />,
      url: "mailto:larrylee2003@live.com",
      color: "transition duration-300 hover:scale-105 font-body"
    }
  ];

  return (
    <div className="min-h-[60vh] bg-primary py-16 md:py-24" id="contact">
      <div 
        ref={sectionRef}
        className="container mx-auto px-6"
      >
        <h2 
          className={`text-4xl md:text-5xl font-bold mb-12 text-accent font-body text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Get In Touch
        </h2>
        
        <div className={`max-w-3xl mx-auto bg-secondary rounded-lg shadow-xl p-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '300ms' }}>
          <p className="text-dark text-lg mb-8 font-display text-center">
            I'm currently open to new opportunities and collaborations. Feel free to reach out through any of the platforms below!
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center gap-2 text-dark ${social.color} transition-colors duration-300 group`}
                style={{ transitionDelay: `${400 + (index * 150)}ms` }}
              >
                <div className="bg-light p-4 rounded-full shadow-md group-hover:shadow-lg transition-all duration-300">
                  {social.icon}
                </div>
                <span className="font-medium">{social.name}</span>
              </a>
            ))}
          </div>
          
          <div 
            className={`mt-12 text-center transition-all duration-700 delay-900 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-dark mb-6">
              Want to discuss a project or opportunity? Send me a message and I'll get back to you as soon as possible.
            </p>
            <a 
              href="mailto:larrylee2003@live.com" 
              className="inline-block bg-dark hover:bg-accent text-light font-bold px-6 py-3 rounded-lg transition-colors duration-300 shadow-lg"
            >
              Send Message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;