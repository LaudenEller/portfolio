import React from "react";
import Contact from "../components/Contact/Contact";
import Hero from '../components/Hero/Hero';
// import ProjectHighlight from '../components/ProjectHighlight/ProjectHighlight';
// import WorkExamples from '../components/WorkExamples/WorkExamples';

const Home = () => {
    return (
      <div className="home">
      <Hero />
      <Contact />
      </div>
    );
  };
  
  export default Home;
