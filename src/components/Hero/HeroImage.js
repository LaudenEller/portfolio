import React, { useContext, useEffect, useState } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './HeroImage.module.css';

const HeroImage = () => {
  const { theme } = useContext(ThemeContext); // Use context for theme
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // 1 second delay
  
    return () => clearTimeout(timeout);
  }, []);
  
  useEffect(() => {
    // Ensure image is loaded before applying any effects
    const handleLoad = () => setIsLoaded(true);

    const image = new Image();
    const basePath = `/assets/heroImages/navBar`;
    image.src = `${basePath}/logoImage_Navbar_100x100.png`;
    image.onload = handleLoad;

    return () => {
      image.onload = null; // Cleanup
    };
  }, [theme]);

  if (!theme) return null; // Prevent rendering until theme is set

  return (
      <div className="row g-0">
        <div className="col-12">
          {isLoaded && (
             <img
              src={`/assets/heroImages/navBar/logoImage_Navbar_100x100.png`}
              alt="Illustration of Lauden eating noodles at a desk with three monitors"
              className={`img-fluid ${styles.heroImage} ${styles.fadeIn} ${isVisible ? styles.hidden : ''}`}
              loading="eager"
            />
          )}
        </div>
       </div>
  );
};

export default HeroImage;
