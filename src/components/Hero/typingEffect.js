import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const TypingEffectMultiLine = ({
  lines = [],
  speed = 15,         // character delay in ms
  lineDelay = 250,    // delay between lines in ms
  initialDelay = 2000 // delay before starting in ms
}) => {
  const lineRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !lineRefs.current.includes(el)) {
      lineRefs.current.push(el);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({ delay: initialDelay / 1000 });

    lineRefs.current.forEach((line, i) => {
      const chars = line.querySelectorAll('.char');
      tl.fromTo(
        chars,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: speed / 1000,
          stagger: speed / 1000,
        },
        i === 0 ? 0 : `+=${lineDelay / 1000}`
      );
    });
  }, [lines, speed, lineDelay, initialDelay]);

  return (
    <div>
      {lines.map((line, i) => (
        <h3
          key={i}
          ref={addToRefs}
          style={{ margin: '8px 0', whiteSpace: 'normal', overflow: 'hidden' }}
        >
          {line.split(' ').map((word, wordIdx) => (
            <span
              key={wordIdx}
              style={{ display: 'inline-block', whiteSpace: 'nowrap', marginRight: '0.5ch' }}
            >
              {word.split('').map((char, charIdx) => (
                <span
                  key={charIdx}
                  className={`char${char === '.' && i === 0 ? ' accent' : ''}`}
                  style={{ display: 'inline-block' }}
                >
                  {char}
                </span>
              ))}
            </span>
          ))}
        </h3>
      ))}
    </div>
  );
};

export default TypingEffectMultiLine;

// // Import React core features and GSAP animation library
// import React, { useRef, useEffect } from 'react';
// import gsap from 'gsap';

// // Define the functional component that animates multiple lines
// const TypingEffectMultiLine = ({
//   lines = [],             // An array of strings to render as paragraph lines
//   initialYOffset = 100,   // How far below (in pixels) the block starts before sliding in
//   duration = 1.2,         // Duration of the animation in seconds
//   delay = 1.5,            // Delay before the animation starts (seconds)
//   bounceEase = 'bounce.out' // Type of easing used for bounce/spring effect
// }) => {
//   // Create a reference to the container div that wraps all the lines
//   const containerRef = useRef(null);

//   // Run animation on mount
//   useEffect(() => {
//     // Animate the container: slide it up from below with bounce
//     gsap.from(containerRef.current, {
//       y: initialYOffset,    // Start Y position
//       opacity: 1,           // Maintain visibility
//       duration: duration,   // Animation duration
//       delay: delay,         // Initial delay before animation
//       ease: bounceEase      // Type of easing effect
//     });
//   }, [initialYOffset, duration, delay, bounceEase]); // Re-run animation if these props change

//   return (
//     <div ref={containerRef}>
//       {/* Render each line as an <h3> element */}
//       {lines.map((line, i) => (
//         <h3
//           key={i} // Unique key for React list rendering
//           style={{ margin: '12px 0', whiteSpace: 'normal' }} // Basic styling for spacing and wrapping
//         >
//           {line}
//         </h3>
//       ))}
//     </div>
//   );
// };

// // Export the component to use elsewhere
// export default TypingEffectMultiLine;
