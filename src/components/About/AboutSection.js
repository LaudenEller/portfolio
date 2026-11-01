import React from 'react';
import AboutParagraph from './AboutParagraph';
import styles from './AboutSection.module.css';
import { useAboutContext } from '../../contexts/AboutContext';

const AboutSection = () => {
  // context-based expansion
  const { showAbout, setShowAbout } = useAboutContext();
  


  return (
    <div className={styles.aboutSectionContainer}>
      <button
        type="button"
        className={styles.toggleBar}
        onClick={() => setShowAbout(!showAbout)}
        aria-expanded={showAbout}
        aria-controls="about-panel"
      >
        {showAbout ? 'Less' : 'More'}
      </button>

      <div id="about-panel" className={`${styles.overlay} ${showAbout ? styles.visible : ''}`} aria-hidden={!showAbout}>
        <div className={styles.aboutCard}>
          <AboutParagraph />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
