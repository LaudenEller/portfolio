import React, { useEffect, useState } from 'react';
import styles from './DebugNavbar.module.css';
import { useLayoutEffect } from 'react';

const DebugNavbarSpacer = () => {
  const [debugInfo, setDebugInfo] = useState({
    navbarHeight: 0,
    spacerHeight: 0,
    navbarPosition: '',
    spacerPosition: '',
  });

  useLayoutEffect(() => {
    const spacer = document.querySelector(`.${styles.navbar_spacer}`);
    if (spacer) {
      // Defer style check
      setTimeout(() => {
        console.log('Spacer computed position:', window.getComputedStyle(spacer).position);
      }, 0);
    }
  }, []);

  // The element that is coming back is the footer, not the navbar_spacer.
  useLayoutEffect(() => {
    const spacer = document.querySelector(`.${styles.navbar_spacer}`);
    console.log('Queried element:', spacer);
    console.log('Class applied to spacer:', styles.navbar_spacer);
  }, []);

  useLayoutEffect(() => {
    const spacer = document.querySelector(`.${styles.navbar_spacer}`);
    console.log('Queried spacer:', spacer);
    if (spacer) {
      console.log('Spacer computed position:', window.getComputedStyle(spacer).position);
    }
  }, []);
  
  

  useEffect(() => {
    const navbar = document.querySelector('.navbar'); // Assuming you have a class name of "navbar"
    const spacer = document.querySelector(`.${styles.navbar_spacer}`);

    const updateDebugInfo = () => {
      if (navbar && spacer) {
        setDebugInfo({
          navbarHeight: navbar.offsetHeight || 0,
          spacerHeight: spacer.offsetHeight || 0,
          navbarPosition: getComputedStyle(navbar).position,
          spacerPosition: getComputedStyle(spacer).position,
        });
      }
    };

    // Initialize and listen for resizing
    updateDebugInfo();
    window.addEventListener('resize', updateDebugInfo);

    return () => window.removeEventListener('resize', updateDebugInfo);
  }, []);

  return (
    <div className={styles.debugContainer}>
      <div className={styles.debugInfo}>
        <p><strong>Navbar Height:</strong> {debugInfo.navbarHeight}px</p>
        <p><strong>Spacer Height:</strong> {debugInfo.spacerHeight}px</p>
        <p><strong>Navbar Position:</strong> {debugInfo.navbarPosition}</p>
        <p><strong>Spacer Position:</strong> {debugInfo.spacerPosition}</p>
      </div>
    </div>
  );
};

export default DebugNavbarSpacer;
