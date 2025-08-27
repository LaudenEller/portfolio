import React from 'react';
import Hero from '../components/Hero/Hero';
import Hero2 from '../components/Hero/Hero2';
import AboutSection from '../components/About/AboutSection';
import WorkExamples from '../components/WorkExamples/WorkExamples';
import Highlights from '../components/ProjectHighlights/Highlights';
import WorkExamplesTest3 from '../components/WorkExamples/WorkExamplesTest3';
import Features from '../components/Features/Features';
import Projects from '../components/WorkExamples/Projects';
// import WorkExamples1 from '../components/WorkExamples/WorkExamples1';
import WorkExamplesTest from '../components/WorkExamples/WorkExamplesTest';
import HorizontalLoopWithControls from '../components/WorkExamples/WorkExamplesTest2';
import { useRef, useEffect } from 'react';
import { useAboutContext } from '../contexts/AboutContext';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// This is where the different sections are loaded onto the home page in the right order
const Home = () => {
  const heroRef = useRef(null);
  const { setShowAbout } = useAboutContext();
  
useEffect(() => {
    if (!heroRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: heroRef.current,
      start: 'top top',
      end: 'bottom top',
      onLeave: () => setShowAbout(false),
      onLeaveBack: () => setShowAbout(false),
      markers: false, // Turn to true for debugging
    });

    return () => trigger.kill(); // cleanup
  }, [setShowAbout]);


  return (
    <div>
      <section 
      ref={heroRef}
      id="nav1">
        <Hero />
      </section>

      {/* <section id="hero2">
        <Hero2 />
      </section> */}
      
      {/* <section id="projects">
        <Projects />
      </section> */}
      
      {/* <section id="about">
        <AboutSection />
      </section> */}
      

      <section id="nav2">
        <Highlights />
      </section>

        <section id="nav3">
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

    </div>
  );
};

export default Home;
