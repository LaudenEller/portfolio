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
import { Logo } from '../Logo/logo';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';

const Navbar = () => {
    const { toggleTheme, theme } = useContext(ThemeContext);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setIsVisible(true);
      }, 1000); // 1 second delay

    return () => clearTimeout(timeout);
    }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 125); // Set threshold for resizing
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <div className={styles.navWrapper}>
      <div 
      className={` ${styles.navWrapper} ${theme === 'dark' ? 'bg-dark' : 'bg-light'} ${isScrolled ? styles.shrink : ""}`}
      >
    <nav style={{ width: '100%', fontFamily: 'Arial, sans-serif' }}>
      {/* Row 1: White background */}
      <div 
      className={`${styles.fadeIn} ${isVisible ? styles.hidden : ''}`}
      style={{ backgroundColor: '#F6F6F6', height: '11vh' }}>
        {/* Empty row with white bg */}
      </div>

      {/* <div 
  className={`${styles.fadeIn} ${isVisible ? styles.hidden : ''}`}
  style={{ backgroundColor: '#F6F6F6', height: '11vh' }}
>
  <img 
    src={`/assets/navBarImages/navbar_bg.png`}
    alt="Grid Bar" 
    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
  />
</div> */}


      {/* Row 2: Two sections */}
      <div
        className={`${styles.fadeIn} ${isVisible ? styles.hidden : ''}`}
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
          <button style={{ marginLeft: '18vw', background: 'none', border: '0', padding: '8px 16px', cursor: 'pointer' }}>
            {/* Theme Toggle Button */}
         <div className={`${styles.toggleContainer}`} onClick={toggleTheme}>
           <div className={`${styles.themeToggle} ${theme === 'dark' ? styles.dark : styles.light}`}></div>
         </div>
          </button>
        </div>

        {/* Right section - three links */}
        {/* <div style={{ display: 'flex', height: '7vh', borderRight: 'solid', borderLeft: 'solid', borderColor: '#FBFDFF', paddingTop: '0.3rem',paddingLeft: '2vw', paddingRight: '2vw', marginRight: '13vw', gap: 30 }}>
          <a href="#link1" style={{ textDecoration: 'none', color: '#fbfdff' }}>
            Link 1
          </a>
          <a href="#link2" style={{ textDecoration: 'none', color: '#fbfdff' }}>
            Link 2
          </a>
          <a href="#link3" style={{ textDecoration: 'none', color: '#fbfdff' }}>
            Link 3
          </a>
        </div> */}
      

<div style={{ 
  display: 'flex', 
  height: '7vh', 
  borderRight: 'solid', 
  borderLeft: 'solid', 
  borderColor: '#FFFDEA', 
  paddingTop: '0.3rem',
  paddingLeft: '2vw', 
  paddingRight: '2vw', 
  marginRight: '13vw', 
  gap: 30 
}}> 
   <a href="https://github.com" target="_blank" rel="noopener noreferrer">
    <img 
      src="/assets/socialIcons/github_24x24_white.png" 
      alt="GitHub" 
      style={{ height: '24px', width: '24px' }} 
    />
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <img 
      src="/assets/socialIcons/Li_logo_24x24.png" 
      alt="LinkedIn" 
      style={{ height: '21px', width: '25px' }} 
    />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <img 
      src="/assets/socialIcons/igLogo_bw.png" 
      alt="Instagram" 
      style={{ height: '24px', width: '24px' }} 
    />
  </a>
</div>

</div> 


      {/* Row 3: Two sections */}
      {/* Row 3: Navigation Links */}
<div
  className={`${styles.fadeIn} ${isVisible ? styles.hidden : ''}`}
  style={{

  }}
>
  <div style={{ display: 'flex', gap: 60 }}>
    {/* Your 5 links here */}
  </div>
</div>

      <div
        style={{
          display: 'flex',
          // justifyContent: 'space-between',
          alignItems: 'center',
          // height: 60,
          backgroundColor: '#FBFDFF',
          justifyContent: 'flex-end',
          backgroundColor: '#FBFDFF',
          padding: '0.5rem 2rem',
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
        {/* <div className={styles.imageLogoContainer}>
        <div 
        className={`${styles.fadeIn} ${isVisible ? styles.hidden : ''}`}
        style={{ display: 'flex', position: 'absolute', height: '35vh', marginBottom: '30vw', marginTop: '-6vw', marginLeft: '4vw', width: '22.75vw', overflow: 'visible' }}
        > */}
          {/* <HeroImage /> */}
        {/* </div> */}
           {/* Logo */}
         {/* <BootstrapNavbar.Brand 
         href="#" 
         className={`${styles.navbar_brand}`}
         style={{ display: 'flex', position: 'absolute', overflow: 'visible' }}
         >
           <div className={styles.navbar_logo}>
             <Logo isScrolled={isScrolled}/>
           </div>
        </BootstrapNavbar.Brand>
        </div> */}
        
        
        {/* <div className={styles.imageLogoContainer}> */}
  {/* Stack image above logo using flex column */}
  {/* <div className={styles.logoWrapper}>
    <HeroImage />
    <div className={styles.navbar_logo}>
      <Logo isScrolled={isScrolled}/>
    </div>
  </div>
</div> */}


        {/* Right section - five links */}
        <div 
        className={`${styles.fadeIn} ${isVisible ? styles.hidden : ''}`}
        style={{ 
          marginRight: '3em',
          marginTop: '4.5vh',
          width: '75%', 
          display: 'flex', 
          gap: 65 }}>

          <a href="#nav1" style={{ textAlign: 'center', width: '62px', textDecoration: 'none', color: '#0F0F0F', fontWeight: 'bold', borderBottom: 'solid', borderWidth: '0.20rem' }}>
            About
          </a>
          <a href="#nav2" style={{ textAlign: 'center', width: '62px', textDecoration: 'none', color: '#0F0F0F', fontWeight: 'bold', borderBottom: 'solid', borderWidth: '0.20rem' }}>
            ESG
          </a>
          <a href="#nav3" style={{  textAlign: 'center', width: '62px',textDecoration: 'none', color: '#0F0F0F', fontWeight: 'bold', borderBottom: 'solid', borderWidth: '0.20rem' }}>
            Work
          </a>
          <a href="#nav4" style={{ textAlign: 'center', width: '62px', textDecoration: 'none', color: '#0F0F0F', fontWeight: 'bold', borderBottom: 'solid', borderWidth: '0.20rem' }}>
            AI
          </a>
          <a href="#nav5" style={{ textAlign: 'center', width: '62px', textDecoration: 'none', color: '#0F0F0F', fontWeight: 'bold', borderBottom: 'solid', borderWidth: '0.20rem' }}>
            Contact
          </a>
        </div>
      </div>

      {/* Row 4: HeroImage and Logo */}
{/* <div
  className={`${styles.fadeIn} ${isVisible ? styles.hidden : ''}`}
  style={{ backgroundColor: '#FBFDFF', padding: '1rem 0' }}
>
  <div className={styles.imageLogoContainer}>
    <div className={styles.logoWrapper}>
      <HeroImage />
      <div className={styles.navbar_logo}>
        <Logo isScrolled={isScrolled} />
      </div>
    </div>
  </div>
</div> */}

    </nav>

    {/* Floating Logo + Image */}
  <div className={styles.floatingLogoContainer}>
    <div className={styles.logoWrapper}>
      <HeroImage />
      <div className={styles.navbar_logo}>
        <Logo isScrolled={isScrolled} />
      </div>
    </div>
  </div>
  
</div>
  );
};

export default Navbar;
