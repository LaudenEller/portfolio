import React, { useContext, useEffect, useState } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './HeroText.module.css';

const HeroText = () => {
    const { theme } = useContext(ThemeContext); // Use context for theme

    if (!theme) return null; // Prevent rendering until theme is set

  return (
    // <div className={`container-fluid ${styles.heroContainer}`}>
      <div className="row g-0">
        <div className="col-12">
            <p className={`${styles.heroText}`}>
                Hi, I'm Lauden, a software engineer committed to helping business be better. Have a look around...</p>
        </div>
       </div>
    // </div>
  );
};

export default HeroText;
