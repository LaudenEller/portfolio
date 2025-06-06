import React, { useRef, useState, useEffect } from 'react';
import styles from './WorkExampleTest3.module.css';

// Imported accordion content components
import MCafe from './MCafe';
import MCafe1 from './MCafe1';
import ECigMasters from './ECigMasters';
import Alpenglow from './Alpenglow';
import HeyBots from './HeyBots';
import SolidGroundConstruction from './SolidGroundConstruction';
import NomadicVintageRugs from './NomadicVintageRugs';
import VallartaBnb from './VallartaBnb';

// Accordion tab content: heading, image, summary, and corresponding component
const accordionData = [
  // { id: 0, heading: 'M Cafe', image: '/assets/workImages/example0.png', summary: 'Branding and website design for a modern café.', component: <MCafe /> },
  { id: 0, heading: 'M Cafe', color: 'blue', image: '/assets/workImages/example0.png', summary: 'Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities.', component: <MCafe1 /> },
  { id: 1, heading: 'ECig Masters', color: 'blue', image: '/assets/workImages/example1.png', summary: 'E-commerce development for vape products.', component: <ECigMasters /> },
  { id: 2, heading: 'Alpenglow', color: 'blue', image: '/assets/workImages/example2.png', summary: 'Visual identity for a mountain lodge.', component: <Alpenglow /> },
  { id: 3, heading: 'HeyBots', color: 'blue', image: '/assets/workImages/example3.png', summary: 'Conversational AI landing page.', component: <HeyBots /> },
  { id: 4, heading: 'Solid Ground Construction', color: 'blue', image: '/assets/workImages/example4.png', summary: 'Web presence for a construction company.', component: <SolidGroundConstruction /> },
  { id: 5, heading: 'Nomadic Vintage Rugs', color: 'blue', image: '/assets/workImages/example5.png', summary: 'One-of-a-kind Shopify rug store.', component: <NomadicVintageRugs /> },
  { id: 6, heading: 'Vallarta Bnb', image: '/assets/workImages/example6.png', summary: 'Booking platform for vacation rentals.', component: <VallartaBnb /> },
];

export default function WorkExamplesTest3() {
  const [activeIndex, setActiveIndex] = useState(null); // Tracks currently opened accordion
  const contentRefs = useRef([]);          // Refs for content containers (used for height animation)
  const wrapperRefs = useRef([]);          // Refs for outer accordion wrapper (used for scroll)
  const innerContentRefs = useRef([]);     // Refs for scrollable inner content (bypass page scroll)
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const [headerShrunk, setHeaderShrunk] = useState(false); // New state for header shrink


  /**
   * Lock the body scroll when an accordion is open.
   * Helps prevent background scrolling when inner content is scrollable.
   */
useEffect(() => {
 document.body.style.overflow = activeIndex !== null ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [activeIndex]);

/**
   * Redirect global scroll events (wheel/touch) to the inner scrollable content.
   * Helps route mouse or touch scrolls directly to the accordion content
   */
useEffect(() => {
  if (activeIndex === null) return;

  const handleScrollRedirect = (e) => {
    const el = innerContentRefs.current[activeIndex];
    if (el) {
      el.scrollTop += e.deltaY; // Manual scroll
      e.preventDefault();       // Prevent page scroll
    }
  };

  const handleTouchStart = (e) => (lastY = e.touches[0].clientY);
  const handleTouchMove = (e) => {
    const el = innerContentRefs.current[activeIndex];
    if (el) {
      const deltaY = lastY - e.touches[0].clientY;
      el.scrollTop += deltaY;
      lastY = e.touches[0].clientY;
      e.preventDefault(); // Stop body scroll
    }
  };

  document.addEventListener('wheel', handleScrollRedirect, { passive: false });
  document.addEventListener('touchstart', handleTouchStart, { passive: false });
  document.addEventListener('touchmove', handleTouchMove, { passive: false });

  // Cleanup
  return () => {
    document.removeEventListener('wheel', handleScrollRedirect);
    document.removeEventListener('touchstart', handleTouchStart);
    document.removeEventListener('touchmove', handleTouchMove);
  };
}, [activeIndex]);

/**
   * Prevent scroll bounce when content is already scrolled to the top or bottom.
   * Avoids "bleeding" into background scroll, especially on trackpads or mobile.
   */
useEffect(() => {
  if (activeIndex === null) return;

  const timer = setTimeout(() => {
    const el = innerContentRefs.current[activeIndex];
    if (!el) return;

    const handleWheel = (e) => {
      const atTop = el.scrollTop === 0;
      const atBottom = Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight;
      if ((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0)) {
        e.preventDefault(); // Block scroll pass-through
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    // Cleanup
    return () => { el.removeEventListener('wheel', handleWheel); };
  }, 100); // Delay ensures DOM has updated

  return () => clearTimeout(timer);
  }, [activeIndex]);
  
// New effect: listen to scroll on innerContent to toggle header shrink
  useEffect(() => {
    if (activeIndex === null) {
      setHeaderShrunk(false);
      return;
    }
    const el = innerContentRefs.current[activeIndex];
    if (!el) return;

    const onScroll = () => {
      if (el.scrollTop > 0) {
        setHeaderShrunk(true);
      } else {
        setHeaderShrunk(false);
      }
    };

    el.addEventListener('scroll', onScroll);

    // Init check
    onScroll();

    return () => {
      el.removeEventListener('scroll', onScroll);
      setHeaderShrunk(false);
    };
  }, [activeIndex]);

  // Variables for mobile scroll override
  let lastY = 0; 

  /**
  * Handles user clicking on an accordion tab.
  * Scrolls to the tab, then expands it and sets focus on content for keyboard access.
  */
  const handleAccordionClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse if already open
       setHeaderShrunk(false);
    } else {
      wrapperRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start',  }); // Align tab to top of viewport (useful with scroll-margin-top)
      // Delay state update to give scroll time to complete
      setTimeout(() => {
        setActiveIndex(index);
        setHeaderShrunk(false);
        // After expansion, set focus on inner content for accessibility
        setTimeout(() => { innerContentRefs.current[index]?.focus(); }, 50);
      }, 200); // Delay to allow DOM to update
    }
  };
  
  return (
    <div id="work-examples" className={styles.workExamples}>
      <div className={styles.accordionContainer}>
        {accordionData.map((item, index) => {
          const isActive = activeIndex === item.id;
          return (
            <div key={item.id} className={styles.accordionWrapper} ref={(el) => (wrapperRefs.current[index] = el)}>
              <div className={`${styles.accordionTab} ${styles.card} ${isActive ? styles.active : ''}`} onClick={() => handleAccordionClick(item.id)}>
                <div className={`${styles.tabLayout} ${isActive && headerShrunk ? styles.shrinkHeader : ''}`}>
                  <div className={styles.tabImageWrapper}>
                    <div className={styles.imageCardWrapper}>
                    <img src={item.image} alt={item.heading} className={styles.tabImageLarge} />
                    </div>
                  </div>
                  <div className={styles.tabDetails}>
                    <h3 className={styles.tabTitle}>{item.heading}</h3>
                    <p className={styles.tabSummary}>{item.summary}</p>
                    <div className={styles.projectInfoBlock}>
                      <h4 className={styles.projectInfoLabel}>PROJECT INFO</h4>
                      <div className={styles.projectInfo}>
                        <div className={styles.infoRow}>
                          <span className={styles.infoLabel}>Client</span>
                          <span className={styles.infoValue}>{item.heading}</span>
                        </div>
                        <div className={styles.infoRow}>
                          <span className={styles.infoLabel}>Year</span>
                          <span className={styles.infoValue}>2023</span>
                        </div>
                        <div className={styles.infoRow}>
                          <span className={styles.infoLabel}>Role</span>
                          <span className={styles.infoValue}>Design & Dev</span>
                        </div>
                      </div>
                    </div>

                    <div className={styles.projectLinks}>
                      <a href="#" className={styles.projectButton} style={{color: item.color}}>Live Demo ↗</a>
                      <a href="#" className={styles.projectButton}>See on GitHub 🐙</a>
                    </div>

                  </div>
                </div>
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className={styles.accordionContent}
                  style={{ height: isActive ? `${contentRefs.current[index]?.scrollHeight}px` : '0px' }}
                >
                  <div
                    className={styles.innerContent}
                    ref={(el) => (innerContentRefs.current[index] = el)}
                    tabIndex={-1}
                  >
                    {item.component}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// FOR accordion opening animation through in-line style

// import React, { useRef, useState, useEffect } from 'react';
// import styles from './WorkExampleTest3.module.css';

// // Your imported components
// import MCafe from './MCafe';
// import MCafe1 from './MCafe1';
// import ECigMasters from './ECigMasters';
// import Alpenglow from './Alpenglow';
// import HeyBots from './HeyBots';
// import SolidGroundConstruction from './SolidGroundConstruction';
// import NomadicVintageRugs from './NomadicVintageRugs';
// import VallartaBnb from './VallartaBnb';

// const accordionData = [
//   { id: 0, heading: 'M Cafe', image: '/assets/workImages/example0.png', summary: 'Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities.', component: <MCafe1 /> },
//   { id: 1, heading: 'ECig Masters', image: '/assets/workImages/example1.png', summary: 'E-commerce development for vape products.', component: <ECigMasters /> },
//   { id: 2, heading: 'Alpenglow', image: '/assets/workImages/example2.png', summary: 'Visual identity for a mountain lodge.', component: <Alpenglow /> },
//   { id: 3, heading: 'HeyBots', image: '/assets/workImages/example3.png', summary: 'Conversational AI landing page.', component: <HeyBots /> },
//   { id: 4, heading: 'Solid Ground Construction', image: '/assets/workImages/example4.png', summary: 'Web presence for a construction company.', component: <SolidGroundConstruction /> },
//   { id: 5, heading: 'Nomadic Vintage Rugs', image: '/assets/workImages/example5.png', summary: 'One-of-a-kind Shopify rug store.', component: <NomadicVintageRugs /> },
//   { id: 6, heading: 'Vallarta Bnb', image: '/assets/workImages/example6.png', summary: 'Booking platform for vacation rentals.', component: <VallartaBnb /> },
// ];

// export default function WorkExamplesTest3() {
//   const FLAP_HEIGHT = 120; // px, fixed flap height approx your padding + content height of header

//   const [activeIndex, setActiveIndex] = useState(null);
//   const [animationPhase, setAnimationPhase] = useState(null);
//   const contentRefs = useRef([]);
//   const wrapperRefs = useRef([]);
//   const innerContentRefs = useRef([]);

//   // Body scroll lock when open
//   useEffect(() => {
//     document.body.style.overflow = activeIndex !== null ? 'hidden' : '';
//     return () => (document.body.style.overflow = '');
//   }, [activeIndex]);

//   // Animation phase control
//   useEffect(() => {
//     if (animationPhase === 'lifting') {
//       const timer = setTimeout(() => setAnimationPhase('dropping'), 600);
//       return () => clearTimeout(timer);
//     }
//     if (animationPhase === 'dropping') {
//       const timer = setTimeout(() => {
//         setAnimationPhase(null);
//         if (activeIndex !== null) innerContentRefs.current[activeIndex]?.focus();
//       }, 300);
//       return () => clearTimeout(timer);
//     }
//   }, [animationPhase, activeIndex]);

//   const handleAccordionClick = (index) => {
//     if (activeIndex === index) {
//       setActiveIndex(null);
//       setAnimationPhase(null);
//     } else {
//       wrapperRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
//       setTimeout(() => {
//         setActiveIndex(index);
//         setAnimationPhase('lifting');
//       }, 200);
//     }
//   };

//   return (
//     <div id="work-examples" className={styles.workExamples}>
//       <div className={styles.accordionContainer}>
//         {accordionData.map((item, index) => {
//           const isActive = activeIndex === item.id;
//           const contentHeight = contentRefs.current[index]?.scrollHeight || 0;

//           // Calculate content container height and margin based on phase
//           let containerHeight = 0;
//           let containerMarginTop = 0;
//           if (isActive) {
//             if (animationPhase === 'dropping') {
//               containerHeight = contentHeight + FLAP_HEIGHT;
//               containerMarginTop = -FLAP_HEIGHT;
//             } else if (animationPhase === null) {
//               containerHeight = contentHeight;
//               containerMarginTop = 0;
//             }
//           }

//           return (
//             <div key={item.id} className={styles.accordionWrapper} ref={(el) => (wrapperRefs.current[index] = el)}>
//               <div className={`${styles.accordionTab} ${styles.card} ${isActive ? styles.active : ''}`} style={{ position: 'relative', overflow: 'visible' }}>
//                 {/* Conditionally render flap header */}
//                 {animationPhase !== 'dropping' && (
//                   <div
//                     className={styles.accordionHeaderFlap}
//                     onClick={() => handleAccordionClick(item.id)}
//                     style={{
//                       cursor: 'pointer',
//                       zIndex: 10,
//                       position: 'relative',
//                       backgroundColor: 'var(--accordion-bg)',
//                       borderRadius: '1rem',
//                       padding: '2rem',
//                       boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
//                       userSelect: 'none',
//                       transform: animationPhase === 'lifting' ? 'translateY(-100%)' : 'translateY(0)',
//                       transition: animationPhase === 'lifting' ? 'transform 0.6s ease-in-out' : 'transform 0.3s ease-out',
//                     }}
//                   >
//                     <div className={styles.tabLayout}>
//                       <div className={styles.tabImageWrapper}>
//                         <div className={styles.imageCardWrapper}>
//                           <img src={item.image} alt={item.heading} className={styles.tabImageLarge} />
//                         </div>
//                       </div>
//                       <div className={styles.tabDetails}>
//                         <h3 className={styles.tabTitle}>{item.heading}</h3>
//                         <p className={styles.tabSummary}>{item.summary}</p>
//                         <div className={styles.projectInfoBlock}>
//                           <h4 className={styles.projectInfoLabel}>PROJECT INFO</h4>
//                           <div className={styles.projectInfo}>
//                             <div className={styles.infoRow}>
//                               <span className={styles.infoLabel}>Client</span>
//                               <span className={styles.infoValue}>{item.heading}</span>
//                             </div>
//                             <div className={styles.infoRow}>
//                               <span className={styles.infoLabel}>Role</span>
//                               <span className={styles.infoValue}>Design & Dev</span>
//                             </div>
//                             <div className={styles.infoRow}>
//                               <span className={styles.infoLabel}>Year</span>
//                               <span className={styles.infoValue}>2025</span>
//                             </div>
//                           </div>
//                         </div>
//                         <div className={styles.projectLinks}>
//                           <a href="#" className={styles.projectButton}>Live Demo ↗</a>
//                           <a href="#" className={styles.projectButton}>See on GitHub 🐙</a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Accordion content container */}
//                 <div
//                   ref={(el) => (contentRefs.current[index] = el)}
//                   className={styles.accordionContent}
//                   style={{
//                     height: containerHeight,
//                     marginTop: containerMarginTop,
//                     overflow: 'hidden',
//                     transition: 'height 0.4s ease, margin-top 0.4s ease',
//                     position: 'relative',
//                     zIndex: 1,
//                     backgroundColor: 'var(--accordion-bg)',
//                     borderRadius: '0 0 1rem 1rem',
//                   }}
//                 >
//                   <div
//                     className={styles.innerContent}
//                     ref={(el) => (innerContentRefs.current[index] = el)}
//                     tabIndex={-1}
//                     style={{
//                       opacity: isActive && animationPhase === null ? 1 : 0,
//                       transition: 'opacity 0.3s ease 0.6s',
//                     }}
//                   >
//                     {item.component}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
