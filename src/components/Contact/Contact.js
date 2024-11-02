import React from 'react';
import ContactForm from './ContactForm';
import styles from './Contact.module.css';

const Contact = () => {
  return (
   // Contact.js
<div className="container">
  <div className="row">
    <div className="col-md-6">
      <h2>Contact Us</h2>
      <p className={styles.contactText}>We’d love to hear from you!</p>
    </div>
    <div className="col-md-6">
      <ContactForm />
    </div>
  </div>
</div>

  );
};

export default Contact;