import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center">
      <div className="bg-primary p-8 md:p-12 rounded-xl shadow-xl max-w-2xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-accent mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">Page Not Found</h2>
        <p className="text-secondary mb-8">Sorry, the page you are looking for doesn't exist or has been moved.</p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="bg-dark hover:bg-accent text-light font-medium px-6 py-3 rounded-lg transition-colors duration-300"
          >
            Back to Home
          </Link>
          <Link 
            to="/projects" 
            className="bg-primary border border-dark hover:bg-dark text-dark hover:text-light font-medium px-6 py-3 rounded-lg transition-colors duration-300"
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;