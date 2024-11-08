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
    </section>
  );
};

export default Hero;
