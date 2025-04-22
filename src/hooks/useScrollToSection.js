import { useCallback } from 'react';

const useScrollToSection = (offset = 96) => {
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop - offset // Offset by navbar height
      });
    }
  }, [offset]);

  return scrollToSection;
};

export default useScrollToSection;