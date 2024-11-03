import React, { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './Footer.module.css';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`${styles.footer} ${theme === 'dark' ? styles.darkFooter : styles.lightFooter}`}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLinks}>
            <a href="#" className="foot-link">Instagram</a>
            <a href="#" className="foot-link">Github</a>
            <a href="#contact" className="foot-link">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
