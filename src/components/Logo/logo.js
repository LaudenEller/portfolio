import React, { useEffect } from 'react';
import gsap from 'gsap';
import styles from './logo.module.css';

export function Logo({ isScrolled }) {
  useEffect(() => {
    const animateLogo = () => {
      const logoObject = document.getElementById('logo-object');
      const svgDoc = logoObject?.contentDocument || logoObject.getSVGDocument();

      if (svgDoc) {
        const logoPath = svgDoc.querySelector('#mask-path');
        if (logoPath) {
          gsap.fromTo(
            logoPath,
            { strokeDashoffset: 12965.89 },
            { strokeDashoffset: 0, duration: 2.5, ease: 'power2.out' }
          );
        }
      }
    };

    const logoObject = document.getElementById('logo-object');
    if (logoObject) {
      if (logoObject.complete) {
        animateLogo();
      } else {
        logoObject.addEventListener('load', animateLogo);
      }
    }

    return () => {
      if (logoObject) logoObject.removeEventListener('load', animateLogo);
    };
  }, []);

  return (
    <object
      type="image/svg+xml"
      data="/assets/logo.svg"
      id="logo-object"
      className={`${styles.logo} ${isScrolled ? styles.logoScroll : ""}`}
      aria-label="Logo"
    ></object>
  );
}