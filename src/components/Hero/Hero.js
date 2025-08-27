// hero.js
import React, { useContext, useRef, useEffect } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './Hero.module.css';
import AboutSection from '../About/AboutSection';
import gsap from 'gsap';

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  // Define the lines of text for the typing effect
  const lines = [
    "Hi, I'm Lauden.",
    "A software engineer committed to helping business be better.",
    "Have a look around..."
  ];

  const lineRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !lineRefs.current.includes(el)) {
      lineRefs.current.push(el);
    }
  };

  useEffect(() => {
    const speed = 15;         // character delay in ms
    const lineDelay = 250;    // delay between lines in ms
    const initialDelay = 2000; // delay before starting in ms

    const tl = gsap.timeline({ delay: initialDelay / 1000 });

    lineRefs.current.forEach((line, i) => {
      const chars = line.querySelectorAll('.char');
      tl.fromTo(
        chars,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: speed / 1000,
          stagger: speed / 1000,
        },
        i === 0 ? 0 : `+=${lineDelay / 1000}`
      );
    });

    // Cleanup function to stop the animation if the component is unmounted
    return () => {
      tl.kill(); // This stops the animation and clears the timeline
    };
  }, []); // Empty dependency array to ensure it runs once on mount

  return (
    <section 
      id="hero" 
      className={`${styles.hero} ${theme === 'dark' ? styles.heroDark : ''}`}
      aria-label="Introduction Section"
      style={{ padding: '0vh 5vw', textAlign: 'center', backgroundColor: '#FBFDFF' }}
    >
      <div style={{ 
        paddingLeft: '20vw',
        paddingTop: '13vh',
        paddingRight: '20vw',
        paddingBottom: '2vh' }}
      >
        {lines.map((line, i) => (
          <h3
            key={i}
            ref={addToRefs}
            style={{ margin: '8px 0', whiteSpace: 'normal', overflow: 'hidden' }}
          >
            {line.split(' ').map((word, wordIdx) => (
              <span
                key={wordIdx}
                style={{ display: 'inline-block', whiteSpace: 'nowrap', marginRight: '0.5ch' }}
              >
                {word.split('').map((char, charIdx) => (
                  <span
                    key={charIdx}
                    className={`char${char === '.' && i === 0 ? ' accent' : ''}`}
                    style={{ display: 'inline-block' }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </h3>
        ))}
      </div>
      <AboutSection />
    </section>
  );
};

export default Hero;
