// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import styles from './ProjectHighlights.module.css';


// gsap.registerPlugin(useGSAP, ScrollTrigger);

// const Highlights = () => {
//   const sectionRef = useRef(null);
//   const textRef = useRef(null);
//   const imageRef = useRef(null);
//   const scrollBoxRef = useRef(null);

//   useGSAP(
//     () => {
        
//         const timeline = gsap.timeline();

//     // Step 1: Animate intro text before pinning
//     timeline.fromTo(
//       textRef.current,
//       { opacity: 0, x: -200 },
//       { opacity: 1, x: 0, duration: 1 }
//     );

//      // Step 2: Pin the section
//      timeline.add(() => {
//         ScrollTrigger.create({
//           trigger: sectionRef.current,
//           start: "top-=45px top", // Pin starts after text animation
//           end: "+=200%", // Total scroll-triggered timeline duration
//         });
//       });

//     // Step 2: Pin the section
//     timeline.add(() => {
//       ScrollTrigger.create({
//         trigger: sectionRef.current,
//         start: "top-=45px top", // Pin starts after text animation
//         end: "+=200%", // Total scroll-triggered timeline duration
//         scrub: true,
//         pin: true, // Pin the section after intro text
//         pinSpacing: true,
//       });
//     });

//     // Step 3: Animate left-side image
//     timeline.fromTo(
//       imageRef.current,
//       { opacity: 0, y: 100 },
//       { opacity: 0.75, y: -100, duration: 1 },
//       "+=0.5" // Starts after pinning
//     );

//     // Step 4: Animate right-side scroll content
//     ScrollTrigger.create({
//       trigger: sectionRef.current,
//       start: "top top", // Sync with timeline start
//       end: "+=180%", // Continue scrolling until content finishes
//       scrub: true,
//       onUpdate: (self) => {
//         const scrollableHeight =
//           scrollBoxRef.current.scrollHeight - scrollBoxRef.current.clientHeight;
//         scrollBoxRef.current.scrollTop =
//           self.progress * scrollableHeight;
//       },
//     });
//         // gsap code here...
//         // gsap.to(textRef.current, 
//         // { opacity: 0, x: -200 },
//         // { opacity: 1, x: 0, duration: 1 }); // <-- automatically reverted
//     },
//     { scope: sectionRef }
// ); // <-- scope is for selector text (optional)

//   return (
//     <div ref={sectionRef} className={styles.projectHighlight}>
//       {/* Left Side - Intro Text & Image */}
//       <div className={styles.leftSide}>
//         <div className={styles.introTextContainer}>
//           <p ref={textRef} className={styles.introText}>
//             Better Portfolios uses AI to calculate ESG-Alpha
//           </p>
//         </div>
//         <div ref={imageRef} className={styles.imageContainer}>
//           <img src="assets/highlightImages/ESGSq.png" alt="Project Image" />
//         </div>
//       </div>

//       {/* Right Side - Scroll Box with Text and Buttons */}
//       <div ref={scrollBoxRef} className={styles.scrollBox}>
//         <div className={styles.scrollContent}>
//           <p>In 2019, the UN declared the Sustainable Development Goals which gave rise to ESG in global financial markets.</p>
//           <p>Environmental, Social & Governance is the grab-bag term where investors compile ethical concerns. It's traditionally considered normative, immeasurable and besides-the-point in serious analyses.</p>
//           <p>Better Portfolios is an AI tool I created to help investors grade, organize and prioritize ESG concerns in a clear and comparable way</p>
//           <p>By compiling contemporary ESG metrics AI is trained to explain which investments more likely promote the UN's SDGs and why</p>
//           <div className={styles.buttonsContainer}>
//             <button className="btn btn-primary">Button 1</button>
//             <button className="btn btn-secondary">Button 2</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Highlights;

// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import styles from './ProjectHighlights.module.css';

// gsap.registerPlugin(ScrollTrigger);

// const Highlights = () => {
//   const sectionRef = useRef(null);
//   const textRef = useRef(null);
//   const imageRef = useRef(null);
//   const scrollBoxRef = useRef(null);

//   useEffect(() => {
//     // Intro Text Animation on Scroll
//     gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 90%",
//         end: "top top",
//         scrub: true,
//       },
//     }).fromTo(
//       textRef.current,
//       { opacity: 0, x: -200 },
//       { opacity: 1, x: 200, duration: 0.5, ease: "power1.inOut" }
//     );

//     // Section Pinning and Content Animation
//     const pinTimeline = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top-=5% top",
//         end: () => `+=${scrollBoxRef.current.scrollHeight + 100}px`,
//         scrub: true,
//         pin: true,
//         pinSpacing: true,
//       },
//     });

//     // Left-side image animation
//     pinTimeline.fromTo(
//       imageRef.current,
//       { opacity: 0, y: "90%" },
//       { opacity: 0.75, y: "-1%", duration: 0.9, ease: "none" },
//       "0"
//     );

//     // Right-side scroll box entrance animation
//     pinTimeline.fromTo(
//       scrollBoxRef.current,
//       { opacity: 0, y: "100%" },
//       { opacity: 1, y: "8%", duration: 1, ease: "none" },
//       "0"
//     );

//     // Internal Scrolling Animation for Right-Side Scroll Box
//     pinTimeline.add(
//       gsap.to(scrollBoxRef.current, {
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top", // Sync with pinning start
//           end: () => `+=${scrollBoxRef.current.scrollHeight - 100}`, // Internal scrolling completes before pinning ends
//           scrub: true,
//           onUpdate: (self) => {
//             const scrollableHeight =
//               scrollBoxRef.current.scrollHeight - scrollBoxRef.current.clientHeight;
//             scrollBoxRef.current.scrollTop =
//               self.progress * scrollableHeight;
//           },
//         },
//         ease: "none",
//       }),
//       "+=1" // Delay start until entrance animations complete
//     );

//     // Clean up ScrollTriggers on component unmount
//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <div ref={sectionRef} className={styles.projectHighlight}>
//       {/* Left Side - Intro Text & Image */}
//       <div className={styles.leftSide}>
//         <div className={styles.introTextContainer}>
//           <p ref={textRef} className={styles.introText}>
//             My Better Portfolios app uses AI to calculate ESG-Alpha
//           </p>
//         </div>
//         <div ref={imageRef} className={styles.imageContainer}>
//           <img src="assets/highlightImages/ESGSq.png" alt="Project Image" />
//         </div>
//       </div>

//       {/* Right Side - Scroll Box with Text and Buttons */}
//       <div ref={scrollBoxRef} className={styles.scrollBox}>
//         <div className={styles.scrollContent}>
//           <p>In 2019, the UN declared the Sustainable Development Goals which gave rise to ESG in global financial markets.</p>
//           <p>Environmental, Social & Governance is the grab-bag term where investors compile ethical concerns. It's traditionally considered normative, immeasurable and besides-the-point in serious analyses.</p>
//           <p>Environmental, Social & Governance is the grab-bag term where investors compile ethical concerns. It's traditionally considered normative, immeasurable and besides-the-point in serious analyses.</p>
//           <p>Environmental, Social & Governance is the grab-bag term where investors compile ethical concerns. It's traditionally considered normative, immeasurable and besides-the-point in serious analyses.</p>
//           <p>Better Portfolios is an AI tool I created to help investors grade, organize and prioritize ESG concerns in a clear and comparable way</p>
//           <p>By compiling contemporary ESG metrics AI is trained to explain which investments more likely promote the UN's SDGs and why</p>
//           <div className={styles.buttonsContainer}>
//             <button className="btn btn-primary">Button 1</button>
//             <button className="btn btn-secondary">Button 2</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Highlights;


// scrolling is not waiting to start until the image is in place
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from './ProjectHighlights.module.css';

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const scrollBoxRef = useRef(null);

  useEffect(() => {
    // Intro Text Animation on Scroll
    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%",
        end: "top top",
        scrub: true,
      },
    }).fromTo(
      textRef.current,
      { opacity: 0, x: -200 },
      { opacity: 1, x: 200, duration: 0.5, ease: "power1.inOut" }
    );

    // Section Pinning and Image/Scroll Content Animation
    const pinTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top-=5% top",
        end: () => `+=${scrollBoxRef.current.scrollHeight + 100}px`, // Adjust pinning duration
        // scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });

    // Left-side image animation after section is pinned
    pinTimeline.fromTo(
      imageRef.current,
      { opacity: 0, y: "90%" },
      { opacity: 0.75, y: "-1%", duration: 0.9, ease: "none" },
      "0"
    );

    // Right-side scroll box entrance animation
    pinTimeline.fromTo(
      scrollBoxRef.current,
      { opacity: 0, y: "100%" },
      { opacity: 1, y: "8%", duration: 1, ease: "none" },
      "0"
    );

    // Internal Scrolling Animation for Right-Side Scroll Box
    gsap.to(scrollBoxRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top-=100px top",
        end: () => `+=${scrollBoxRef.current.scrollHeight}`,
        scrub: true,
        onUpdate: (self) => {
          const scrollableHeight =
            scrollBoxRef.current.scrollHeight - scrollBoxRef.current.clientHeight;
          scrollBoxRef.current.scrollTop =
            self.progress * scrollableHeight;
        },
      },
      ease: "none",
    },
    "+=0.5"
);

    // Clean up ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className={styles.projectHighlight}>
      {/* Left Side - Intro Text & Image */}
      <div className={styles.leftSide}>
        <div className={styles.introTextContainer}>
          <p ref={textRef} className={styles.introText}>
            My Better Portfolios app uses AI to calculate ESG-Alpha
          </p>
        </div>
        <div ref={imageRef} className={styles.imageContainer}>
          <img src="assets/highlightImages/ESGSq.png" alt="Project Image" />
        </div>
      </div>

      {/* Right Side - Scroll Box with Text and Buttons */}
      <div ref={scrollBoxRef} className={styles.scrollBox}>
        <div className={styles.scrollContent}>
          <p>In 2019, the UN declared the Sustainable Development Goals which gave rise to ESG in global financial markets.</p>
          <p>Environmental, Social & Governance is the grab-bag term where investors compile ethical concerns. It's traditionally considered normative, immeasurable and besides-the-point in serious analyses.</p>
          <p>Environmental, Social & Governance is the grab-bag term where investors compile ethical concerns. It's traditionally considered normative, immeasurable and besides-the-point in serious analyses.</p>
          <p>Environmental, Social & Governance is the grab-bag term where investors compile ethical concerns. It's traditionally considered normative, immeasurable and besides-the-point in serious analyses.</p>
          <p>Better Portfolios is an AI tool I created to help investors grade, organize and prioritize ESG concerns in a clear and comparable way</p>
          <p>By compiling contemporary ESG metrics AI is trained to explain which investments more likely promote the UN's SDGs and why</p>
          <div className={styles.buttonsContainer}>
            <button className="btn btn-primary">Button 1</button>
            <button className="btn btn-secondary">Button 2</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;

