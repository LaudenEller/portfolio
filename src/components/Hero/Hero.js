import React, { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import HeroImage from './HeroImage';
import styles from './Hero.module.css';

const Hero = () => {
  const { theme } = useContext(ThemeContext); // Access theme for conditional styles

  return (
    <section 
      id="hero" 
      className={`${styles.hero} ${theme === 'dark' ? styles.heroDark : ''}`}
      aria-label="Introduction Section"
    >
      <HeroImage theme={theme} /> {/* Render only the HeroImage component */}
    </section>
  );
};

export default Hero;
