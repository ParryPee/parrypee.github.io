import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import rex_image from '../assets/RexTunes.png';
import genetic_image from '../assets/Rosenbrock-Elitism.png';
import sdn_image from '../assets/sdn-2.png';

const Projects = () => {
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

  // Featured projects data
  const featuredProjects = [
    {
      id: "network-attack",
      title: "Network Attack Detection System",
      description: "A Python-based system using machine learning algorithms and other industry tools to detect and analyze network attacks.",
      technologies: ["Python", "Scikit-learn", "Network Protocols"],
      image: sdn_image
    },
    {
      id: "genetic-algorithms",
      title: "Applications in Genetic Algorithms",
      description: "A project implementing genetic algorithms for optimization problems, showcasing the power of evolutionary computation.",
      technologies: ["Python", "Genetic Algorithms", "Optimization"],
      image: genetic_image
    },
    {
      id: "rextunes",
      title: "RexTunes: A discord bot",
      description: "A simple discord bot written in Python with the ability to play music.",
      technologies: ["Python", "Discord API", "FFmpeg"],
      image: rex_image
    }
  ];

  return (
    <div className="min-h-screen bg-secondary py-16 md:py-24" id="projects">
      <div 
        ref={sectionRef}
        className="container mx-auto px-6"
      >
        <h2 
          className={`text-4xl md:text-5xl font-bold mb-12 text-dark font-body text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div 
              key={index}
              className={`bg-primary rounded-lg shadow-xl overflow-hidden transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + (index * 150)}ms` }}
            >
              <div className="h-48 bg-dark relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover" 
                />
              </div>
              
              <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                <h3 className="text-xl font-bold text-accent mb-2 font-body">{project.title}</h3>
                <p className="text-secondary mb-4 font-display flex-grow">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-bold text-dark mb-2 font-body">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-secondary px-2 py-1 text-sm rounded-full text-dark font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link 
                  to={`/projects/${project.id}`}
                  className="inline-block bg-dark hover:bg-accent text-light font-medium px-4 py-2 rounded-lg transition-colors duration-300 mt-auto self-start"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div 
          className={`mt-12 text-center transition-all duration-700 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Link 
            to="/projects" 
            className="inline-block bg-primary hover:bg-dark text-secondary hover:text-light font-bold px-6 py-3 rounded-lg transition-colors duration-300 shadow-lg"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;