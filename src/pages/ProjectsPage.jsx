import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projectsData';

const ProjectsPage = () => {
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
      { threshold: 0.1 }
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

  // Sort projects to show featured projects first
  const allProjects = [...projectsData].sort((a, b) => {
    // Featured projects come first
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    // If both are featured or both are not featured, maintain original order
    return 0;
  });

  // State for category filtering
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Get unique categories
  const categories = ['All', ...new Set(allProjects.map(project => project.category))];
  
  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-secondary py-16 md:py-24">
      <div 
        ref={sectionRef}
        className="container mx-auto px-6"
      >
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h1 
            className={`text-5xl md:text-6xl font-bold mb-6 text-dark font-body transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            My Projects
          </h1>
          <p 
            className={`text-xl text-dark max-w-3xl mx-auto transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            A collection of my work spanning various technologies and domains. 
            Each project represents a unique challenge and learning experience.
          </p>
        </div>
        
        {/* Category Filter */}
        <div 
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category 
                  ? 'bg-accent text-light' 
                  : 'bg-primary text-secondary hover:bg-dark hover:text-light'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className={`bg-primary rounded-lg shadow-xl overflow-hidden transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + (index * 100)}ms` }}
            >
              <div className="h-48 bg-dark relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-accent text-light px-3 py-1 rounded-full text-sm font-bold">
                    Featured
                  </div>
                )}
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
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold text-dark mb-4">No projects found</h3>
            <p className="text-dark">No projects match the selected category. Try selecting a different category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;