import React, { useContext, useState } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './Footer.module.css';
import ContactForm from '../Contact/ContactForm';
import HeroImage from '../Hero/HeroImage';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <footer id='nav5' className={`${styles.footer} ${theme === 'dark' ? styles.darkFooter : styles.lightFooter}`}>
      <div className={styles.footerContainer}>
        {!showForm ? (
          <div className={styles.footerContent}>
            <div className={styles.profileSection}>
              <HeroImage className={styles.avatar} />
              <div>
                {/* <h2>I'm Lauden, a Software Engineer</h2> */}
                <p>How can I help you make your business better?</p>
              </div>
            </div>
            <button className={styles.hireButton} onClick={handleClick}>Let's find out.</button>
          </div>
        ) : (
          <ContactForm onCloseForm={handleCloseForm} />
        )}
      </div>
    </footer>
  );
};

export default Footer;