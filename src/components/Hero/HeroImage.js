import React, { useContext, useEffect, useState } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './HeroImage.module.css';

const HeroImage = () => {
  const { theme } = useContext(ThemeContext); // Use context for theme
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Ensure image is loaded before applying any effects
    const handleLoad = () => setIsLoaded(true);

    const image = new Image();
    const basePath = `/assets/heroImages/${theme}`;
    image.src = `${basePath}/hero-desktop.webp`;
    image.onload = handleLoad;

    return () => {
      image.onload = null; // Cleanup
    };
  }, [theme]);

  if (!theme) return null; // Prevent rendering until theme is set

  return (
    // <div className={`container-fluid ${styles.heroContainer}`}>
      <div className="row g-0">
        <div className="col-12">
          {isLoaded && (
            <img
              src={`${theme}/hero-desktop.webp`}
              srcSet={`
                /assets/heroImages/${theme}/hero-mobile.webp 600w,
                /assets/heroImages/${theme}/hero-tablet.webp 1200w,
                /assets/heroImages/${theme}/hero-desktop.webp 1920w
              `}
              sizes="(max-width: 600px) 200vw, (max-width: 1200px) 150vw, 75vw"
              alt="Hero Banner"
              className={`img-fluid ${styles.heroImage}`}
              loading="eager"
            />
          )}
        </div>
       </div>
    // </div>
  );
};

export default HeroImage;
