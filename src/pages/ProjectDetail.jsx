import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import projectsData from '../data/projectsData';
import ImageModal from '../components/ImageModal'; // Import the new component

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  // States for image modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  // We're now using the imported projectsData

  useEffect(() => {
    // Simulate fetching project data
    const fetchProject = () => {
      const foundProject = projectsData.find(p => p.id === projectId);
      
      // Wrap in setTimeout to simulate network request
      setTimeout(() => {
        setProject(foundProject || null);
        setLoading(false);
        
        // Set visibility after a short delay for animation
        setTimeout(() => {
          setIsVisible(true);
        }, 100);
      }, 300);
    };

    fetchProject();
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [projectId]);
  // Handle image click
  const handleImageClick = (img) => {
    setSelectedImage(img);
    setModalOpen(true);
  };
    // Close modal
    const closeModal = () => {
      setModalOpen(false);
    };
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-dark font-medium">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary">
        <div className="text-center p-8 max-w-2xl">
          <h2 className="text-3xl font-bold text-dark mb-4">Project Not Found</h2>
          <p className="text-dark mb-8">Sorry, the project you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/projects" 
            className="inline-block bg-accent hover:bg-dark text-light font-medium px-6 py-3 rounded-lg transition-colors duration-300"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <div 
          className={`mb-8 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <Link 
            to="/projects" 
            className="inline-flex items-center text-dark hover:text-accent transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Projects
          </Link>
        </div>
        
        {/* Project Header */}
        <div className="mb-12">
          <h1 
            className={`text-4xl md:text-5xl font-bold text-dark font-body mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {project.title}
          </h1>
          
          <div 
            className={`flex flex-wrap items-center gap-4 mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="bg-accent text-light px-3 py-1 rounded-full text-sm font-bold">
              {project.category}
            </span>
            <span className="text-dark">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              {project.year}
            </span>
            
            {project.featured && (
              <span className="bg-primary text-accent px-3 py-1 rounded-full text-sm font-bold border border-accent">
                Featured Project
              </span>
            )}
          </div>
        </div>
        
        {/* Project Image Gallery */}
        <div 
          className={`bg-primary rounded-xl overflow-hidden shadow-xl mb-12 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative h-96">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover cursor-pointer" 
              onClick={() => handleImageClick(project.image)}
            />
          </div>
          
          {project.gallery && project.gallery.length > 1 && (
            <div className="p-4 grid grid-cols-3 gap-4">
              {project.gallery.map((img, index) => (
                <div key={index} className="h-24 rounded-lg overflow-hidden">
                  <img 
                    src={img} 
                    alt={`${project.title} screenshot ${index+1}`}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75 transition-opacity duration-300" 
                    onClick={() => handleImageClick(img)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div 
            className={`lg:col-span-2 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-primary rounded-xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-accent mb-4 font-body">Overview</h2>
              <div className="prose prose-lg text-secondary">
                {project.longDescription.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph.trim()}</p>
                ))}
              </div>
            </div>
            
            {project.challenges && project.challenges.length > 0 && (
              <div className="bg-primary rounded-xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-accent mb-4 font-body">Challenges</h2>
                <ul className="list-disc pl-6 space-y-2 text-secondary">
                  {project.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.features && project.features.length > 0 && (
              <div className="bg-primary rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-accent mb-4 font-body">Key Features</h2>
                <ul className="list-disc pl-6 space-y-2 text-secondary">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div 
            className={`transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Technologies */}
            <div className="bg-primary rounded-xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-accent mb-4 font-body">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-secondary px-3 py-2 rounded-lg text-dark font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Links */}
            <div className="bg-primary rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-accent mb-4 font-body">Links</h2>
              <div className="space-y-4">
                {project.githubLink && (
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center text-secondary hover:text-accent transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub Repository
                  </a>
                )}
                
                {project.demoLink && (
                  <a 
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center text-secondary hover:text-accent transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation between projects */}
        <div 
          className={`mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Link 
            to="/projects"
            className="bg-primary hover:bg-dark text-secondary hover:text-light p-6 rounded-xl shadow-lg transition-colors duration-300 flex items-center justify-center"
          >
            <span className="text-lg font-bold">View All Projects</span>
          </Link>
          
          <a 
            href={project.githubLink || '#'} 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-dark text-light p-6 rounded-xl shadow-lg transition-colors duration-300 flex items-center justify-center"
          >
            <span className="text-lg font-bold">View Source Code</span>
          </a>
        </div>
      </div>
            {/* Image Modal */}
            <ImageModal 
        image={selectedImage}
        alt={project.title}
        isOpen={modalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default ProjectDetail;