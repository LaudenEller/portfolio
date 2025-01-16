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


// import React, { useEffect } from 'react';
// import gsap from 'gsap';
// import './logo.module.css';

// export function Logo() {
//   // this useEffect is getting the logo object and logo svg
//     // once they're found, it submits them to GSAP
//     // and tells GSAP how to animate the logo
//   useEffect(() => {
//     const animateLogo = () => {
//       const logoObject = document.getElementById('logo-object');
//       const svgDoc = logoObject?.contentDocument || logoObject.getSVGDocument();

//       if (svgDoc) {
//         const logoPath = svgDoc.querySelector('#mask-path');
//         if (logoPath) {
//           gsap.fromTo(
//             logoPath,
//             { strokeDashoffset: 12965.89 },
//             { strokeDashoffset: 0, duration: 2.5, ease: 'power2.out' }
//           );
//         }
//       }
//     };

//     // This checks to see if the svg has been loaded and executes the useEffect that animates it
//       // then dismounts the event listener if the animation has been executed
//     const logoObject = document.getElementById('logo-object');
//     if (logoObject.complete) {
//       animateLogo();
//     } else {
//       logoObject.addEventListener('load', animateLogo);
//     }

//     return () => {
//       if (logoObject) logoObject.removeEventListener('load', animateLogo);
//     };
//   }, []);

//   // This creates the logo object to be animated by gsap
//   return (
//     <object
//       type="image/svg+xml"
//       data="/assets/logo.svg"
//       id="logo-object"
//       className='logo'
//       aria-label="Logo"
//       style={{
//         width: '100%',
//         height: '100%',
//         display: 'block',
//         visibility: 'visible',
//         opacity: 1,
//         overflow: 'visible',
//       }}
//     ></object>
//   );
  
// }
