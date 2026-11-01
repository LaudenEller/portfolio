import React from 'react';
import AboutParagraph from './AboutParagraph';
import styles from './AboutSection.module.css';
import { useAboutContext } from '../../contexts/AboutContext';

const AboutSection = () => {
  // context-based expansion
  const { showAbout, setShowAbout } = useAboutContext();
  


  return (
    <div className={styles.aboutSectionContainer}>
      <div
        className={styles.toggleBar}
        onClick={() => setShowAbout(!showAbout)}
      >
        {showAbout ? 'Less' : 'More'}
      </div>

      <div className={`${styles.overlay} ${showAbout ? styles.visible : ''}`}>
        <div className={styles.aboutCard}>
          <AboutParagraph />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
