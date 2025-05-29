// import React, { useEffect, useState } from 'react';

// const TypingEffect = ({ text, speed = 75, delay = 1750 }) => {
//   const [displayedText, setDisplayedText] = useState('');

//   useEffect(() => {
//     let index = 0;
//     let intervalId;

//     const timeoutId = setTimeout(() => {
//         intervalId = setInterval(() => {
//             setDisplayedText((prev) => prev +text[index]);
//             index++;
//             if(index >= text.length) clearInterval(intervalId);
//         }, speed);
//     }, delay);

//     return () => {
//         clearTimeout(timeoutId);
//         clearInterval(intervalId);
//     };
//   }, [text, speed, delay]);

//   return <h2>{displayedText}</h2>
// };

// export default TypingEffect;

// import React, { useEffect, useState } from 'react';

// const TypingEffectMultiLine = ({ lines = [], speed = 50, lineDelay = 1000, initialDelay = 0 }) => {
//   const [currentLine, setCurrentLine] = useState(0);
//   const [displayedLines, setDisplayedLines] = useState([]);

//   useEffect(() => {
//     if (lines.length === 0) return;

//     let lineIndex = 0;
//     let charIndex = 0;
//     let timeoutId;
//     let intervalId;

//     const typeLine = () => {
//       intervalId = setInterval(() => {
//         setDisplayedLines((prev) => {
//           const updated = [...prev];
//           const currentText = updated[lineIndex] || '';
//           updated[lineIndex] = currentText + lines[lineIndex][charIndex];
//           return updated;
//         });

//         charIndex++;

//         if (charIndex >= lines[lineIndex].length) {
//           clearInterval(intervalId);
//           charIndex = 0;
//           lineIndex++;

//           if (lineIndex < lines.length) {
//             setTimeout(() => {
//               setDisplayedLines((prev) => [...prev, '']);
//               typeLine(); // type next line
//             }, lineDelay);
//           }
//         }
//       }, speed);
//     };

//     timeoutId = setTimeout(() => {
//       setDisplayedLines(['']); // Start with first line
//       typeLine();
//     }, initialDelay);

//     return () => {
//       clearTimeout(timeoutId);
//       clearInterval(intervalId);
//     };
//   }, [lines, speed, lineDelay, initialDelay]);

//   return (
//     <div>
//       {displayedLines.map((line, i) => (
//         <h2 key={i} style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{line}</h2>
//       ))}
//     </div>
//   );
// };

// export default TypingEffectMultiLine;


// Import React hooks
// import React, { useEffect, useState } from 'react';

// // TypingEffectMultiLine component accepts:
// // - lines: an array of strings to display one by one
// // - speed: delay between each character
// // - lineDelay: delay between finishing one line and starting the next
// // - initialDelay: delay before starting the entire animation
// const TypingEffectMultiLine = ({
//   lines = [],
//   speed = 35,
//   lineDelay = 500,
//   initialDelay = 2000
// }) => {
//   // State to store the lines as they are typed out character-by-character
//   const [displayedLines, setDisplayedLines] = useState([]);

//   const [cursorVisible, setCursorVisible] = useState(true);
// const [isTypingDone, setIsTypingDone] = useState(false);

//   // useEffect runs once when the component mounts
//   useEffect(() => {
//     // If lines is not a valid array or it's empty, don't run the animation
//     if (!Array.isArray(lines) || lines.length === 0) return;

//     let startTimeout; // For delaying the start of the entire animation

//     // Function that types one line character-by-character
//     const typeLine = (text, lineIndex) => {
//       return new Promise((resolve) => {
//         let charIndex = -1;

//         // Interval to add one character at a time
//         const interval = setInterval(() => {
//           // When finished typing the line
//           if (charIndex >= text.length -1) {
//             clearInterval(interval); // Stop interval
//             resolve(); // Notify that this line is done
//             return;
//           }

//           // Append one character to the current line
//         //   setDisplayedLines((prev) => {
//         //     const updated = [...prev]; // Copy previous lines
//         //     const currentLine = updated[lineIndex] || ''; // Fallback if line doesn't exist yet
//         //     updated[lineIndex] = currentLine + text[charIndex]; // Add next char
//         //     return updated; // Return updated state
//         //   });

//         setDisplayedLines((prev) => {
//   const updated = [...prev];

//   console.log({
//   charIndex,
//   char: text[charIndex],
//   lineIndex,
//   currentLine: updated[lineIndex]
// });

//   if (typeof updated[lineIndex] !== 'string') {
//     updated[lineIndex] = ''; // Explicitly initialize the line
//     console.log('lineIndex does not equal string', updated[lineIndex].text )
//   }
//   updated[lineIndex] += text[charIndex];
//   return updated;
// });


//           charIndex++; // Move to next character
//         }, speed); // Character typing speed
//       });
//     };

//     // Main function that types all lines sequentially
//     const startTyping = async () => {
//       for (let i = 0; i < lines.length; i++) {
//         const line = lines[i]; // Get the line text once, to avoid stale state
//         setDisplayedLines((prev) => [...prev, '']); // Add empty string placeholder for this line

//         await typeLine(line, i); // Wait for this line to finish typing

//         // Wait before typing the next line, except after the last one
//         if (i < lines.length - 1) {
//           await new Promise((res) => setTimeout(res, lineDelay));
//         }
//       }
//       setIsTypingDone(true);
//     };

//     // Start typing after the initial delay
//     startTimeout = setTimeout(startTyping, initialDelay);

// const cursorInterval = setInterval(() => {
//   setCursorVisible((prev) => !prev);
// }, 500); // blink every 500ms


//     // Cleanup timeout on unmount or dependency change
//     return () => {
//       clearTimeout(startTimeout);
//       clearInterval(cursorInterval);
//     };
//   }, [lines, speed, lineDelay, initialDelay]); // Dependencies

//   // Render the lines that have been typed so far
//   return (
//     <div>
//       {/* {displayedLines.map((line, i) => (
//         <h3 key={i} style={{ margin: '8px 0', whiteSpace: 'pre-wrap' }}>
//           {line}
//         </h3>
//       ))} */}
//       {displayedLines.map((line, i) => {
//   const isLastLine = i === displayedLines.length - 1;
//   const showCursor = isLastLine && !isTypingDone && cursorVisible;

//   return (
//     <h3 key={i} style={{ margin: '8px 0', whiteSpace: 'pre-wrap' }}>
//       {line}
//       {showCursor && <span style={{ fontWeight: 'normal' }}>|</span>}
//     </h3>
//   );
// })}
//     </div>
//   );
// };

// export default TypingEffectMultiLine;

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
                  className="char"
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
