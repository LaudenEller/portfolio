import React, { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './Hero.module.css';
import TypingEffectMultiLine from './typingEffect';
import AboutSection from '../About/AboutSection';

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section 
      id="hero" 
      // Applies different css rules to hero section based on theme choice
      className={`${styles.hero} ${theme === 'dark' ? styles.heroDark : ''}`}
      aria-label="Introduction Section"
      style={{ padding: '0vh 5vw', textAlign: 'center', backgroundColor: '#FBFDFF' }}
    >
      <div style={{ 
        paddingLeft: '20vw',
        paddingTop: '13vh',
        paddingRight: '20vw',
        paddingBottom: '2vh' }}>
      <TypingEffectMultiLine
  lines={[
    "Hi, I'm Lauden.",
    "A software engineer committed to helping business be better.",
    "Have a look around..."
  ]}
  speed={15}         // typing speed per character
  lineDelay={250}   // pause between lines
  initialDelay={2000} // wait 2s before starting
/>
    </div>
    <AboutSection />
    </section>
  );
};

export default Hero;
