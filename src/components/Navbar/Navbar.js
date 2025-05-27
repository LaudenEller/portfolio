// import React, { useContext, useState, useEffect, forwardRef } from 'react';
// import ThemeContext from '../../contexts/ThemeContext';
// import { Logo } from '../Logo/logo';
// import styles from './Navbar.module.css';
// import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';

// const Navbar = forwardRef((props, ref) => {
//   const { toggleTheme, theme } = useContext(ThemeContext);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50); // Set threshold for resizing
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <BootstrapNavbar
//       className={` ${styles.navbar} ${theme === 'dark' ? 'bg-dark' : 'bg-light'} ${isScrolled ? styles.shrink : ""}`}
//       fixed="top"
//       // sticky='top'
//       ref={ref}
//     >
//       <Container className={styles.navContainer}>
        
//         {/* Logo */}
//         <BootstrapNavbar.Brand href="#" className={`${styles.navbar_brand}`}>
//           <div className={styles.navbar_logo}>
//             <Logo isScrolled={isScrolled}/>
//           </div>
//         </BootstrapNavbar.Brand>

//         {/* {Navbar Spacer 1} */}
//         <div className={styles.navSpacer1}></div>

//         {/* Navbar Links */}
//         <Nav className={styles.navLinks}>
//           <Nav.Link href="#about" className={styles.navLink}>About</Nav.Link>
//           <Nav.Link href="#projects" className={styles.navLink}>Projects</Nav.Link>
//           <Nav.Link href="#work" className={styles.navLink}>Work</Nav.Link>
//           <Nav.Link href="#contact" className={styles.navLink}>Contact</Nav.Link>
//         </Nav>

//         {/* {Navbar Spacer 2} */}
//         <div className={styles.navSpacer2}></div>

//         {/* Theme Toggle Button */}
//         <div className={`${styles.toggleContainer}`} onClick={toggleTheme}>
//           <div className={`${styles.themeToggle} ${theme === 'dark' ? styles.dark : styles.light}`}></div>
//         </div>
//       </Container>
//     </BootstrapNavbar>
//   );
// });

// export default Navbar;

import React, { useContext, useState, useEffect, forwardRef } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './Navbar.module.css';
import HeroImage from '../Hero/HeroImage';

const Navbar = () => {
    const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <nav style={{ width: '100%', fontFamily: 'Arial, sans-serif' }}>
      {/* Row 1: White background */}
      <div style={{ backgroundColor: '#F6F6F6', height: '15vh' }}>
        {/* Empty row with white bg */}
      </div>

      {/* Row 2: Two sections */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 20px',
          alignItems: 'center',
          height: '6vh',
          backgroundColor: '#0f0f0f',
        }}
      >
        {/* Left section - one button */}
        <div>
          <button style={{ marginLeft: '27.5vw', background: 'none', border: '0', padding: '8px 16px', cursor: 'pointer' }}>
            {/* Theme Toggle Button */}
         <div className={`${styles.toggleContainer}`} onClick={toggleTheme}>
           <div className={`${styles.themeToggle} ${theme === 'dark' ? styles.dark : styles.light}`}></div>
         </div>
          </button>
        </div>

        {/* Right section - three links */}
        <div style={{ display: 'flex', borderRight: 'solid', borderLeft: 'solid', borderColor: '#FBFDFF', paddingLeft: '2vw', paddingRight: '2vw', marginRight: '13vw', gap: 30 }}>
          <a href="#link1" style={{ textDecoration: 'none', color: '#fbfdff' }}>
            Link 1
          </a>
          <a href="#link2" style={{ textDecoration: 'none', color: '#fbfdff' }}>
            Link 2
          </a>
          <a href="#link3" style={{ textDecoration: 'none', color: '#fbfdff' }}>
            Link 3
          </a>
        </div>
      </div>

      {/* Row 3: Two sections */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 20px',
          alignItems: 'center',
          height: 60,
          backgroundColor: '#FBFDFF',
        }}
      >
        {/* Left section - image */}
        {/* <div>
          <img
            src="https://via.placeholder.com/120x40?text=Logo"
            alt="Logo"
            style={{ marginLeft: '200%', height: 40, objectFit: 'contain' }}
          />
        </div> */}
        <div style={{ height: '35vh', marginLeft: '5vw', width: '25vw', overflow: 'hidden' }}>
          <HeroImage />
        </div>


        {/* Right section - five links */}
        <div style={{ width: '70%', display: 'flex', gap: 85 }}>
          <a href="#nav1" style={{ justifyContent: 'space-evenly', textDecoration: 'none', color: 'black', fontWeight: 'bold', borderBottom: 'solid', borderWidth: '0.25rem' }}>
            Nav 1
          </a>
          <a href="#nav2" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', borderBottom: 'solid', borderWidth: '0.25rem' }}>
            Nav 2
          </a>
          <a href="#nav3" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', borderBottom: 'solid', borderWidth: '0.25rem' }}>
            Nav 3
          </a>
          <a href="#nav4" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', borderBottom: 'solid', borderWidth: '0.25rem' }}>
            Nav 4
          </a>
          <a href="#nav5" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', borderBottom: 'solid', borderWidth: '0.25rem' }}>
            Nav 5
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
