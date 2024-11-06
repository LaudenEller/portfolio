// import gsap from 'gsap';
// import React from 'react';
// import './logo.module.css';

// <object type="image/svg+xml" data="/assets/logo.svg" id="logo-object" onLoad={() => animateLogo()} aria-label="Logo"></object>

// export function animateLogo() {
//   const logoObject = document.getElementById('logo-object');
//   const svgDoc = logoObject.contentDocument; // Access the SVG's content
  
//   if (svgDoc) {
//     const logoPath = svgDoc.querySelector("#logo-path"); // Adjust with the correct ID in your SVG

//     gsap.fromTo(logoPath, { opacity: 0 }, { opacity: 1, duration: 2 });
//   }
// }

// export { animateLogo as logoAnimation };

import React, { useEffect } from 'react';
import gsap from 'gsap';
import './logo.module.css';

export function Logo() {
  useEffect(() => {
    const animateLogo = () => {
      const logoObject = document.getElementById('logo-object');
      const svgDoc = logoObject.contentDocument;

      if (svgDoc) {
        const logoPath = svgDoc.querySelector('#logo-path'); // Update to match your SVG path's ID
        if (logoPath) {
          gsap.fromTo(
            logoPath,
            { strokeDashoffset: 12965.89 },  // Ensure this matches the initial dash offset
            { strokeDashoffset: 0, duration: 2, ease: 'power2.out' });
        }
      }
    };

    const logoObject = document.getElementById('logo-object');
    logoObject.addEventListener('load', animateLogo);

    return () => {
      logoObject.removeEventListener('load', animateLogo);
    };
  }, []);

  return (
    <object
      type="image/svg+xml"
      data="/assets/logo.svg"
      id="logo-object"
      aria-label="Logo"
    ></object>
  );
}
