import React, { useEffect, useState } from 'react';
import styles from './NavbarSpacer.module.css';

const NavbarSpacer = ({ navbarRef }) => {
  const [spacerHeight, setSpacerHeight] = useState(0);

  useEffect(() => {
    const updateSpacerHeight = () => {
      if (navbarRef.current) {
        setSpacerHeight(navbarRef.current.offsetHeight);
      }
    };

    console.log('spacerRef',navbarRef.current)
    console.log('spacerRef offsetHeight', navbarRef.current.offsetHeight)
    // Initialize height on mount
    updateSpacerHeight();

    // Update height on resize
    window.addEventListener('resize', updateSpacerHeight);

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', updateSpacerHeight);
  }, [navbarRef]);

  return (
    <div
      style={{ height: `${spacerHeight}px !important` }}
      className={styles.navbar_spacer}
    ></div>
  );
};

export default NavbarSpacer;
