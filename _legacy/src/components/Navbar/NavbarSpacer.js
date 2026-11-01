// import React, { useEffect, useState } from 'react';
// import styles from './NavbarSpacer.module.css';

// const NavbarSpacer = ({ navbarRef }) => {
  

//   useEffect(() => {
//     const updateSpacerHeight = () => {
//       if (navbarRef.current) {
//         setSpacerHeight(navbarRef.current.offsetHeight);
//       }
//     };

//     console.log('spacerRef',navbarRef.current)
//     console.log('spacerRef offsetHeight', navbarRef.current.offsetHeight)
//     // Initialize height on mount
//     updateSpacerHeight();

//     // Update height on resize
//     window.addEventListener('resize', updateSpacerHeight);

//     // Cleanup listener on unmount
//     return () => window.removeEventListener('resize', updateSpacerHeight);
//   }, [navbarRef]);

//   return (
//     <div
//       style={{ height: `${spacerHeight}px !important` }}
//       className={styles.navbar_spacer}
//     ></div>
//   );
// };

// export default NavbarSpacer;

import { useEffect } from 'react';

const NavbarSpacer = ({ navbarRef, mainRef }) => {
  useEffect(() => {
    const adjustSpacer = () => {
      if (navbarRef.current && mainRef.current) {
        mainRef.current.style.paddingTop = `${navbarRef.current.offsetHeight}px`;
      }
    };

    // Adjust on load and resize
    adjustSpacer();
    window.addEventListener('resize', adjustSpacer);

    return () => window.removeEventListener('resize', adjustSpacer);
  }, [navbarRef, mainRef]);

  return null; // No visible spacer; adjustment happens dynamically
};

export default NavbarSpacer;

