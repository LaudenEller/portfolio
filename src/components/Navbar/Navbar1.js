// Import required dependencies and components
import React, { useContext, useState, useEffect } from 'react';
import ThemeContext from '../../contexts/ThemeContext'; // Theme context for dark/light mode toggle
import styles from './Navbar1.module.css';              // CSS module styles for scoped class names
import HeroImage from '../Hero/HeroImage';             // Custom component displaying hero image
import { Logo } from '../Logo/logo';                   // Custom component displaying log o
import { useNavigate } from 'react-router-dom';                
import { useAboutContext } from '../../contexts/AboutContext';
import { useNavShrink } from '../../contexts/NavShrinkContext';

// Nav links and the section ids they scroll to. Targets are explicit so removing a link
// never shifts the others. Ai section (#nav4) is planned; add back when it exists:
// { label: 'Ai', href: '#nav4' },
const navLinks = [
  { label: 'About', href: '#nav1' },
  { label: 'ESG', href: '#nav2' },
  { label: 'Work', href: '#nav3' },
  { label: 'Contact', href: '#nav5' },
];

const Navbar1 = () => {
  const [revealSticky, setRevealSticky] = useState(false);
  const [showFloatingNav, setShowFloatingNav] = useState(false);
  // Access the theme and toggle function from context
  const { toggleTheme, theme } = useContext(ThemeContext);
  // Track scroll state to shrink navbar on scroll
  const [isScrolled] = useState(false);
  // Used to delay visibility for fade-in effect
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSide, setHoveredSide] = useState(null);
  const navigate = useNavigate();
const { shrinkFactor } = useNavShrink(); // Get shrink factor
  
// Fade-in effect after 1 second on component mount
  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timeout); // Cleanup to prevent memory leaks
  }, []);
  
  // Scroll listener to update `isScrolled` state
  useEffect(() => {
    const handleScroll = () => {
      // setIsScrolled(window.scrollY > 125);
      // setShowFloatingNav(window.scrollY > 125);
      const shouldShow = window.scrollY > 125;
    setShowFloatingNav(shouldShow);

       // Animate only after nav is shown
    if (shouldShow) {
      setTimeout(() => setRevealSticky(true), 10); // short delay lets browser register mount
    } else {
      setRevealSticky(false); // remove when scrolling up
    }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { setShowAbout } = useAboutContext();

const scrollToAbout = () => {
  setShowAbout(true); // 👈 trigger About open
  navigate("/#nav1"); // 👈 scroll to Hero section
};

// Calculate dynamic styles based on shrink factor
  const getStickyNavStyles = () => {
    const height = 10 - (shrinkFactor * 1.5); // 10vh -> 8.5vh
    const scale = 1 - (shrinkFactor * 0.15);  // 100% -> 85%
    const opacity = 1 - (shrinkFactor * 0.2); // 100% -> 80%
    
    return {
      height: `${height}vh`,
      transform: `scaleY(${scale})`,
      opacity: opacity,
      transformOrigin: 'top center'
    };
  };

   return (
    <>
    {showFloatingNav && (
  <div 
          className={`${styles.stickyNav} ${revealSticky ? styles.revealSticky : ''}`}
          style={getStickyNavStyles()}
        >
    {/* Row 3: Nav links */}
        <div className={styles.navLinksWrapper}>
          <div className={styles.navbar_logo}>
            <Logo isScrolled={isScrolled} />
          </div>
          <div className={`${styles.fadeIn} ${isVisible ? styles.hidden : ''} ${styles.stickyLinks} ${styles.navLinks}`}>
            {navLinks.map(({ label, href }) => (
               <a
                  key={label}
                  onClick={label === 'About' ? scrollToAbout : null} // Scroll to About on click
                  href={href}
                  className={styles.navLink}
                >
                {label}
              </a>
            ))}
          </div>
        </div>
              <div className={styles.toggleContainer}>
                <button
                aria-label="Toggle theme"
                onClick={toggleTheme} 
                className={`${styles.themeButton} ${styles.themeToggle} ${theme === 'dark' ? styles.light : styles.dark}`} />
              </div>
  </div>
)}
    <div
      className={`
        ${styles.navWrapper}
        ${theme === 'dark' ? 'bg-dark' : 'bg-light'}
      `}
    >
      <nav className={styles.navBar}>
        {/* Row 1: Spacer with background */}
        <div className={`${styles.fadeIn} ${isVisible ? styles.hidden : ''} ${styles.rowOne}`} />

        {/* Row 2: Theme toggle + updated social icons box */}
        <div className={`${styles.fadeIn} ${isVisible ? styles.hidden : ''} ${styles.rowTwo}`}>
          <div>
              <div className={styles.toggleContainer}>
                <button 
                aria-label="Toggle theme"
                onClick={toggleTheme}
                className={`${styles.themeButton} ${styles.themeToggle} ${theme === 'dark' ? styles.dark : styles.light}`} />
              </div>
          </div>

          <div
            className={`${styles.socialIcons} ${
              hoveredSide ? styles[`highlight${hoveredSide}`] : ''
            }`}
            onMouseLeave={() => setHoveredSide(null)} // Reset on exit
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              onMouseEnter={() => setHoveredSide('Left')}
            >
              <img src="/assets/socialIcons/github_24x24_white.png" alt="GitHub" className={styles.iconImage} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              onMouseEnter={() => setHoveredSide('Top')}
            >
              <img src="/assets/socialIcons/Li_logo_24x24.png" alt="LinkedIn" className={styles.iconImage} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              onMouseEnter={() => setHoveredSide('Right')}
            >
              <img src="/assets/socialIcons/igLogo_bw.png" alt="Instagram" className={styles.iconImage} />
            </a>
          </div>
        </div>

        {/* Row 3: Placeholder */}
        <div className={`${styles.fadeIn} ${isVisible ? styles.hidden : ''}`} />

        {/* Row 3: Nav links */}
        <div className={styles.navLinksWrapper}>
          <div className={`${styles.fadeIn} ${isVisible ? styles.hidden : ''} ${styles.navLinks}`}>
            {navLinks.map(({ label, href }) => (
               <a
                  key={label}
                  onClick={label === 'About' ? scrollToAbout : null} // Scroll to About on click
                  href={href}
                  className={styles.navLink}
                >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Floating logo and image */}
      <div className={styles.floatingLogoContainer}>
        <div className={styles.logoWrapper}>
          <HeroImage />
          <div className={styles.navbar_logo}>
            <Logo isScrolled={isScrolled} />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar1;
