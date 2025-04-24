// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { horizontalLoop } from '../../utils/HorizontalLoop';
// import styles from './WorkExamplesTest.module.css';

// export default function HorizontalLoopWithControls({
//   items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
//   speed = 1,
//   paused = false,
//   reversed = false,
//   repeat = -1,
//   paddingRight = 20, // 👈 this now controls the ghost spacing
// }) {
//   const containerRef = useRef(null);
//   const animationRef = useRef(null);

//   useEffect(() => {
//     const elements = gsap.utils.toArray(
//       containerRef.current.querySelectorAll('.loopItem')
//     );

//     if (!elements.length) return;

//     const tl = horizontalLoop(elements, {
//       speed,
//       paused: true,
//       reversed,
//       repeat,
//       paddingRight, // 👈 important to force GSAP to count this in totalWidth
//     });

//     animationRef.current = tl;
//     return () => tl.kill();
//   }, [speed, paused, reversed, repeat, paddingRight]);

//   const handleBoxClick = (index) => {
//     animationRef.current?.toIndex(index, {
//       duration: 1,
//       ease: 'power1.inOut',
//     });
//   };

//   const handleNext = () => {
//     animationRef.current?.next({
//       duration: 1,
//       ease: 'power1.inOut',
//     });
//   };

//   const handlePrev = () => {
//     animationRef.current?.previous({
//       duration: 1,
//       ease: 'power1.inOut',
//     });
//   };

//   return (
//     <div>
//       <div
//         ref={containerRef}
//         style={{
//           display: 'flex',
//           overflow: 'hidden',
//           whiteSpace: 'nowrap',
//           cursor: 'pointer',
//           margin: '50px',
//         }}
//       >
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className="box loopItem"
//             style={{
//               minWidth: '200px',
//               marginRight: '20px',
//               background: '#eee',
//               textAlign: 'center',
//               padding: '20px',
//               boxSizing: 'border-box',
//               flexShrink: 0,
//             }}
//             onClick={() => handleBoxClick(index)}
//           >
//             {item}
//           </div>
//         ))}

//         {/* 👇 This element forces spacing after the last item */}
//         <div
//           style={{
//             width: `${paddingRight}px`,
//             flexShrink: 0,
//           }}
//         />
//       </div>

//       <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
//         <button onClick={handlePrev}>Previous</button>
//         <button onClick={handleNext}>Next</button>
//       </div>
//     </div>
//   );
// }
import React, { useRef, useState, useEffect, useContext, useCallback } from 'react';
import gsap from 'gsap';
import { horizontalLoop } from '../../utils/HorizontalLoop';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './WorkExamplesTest.module.css';

import MCafe from './MCafe';
import ECigMasters from './ECigMasters';
import Alpenglow from './Alpenglow';
import HeyBots from './HeyBots';
import SolidGroundConstruction from './SolidGroundConstruction';
import NomadicVintageRugs from './NomadicVintageRugs';
import VallartaBnb from './VallartaBnb';

const WorkExamplesTest = () => {
      const { theme } = useContext(ThemeContext);
      const [activeIndex, setActiveIndex] = useState(null);
      const galleryContainerRef = useRef(null);
      const galleryRef = useRef(null);
      const galleryItemsRef = useRef([]);
      const accordionRefs = useRef([]);
      const [currentIndex, setCurrentIndex] = useState(0); // Separate state for scrolling
    
      // Initialize GSAP timeline for horizontal loop
      const animationRef = useRef(null);
    
      useEffect(() => {
        const elements = gsap.utils.toArray(galleryRef.current.children);
        if (elements.length === 0) return;

         // Get the width of the gallery container
    const galleryWidth = galleryContainerRef.current.offsetWidth;
    
        // Create the horizontal loop animation with GSAP
        const tl = horizontalLoop(elements, {
          speed: 1,
          paused: true, // allow manual control of animation
          reversed: false,
          repeat: -1,
          galleryWidth: galleryWidth, // Pass galleryWidth to the horizontalLoop function
        });
        animationRef.current = tl;
    
        return () => tl.kill(); // Cleanup on unmount
      }, []);
    
      const handleGalleryItemClick = (index) => {
        if (activeIndex === index) {
          closeAccordion();
        } else {
          openAccordion(index);
        }
      };
    
      const openAccordion = (index) => {
        setActiveIndex(index);
        const galleryItem = galleryItemsRef.current[index];
        gsap.to(galleryItem, { scale: 1.5, x: 0, duration: 0.25 });
        galleryItemsRef.current.forEach((item, i) => {
          if (i !== index) {
            gsap.to(item, { scale: 0.8, opacity: 0.5, duration: 0.5 });
          }
        });
      };
    
      const closeAccordion = () => {
        setActiveIndex(null);
        galleryItemsRef.current.forEach((item) => {
          gsap.to(item, { scale: 1, x: 0, opacity: 1, duration: 0.5 });
        });
      };
    
      // Function to scroll the gallery without opening the accordion
  const scrollGallery = (direction) => {
    const totalItems = galleryItemsRef.current.length;
    const nextIndex = (currentIndex + direction + totalItems) % totalItems; // Wrap around
    setCurrentIndex(nextIndex); // Update the scroll index

    // Only scroll the gallery, don't trigger accordion opening
    animationRef.current?.toIndex(nextIndex, {
      duration: 1,
      ease: 'power1.inOut',
    });
  };

      const accordionData = [
        { id: 0, heading: 'M Cafe', component: <MCafe /> },
        { id: 1, heading: 'ECig Masters', component: <ECigMasters /> },
        { id: 2, heading: 'Alpenglow', component: <Alpenglow /> },
        { id: 3, heading: 'HeyBots', component: <HeyBots /> },
        { id: 4, heading: 'Solid Ground Construction', component: <SolidGroundConstruction /> },
        { id: 5, heading: 'Nomadic Vintage Rugs', component: <NomadicVintageRugs /> },
        { id: 6, heading: 'Vallarta Bnb', component: <VallartaBnb /> },
      ];
    
      return (
        <div id="work-examples" className={styles.workExamples}>
          <div className={styles.galleryWrapper} ref={galleryContainerRef}>
            <div ref={galleryRef} className={styles.gallery}>
              {accordionData.map((item) => (
                <div
                  key={item.id}
                  ref={(el) => (galleryItemsRef.current[item.id] = el)}
                  className={styles.galleryItem}
                  onClick={() => handleGalleryItemClick(item.id)} // Clicking an item opens the accordion
                >
                  <img src={`assets/workImages/example${item.id + 1}.png`} alt={`Example ${item.id + 1}`} />
                  <p>{item.heading}</p>
                </div>
              ))}
            </div>
          </div>

           {/* Scroll Buttons */}
           <div className={styles.scrollButtons}>
            <button onClick={() => scrollGallery(-1)}>&lt; Prev</button>
            <button onClick={() => scrollGallery(1)}>Next &gt;</button>
          </div>
    
          {/* Accordion Section */}
          <div className={styles.accordion}>
            {accordionData.map((item) => (
              <div
                key={item.id}
                className={`${styles.accordionTab} ${activeIndex === item.id ? styles.active : ''}`}
                // onClick={() => handleGalleryItemClick(item.id)} // Open accordion when clicked
              >
                <p>{item.heading}</p>
                <div
                  ref={(el) => (accordionRefs.current[item.id] = el)}
                  className={styles.accordionContent}
                  style={{ height: activeIndex === item.id ? 'auto' : 0 }}
                >
                  {activeIndex === item.id && item.component}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };    

export default WorkExamplesTest;
