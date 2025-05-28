import React, { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import HeroImage from './HeroImage';
import HeroText from './HeroText';
import styles from './Hero.module.css';
import { Typewriter } from 'react-simple-typewriter';
import TypingEffect from './typingEffect';
import TypingEffectMultiLine from './typingEffect';

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section 
      id="hero" 
      // Applies different css rules to hero section based on theme choice
      className={`${styles.hero} ${theme === 'dark' ? styles.heroDark : ''}`}
      aria-label="Introduction Section"
      style={{ padding: '3vh 5vw', textAlign: 'center', backgroundColor: '#FBFDFF' }}
    >
      <div style={{ padding: '17vh 20vw' }}>
      {/* <TypingEffect text="Hii, I'm Lauden, a software engineer committed to helping business be better. Have a look around..."/> */}
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
      {/* <h2 style={{ fontSize: '1.5rem', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
        <Typewriter
          words={[
            "Hi,", "I'm Lauden,", "a software engineer committed to helping business be better.", "Have a look around..."
          ]}
          loop={1}                // Don't repeat
          cursor                  // Show a blinking cursor
          cursorStyle="|"         // Customize cursor
          typeSpeed={40}          // Milliseconds per letter
          deleteSpeed={50}        // Not used here, but required
          delaySpeed={1000}       // Wait time before repeating/deleting (if loop > 1)
        />
      </h2> */}
      {/* <div className={`container-fluid px-0 ${styles.heroContainer}`}> */}
      {/* <HeroText theme={theme} /> */}
      {/* <HeroImage theme={theme} /> */}
      {/* <p className={`${styles.heroText}`}>Hi, I'm Lauden, a software engineer committed to helping business be better. Have a look around...</p>
      </div> */}
    </section>
  );
};

export default Hero;
