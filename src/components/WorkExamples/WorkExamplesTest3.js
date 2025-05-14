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
  { id: 0, heading: 'M Cafe', image: '/assets/workImages/example0.png', summary: 'Branding and website design for a modern café.', component: <MCafe1 /> },
  { id: 1, heading: 'ECig Masters', image: '/assets/workImages/example1.png', summary: 'E-commerce development for vape products.', component: <ECigMasters /> },
  { id: 2, heading: 'Alpenglow', image: '/assets/workImages/example2.png', summary: 'Visual identity for a mountain lodge.', component: <Alpenglow /> },
  { id: 3, heading: 'HeyBots', image: '/assets/workImages/example3.png', summary: 'Conversational AI landing page.', component: <HeyBots /> },
  { id: 4, heading: 'Solid Ground Construction', image: '/assets/workImages/example4.png', summary: 'Web presence for a construction company.', component: <SolidGroundConstruction /> },
  { id: 5, heading: 'Nomadic Vintage Rugs', image: '/assets/workImages/example5.png', summary: 'One-of-a-kind Shopify rug store.', component: <NomadicVintageRugs /> },
  { id: 6, heading: 'Vallarta Bnb', image: '/assets/workImages/example6.png', summary: 'Booking platform for vacation rentals.', component: <VallartaBnb /> },
];

export default function WorkExamplesTest3() {
  const [activeIndex, setActiveIndex] = useState(null); // Tracks currently opened accordion
  const contentRefs = useRef([]);          // Refs for content containers (used for height animation)
  const wrapperRefs = useRef([]);          // Refs for outer accordion wrapper (used for scroll)
  const innerContentRefs = useRef([]);     // Refs for scrollable inner content (bypass page scroll)
const [visibleIndexes, setVisibleIndexes] = useState([]);


  /**
   * Lock the body scroll when an accordion is open.
   * Helps prevent background scrolling when inner content is scrollable.
   */
useEffect(() => {
  if (activeIndex !== null) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  // Cleanup: ensure scroll is re-enabled on unmount
  return () => {
    document.body.style.overflow = '';
  };
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
    return () => {
      el.removeEventListener('wheel', handleWheel);
    };
  }, 100); // Delay ensures DOM has updated

  return () => clearTimeout(timer);
}, [activeIndex]);

// useEffect(() => {
//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         const index = parseInt(entry.target.dataset.index);
//         if (entry.isIntersecting && !visibleIndexes.includes(index)) {
//           setVisibleIndexes((prev) => [...prev, index]);
//           console.log('Observed', entry.target, 'isIntersecting:', entry.isIntersecting);
//         }
//       });
//     },
//     { threshold: 0.1 }
//   );

//   innerContentRefs.current.forEach((el, index) => {
//     if (el) {
//       el.dataset.index = index;
//       observer.observe(el);
//     }
//   });

//   return () => observer.disconnect();
// }, [activeIndex]);


  
  /**
  * Handles user clicking on an accordion tab.
  * Scrolls to the tab, then expands it and sets focus on content for keyboard access.
  */
  const handleAccordionClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse if already open
    } else {
      wrapperRefs.current[index]?.scrollIntoView({
          behavior: 'smooth',
          block: 'start', // Align tab to top of viewport (useful with scroll-margin-top)
        });
        
      // Delay state update to give scroll time to complete
      setTimeout(() => {
        setActiveIndex(index);
        // After expansion, set focus on inner content for accessibility
        setTimeout(() => {
    innerContentRefs.current[index]?.focus();
  }, 50);
      }, 200); // Delay to allow DOM to update
    }
  };
  
// Variables for mobile scroll override
let lastY = 0; 
const handleTouchStart = (e) => {
  lastY = e.touches[0].clientY;
};
const handleTouchMove = (e) => {
  const el = innerContentRefs.current[activeIndex];
  if (el) {
    const deltaY = lastY - e.touches[0].clientY;
    el.scrollTop += deltaY;
    lastY = e.touches[0].clientY;
    e.preventDefault(); // Stop body scroll
  }
};


  return (
    <div id="work-examples" className={styles.workExamples}>
      <div className={styles.accordionContainer}>
      {accordionData.map((item, index) => {
  const isActive = activeIndex === item.id;
  return (
    <div key={item.id} className={styles.accordionWrapper} ref={(el) => (wrapperRefs.current[index] = el)}>
      <div
        className={`${styles.accordionTab} ${isActive ? styles.active : ''}`}
        onClick={() => handleAccordionClick(item.id)}
      >
        {/* Accordion header */}
        <div className={styles.tabHeader}>
          <img src={item.image} alt={item.heading} className={styles.tabImage} />
          <div>
            <h3>{item.heading}</h3>
            <p>{item.summary}</p>
          </div>
        </div>

        {/* Expandable accordion content */}
        <div
          ref={(el) => (contentRefs.current[index] = el)}
          className={styles.accordionContent}
          style={{
            height: isActive
              ? `${contentRefs.current[index]?.scrollHeight}px`
              : '0px',
          }}
        >
          <div 
          // Content without fade-in effect
          className={styles.innerContent}
          // Using CSS to fade in content on scroll
          // className={`${styles.innerContent} ${styles.fadeInInit} ${visibleIndexes.includes(index) ? styles.fadeInVisible : ''}`}
          // className={`${styles.innerContent} ${styles.fadeInInit} ${visibleIndexes.includes(index) ? styles.triggerFade : ''}`}

          ref={(el) => (innerContentRefs.current[index] = el)}
          tabIndex={-1} // Allows programmatic focus
          >
            {item.component}</div>
        </div>
      </div>
    </div>
  );
})}
      </div>
    </div>
  );
}
