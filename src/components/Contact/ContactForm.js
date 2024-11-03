import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import styles from './Contact.module.css';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then(
      (result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      },
      (error) => {
        console.log(error.text);
        alert('Failed to send message, please try again.');
      }
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={`container ${styles.contactForm}`}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" name="user_name" required className="form-control" />
      </div>
      
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" name="user_email" required className="form-control" />
      </div>
      
      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea name="message" required className="form-control" />
      </div>
      
      <button type="submit" className={`btn btn-primary ${styles.submitButton}`}>
        Send
      </button>
    </form>
  );
};

export default ContactForm;