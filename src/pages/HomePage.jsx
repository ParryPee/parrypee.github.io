import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Featured from '../components/Featured';
import Contact from '../components/Contact';
import Cocurricular from '../components/Cocurricular';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Featured />
      <Cocurricular />
      <Contact />
    </>
  );
};

export default HomePage;