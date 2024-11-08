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
      <Container
      className={`${styles.navContainer}`}>
        {/* Logo */}
        <BootstrapNavbar.Brand href="#">
          <div className={styles.logo}>
            <Logo />
          </div>
        </BootstrapNavbar.Brand>

        {/* Navbar Links */}
          <Nav className="me-auto">
            <Nav.Link href="#about" className="nav-link">About</Nav.Link>
            <Nav.Link href="#projects" className="nav-link">Projects</Nav.Link>
            <Nav.Link href="#work" className="nav-link">Work</Nav.Link>
            <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
          </Nav>

        {/* Theme Toggle Button */}
          <div className={styles.toggleContainer} onClick={toggleTheme}>
        <div className={`${styles.themeToggle} ${theme === 'dark' ? styles.dark : styles.light}`}></div>
      </div>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;