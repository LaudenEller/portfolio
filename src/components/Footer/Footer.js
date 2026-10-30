import React, { useContext, useState } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './Footer.module.css';
import ContactForm from '../Contact/ContactForm';
import HeroImage from '../Hero/HeroImage';

// The contact form needs EmailJS keys at build time. Until they're set on the host
// (run 001, M2-T16), the button opens an email instead of a form that would error.
const CONTACT_EMAIL = 'lauden@thekiterises.com';
const emailJsConfigured = Boolean(
  process.env.REACT_APP_EMAILJS_SERVICE_ID &&
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID &&
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY
);

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
            {emailJsConfigured ? (
              <button className={styles.hireButton} onClick={handleClick}>Let's find out.</button>
            ) : (
              <a className={styles.hireButton} href={`mailto:${CONTACT_EMAIL}`}>Let's find out.</a>
            )}
          </div>
        ) : (
          <ContactForm onCloseForm={handleCloseForm} />
        )}
      </div>
    </footer>
  );
};

export default Footer;