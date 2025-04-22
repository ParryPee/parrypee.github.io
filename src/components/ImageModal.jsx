import React from 'react';

const ImageModal = ({ image, alt, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-4xl w-full">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 bg-white rounded-full p-2 text-black hover:bg-gray-200 transition-colors"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Image container */}
        <div className="bg-white rounded-lg overflow-hidden">
          <img 
            src={image} 
            alt={alt} 
            className="w-full object-contain max-h-[80vh]" 
          />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;