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
      <p className={`${styles.heroText}`}>Hi, I'm Lauden, a software engineer committed to helping business be better... Have a look around!</p>
    </section>
  );
};

export default Hero;
