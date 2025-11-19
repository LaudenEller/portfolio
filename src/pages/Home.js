import Hero from '../components/Hero/Hero';
import Highlights from '../components/ProjectHighlights/Highlights';
// import WorkExamples from '../components/WorkExamples/WorkExamples';
import { useRef, useEffect } from 'react';
import WorkExamples1 from '../components/WorkExamples/WorkExamples1';
import { useAboutContext } from '../contexts/AboutContext';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { WorkExamples1 } from '../../components/WorkExamples/WorkExamples1';

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
      

      <section id="nav2">
        <Highlights />
      </section>

        <section id="nav3">
        <WorkExamples1 />
        </section>
      
    </div>
  );
};

export default Home;
