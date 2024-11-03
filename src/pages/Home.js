import React from 'react';
import Hero from '../components/Hero/Hero';
// import About from '../components/About/About';
import ProjectHighlight from '../components/ProjectHighlights/ProjectHighlights';
import WorkExamples from '../components/WorkExamples/WorkExamples';
import Contact from '../components/Contact/Contact';

const Home = () => {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      
      {/* <section id="about">
        <About />
      </section> */}
      
      <section id="projects">
        <ProjectHighlight />
      </section>
      
      <section id="work">
        <WorkExamples />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
