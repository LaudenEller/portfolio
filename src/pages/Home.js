import React from 'react';
import Hero from '../components/Hero/Hero';
import Hero2 from '../components/Hero/Hero2';
// import About from '../components/About/About';
import WorkExamples from '../components/WorkExamples/WorkExamples';
import Contact from '../components/Contact/Contact';
import Highlights from '../components/ProjectHighlights/Highlights';
import WorkExamplesTest3 from '../components/WorkExamples/WorkExamplesTest3';
import Features from '../components/Features/Features';
import Projects from '../components/WorkExamples/Projects';
// import WorkExamples1 from '../components/WorkExamples/WorkExamples1';
import WorkExamplesTest from '../components/WorkExamples/WorkExamplesTest';
import HorizontalLoopWithControls from '../components/WorkExamples/WorkExamplesTest2';

// This is where the different sections are loaded onto the home page in the right order
const Home = () => {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>

      {/* <section id="hero2">
        <Hero2 />
      </section> */}
      
      {/* <section id="projects">
        <Projects />
      </section> */}
      
      {/* <section id="about">
        <About />
      </section> */}
      

      <section id="projectContainer">
        <Highlights />
      </section>

        <section id="workTest">
        <WorkExamplesTest3 />
        {/* <WorkExamplesTest /> */}
        {/* <HorizontalLoopWithControls /> */}
        </section>
      
      {/* <section id="work1">
        <WorkExamples1 />
      </section> */}
      {/* <section id="work">
        <WorkExamples />
      </section> */}
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
