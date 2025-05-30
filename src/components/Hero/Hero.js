import React, { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './Hero.module.css';
import TypingEffectMultiLine from './typingEffect';
import AboutSection from '../About/AboutSection';

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section 
      id="hero" 
      // Applies different css rules to hero section based on theme choice
      className={`${styles.hero} ${theme === 'dark' ? styles.heroDark : ''}`}
      aria-label="Introduction Section"
      style={{ padding: '0vh 5vw', textAlign: 'center', backgroundColor: '#FBFDFF' }}
    >
      <div style={{ 
        paddingLeft: '20vw',
        paddingTop: '13vh',
        paddingRight: '20vw',
        paddingBottom: '2vh' }}>
      <TypingEffectMultiLine
  lines={[
    "Hi, I'm Lauden.",
    "A software engineer committed to helping business be better.",
    "Have a look around..."
  ]}
  speed={15}         // typing speed per character
  lineDelay={250}   // pause between lines
  initialDelay={2000} // wait 2s before starting
/>
    </div>
    <AboutSection />
    </section>
  );
};

export default Hero;

// Hero.js
// import React, { useEffect, useRef, useContext } from 'react';
// import gsap from 'gsap';
// import ThemeContext from '../../contexts/ThemeContext';
// import styles from './Hero.module.css';

// const Hero = () => {
//   const { theme } = useContext(ThemeContext);
//   const textRef = useRef(null);

//   useEffect(() => {
//     gsap.from(textRef.current, {
//       y: 200,              // Starting offset (adjust as needed)
//       opacity: 1,          // Start invisible
//       duration: 1.2,       // Animation time
//       delay: 1.5,          // Delay before it starts
//       ease: 'bounce.out'   // Easing function for bounce
//     });
//   }, []);

//   return (
//     <section
//       id="hero"
//       className={`${styles.hero} ${theme === 'dark' ? styles.heroDark : ''}`}
//       aria-label="Introduction Section"
//       style={{
//         padding: '0vh 5vw',
//         textAlign: 'center',
//         backgroundColor: '#FBFDFF'
//       }}
//     >
//       <div
//         ref={textRef}
//         style={{
//           paddingLeft: '20vw',
//           paddingRight: '20vw',
//           paddingTop: '1vh',
//           paddingBottom: '2vh'
//         }}
//       >
//         <h1 style={{ marginBottom: '1rem' }}>Hi, I'm Lauden.</h1>
//         <p style={{ fontSize: '1.25rem', lineHeight: '1.6' }}>
//           I'm a software engineer committed to helping business be better.
//           <br />
//           Have a look around...
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Hero;
