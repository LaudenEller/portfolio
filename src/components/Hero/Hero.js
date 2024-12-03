import React, { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import HeroImage from './HeroImage';
import styles from './Hero.module.css';

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section 
      id="hero" 
      // Applies different css rules to hero section based on theme choice
      className={`${styles.hero} ${theme === 'dark' ? styles.heroDark : ''}`}
      aria-label="Introduction Section"
    >
      <HeroImage theme={theme} />
      <div className={`${styles.heroText}`}><h1>Hi, I'm Lauden, a software engineer committed to helping businesses be better... Have a look around!</h1></div>
    </section>
  );
};

export default Hero;
