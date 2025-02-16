import React from 'react';
import Hero from '../components/Hero/Hero';
// import About from '../components/About/About';
import WorkExamples from '../components/WorkExamples/WorkExamples';
import Contact from '../components/Contact/Contact';
import Highlights from '../components/ProjectHighlights/Highlights';

// This is where the different sections are loaded onto the home page in the right order
const Home = () => {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>
      
      {/* <section id="about">
        <About />
      </section> */}
      
      {/* <section id="projectContainer">
        <ProjectHighlight />
      </section> */}

      {/* <section id="projectContainer">
        <Highlights />
      </section> */}
      
      <section id="work">
        <WorkExamples />
      </section>
      {/* <section id="work2">
        <WorkGallery />
      </section> */}
      
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
