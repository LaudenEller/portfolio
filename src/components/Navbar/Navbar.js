// import React, { useContext } from 'react';
// import ThemeContext from '../../contexts/ThemeContext';
// import styles from './Navbar.module.css';
// import { animateLogo } from '../Logo/logo';

// const Navbar = () => {
//   const { toggleTheme, theme } = useContext(ThemeContext);

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.logo}>
//         {animateLogo}
//       </div>
//       <div className={styles.navLinks}>
//         <a href="#about" className="nav-link">About</a>
//         <a href="#projects" className="nav-link">Projects</a>
//         <a href="#work" className="nav-link">Work</a>
//         <a href="#contact" className="nav-link">Contact</a>
//       </div>
//       <button onClick={toggleTheme} className={`btn ${theme === 'dark' ? 'btn-light' : 'btn-dark'}`}>
//         Toggle Theme
//       </button>
//     </nav>
//   );
// };

// export default Navbar;

// Using navbar with an svg that's been refactored by chatgpt to include the svg in the bottom half of the logo.svg file
// import React, { useContext, useEffect } from 'react';
// import ThemeContext from '../../contexts/ThemeContext';
// import styles from './Navbar.module.css';
// import { logoAnimation } from '../Logo/logo';
// import { Logo } from '../Logo/logo';

// const Navbar = () => {
//   const { toggleTheme, theme } = useContext(ThemeContext);

//   // Call animateLogo once the SVG has loaded
//   useEffect(() => {
//     const logoObject = document.getElementById("logo-object");
//     if (logoObject) {
//       logoObject.addEventListener("load", logoAnimation);
//     }

//     // Cleanup event listener on unmount
//     return () => {
//       if (logoObject) {
//         logoObject.removeEventListener("load", logoAnimation);
//       }
//     };
//   }, []);

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.logo}>
//         <object
//           type="image/svg+xml"
//           data="/assets/logo.svg"
//           id="logo-object"
//           aria-label="Logo"
//         ></object>
//       </div>
//       <div className={styles.navLinks}>
//         <a href="#about" className="nav-link">About</a>
//         <a href="#projects" className="nav-link">Projects</a>
//         <a href="#work" className="nav-link">Work</a>
//         <a href="#contact" className="nav-link">Contact</a>
//       </div>
//       <button onClick={toggleTheme} className={`btn ${theme === 'dark' ? 'btn-light' : 'btn-dark'}`}>
//         Toggle Theme
//       </button>
//     </nav>
//   );
// };

// export default Navbar;

// This is for using the first half of the logo.svg file and the second half of the logo.js file
import React, { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import { Logo } from '../Logo/logo';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Logo /> {/* Render the Logo component */}
      </div>
      <div className={styles.navLinks}>
        <a href="#about" className="nav-link">About</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#work" className="nav-link">Work</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
      <button
        onClick={toggleTheme}
        className={`btn ${theme === 'dark' ? 'btn-light' : 'btn-dark'}`}
      >
        Toggle Theme
      </button>
    </nav>
  );
};

export default Navbar;