import React, { useEffect, useState, useRef } from 'react';
// Import your images here
import cisco_image from '../assets/CiscoAPJC.jfif';
import japan_image from '../assets/japan.jpg';
import ycep_image from '../assets/csa_logo.png';


const Cocurricular = () => {
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

  // Cocurricular activities data
  const cocurricularActivities = [
    {
      title: "Cisco APJC NetAcad Riders 2022",
      organization: "Cisco",
      description: "Competed in a network competition organized by Cisco, focusing on network design and implementation.",
      skills: ["Networking", "Cisco"],
      image: cisco_image,
      date: "2022"
    },
    {
      title: "International Student Exchange",
      organization: "Kumamoto National Institute of Technology",
      description: "Participated in a 6 months exchange program, collaborating with local students on a Genetic Algorithm project.",
      skills: ["Genetic Algorithms", "International Exchange Program"],
      image: japan_image,
      date: "October 2023 - February 2024"
    },
    {
      title: "Youth Cybersecurity Workshop Facilitator",
      organization: "CSA Singapore",
      description: "Volunteered as a facilitator for a workshop aimed at giving students hands-on experience in cybersecurity, including penetration testing and CTF competitions.",
      skills: ["Teaching", "Cybersecurity", "Penetration Testing", "CTF"],
      image: ycep_image,
      date: "2022 - 2023"
    }
  ];

  return (
    <div className="min-h-screen bg-primary py-16 md:py-24" id="cocurricular">
      <div 
        ref={sectionRef}
        className="container mx-auto px-6"
      >
        <h2 
          className={`text-4xl md:text-5xl font-bold mb-12 text-dark font-body text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Cocurricular Activities
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cocurricularActivities.map((activity, index) => (
            <div 
              key={index}
              className={`bg-secondary rounded-lg shadow-xl overflow-hidden transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + (index * 150)}ms` }}
            >
              <div className="h-48 bg-dark relative overflow-hidden">
                {activity.image && (
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="w-full h-full object-cover" 
                  />
                )}
                {!activity.image && (
                  <div className="w-full h-full flex items-center justify-center bg-accent">
                    <span className="text-light text-2xl font-bold">{activity.title}</span>
                  </div>
                )}
              </div>
              
              <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-accent mb-1 font-body">{activity.title}</h3>
                  <p className="text-dark font-medium">{activity.organization}</p>
                  <p className="text-dark text-sm">{activity.date}</p>
                </div>
                
                <p className="text-dark mb-4 font-display flex-grow">{activity.description}</p>
                
                <div className="mt-auto">
                  <h4 className="font-bold text-dark mb-2 font-body">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {activity.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-primary px-2 py-1 text-sm rounded-full text-dark font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div 
          className={`mt-12 text-center transition-all duration-700 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
        </div>
      </div>
    </div>
  );
};

export default Cocurricular;