// import React, { useEffect } from 'react';
// import gsap from 'gsap';
// import './logo.module.css';

// export function Logo() {
//   useEffect(() => {
//     const animateLogo = () => {
//       const logoObject = document.getElementById('logo-object');
//       const svgDoc = logoObject.contentDocument;

//       if (svgDoc) {
//         const logoPath = svgDoc.querySelector('#logo-path'); // Update to match your SVG path's ID
//         if (logoPath) {
//           gsap.fromTo(
//             logoPath,
//             { strokeDashoffset: 12965.89 },  // Ensure this matches the initial dash offset
//             { strokeDashoffset: 0, duration: 2, ease: 'power2.out' });
//         }
//       }
//     };

//     const logoObject = document.getElementById('logo-object');
//     logoObject.addEventListener('load', animateLogo);

//     return () => {
//       logoObject.removeEventListener('load', animateLogo);
//     };
//   }, []);

//   return (
//     <object
//       type="image/svg+xml"
//       data="/assets/logo.svg"
//       id="logo-object"
//       aria-label="Logo"
//       style={{
//         width: '200px',
//         height: 'auto',
//         display: 'block',
//         visibility: 'visible',
//         opacity: 1,
//         overflowClipMargin: 'none',
//         overflow: 'visible',
//       }}
//     ></object>
//   );
// }

import React, { useEffect } from 'react';
import gsap from 'gsap';
import './logo.module.css';

export function Logo() {
  useEffect(() => {
    const animateLogo = () => {
      const logoObject = document.getElementById('logo-object');
      const svgDoc = logoObject?.contentDocument || logoObject.getSVGDocument();

      if (svgDoc) {
        const logoPath = svgDoc.querySelector('#logo-path');
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
    if (logoObject.complete) {
      animateLogo();
    } else {
      logoObject.addEventListener('load', animateLogo);
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
      aria-label="Logo"
      style={{
        width: '200px',
        height: 'auto',
        display: 'block',
        visibility: 'visible',
        opacity: 1,
        overflow: 'visible',
      }}
    ></object>
  );
}
