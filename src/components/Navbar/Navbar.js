import React, { useContext, useState, useEffect, forwardRef } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import { Logo } from '../Logo/logo';
import styles from './Navbar.module.css';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';

const Navbar = forwardRef((props, ref) => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Set threshold for resizing
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BootstrapNavbar
      className={` ${styles.navbar} ${theme === 'dark' ? 'bg-dark' : 'bg-light'} ${isScrolled ? styles.shrink : ""}`}
      // className={`${styles.pt-5} ${styles.navbar} ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}
      fixed="top"
      // sticky='top'
      ref={ref}
    >
      <Container className={styles.navContainer}>
        {/* Logo */}
        <BootstrapNavbar.Brand href="#" className={`${styles.navbar_brand}`}>
          <div className={styles.navbar_logo}>
            <Logo isScrolled={isScrolled}/>
          </div>
        </BootstrapNavbar.Brand>

        {/* {Navbar Spacer 1} */}
        <div className={styles.navSpacer1}></div>

        {/* Navbar Links */}
        <Nav className={styles.navLinks}>
          <Nav.Link href="#about" className={styles.navLink}>About</Nav.Link>
          <Nav.Link href="#projects" className={styles.navLink}>Projects</Nav.Link>
          <Nav.Link href="#work" className={styles.navLink}>Work</Nav.Link>
          <Nav.Link href="#contact" className={styles.navLink}>Contact</Nav.Link>
        </Nav>

        {/* {Navbar Spacer 2} */}
        <div className={styles.navSpacer2}></div>

        {/* Theme Toggle Button */}
        <div className={`${styles.toggleContainer}`} onClick={toggleTheme}>
          <div className={`${styles.themeToggle} ${theme === 'dark' ? styles.dark : styles.light}`}></div>
        </div>
      </Container>
    </BootstrapNavbar>
  );
});

export default Navbar;
