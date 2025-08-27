// import React, { useState } from 'react';
// import AboutParagraph from './AboutParagraph';
// import styles from './AboutSection.module.css';

// const AboutSection = () => {
//   const [showAbout, setShowAbout] = useState(false);

//   return (
//     <div className={styles.aboutContainer}>
//       <div
//         className={styles.toggleBar}
//         onClick={() => setShowAbout(!showAbout)}
//       >
//         {showAbout ? '' : ''}
//       </div>

//       <div className={`${styles.aboutWrapper} ${showAbout ? styles.visible : ''}`}>
//         {showAbout && <AboutParagraph />}
//       </div>
//     </div>
//   );
// };

// export default AboutSection;

import React, { useState } from 'react';
import AboutParagraph from './AboutParagraph';
import styles from './AboutSection.module.css';
import { useAboutContext } from '../../contexts/AboutContext';

const AboutSection = () => {
  // context-based expansion
  const { showAbout, setShowAbout } = useAboutContext();
  
  // Direct expansion
  // const [showAbout, setShowAbout] = useState(false);


  return (
    <div className={styles.aboutSectionContainer}>
      <div
        className={styles.toggleBar}
        onClick={() => setShowAbout(!showAbout)}
      >
        {showAbout ? 'Less' : 'More'}
      </div>

      <div className={`${styles.overlay} ${showAbout ? styles.visible : ''}`}>
        <div className={styles.aboutCard}>
          <AboutParagraph />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
