import React, { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import { Logo } from '../Logo/logo';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Logo />
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