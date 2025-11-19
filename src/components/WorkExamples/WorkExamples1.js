import React, { useRef, useState, useEffect } from 'react';
import styles from './WorkExamples.module.css';

// Imported accordion content components
import MCafe from './MCafe';
import ECigMasters from './ECigMasters';
import Alpenglow from './Alpenglow';
import HeyBots from './HeyBots';
import SolidGroundConstruction from './SolidGroundConstruction';
import NomadicVintageRugs from './NomadicVintageRugs';
import VallartaBnb from './VallartaBnb';
import FadeInOnScroll from './FadeInOnScroll';
import { useNavShrink } from '../../contexts/NavShrinkContext';

// Accordion tab content: heading, image, summary, and corresponding component
const accordionData = [
  // { id: 0, heading: 'M Cafe', image: '/assets/workImages/example0.png', summary: 'Branding and website design for a modern café.', component: <MCafe /> },
  { id: 0, 
    client: 'M Cafe', 
    heading: 'Takeout the fees', 
    color: '#FEFFF6', 
    color2: '#FD2B1F', 
    image: '/assets/workImages/example0.png', 
    summary: 'Online ordering with DoorDash delivery that avoids commissions and reduces fees for an iconic LA natural foods restaurant\'s new Ghost Kitchen.', 
    tech: 'Revel, Squarespace', 
    role: 'Full stack developer', 
    demo: 'https://www.google.com', 
    code: 'https://www.github.com', 
    component: MCafe },
  { id: 1, 
    client: 'Nomadic Vintage Rugs', 
    heading: 'Shop-ify unique items', 
    color: '#FFFAF2', 
    color2: '#17476A', 
    image: '/assets/workImages/example5.png', 
    summary: 'One-of-a-kind Shopify rug store.', 
    tech: 'Shopify', 
    role: 'Backend developer', 
    demo: 'https://nomadicvintagerugs.com/', 
    code: 'https://www.github.com', 
    component: NomadicVintageRugs  },
  { id: 2, 
    client: 'Alpenglow', 
    heading: 'Modern real estate in Mexico', 
    color: 'blue', 
    image: '/assets/workImages/example1.png', 
    summary: 'Visual identity, AI agent and MLS hosting for a luxury real estate brand in Puerto Vallarta.', 
    tech: 'Wordpress, MLS Providers', 
    role: 'Project manager', 
    demo: 'https://www.google.com', 
    code: 'https://www.github.com', 
    component: Alpenglow },
  { id: 3, 
    client: 'HeyBots', 
    heading: 'Conversational AI', 
    color: 'blue', 
    image: '/assets/workImages/example3.png', 
    summary: 'Chatbots and AI agents as a white-label service that are trained on your data and quickly onboarded for any business.', 
    tech: 'ChatGPT, Kinsta', 
    role: 'Full stack developer', 
    demo: 'https://www.google.com', 
    code: 'https://www.github.com', 
    component: HeyBots },
  { id: 4, 
    client: 'E\-Cig Masters', 
    heading: 'Complicated B2B tax rules', 
    color: '#5CEBB9',
    color2: '#F7F3F8',
    image: '/assets/workImages/example2.png', 
    summary: 'Online catalogue with accurate inventory and complicated tax implications for a wholesale distributor to smoke shops and corner stores.', 
    tech: 'ManageMore, Wordpress', 
    role: 'Backend developer', 
    demo: 'https://www.google.com', 
    code: 'https://www.github.com', 
    component: ECigMasters },  
  { id: 5, 
    client: 'VallartaBnb', 
    heading: 'Zero-commission bookings', 
    image: '/assets/workImages/example6.png', 
    summary: 'Replica of AirBnb for homeowners in Mexico who want to circumvent popular booking site fees.', 
    tech: 'Bubble', 
    role: 'Project manager', 
    demo: 'https://www.google.com', 
    code: 'https://www.github.com', 
    component: VallartaBnb },
  { id: 6, 
    client: 'Solid Ground Construction', 
    heading: 'No more legal pad bids', 
    color: 'blue', 
    image: '/assets/workImages/example4.png', 
    summary: 'Utilized Google Suite to build a project pricing and bidding system for a General Contractor', 
    tech: 'Google Suite', 
    role: 'Full stack developer', 
    demo: 'https://www.google.com', 
    code: 'https://www.github.com', 
    component: SolidGroundConstruction  },
];

const WorkExamples1 = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Tracks currently opened accordion
  const contentRefs = useRef([]);          // Refs for content containers (used for height animation)
  const wrapperRefs = useRef([]);          // Refs for outer accordion wrapper (used for scroll)
  const innerContentRefs = useRef([]);     // Refs for scrollable inner content (bypass page scroll)
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const [headerShrunk, setHeaderShrunk] = useState(false); // New state for header shrink
  

  //   Saves Shrink Context to local variable
  const { shrinkFactor, setShrinkFactor } = useNavShrink(); // Get shrinkFactor value


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
      setShrinkFactor(0);
      setHeaderShrunk(false);
      return;
    }
    const el = innerContentRefs.current[activeIndex];
    if (!el) return;

    const onScroll = () => {
      if (el.scrollTop > 0) {
        
        const scrollTop = el.scrollTop;
        const maxScroll = 50; // Distance until full shrink (adjust as needed)
        
      const factor = Math.min(scrollTop / maxScroll, 1);
      
      // Apply easing for smoother progression
      const easedFactor = factor < 0.1 
        ? 2 * factor * factor 
        : 1 - Math.pow(-2 * factor + 2, 2) / 2;
      
      setShrinkFactor(easedFactor);
      setHeaderShrunk(true)
      } else {
        setHeaderShrunk(false);
      }
    };

    el.addEventListener('scroll', onScroll);

    // Init check
    onScroll();

    return () => {
      el.removeEventListener('scroll', onScroll);
     setShrinkFactor(0);
    };
  }, [activeIndex, setShrinkFactor]);

  // Collapse the accordion when the user scrolls to the bottom
useEffect(() => {
  if (activeIndex === null) return;

  const el = innerContentRefs.current[activeIndex];
  if (!el) return;

  const handleScrollToBottom = () => {
    const tolerance = 5; // buffer in pixels
    const scrolledToBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - tolerance;

    if (scrolledToBottom) {
      setTimeout(() => {
        setActiveIndex(null); // Collapse
        setHeaderShrunk(false);
       setShrinkFactor(0); // Reset shrink factor
      
    // Reset scroll position to top
      el.scrollTo({
        top: wrapperRefs.current[activeIndex].offsetTop - 100,
        behavior: 'smooth'
      });
    }, 850); // Slight delay for UX smoothness
    
    }
  };

  el.addEventListener('scroll', handleScrollToBottom);

  return () => {
    el.removeEventListener('scroll', handleScrollToBottom);
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
    } else {
      wrapperRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start',  }); // Align tab to top of viewport (useful with scroll-margin-top)
      // Delay state update to give scroll time to complete
      setTimeout(() => {
        setActiveIndex(index);
        // After expansion, set focus on inner content for accessibility
        setTimeout(() => { innerContentRefs.current[index]?.focus(); }, 50);
      }, 200); // Delay to allow DOM to update
    }
  };
  

  const getAccordionStyles = (isActive) => {
  if (!isActive) return {};
  
  const widthScale = 1 - (shrinkFactor * 0.05);
  const paddingScale = 1 - (shrinkFactor * 0.1);
  
  return {
    transform: `scale(${widthScale})`,
    transformOrigin: 'top center',
    paddingLeft: `${paddingScale * 2}rem`,
    paddingRight: `${paddingScale * 2}rem`
  };
};

  /**
 * Handles user scrolling into an accordion tab.
 * Expands width and height as user scrolls away from the top of the tab.
 */
// Add this function to calculate expansion styles
  const getExpansionStyles = (isActive) => {
    if (!isActive) return {};
    
    const expansion = shrinkFactor * 0.2; // 0-20% expansion
    return {
      width: `${100 + (expansion * 100)}%`,
      transform: `translateX(${-expansion * 10}%)`,
      transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
    };
  };

  return (
    <div id="work-examples" className={styles.workExamples}>
      <div className={styles.accordionContainer}>
        {accordionData.map((item, index) => {
          const isActive = activeIndex === item.id;
          return (
            <FadeInOnScroll>
            <div key={item.id} className={styles.accordionWrapper} ref={(el) => (wrapperRefs.current[index] = el)}>
              <div className={`${styles.accordionTab} ${styles.card} ${isActive ? styles.active : ''}`} onClick={() => handleAccordionClick(item.id)}>
                <div className={`${styles.tabLayout} ${isActive && headerShrunk ? styles.shrinkHeader : ''}`}>
                  <div className={styles.tabImageWrapper}>
                    <div className={styles.imageCardWrapper}
                    style={{ backgroundColor: item.color} }
                    >
                    <img src={item.image} alt={item.heading} className={styles.tabImageLarge} />
                    </div>
                  </div>
                  <div className={styles.tabDetails}>
                    <h3 className={styles.tabTitle}>{item.heading}<span style={{color: item.color2}}>.</span></h3>
                    <p className={styles.tabSummary}>{item.summary}</p>
                    <div className={styles.projectInfoBlock}>
                      <h4 className={styles.projectInfoLabel}>PROJECT INFO</h4>
                      <div className={styles.projectInfo}>
                        <div className={styles.infoRow}>
                          <span className={styles.infoLabel}>Client</span>
                          <span className={styles.infoValue}>{item.client}</span>
                        </div>
                        <div className={styles.infoRow}>
                          <span className={styles.infoLabel}>Tech</span>
                          <span className={styles.infoValue}>{item.tech}</span>
                        </div>
                        <div className={styles.infoRow}>
                          <span className={styles.infoLabel}>Role</span>
                          <span className={styles.infoValue}>{item.role}</span>
                        </div>
                      </div>
                    </div>

                    <div className={styles.projectLinks}>
                      <a href={item.demo} target="_blank" rel="noopener noreferrer" className={styles.projectButton} style={{borderColor: item.color2}}>Live Demo ↗</a>
                      <a href={item.code} target="_blank" rel="noopener noreferrer" className={styles.projectButton} style={{borderColor: item.color2}}>See the process 🐙</a>
                    </div>

                  </div>
                </div>
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className={`${styles.accordionContent} ${isActive ? styles.expanding : ''}`}
                  style={{ height: isActive ? `${contentRefs.current[index]?.scrollHeight}px` : '0px', ...getExpansionStyles(isActive) }}
                >
                  <div
                    className={styles.innerContent}
                    ref={(el) => (innerContentRefs.current[index] = el)}
                    tabIndex={-1}
                  >
                    {(() => {
                      const Comp = item.component;
                      return (
                        <Comp
                        // Pass all props needed in child components
                        color={item.color}
                        color2={item.color2}
                        />
                      )
                    })()}
                  </div>
                </div>
              </div>
            </div>
            </FadeInOnScroll>
          );
        })}
      </div>
    </div>
  );
}
export default WorkExamples1;