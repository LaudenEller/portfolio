import React, { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLinks}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </div>
      <button onClick={toggleTheme} className={styles.toggleButton}>
        Toggle Theme
      </button>
    </nav>
  );
};

export default Navbar;
