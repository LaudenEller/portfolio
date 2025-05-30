// import React, { useRef, useEffect } from 'react';
// import gsap from 'gsap';

// const TypingEffectMultiLine = ({
//   lines = [],
//   speed = 15,         // character delay in ms
//   lineDelay = 250,    // delay between lines in ms
//   initialDelay = 2000 // delay before starting in ms
// }) => {
//   const lineRefs = useRef([]);

//   const addToRefs = (el) => {
//     if (el && !lineRefs.current.includes(el)) {
//       lineRefs.current.push(el);
//     }
//   };

//   useEffect(() => {
//     const tl = gsap.timeline({ delay: initialDelay / 1000 });

//     lineRefs.current.forEach((line, i) => {
//       const chars = line.querySelectorAll('.char');
//       tl.fromTo(
//         chars,
//         { opacity: 0, y: 10 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: speed / 1000,
//           stagger: speed / 1000,
//         },
//         i === 0 ? 0 : `+=${lineDelay / 1000}`
//       );
//     });
//   }, [lines, speed, lineDelay, initialDelay]);

//   return (
//     <div>
//       {lines.map((line, i) => (
//         <h3
//           key={i}
//           ref={addToRefs}
//           style={{ margin: '8px 0', whiteSpace: 'normal', overflow: 'hidden' }}
//         >
//           {line.split(' ').map((word, wordIdx) => (
//             <span
//               key={wordIdx}
//               style={{ display: 'inline-block', whiteSpace: 'nowrap', marginRight: '0.5ch' }}
//             >
//               {word.split('').map((char, charIdx) => (
//                 <span
//                   key={charIdx}
//                   className="char"
//                   style={{ display: 'inline-block' }}
//                 >
//                   {char}
//                 </span>
//               ))}
//             </span>
//           ))}
//         </h3>
//       ))}
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
