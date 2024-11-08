// // HeroImage.js

// import React, { useRef, useEffect, useState } from 'react';
// import { useTheme } from './themeContext';
// import styles from './HeroImage.module.css'; // Create this CSS module for hero image styles

// function getImageSrc(theme, screenSize) {
//   const basePath = `/assets/heroImages/${theme}`; // Base path to theme-based images

//   switch (screenSize) {
//     case 'mobile':
//       return `${basePath}/hero-mobile.webp`; // Replace with your mobile image
//     case 'tablet':
//       return `${basePath}/hero-tablet.webp`; // Replace with your tablet image
//     case 'desktop':
//       return `${basePath}/hero-desktop.webp`; // Replace with your desktop image
//     default:
//       return `${basePath}/hero-desktop.webp`;
//   }
// }

// const HeroImage = () => {
//   const { theme } = useTheme();
//   const [screenSize, setScreenSize] = useState('desktop');
//   const [isLoaded, setIsLoaded] = useState(false);
//   const heroRef = useRef(null);

//   useEffect(() => {
//     // Determine screen size on initial load and on resize
//     const updateScreenSize = () => {
//       if (window.innerWidth < 768) {
//         setScreenSize('mobile');
//       } else if (window.innerWidth < 1024) {
//         setScreenSize('tablet');
//       } else {
//         setScreenSize('desktop');
//       }
//     };

//     updateScreenSize(); // Set initial screen size
//     window.addEventListener('resize', updateScreenSize);
//     return () => window.removeEventListener('resize', updateScreenSize);
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsLoaded(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { rootMargin: '0px 0px 50px 0px', threshold: 0.1 }
//     );

//     if (heroRef.current) {
//       observer.observe(heroRef.current);
//     }

//     return () => {
//       if (heroRef.current) observer.unobserve(heroRef.current);
//     };
//   }, []);

//   const imageSrc = getImageSrc(theme, screenSize);

//   return (
//     <div className={styles.heroContainer} ref={heroRef}>
//       {isLoaded && (
//         <img
//           src={imageSrc}
//           alt="Hero Banner"
//           className={styles.heroImage}
//           loading="eager"
//         />
//       )}
//     </div>
//   );
// };

// export default HeroImage;

// HeroImage.js
import React, { useContext, useRef, useEffect, useState } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './HeroImage.module.css';

function getImageSrc(theme, screenSize) {
  const basePath = `/assets/heroImages/${theme}`; // Updated base path for hero images

  switch (screenSize) {
    case 'mobile':
      return `${basePath}/hero-mobile.webp`; // Use actual mobile image path
    case 'tablet':
      return `${basePath}/hero-tablet.webp`; // Use actual tablet image path
    case 'desktop':
      return `${basePath}/hero-desktop.webp`; // Use actual desktop image path
    default:
      return `${basePath}/hero-desktop.webp`;
  }
}

const HeroImage = () => {
  const { theme } = useContext(ThemeContext); // Use context for theme
  const [screenSize, setScreenSize] = useState('desktop');
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    // Determine screen size on initial load and on resize
    const updateScreenSize = () => {
      if (window.innerWidth < 768) {
        setScreenSize('mobile');
      } else if (window.innerWidth < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    updateScreenSize(); // Set initial screen size
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  useEffect(() => {
    if (!theme) return; // Ensure theme is defined before setting up observer

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px 50px 0px', threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, [theme]);

  const imageSrc = getImageSrc(theme, screenSize); // Use function to get correct image

  if (!theme) return null; // Prevent rendering until theme is set

  return (
    <div className={styles.heroContainer} ref={heroRef}>
      {isLoaded && (
        <img
          src={imageSrc}
          alt="Hero Banner"
          className={styles.heroImage}
          loading="eager"
        />
      )}
    </div>
  );
};

export default HeroImage;