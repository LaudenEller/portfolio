// This code tries to ensure that scrollTop doesn't extend beyond the scrollable area on right side of page but it's not working

// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import styles from './ProjectHighlights.module.css';

// gsap.registerPlugin(ScrollTrigger);

// const ProjectHighlight = () => {
//   const textRef = useRef(null);
//   const imageRef = useRef(null);
//   const scrollBoxRef = useRef(null);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     // Pin the section
//     ScrollTrigger.create({
//       trigger: sectionRef.current,
//       start: "top top",
//       end: "bottom+=300% top",  // Adjust end to ensure full scrolling within the section
//       pin: true,
//       pinSpacing: true,
//     });

//     // Left-side text animation
//     gsap.fromTo(
//       textRef.current,
//       { opacity: 0, x: -200 },
//       {
//         opacity: 1,
//         x: 0,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           end: "top 50%",
//           scrub: 1,
//         },
//       }
//     );

//     // Left-side image animation after text
//     gsap.fromTo(
//       imageRef.current,
//       { opacity: 0, y: 100 },
//       {
//         opacity: 1,
//         y: 0,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 50%",
//           end: "top 20%",
//           scrub: 1,
//         },
//       }
//     );

//     // Proxy scroll behavior for the right text box
//     gsap.to(scrollBoxRef.current, {
//       yPercent: -100,
//       ease: "none",
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 20%",
//         end: "bottom-=20%",
//         scrub: 1,
//         onUpdate: (self) => {
//           // Calculate scroll distance based on progress
//           const scrollableDistance = scrollBoxRef.current.scrollHeight - scrollBoxRef.current.clientHeight;
//           scrollBoxRef.current.scrollTop = Math.min(
//             self.progress * scrollableDistance,
//             scrollableDistance
//           );
//         }
//       },
//     });
//   }, []);

//   return (
//     <div ref={sectionRef} className={styles.projectHighlight}>
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
//           <p>Environmental, Social & Governance is the grab-bag term where investors compile ethical concerns...</p>
//           <p>Better Portfolios is an AI tool I created to help investors grade, organize and prioritize ESG concerns...</p>
//           <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
// //            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
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
//   const sectionRef = useRef(null);
//   const scrollContentRef = useRef(null);

//   useEffect(() => {
//     const scrollContentHeight = scrollContentRef.current.scrollHeight;
//     const scrollBoxHeight = scrollBoxRef.current.clientHeight;
    
//     // this scrollTrigger pins the projectHighlights section once the top of it reaches the top of the viewport
//       // The section will remained pinned until a distance equal to the height of the section + 10% is scrolled
//    const sectionTrigger = ScrollTrigger.create({
//       trigger: sectionRef.current,
//       start: "top top",
//       end: "bottom+=80% top",
//       pin: true,
//       pinSpacing: true,  // Enable spacing to prevent unintended overlap
//     });

//     // Left-side text animation
//     gsap.fromTo(
//       textRef.current,
//       { opacity: 0, x: -200 },
//       {
//         opacity: 1,
//         x: 0,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           end: "top 50%",
//           scrub: true,
//         },
//       }
//     );

//     // Left-side image animation after text
//     gsap.fromTo(
//       imageRef.current,
//       { opacity: 0, y: 100 },
//       {
//         opacity: 1,
//         y: 0,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 45%",
//           end: "top 20%",
//           scrub: true,
//         },
//       }
//     );
    
//     // Should I replace this gsap.to function with a .fromTo initializing the scroll box at the bottom of the section?
//     gsap.to(scrollBoxRef.current, {
//       // Moves scrollBox upwards through the viewport by 100% of it's height over the course of the start and end values in scrollTrigger
//         // - aka starting once the top of the sectionRef get's within 10% of the top of the viewport
//           // - until the bottom of the sectionRef gets 5% past teh bottom of the viewport
//       // yPercent: -100,
//       yPercent: -(scrollContentHeight / scrollBoxHeight) * 100,
//       ease: "none",
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 15%",
//         // Why is the bottom of the scrollBoxRef.current have to reach within 20% (or is it 20% past) the bottom of the viewport for this animation to finish?
//         // When should this animation finish?
//         end: "bottom-=20%",
//         scrub: true,
//         // Keeps the scrollBox in place within the section while the scrollContent moves upwards by 100% of the scrollBox height (or is it it's own height?)
//         pin: scrollBoxRef.current,  // Pinning the right side to scroll
//         // What does the onUpdate function do to the gsap.to function?
//         onUpdate: (self) => {
//           scrollBoxRef.current.scrollTop = self.progress * (scrollBoxRef.current.scrollHeight - scrollBoxRef.current.clientHeight);
//         }
//       },
//     });
//      // Cleanup function to kill the ScrollTriggers and animations on unmount
//      return () => {
//       sectionTrigger.kill(); // Kill specific ScrollTrigger for `sectionRef`
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill all active ScrollTriggers
//     };
//   }, []);
  
//   return (
//     <div ref={sectionRef} className={styles.projectHighlight}>
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
//         <div ref={scrollContentRef} className={styles.scrollContent}>
//           <p>Environmental, Social & Governance is the grab-bag term where investors compile ethical concerns...</p>
//           <p>Better Portfolios is an AI tool I created to help investors grade, organize and prioritize ESG concerns...</p>
//            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
//            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
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
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     // 1. Left-side text animation
//     const leftTextAnim = gsap.fromTo(
//       textRef.current,
//       { opacity: 0, x: -200 },
//       {
//         opacity: 1,
//         x: 0,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           end: "top 50%",
//           scrub: 1,
//           markers: true,
//         },
//       }
//     );

//     // 2. Left-side image animation after text
//     const leftImageAnim = gsap.fromTo(
//       imageRef.current,
//       { opacity: 0, y: 100 },
//       {
//         opacity: 1,
//         y: 0,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 50%",
//           end: "top 20%",
//           scrub: 1,
//           markers: true,
//         },
//       }
//     );

//     // 3. Section pinning to keep it in place until right side content finishes
//     const sectionPin = ScrollTrigger.create({
//       trigger: sectionRef.current,
//       start: "top top",
//       end: "bottom-=20% top", // Section will stay pinned until 10% of its height past the top of the viewport
//       pin: sectionRef.current,
//       pinSpacing: true,
//       markers: true,
//     });

//     // 4. Right-side scroll animation after left-side animations finish
//     const rightSideScroll = gsap.to(scrollBoxRef.current, {
//       yPercent: -100,  // Scroll the content of the scroll box
//       ease: "none",
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 20%", // Start after the left-side content finishes
//         end: "bottom-=20%", // Stop before the section completely scrolls out of view
//         scrub: 1,          // Sync the scroll with the user’s scrolling
//         pin: scrollBoxRef.current,  // Pin the scroll box
//         markers: true,
//         onUpdate: (self) => {
//           // Update the scrollTop of the scroll box based on the progress of the animation
//           scrollBoxRef.current.scrollTop = self.progress * (scrollBoxRef.current.scrollHeight - scrollBoxRef.current.clientHeight);
//         },
//       },
//     });

//     // Cleanup function
//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Cleanup ScrollTriggers when component unmounts
//     };
//   }, []);

//   return (
//     <div ref={sectionRef} className={styles.projectHighlight}>
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
//           <p>Environmental, Social & Governance is the grab-bag term where investors compile ethical concerns...</p>
//           <p>Better Portfolios is an AI tool I created to help investors grade, organize and prioritize ESG concerns...</p>
//           <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC...</p>
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
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     // 1. Left-side text animation
//     const leftTextAnim = gsap.fromTo(
//       textRef.current,
//       { opacity: 0, x: -200 },
//       {
//         opacity: 1,
//         x: 0,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           end: "top 50%",
//           scrub: 1,
//           // markers: true,
//           // Leave the left-side content visible
//           toggleActions: "play none none none",
//         },
//       }
//     );

//     // 2. Left-side image animation after text
//     const leftImageAnim = gsap.fromTo(
//       imageRef.current,
//       { opacity: 0, y: 100 },
//       {
//         opacity: 1,
//         y: 0,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 50%",
//           end: "top 20%",
//           scrub: 1,
//           // markers: true,
//           toggleActions: "play none none none",
//         },
//       }
//     );

//     // 3. Section pinning to keep it in place until right side content finishes
//     const sectionPin = ScrollTrigger.create({
//       trigger: sectionRef.current,
//       start: "top top",
//       end: "bottom-=20% top", // Section will stay pinned until 10% of its height past the top of the viewport
//       pin: scrollBoxRef.current, // Pinning only the scroll box, not the whole section
//       pinSpacing: true,
//       markers: true,
//     });

//     // 4. Right-side scroll animation after left-side animations finish
//     const rightSideScroll = gsap.to(scrollBoxRef.current, {
//       yPercent: -10,  // Scroll the content of the scroll box
//       ease: "none",
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 20%", // Start after the left-side content finishes
//         end: "bottom-=20%", // Stop before the section completely scrolls out of view
//         scrub: 1,          // Sync the scroll with the user’s scrolling
//         pin: scrollBoxRef.current,  // Pin the scroll box
//         markers: true,
//         onUpdate: (self) => {
//           // Update the scrollTop of the scroll box based on the progress of the animation
//           scrollBoxRef.current.scrollTop = self.progress * (scrollBoxRef.current.scrollHeight - scrollBoxRef.current.clientHeight);
//         },
//       },
//     });

//     // Cleanup function
//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Cleanup ScrollTriggers when component unmounts
//     };
//   }, []);

//   return (
//     <div ref={sectionRef} className={styles.projectHighlight}>
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
//           <p>Environmental, Social & Governance is the grab-bag term where investors compile ethical concerns...</p>
//           <p>Better Portfolios is an AI tool I created to help investors grade, organize and prioritize ESG concerns...</p>
//           <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
//             The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
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
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     // Pin the entire section while content scrolls inside scrollBox
//     ScrollTrigger.create({
//       trigger: sectionRef.current,
//       start: "top top",
//       end: "bottom+=10% top",  // Pin until 10% beyond the bottom
//       pin: true,
//       pinSpacing: true,
//     });

//     // Left side text animation
//     gsap.fromTo(
//       textRef.current,
//       { opacity: 0, x: -200 },
//       {
//         opacity: 1,
//         x: 0,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           end: "top 50%",
//           scrub: 1,
//         },
//       }
//     );

//     // Left side image animation
//     gsap.fromTo(
//       imageRef.current,
//       { opacity: 0, y: 100 },
//       {
//         opacity: 1,
//         y: 0,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 50%",
//           end: "top 20%",
//           scrub: 1,
//         },
//       }
//     );

//     // Pin the scroll box and allow scrolling of its content
//     ScrollTrigger.create({
//       trigger: scrollBoxRef.current,
//       start: "top 20%", // Pin when the scroll box reaches 20% of the viewport
//       end: "bottom+=20% top", // End when the bottom of the scroll box reaches 20% past the viewport
//       pin: scrollBoxRef.current,
//       pinSpacing: true, // Maintain the space for the pinned box
//       scrub: 1, // Scrub for smooth scrolling
//     });

//     // No longer animate the scroll position, just let the content scroll naturally
//     // Instead of animating with gsap.to, just rely on overflow:auto on scrollBoxRef.current

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Clean up ScrollTriggers on unmount
//     };
//   }, []);

//   return (
//     <div ref={sectionRef} className={styles.projectHighlight}>
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
//           <p>Environmental, Social & Governance is the grab-bag term where investors compile ethical concerns...</p>
//           <p>Better Portfolios is an AI tool I created to help investors grade, organize and prioritize ESG concerns...</p>
//           <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
//             The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
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
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     // Pin the entire section while content scrolls inside scrollBox
//     ScrollTrigger.create({
//       trigger: sectionRef.current,
//       start: "top top",  // Pin when the top of the section hits the top of the viewport
//       end: "bottom+=10% top",  // Pin until 10% past the bottom of the section
//       pin: true,
//       pinSpacing: true, // Maintain the space for the pinned box
//     });

//     // Left side text animation
//     gsap.fromTo(
//       textRef.current,
//       { opacity: 0, x: -200 },
//       {
//         opacity: 1,
//         x: 0,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",  // Animation starts when top of section reaches 80% of viewport
//           end: "top 50%",
//           scrub: 1,
//         },
//       }
//     );

//     // Left side image animation
//     gsap.fromTo(
//       imageRef.current,
//       { opacity: 0, y: 100 },
//       {
//         opacity: 1,
//         y: 0,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 50%",
//           end: "top 20%",
//           scrub: 1,
//         },
//       }
//     );

//     // Pin the scroll box and allow scrolling of its content
//     ScrollTrigger.create({
//       trigger: scrollBoxRef.current,
//       start: "top 20%",  // Pin when scroll box reaches 20% of the viewport height
//       end: "bottom+=20% top",  // End when the bottom of the scroll box reaches 20% past the viewport
//       pin: scrollBoxRef.current,
//       pinSpacing: true,  // Keep the spacing for the pinned box
//       scrub: 1,  // Smoothly scrub the scroll progress
//     });

//     // Control the scroll content movement, making it scroll continuously
//     gsap.to(scrollBoxRef.current, {
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top top",  // Start when section's top reaches the top of viewport
//         end: "bottom top",  // End when section's bottom reaches the top of viewport
//         scrub: 1,  // Smoothly scrub the scroll progress
//         pin: true,  // Pin the section in place
//       },
//       yPercent: -100,  // Move scroll content upwards (scroll box will stay fixed in place)
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());  // Clean up ScrollTriggers on unmount
//     };
//   }, []);

//   return (
//     <div ref={sectionRef} className={styles.projectHighlight}>
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
//           <p>Environmental, Social & Governance is the grab-bag term where investors compile ethical concerns...</p>
//           <p>Better Portfolios is an AI tool I created to help investors grade, organize and prioritize ESG concerns...</p>
//           <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
//              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
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
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     // Pin the entire section while content scrolls inside scrollBox
//     ScrollTrigger.create({
//       trigger: sectionRef.current,
//       start: "top top",  // Pin when the top of the section hits the top of the viewport
//       end: "bottom+=200% top",  // Pin until 10% past the bottom of the section
//       pin: true,
//       pinSpacing: true, // Maintain the space for the pinned box
//     });

//     // Left side text animation (fade-in and move)
//     gsap.fromTo(
//       textRef.current,
//       { opacity: 0, x: -200 },
//       {
//         opacity: 1,
//         x: 0,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",  // Animation starts when top of section reaches 80% of viewport
//           end: "top 50%",
//           scrub: 1,
//         },
//       }
//     );

//     // Left side image animation (fade-in and move up)
//     gsap.fromTo(
//       imageRef.current,
//       { opacity: 0, y: 100 },
//       {
//         opacity: 1,
//         y: 0,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 50%",
//           end: "top 20%",
//           scrub: 1,
//         },
//       }
//     );

//     // Pin the scroll box and allow scrolling of its content
//     ScrollTrigger.create({
//       trigger: scrollBoxRef.current,
//       start: "top 20%",  // Pin when scroll box reaches 20% of the viewport height
//       end: "bottom+=20% top",  // End when the bottom of the scroll box reaches 20% past the viewport
//       pin: scrollBoxRef.current,
//       pinSpacing: true,  // Keep the spacing for the pinned box
//       scrub: 1,  // Smoothly scrub the scroll progress
//     });

//     // Control the scroll content movement inside the scroll box, making it scroll continuously
//     gsap.to(scrollBoxRef.current, {
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top top",  // Start when section's top reaches the top of viewport
//         end: "bottom top",  // End when section's bottom reaches the top of viewport
//         scrub: 1,  // Smoothly scrub the scroll progress
//         pin: true,  // Pin the section in place
//       },
//       yPercent: -100,  // Move scroll content upwards (scroll box will stay fixed in place)
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());  // Clean up ScrollTriggers on unmount
//     };
//   }, []);

//   return (
//     <div ref={sectionRef} className={styles.projectHighlight}>
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
//           <p>Environmental, Social & Governance is the grab-bag term where investors compile ethical concerns...</p>
//           <p>Better Portfolios is an AI tool I created to help investors grade, organize and prioritize ESG concerns...</p>
//           <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
//              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
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
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     // Pin the entire section
//     ScrollTrigger.create({
//       trigger: sectionRef.current,
//       start: "top top",
//       end: () => {
//         const scrollableContent =
//           scrollBoxRef.current.scrollHeight - scrollBoxRef.current.clientHeight;
//           console.log('scrollableContent1', scrollableContent)
//         return console.log('scrollableContent1.5', scrollableContent), `+=${scrollableContent + window.innerHeight}`;
//       },
//       pin: true,
//       pinSpacing: true,
//     });

//     // Left-side text animation
//     gsap.fromTo(
//       textRef.current,
//       { opacity: 0, x: -200 },
//       {
//         opacity: 1,
//         x: 0,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           end: "top 50%",
//           scrub: 1,
//         },
//       }
//     );

//     // Left-side image animation
//     gsap.fromTo(
//       imageRef.current,
//       { opacity: 0, y: 100 },
//       {
//         opacity: 1,
//         y: 0,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 50%",
//           end: "top 20%",
//           scrub: 1,
//         },
//       }
//     );

//     // Control the scrollable content of the right scroll box
//     ScrollTrigger.create({
//       trigger: scrollBoxRef.current,
//       start: "top 20%",
//       end: () => {
//         const scrollableContent =
//           scrollBoxRef.current.scrollHeight - scrollBoxRef.current.clientHeight;
//           console.log('scrollableContent2', scrollableContent, 'scrollbox.current.scrollheight', scrollBoxRef.current.scrollHeight, 'scrollbox.current.clientHeight', scrollBoxRef.current.clientHeight)
//         return console.log('scrollableContent2.5', scrollableContent), `+=${scrollableContent}`;
//       },
//       pin: scrollBoxRef.current,
//       pinSpacing: true,
//       scrub: 1,
//       onUpdate: (self) => {
//         if (scrollBoxRef.current) {
//           const scrollableDistance =
//             scrollBoxRef.current.scrollHeight - scrollBoxRef.current.clientHeight;
//           scrollBoxRef.current.scrollTop =
//             self.progress * scrollableDistance;
//         }
//         console.log('scrollBoxRef.current.scrolltop', scrollBoxRef.current.scrollTop)
//       },
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <div ref={sectionRef} className={styles.projectHighlight}>
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
//           <p>
//             Environmental, Social & Governance is the grab-bag term where
//             investors compile ethical concerns...
//           </p>
//           <p>
//             Better Portfolios is an AI tool I created to help investors grade,
//             organize and prioritize ESG concerns...
//           </p>
//           <p>
//             Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
//             The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
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

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from './ProjectHighlights.module.css';

gsap.registerPlugin(ScrollTrigger);

const ProjectHighlight = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const scrollBoxRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top", // Start when section reaches top of viewport
        end: "+=300%", // Timeline duration tied to scrolling through the section
        scrub: true,
        pin: true, // Pin the entire section
        pinSpacing: true,
      },
    });

    // Left-side text animation
    tl.fromTo(
      textRef.current,
      { opacity: 0, x: -200 },
      { opacity: 1, x: 0, duration: 1 },
      "0" // Start this animation immediately
    );

    // Left-side image animation, delayed after text animation
    tl.fromTo(
      imageRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1 },
      "0.5" // Starts slightly after text animation
    );

    // Right-side scroll content animation
    tl.to(scrollBoxRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top", // Sync with timeline start
        end: "+=200%", // Continue scrolling until content finishes
        scrub: true,
        onUpdate: (self) => {
          const scrollableHeight =
            scrollBoxRef.current.scrollHeight - scrollBoxRef.current.clientHeight;
          scrollBoxRef.current.scrollTop =
            self.progress * scrollableHeight;
        },
      },
      ease: "none",
    });
    // // Right-side scroll box animation
    // tl.to(
    //   scrollBoxRef.current,
    //   {
    //     scrollTrigger: {
    //       containerAnimation: tl, // Synchronize with the timeline
    //       start: "top top", // Trigger when section starts
    //       end: "+=200%", // Continue until the bottom of the section
    //       scrub: true,
    //       opacity: 0,
    //     },
    //     scrollTop: () =>
    //       scrollBoxRef.current.scrollHeight - scrollBoxRef.current.clientHeight,
    //     ease: "none",
    //     duration: 1,
    //     opacity: 1, // Smoothly scroll the content
    //   },
    //   "1" // Starts after left-side animations are complete
    // );

    // Clean up ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
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
          <p>Environmental, Social & Governance is the grab-bag term where investors compile ethical concerns...</p>
          <p>Better Portfolios is an AI tool I created to help investors grade, organize and prioritize ESG concerns...</p>
          <p>
             Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
             The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
           </p>
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
