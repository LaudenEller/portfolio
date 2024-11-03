import React, { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './Hero.module.css';

const Hero = ({ title = "Welcome to My Portfolio", introText = "Your introductory text goes here." }) => {
  const { theme } = useContext(ThemeContext); // Access theme if needed for conditional styles

  return (
    <section 
      id="hero" 
      className={`${styles.hero} ${theme === 'dark' ? styles.heroDark : ''}`}
      aria-label="Introduction Section"
    >
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{introText}</p>
      </div>
    </section>
  );
};

export default Hero;
