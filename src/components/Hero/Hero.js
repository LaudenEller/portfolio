import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <h1>Welcome to My Portfolio</h1>
        <p>Your introductory text goes here.</p>
      </div>
    </section>
  );
};

export default Hero;
