import React from 'react';
import ContactForm from './ContactForm';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.heading}>Contact Me</h2>
      <ContactForm />
    </section>
  );
};

export default Contact;