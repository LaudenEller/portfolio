import React, { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import { Logo } from '../Logo/logo';
import styles from './Navbar.module.css';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';

const Navbar = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <BootstrapNavbar
      className={`${styles.navbar} ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}
      fixed="top"
    >
      <Container className={styles.navContainer}>
        {/* Logo */}
        <BootstrapNavbar.Brand href="#" className={`${styles.navbar_brand}`}>
          <div className={styles.navbar_logo}>
            <Logo />
          </div>
        </BootstrapNavbar.Brand>

        {/* Navbar Links */}
        <Nav className={styles.navLinks}>
          <Nav.Link href="#about" className={styles.navLink}>About</Nav.Link>
          <Nav.Link href="#projects" className={styles.navLink}>Projects</Nav.Link>
          <Nav.Link href="#work" className={styles.navLink}>Work</Nav.Link>
          <Nav.Link href="#contact" className={styles.navLink}>Contact</Nav.Link>
        </Nav>

        {/* Theme Toggle Button */}
        <div className={`${styles.toggleContainer} ms-auto`} onClick={toggleTheme}>
          <div className={`${styles.themeToggle} ${theme === 'dark' ? styles.dark : styles.light}`}></div>
        </div>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;