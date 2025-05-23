import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import styles from './Contact.module.css';

const ContactForm = ({ onCloseForm }) => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
  setAnimate(true); // triggers on mount
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    // Hides email details as env secrets
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then( // Handles what happens after the send email button is clicked
      (result) => {
        console.log(result.text);
        setSuccess(true);

        // Hide message after 1 second
        setTimeout(() => {
          setSuccess(false);
          form.current.reset(); // Optional: Reset form after success
          if (onCloseForm) onCloseForm(); // Revert footer
        }, 2000);
      },
      (error) => {
        console.log(error.text);
        alert('Something went wrong, please try again.');
      }
    );
  };

  return (
    <div className={`${styles.contactFormWrapper} ${animate ? styles.animateFallDown : ''}`}>
      <h2>How can I help?</h2>
      <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
        <div className={styles.inputRow}>
        <div className={styles.halfField}>
          <label htmlFor="user_name" className={styles.visuallyHidden}>Your Name</label>
          <input id="user_name" name="user_name" type="text" placeholder="Your Name" required className={styles.input} />
        </div>
        <div className={styles.halfField}>
          <label htmlFor="user_email" className={styles.visuallyHidden}>Your Email</label>
          <input id="user_email" name="user_email" type="email" placeholder="Your Email" required className={styles.input} />
        </div>
        </div>
        <div className={`${styles.fieldGroup} ${styles.textAreaWrapper}`}>
          <label htmlFor="message" className={styles.visuallyHidden}>Your Message</label>
          <textarea id="message" name="message" placeholder="Your Message" required className={styles.textArea} />
        </div>
        {success && <p className={styles.successMessage}>Message sent successfully!</p>}
        <button className={`btn btn-primary ${styles.submitButton}`} type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;