// import React from 'react';
// import ContactForm from './ContactForm';
// import styles from './Contact.module.css';

// const Contact = () => {
//   return (
//   <div className={`container ${styles.contactContainer}`}>
//   <div className="row">
//     <div className="col-md-6">
//       <h2>Contact Us</h2>
//       <p className={styles.contactText}>We’d love to hear from you!</p>
//     </div>
//     <div className="col-md-6">
//       <ContactForm />
//     </div>
//   </div>
// </div>

//   );
// };

// export default Contact;

import React from 'react';
import ContactForm from './ContactForm';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={`${styles.customContainer} ${styles.contactContainer}`}>
      <div className="row">
        <div className="col-md-6">
          <h2 className={styles.heading}>Contact Us</h2>
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
