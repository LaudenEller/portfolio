// import React, { useEffect, useState } from 'react';
// import styles from './NavbarSpacer.module.css';

// const NavbarSpacer = () => {
//   const [spacerHeight, setSpacerHeight] = useState(0);

//   useEffect(() => {
//     const updateSpacerHeight = () => {
//     const navbar = document.querySelector(`.${styles.navbar}`);
//       const logo = document.querySelector(`.${styles.logo}`);
//       if (navbar && (logo.height > 0)) {
//         setSpacerHeight(logo.offsetHeight);
//       }
//     };

//     // Initialize height
//     updateSpacerHeight();

//     // Add resize listener
//     window.addEventListener('resize', updateSpacerHeight);

//     // Cleanup listener on unmount
//     return () => window.removeEventListener('resize', updateSpacerHeight);
//   }, []);

//   return <div style={{ height: `${spacerHeight}px !important` }} className={styles.navbar_spacer}></div>;
// };

// export default NavbarSpacer;

import React, { useEffect, useState } from 'react';
import styles from './NavbarSpacer.module.css';

const NavbarSpacer = () => {
  const [spacerHeight, setSpacerHeight] = useState(0);

  useEffect(() => {
    const updateSpacerHeight = () => {
        const navbar = document.querySelector(`.${styles.navbar}`);
        // const spacer = document.querySelector(`.${styles.navbar_spacer}`);
        // spacer.style.height = `${navbar.getBoundingClientRect().height}px`;
      if (navbar) {
        setSpacerHeight(navbar.offsetHeight);
        // setSpacerHeight(spacer.height);
        console.log('Navbar height:', navbar?.offsetHeight);
        // console.log('Spacer height:', spacer?.offsetHeight);
      }
    };

    // Use a MutationObserver to detect changes in the navbar height
    const observer = new MutationObserver(updateSpacerHeight);
    const navbar = document.querySelector(`.${styles.navbar}`);

    if (navbar) {
      observer.observe(navbar, { attributes: true, childList: true, subtree: true });
      updateSpacerHeight(); // Ensure it calculates height after mounting
    }

    // Add resize listener
    window.addEventListener('resize', updateSpacerHeight);

    // Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateSpacerHeight);
    };
  }, []);

  return <div style={{ height: `${spacerHeight}px !important` }} className={styles.navbar_spacer}></div>;
};

export default NavbarSpacer;
