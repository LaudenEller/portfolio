import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from './ProjectHighlights.module.css';

gsap.registerPlugin(ScrollTrigger);

const ProjectHighlight = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const scrollBoxRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Left Side Text Animation
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -200 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
          pin: true,  // Pins the text in place until the image appears
          pinSpacing: false,
        },
      }
    );

    // Image Animation after Text
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 75%",
          end: "top 30%",  // Keeps it pinned at the top of the viewport
          scrub: 1,
          pin: true,  // Pins the image in place until scrollBox animation begins
          pinSpacing: false,
        },
      }
    );

    // Scroll Box Animation
    gsap.fromTo(
      scrollBoxRef.current,
      { opacity: 0, y: 200 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: scrollBoxRef.current,
          start: "top 90%",  // Trigger as scroll box enters the viewport
          end: () => `+=${scrollBoxRef.current.scrollHeight}`, // Keeps it scrolling internally
          scrub: 1,
          pin: true,  // Pins the scroll box until the end of its content
          pinSpacing: false,
          onEnter: () => gsap.to(scrollBoxRef.current, { overflowY: 'auto' }), // Enables internal scrolling
          onLeaveBack: () => gsap.to(scrollBoxRef.current, { overflowY: 'hidden' }), // Disables internal scroll if scrolling back up
          onLeave: () => {
            gsap.to(scrollBoxRef.current, { overflowY: 'hidden' });
          },
        },
      }
    );

    // Final Section Scroll-Out
    gsap.to(sectionRef.current, {
      y: "-100vh",  // Moves the entire section out of view
      scrollTrigger: {
        trigger: scrollBoxRef.current,
        start: "bottom bottom",  // Starts once scrollBox hits the bottom
        end: "+=100%", // Continue scrolling until section is completely out of view
        scrub: true,
      },
    });
  }, []);

  return (
    <div ref={sectionRef} className={styles.projectHighlight}>
      {/* Left Side - Intro Text & Image */}
      <div className={styles.leftSide}>
        <p ref={textRef} className={styles.introText}>
          In 2019, the UN declared the Sustainable Development Goals which gave rise to ESG in global financial markets.
        </p>
        <div ref={imageRef} className={styles.imageContainer}>
          <img src="assets/BetterPortfolioLogo.png" alt="Project Image" />
        </div>
      </div>

      {/* Right Side - Scroll Box with Text and Buttons */}
      <div ref={scrollBoxRef} className={styles.scrollBox}>
        <div className={styles.scrollContent}>
          <p>Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
          {/* Add more content here if needed */}
          <div className={styles.buttonsContainer}>
            <button className="btn btn-primary">Button 1</button>
            <button className="btn btn-secondary">Button 2</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHighlight;


// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import styles from './ProjectHighlights.module.css';

// gsap.registerPlugin(ScrollTrigger);

// const ProjectHighlight = () => {
//   const textRef = useRef(null);
//   const imageRef = useRef(null);
//   const scrollBoxRef = useRef(null);

//   useEffect(() => {
//     // Animation for the intro text on the left side
//     gsap.fromTo(
//       textRef.current,
//       { opacity: 0, x: -200 },
//       {
//         opacity: 1,
//         x: 0,
//         scrollTrigger: {
//           trigger: textRef.current,
//           start: "top 80%",
//           end: "top 30%",
//           scrub: 1,
//         },
//       }
//     );

//     // Animation for the image on the left side
//     gsap.fromTo(
//       imageRef.current,
//       { opacity: 0, y: 100 },
//       {
//         opacity: 1,
//         y: 0,
//         scrollTrigger: {
//           trigger: imageRef.current,
//           start: "top 75%",
//           end: "top 40%",
//           scrub: 1,
//         },
//       }
//     );

//     // Scroll effect for the right-side scroll box
//     ScrollTrigger.create({
//       trigger: scrollBoxRef.current,
//       start: "top 80%", // Start when scrollBox reaches 80% of viewport
//       end: () => `+=${scrollBoxRef.current.scrollHeight}`, // Ends when scrollBox content has been scrolled through
//       pin: true, // Pins the scroll box
//       pinSpacing: false, // No additional space around pinned element
//       scrub: true, // Smooth scroll effect
//       onEnter: () => gsap.to(scrollBoxRef.current, { overflowY: 'auto' }), // Enables internal scrolling
//       onLeaveBack: () => gsap.to(scrollBoxRef.current, { overflowY: 'hidden' }), // Disables internal scroll if user scrolls back up
//       onLeave: () => {
//         // Releases scroll control when the buttons come into view
//         gsap.to(scrollBoxRef.current, { overflowY: 'hidden' });
//       },
//     });
//   }, []);

//   return (
//     <div className={styles.projectHighlight}>
//       {/* Left Side - Intro Text & Image */}
//       <div className={styles.leftSide}>
//         <p ref={textRef} className={styles.introText}>
//           In 2019, the UN declared the Sustainable Development Goals which gave rise to ESG in global financial markets.
//         </p>
//         <div ref={imageRef} className={styles.imageContainer}>
//           <img src="assets/BetterPortfolioLogo.png" alt="Project Image" />
//         </div>
//       </div>

//       {/* Right Side - Scroll Box with Text and Buttons */}
//       <div ref={scrollBoxRef} className={styles.scrollBox}>
//         <div className={styles.scrollContent}>
//           <p>Where does it come from?
// Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

// The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
//           {/* Add more content here if needed */}
//           <div className={styles.buttonsContainer}>
//             <button className="btn btn-primary">Button 1</button>
//             <button className="btn btn-secondary">Button 2</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectHighlight;


// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import styles from './ProjectHighlights.module.css';

// gsap.registerPlugin(ScrollTrigger);

// const ProjectHighlight = () => {
//   const textRef = useRef(null);
//   const imageRef = useRef(null);
//   const scrollBoxRef = useRef(null);

//   useEffect(() => {
//     // Animation for left side text with scrub to follow scroll position
//     gsap.fromTo(
//       textRef.current,
//       { opacity: 0, x: -200 },
//       {
//         opacity: 1,
//         x: 0,
//         scrollTrigger: {
//           trigger: textRef.current,
//           start: "top 80%",  // Start as it enters the viewport
//           end: "top 30%",    // Complete the animation when it's higher up in the viewport
//           scrub: 1,          // Smoothly link animation to scroll position
//         },
//       }
//     );

//     // Animation for left side image with scrub to follow scroll position
//     gsap.fromTo(
//       imageRef.current,
//       { opacity: 0, y: 100 },
//       {
//         opacity: 1,
//         y: 0,
//         scrollTrigger: {
//           trigger: imageRef.current,
//           start: "top 75%",  // Start a bit lower in the viewport
//           end: "top 40%",    // End higher up
//           scrub: 1,          // Smooth, scroll-controlled animation
//         },
//       }
//     );

//     // Animation for right side scroll box after left side animations
//     gsap.fromTo(
//       scrollBoxRef.current,
//       { opacity: 0, y: 200 },
//       {
//         opacity: 1,
//         y: 0,
//         scrollTrigger: {
//           trigger: scrollBoxRef.current,
//           start: "top 90%",  // Trigger as the scroll box enters the viewport
//           end: "bottom top", // Keep it active until the section leaves the viewport
//           scrub: 1,          // Follow scroll position
//         },
//       }
//     );
//   }, []);

//   return (
//     <div className={styles.projectHighlight}>
//       {/* Left Side - Intro Text & Image */}
//       <div className={styles.leftSide}>
//         <p ref={textRef} className={styles.introText}>
//         In 2019, the UN declared the Sustainable Development Goals which gave rise to ESG in global financial markets.
//         </p>
//         <div ref={imageRef} className={styles.imageContainer}>
//           <img src="assets/BetterPortfolioLogo.png" alt="Project Image" />
//         </div>
//       </div>

//       {/* Right Side - Scroll Box with Text and Buttons */}
//       <div ref={scrollBoxRef} className={styles.scrollBox}>
//         <div className={styles.scrollContent}>
//           <p>Environmental, Social & Governance is the grab-bag term where investors compile ethical concerns. It's traditionally considered normative and immeasurable and besides the point in serious analyses.</p>
//           <p>Better Portfolios is an AI tool I created to help investors grade, organize and prioritize ESG concerns in a clear and comparable way

//           By compiling contemporary ESG metrics AI is trained to explain which investments more likely promote the UN's SDGs and why
//           Better Portfolios is an AI tool I created to help investors grade, organize and prioritize ESG concerns in a clear and comparable way

//           By compiling contemporary ESG metrics AI is trained to explain which investments more likely promote the UN's SDGs and why
//           Better Portfolios is an AI tool I created to help investors grade, organize and prioritize ESG concerns in a clear and comparable way

//           By compiling contemporary ESG metrics AI is trained to explain which investments more likely promote the UN's SDGs and why
//           Better Portfolios is an AI tool I created to help investors grade, organize and prioritize ESG concerns in a clear and comparable way

//           By compiling contemporary ESG metrics AI is trained to explain which investments more likely promote the UN's SDGs and why
//           </p>
//           <div className={styles.buttonsContainer}>
//             <button className="btn btn-primary">Button 1</button>
//             <button className="btn btn-secondary">Button 2</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectHighlight;