import React, { useRef, useState, useEffect, useContext } from 'react';
import gsap from 'gsap';
import styles from './WorkExamples.module.css';
import ThemeContext from '../../contexts/ThemeContext';
import TextOnlyExample from './TextOnlyExample';
import ImageLeftExample from './ImageLeftExample';
import ImageRightExample from './ImageRightExample';

const WorkExamples = () => {
  const { theme } = useContext(ThemeContext);
  const [activeIndex, setActiveIndex] = useState(null);
  const galleryRef = useRef(null);
  const galleryItemsRef = useRef([]);
  const accordionRefs = useRef([]);

  useEffect(() => {
    const gallery = galleryRef.current;
    const items = gsap.utils.toArray(`.${styles.galleryItem}`);

    // ✅ Use GSAP wrap to enable infinite looping
    const wrapIndex = gsap.utils.wrap(0, items.length);

    let currentIndex = 0;
    let isHovering = false;

    const scrollGallery = (direction) => {
      currentIndex = wrapIndex(currentIndex + direction);
      gsap.to(gallery, {
        x: -items[currentIndex].offsetLeft,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    // ✅ Button-based navigation
    const handlePrevClick = () => scrollGallery(-1);
    const handleNextClick = () => scrollGallery(1);

    // ✅ Mouse hover scrolling logic
    const handleMouseMove = (event) => {
      const { left, width } = gallery.getBoundingClientRect();
      const mouseX = event.clientX - left;
      const threshold = 100;
      let scrollSpeed = 0;

      if (mouseX < threshold) {
        scrollSpeed = -0.5;
      } else if (mouseX > width - threshold) {
        scrollSpeed = 0.5;
      }

      if (!isHovering) {
        isHovering = true;
        gsap.to(gallery, {
          x: `+=${scrollSpeed * 50}`, // Adjust for smooth scroll
          duration: 0.3,
          ease: 'power2.out',
          repeat: -1,
        });
      }
    };

    const stopHoverScroll = () => {
      isHovering = false;
      gsap.killTweensOf(gallery);
    };

    gallery.addEventListener('mousemove', handleMouseMove);
    gallery.addEventListener('mouseleave', stopHoverScroll);

    return () => {
      gallery.removeEventListener('mousemove', handleMouseMove);
      gallery.removeEventListener('mouseleave', stopHoverScroll);
    };
  }, []);

  const handleGalleryItemClick = (index) => {
    if (activeIndex === index) {
      closeAccordion(index);
    } else {
      openAccordion(index);
    }
  };

  const openAccordion = (index) => {
    setActiveIndex(index);
    const galleryItem = galleryItemsRef.current[index];
    gsap.to(galleryItem, { scale: 1.5, x: 0, duration: 0.5 });
    galleryItemsRef.current.forEach((item, i) => {
      if (i !== index) {
        gsap.to(item, { scale: 0.8, opacity: 0.5, duration: 0.5 });
      }
    });
    gsap.to(accordionRefs.current[index], {
      height: 'auto',
      opacity: 1,
      duration: 0.5,
      ease: 'power3.out',
    });
  };

  const closeAccordion = () => {
    setActiveIndex(null);
    accordionRefs.current.forEach((ref) => {
      gsap.to(ref, { height: 0, opacity: 0, duration: 0.5, ease: 'power3.in' });
    });
    galleryItemsRef.current.forEach((item) => {
      gsap.to(item, { scale: 1, opacity: 1, duration: 0.5 });
    });
  };

  const renderAccordionContent = (index) => {
    if (activeIndex === index) {
      switch (index) {
        case 0:
          return <TextOnlyExample />;
        case 1:
          return <ImageLeftExample />;
        case 2:
          return <ImageRightExample />;
        case 3:
          return <TextOnlyExample />;
        case 4:
          return <ImageLeftExample />;
        case 5:
          return <ImageRightExample />;
        default:
          return null;
      }
    }
  };

  return (
    <div
      id="work-examples"
      className={`${styles.workExamples} ${theme === 'dark' ? styles.darkTheme : ''}`}
    >
      <div className={styles.galleryWrapper}>
        <button className={styles.prevButton} onClick={() => scrollGallery(-1)}>←</button>
        <div ref={galleryRef} className={styles.gallery}>
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              ref={(el) => (galleryItemsRef.current[index] = el)}
              className={styles.galleryItem}
              onClick={() => handleGalleryItemClick(index)}
            >
              <img src={`assets/workImages/example${index + 1}.png`} alt={`Example ${index + 1}`} />
              <p>Example {index + 1}</p>
            </div>
          ))}
        </div>
        <button className={styles.nextButton} onClick={() => scrollGallery(1)}>→</button>
      </div>

      {/* Accordion Section */}
      <div className={styles.accordion}>
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <div
            key={index}
            className={`${styles.accordionTab} ${activeIndex === index ? styles.active : ''}`}
            onClick={() => handleGalleryItemClick(index)}
          >
            <p>Tab {index + 1}</p>
            <div
              ref={(el) => (accordionRefs.current[index] = el)}
              className={styles.accordionContent}
              style={{ height: activeIndex === index ? 'auto' : 0 }}
            >
              {renderAccordionContent(index)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExamples;


// import React, { useRef, useState, useEffect, useContext } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import styles from './WorkExamples.module.css';
// import ThemeContext from '../../contexts/ThemeContext';
// import TextOnlyExample from './TextOnlyExample';
// import ImageLeftExample from './ImageLeftExample';
// import ImageRightExample from './ImageRightExample';

// gsap.registerPlugin(ScrollTrigger);

// const WorkExamples = () => {
//   const { theme } = useContext(ThemeContext);
//   const [activeIndex, setActiveIndex] = useState(null);
//   const galleryRef = useRef(null);
//   const galleryItemsRef = useRef([]);
//   const sectionRef = useRef(null);
  
//   useEffect(() => {
//     const gallery = galleryRef.current;
//     if (!gallery) return;

//     // Enable GSAP ScrollTrigger only when the section is in view
//     ScrollTrigger.create({
//       trigger: sectionRef.current,
//       start: "top 80%", // Start animation when 80% of the section is in view
//       end: "bottom 20%", // End when 20% is left
//       onEnter: () => enableGalleryScrolling(),
//       onLeaveBack: () => disableGalleryScrolling(),
//     });

//     const enableGalleryScrolling = () => {
//       gallery.addEventListener("mousemove", handleMouseMove);
//     };

//     const disableGalleryScrolling = () => {
//       gallery.removeEventListener("mousemove", handleMouseMove);
//     };

//     // Handles smooth horizontal scrolling on mouse hover
//     const handleMouseMove = (event) => {
//       const { left, width } = gallery.getBoundingClientRect();
//       const mouseX = event.clientX - left;
//       const threshold = width * 0.3; // Activate scroll when cursor is in the left or right 30% of the gallery
//       const speedFactor = 0.2;
//       let scrollSpeed = 0;

//       if (mouseX < threshold) {
//         scrollSpeed = -speedFactor * (threshold - mouseX);
//       } else if (mouseX > width - threshold) {
//         scrollSpeed = speedFactor * (mouseX - (width - threshold));
//       }

//       gallery.scrollLeft += scrollSpeed;
//     };

//     return () => {
//       disableGalleryScrolling(); // Cleanup when unmounting
//     };
//   }, []);

//   const handleGalleryItemClick = (index) => {
//     if (activeIndex === index) {
//       closeAccordion();
//     } else {
//       openAccordion(index);
//     }
//   };

//   const openAccordion = (index) => {
//     setActiveIndex(index);
//     gsap.to(galleryItemsRef.current[index], { scale: 1.5, x: 0, duration: 0.5 });
//     galleryItemsRef.current.forEach((item, i) => {
//       if (i !== index) {
//         gsap.to(item, { scale: 0.8, opacity: 0.5, duration: 0.5 });
//       }
//     });
//   };

//   const closeAccordion = () => {
//     setActiveIndex(null);
//     galleryItemsRef.current.forEach((item) => {
//       gsap.to(item, { scale: 1, opacity: 1, duration: 0.5 });
//     });
//   };

//   const renderAccordionContent = (index) => {
//     if (activeIndex === index) {
//       switch (index) {
//         case 0:
//           return <TextOnlyExample />;
//         case 1:
//           return <ImageLeftExample />;
//         case 2:
//           return <ImageRightExample />;
//         case 3:
//           return <TextOnlyExample />;
//         case 4:
//           return <ImageLeftExample />;
//         case 5:
//           return <ImageRightExample />;
//         default:
//           return null;
//       }
//     }
//   };

//   return (
//     <div
//       id="work-examples"
//       className={`${styles.workExamples} ${theme === 'dark' ? styles.darkTheme : ''}`}
//       ref={sectionRef} // Attach ref to section
//     >
//       {/* Gallery Section */}
//       <div ref={galleryRef} className={styles.gallery}>
//         {[0, 1, 2, 3, 4, 5].map((index) => (
//           <div
//             key={index}
//             ref={(el) => (galleryItemsRef.current[index] = el)}
//             className={styles.galleryItem}
//             onClick={() => handleGalleryItemClick(index)}
//           >
//             <img src={`assets/workImages/example${index + 1}.png`} alt={`Example ${index + 1}`} />
//             <p>Example {index + 1}</p>
//           </div>
//         ))}
//       </div>

//       {/* Accordion Section */}
//       <div className={styles.accordion}>
//         {[0, 1, 2, 3, 4, 5].map((index) => (
//           <div
//             key={index}
//             className={`${styles.accordionTab} ${activeIndex === index ? styles.active : ''}`}
//             onClick={() => handleGalleryItemClick(index)}
//           >
//             <p>Tab {index + 1}</p>
//             <div
//               className={styles.accordionContent}
//               style={{ height: activeIndex === index ? 'auto' : 0 }}
//             >
//               {renderAccordionContent(index)}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WorkExamples;

// // This doesn't work really at all

// import React, { useRef, useState, useContext, useEffect } from 'react';
// import gsap from 'gsap';
// import styles from './WorkExamples.module.css';
// import ThemeContext from '../../contexts/ThemeContext';
// import TextOnlyExample from './TextOnlyExample';
// import ImageLeftExample from './ImageLeftExample';
// import ImageRightExample from './ImageRightExample';

// const WorkExamples = () => {
//   const { theme } = useContext(ThemeContext);
//   const [activeIndex, setActiveIndex] = useState(null); // Tracks the active accordion
//   const galleryRef = useRef(null);
//   const galleryItemsRef = useRef([]);
//   const accordionRefs = useRef([]);
//   const scrollTween = useRef(null);
  
//   const itemWidth = 200; // Adjust to match the actual width of your gallery items
//   const scrollSpeed = itemWidth; // Distance scrolled per click
//   const totalItems = 10; // Adjust based on total gallery items

//   useEffect(() => {
//     const gallery = galleryRef.current;
//     if (!gallery) return;

//     // Set initial scroll position to center
//     const centerIndex = Math.floor(totalItems / 2);
//     gallery.scrollLeft = centerIndex * itemWidth;

//   }, []);

//   // Scroll left
//   const handleScrollLeft = () => {
//     const gallery = galleryRef.current;
//     if (!gallery) return;

//     gsap.to(gallery, {
//       scrollLeft: `-=${scrollSpeed}`,
//       duration: 0.5,
//       ease: "power2.out",
//       onComplete: () => {
//         if (gallery.scrollLeft <= 0) {
//           // Loop to the last item
//           gallery.scrollLeft = totalItems * itemWidth;
//         }
//       },
//     });
//   };

//   // Scroll right
//   const handleScrollRight = () => {
//     const gallery = galleryRef.current;
//     if (!gallery) return;

//     gsap.to(gallery, {
//       scrollLeft: `+=${scrollSpeed}`,
//       duration: 0.5,
//       ease: "power2.out",
//       onComplete: () => {
//         if (gallery.scrollLeft >= totalItems * itemWidth) {
//           // Loop back to first item
//           gallery.scrollLeft = 0;
//         }
//       },
//     });
//   };

//   // Center clicked item
//   const handleGalleryItemClick = (index) => {
//     if (activeIndex === index) {
//       closeAccordion();
//     } else {
//       openAccordion(index);
//     }
//   };

//   const openAccordion = (index) => {
//     setActiveIndex(index);
//     const galleryItem = galleryItemsRef.current[index];
//     const gallery = galleryRef.current;
//     const containerWidth = gallery.offsetWidth;
//     const itemWidth = galleryItem.offsetWidth;
//     const scrollTarget = galleryItem.offsetLeft - containerWidth / 2 + itemWidth / 2;

//     gsap.to(gallery, { scrollLeft: scrollTarget, duration: 0.6, ease: "power2.out" });

//     gsap.to(galleryItem, { scale: 1.25, duration: 0.25 });
//     galleryItemsRef.current.forEach((item, i) => {
//       if (i !== index) {
//         gsap.to(item, { scale: 0.8, opacity: 0.5, duration: 0.5 });
//       }
//     });

//     gsap.to(accordionRefs.current[index], { height: 'auto', opacity: 1, duration: 0.5, ease: 'power3.out' });
//   };

//   const closeAccordion = () => {
//     setActiveIndex(null);

//     accordionRefs.current.forEach((ref) => {
//       gsap.to(ref, { height: 0, opacity: 0, duration: 0.5, ease: 'power3.in' });
//     });

//     galleryItemsRef.current.forEach((item) => {
//       gsap.to(item, { scale: 1, opacity: 1, duration: 0.5 });
//     });
//   };

//   const renderAccordionContent = (index) => {
//     if (activeIndex === index) {
//       switch (index) {
//         case 0:
//           return <TextOnlyExample />;
//         case 1:
//           return <ImageLeftExample />;
//         case 2:
//           return <ImageRightExample />;
//         case 3:
//           return <TextOnlyExample />;
//         case 4:
//           return <ImageLeftExample />;
//         case 5:
//           return <ImageRightExample />;
//         case 6:
//           return <ImageRightExample />;
//         case 7:
//           return <ImageRightExample />;
//         case 8:
//           return <ImageRightExample />;
//         case 9:
//           return <ImageRightExample />;
//         default:
//           return null;
//       }
//     }
//   };

//   return (
//     <div id="work-examples" className={`${styles.workExamples} ${theme === 'dark' ? styles.darkTheme : ''}`}>
      
//       {/* Gallery Section */}
//       <div className={styles.galleryWrapper}>
//         <button className={styles.scrollButton} onClick={handleScrollLeft}>{"<"}</button>
        
//         <div ref={galleryRef} className={styles.gallery}>
//           {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
//             <div
//               key={index}
//               ref={(el) => (galleryItemsRef.current[index] = el)}
//               className={styles.galleryItem}
//               onClick={() => handleGalleryItemClick(index)}
//             >
//               <img src={`assets/workImages/example${index + 1}.png`} alt={`Example ${index + 1}`} />
//               <p>Example {index + 1}</p>
//             </div>
//           ))}
//         </div>

//         <button className={styles.scrollButton} onClick={handleScrollRight}>{">"}</button>
//       </div>

//       {/* Accordion Section */}
//       <div className={styles.accordion}>
//         {[0, 1, 2, 3, 4, 5].map((index) => (
//           <div
//             key={index}
//             className={`${styles.accordionTab} ${activeIndex === index ? styles.active : ''}`}
//             onClick={() => handleGalleryItemClick(index)}
//           >
//             <p>Tab {index + 1}</p>
//             <div
//               ref={(el) => (accordionRefs.current[index] = el)}
//               className={styles.accordionContent}
//               style={{ height: activeIndex === index ? 'auto' : 0 }}
//             >
//               {renderAccordionContent(index)}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WorkExamples;




// import React, { useRef, useState, useEffect, useContext } from 'react';
// import gsap from 'gsap';
// import styles from './WorkExamples.module.css';
// import ThemeContext from '../../contexts/ThemeContext';
// import TextOnlyExample from './TextOnlyExample';
// import ImageLeftExample from './ImageLeftExample';
// import ImageRightExample from './ImageRightExample';

// const WorkExamples = () => {
//   const { theme } = useContext(ThemeContext);
//   const [activeIndex, setActiveIndex] = useState(null); // Tracks the active accordion
//   const galleryRef = useRef(null);
//   const galleryItemsRef = useRef([]);
//   const accordionRefs = useRef([]);
//   const animationRef = useRef(null);

//   useEffect(() => {
//     const gallery = galleryRef.current;
//     if (!gallery) return;

//     let scrollSpeed = 0;

//     // Function to smoothly animate the scrolling
//     const animateScroll = () => {
//       if (scrollSpeed !== 0) {
//         gsap.to(gallery, {
//           scrollLeft: `+=${scrollSpeed}`,
//           duration: 0.1,
//           ease: "power1.out",
//         });
//         animationRef.current = requestAnimationFrame(animateScroll);
//       }
//     };

//     // Handle mouse movement over the gallery
//     const handleMouseMove = (event) => {
//       const { left, width } = gallery.getBoundingClientRect();
//       const mouseX = event.clientX - left;
//       const center = width / 2;
//       const maxSpeed = 2.5; // Max scrolling speed

//       if (mouseX < center - 50) {
//         // Mouse on the left side
//         scrollSpeed = -maxSpeed * ((center - mouseX) / center);
//       } else if (mouseX > center + 50) {
//         // Mouse on the right side
//         scrollSpeed = maxSpeed * ((mouseX - center) / center);
//       } else {
//         scrollSpeed = 0;
//       }

//       if (!animationRef.current) {
//         animationRef.current = requestAnimationFrame(animateScroll);
//       }
//     };

//     // Stop scrolling when the mouse leaves the gallery
//     const stopScrolling = () => {
//       scrollSpeed = 0;
//       cancelAnimationFrame(animationRef.current);
//       animationRef.current = null;
//     };

//     gallery.addEventListener("mousemove", handleMouseMove);
//     gallery.addEventListener("mouseleave", stopScrolling);

//     return () => {
//       gallery.removeEventListener("mousemove", handleMouseMove);
//       gallery.removeEventListener("mouseleave", stopScrolling);
//       cancelAnimationFrame(animationRef.current);
//     };
//   }, []);

//   const handleGalleryItemClick = (index) => {
//     if (activeIndex === index) {
//       closeAccordion(index);
//     } else {
//       openAccordion(index);
//     }
//   };

//   const openAccordion = (index) => {
//     setActiveIndex(index);

//     // Center and enlarge the clicked item
//     const galleryItem = galleryItemsRef.current[index];
//     gsap.to(galleryItem, { scale: 1.5, x: 0, duration: 0.5 });
//     galleryItemsRef.current.forEach((item, i) => {
//       if (i !== index) {
//         gsap.to(item, { scale: 0.8, opacity: 0.5, duration: 0.5 });
//       }
//     });

//     // Accordion animation
//     gsap.to(accordionRefs.current[index], {
//       height: 'auto',
//       opacity: 1,
//       duration: 0.5,
//       ease: 'power3.out',
//     });
//   };

//   const closeAccordion = () => {
//     setActiveIndex(null);

//     // Close accordion
//     accordionRefs.current.forEach((ref) => {
//       gsap.to(ref, { height: 0, opacity: 0, duration: 0.5, ease: 'power3.in' });
//     });

//     // Reset gallery items
//     galleryItemsRef.current.forEach((item) => {
//       gsap.to(item, { scale: 1, opacity: 1, duration: 0.5 });
//     });
//   };

//   const renderAccordionContent = (index) => {
//     if (activeIndex === index) {
//       switch (index) {
//         case 0:
//           return <TextOnlyExample />;
//         case 1:
//           return <ImageLeftExample />;
//         case 2:
//           return <ImageRightExample />;
//         case 3:
//           return <TextOnlyExample />;
//         case 4:
//           return <ImageLeftExample />;
//         case 5:
//           return <ImageRightExample />;
//         default:
//           return null;
//       }
//     }
//   };

//   return (
//     <div
//       id="work-examples"
//       className={`${styles.workExamples} ${theme === 'dark' ? styles.darkTheme : ''}`}
//     >
//       {/* Gallery Section */}
//       <div ref={galleryRef} className={styles.gallery}>
//         {[0, 1, 2, 3, 4, 5].map((index) => (
//           <div
//             key={index}
//             ref={(el) => (galleryItemsRef.current[index] = el)}
//             className={styles.galleryItem}
//             onClick={() => handleGalleryItemClick(index)}
//           >
//             <img src={`assets/workImages/example${index + 1}.png`} alt={`Example ${index + 1}`} />
//             <p>Example {index + 1}</p>
//           </div>
//         ))}
//       </div>

//       {/* Accordion Section */}
//       <div className={styles.accordion}>
//         {[0, 1, 2, 3, 4, 5].map((index) => (
//           <div
//             key={index}
//             className={`${styles.accordionTab} ${activeIndex === index ? styles.active : ''}`}
//             onClick={() => handleGalleryItemClick(index)}
//           >
//             <p>Tab {index + 1}</p>
//             <div
//               ref={(el) => (accordionRefs.current[index] = el)}
//               className={styles.accordionContent}
//               style={{ height: activeIndex === index ? 'auto' : 0 }}
//             >
//               {renderAccordionContent(index)}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WorkExamples;

// import React, { useRef, useState, useEffect, useContext } from 'react';
// import gsap from 'gsap';
// import styles from './WorkExamples.module.css';
// import ThemeContext from '../../contexts/ThemeContext';
// import TextOnlyExample from './TextOnlyExample';
// import ImageLeftExample from './ImageLeftExample';
// import ImageRightExample from './ImageRightExample';

// const WorkExamples = () => {
//   const { theme } = useContext(ThemeContext);
//   const [activeIndex, setActiveIndex] = useState(null); // Tracks the active accordion
//   const galleryRef = useRef(null);
//   const galleryItemsRef = useRef([]);
//   const accordionRefs = useRef([]);

//   useEffect(() => {
//     const gallery = document.querySelector(`.${styles.gallery}`);
  
//     // Cloning nodes might not work with scrolling upwards and downwards...

//     // This code currently makes clones that don't open accordion sections when clicked
    
//     // Function to clone first and last items
//     const setupClones = () => {
//       const items = Array.from(gallery.children);
//       const firstItem = items[0];
//       const lastItem = items[items.length - 1];
//       const cloneCount = 2; // Clone 2 items from each end for smooth looping
  
//       // // Clone first and last items
//       // const firstClone = firstItem.cloneNode(true);
//       // const lastClone = lastItem.cloneNode(true);

//       // Clone first and last items
//     const clonesStart = items.slice(0, cloneCount).map(item => item.cloneNode(true));
//     const clonesEnd = items.slice(-cloneCount).map(item => item.cloneNode(true));

//       // Add step to connect first and last clones to the associated ref

//       // // Add clones to the gallery
//       // gallery.appendChild(firstClone);
//       // gallery.insertBefore(lastClone, firstItem);
      
//        // Append clones to the gallery
//     clonesEnd.forEach(clone => gallery.insertBefore(clone, gallery.firstChild));
//     clonesStart.forEach(clone => gallery.appendChild(clone));

//       // Change this step to scroll upwards and downwards, not restart
//       // Set initial scroll position
//       gallery.scrollLeft = lastItem.offsetWidth; // Start with the cloned last item
//     };

//     // Dynamic mouse-driven scrolling
//     // TODO rewrite this gallery scrolling function to revolve right when mouse is on right side of screen, not chase after the cursor
//     const handleMouseMove = (event) => {
//         // left & width are integers of gallery position
//         const { left, width } = gallery.getBoundingClientRect();
//         // mouseX = integer of mouse position minus left-side coordinates of gallery
//         const mouseX = event.clientX - left;
//         const threshold = 100;
//         const speedFactor = 0.2;
//         let scrollSpeed = 0;

//         // if mouse position minus any padding etc is less than 100
//         if (mouseX < threshold) {
//           // scrollSpeed slows at a pace equal to 100 minus mouse position, 
//           scrollSpeed = -speedFactor * (threshold - mouseX);
//         // if mouse position minus padding etc is greater than the width of the gallery minus 100
//         } else if (mouseX > width - threshold) {
//           // scrollSpeed is an integer equal to mouse position minus the width of the gallery minus 100
//           scrollSpeed = speedFactor * (mouseX - (width - threshold));
//         }
  
//         gallery.scrollLeft += scrollSpeed;
//       };
  
//     // Function to handle seamless looping
//     const updateGallery = () => {
//       const items = Array.from(gallery.children);
//       const firstItem = items[0];
//       const lastItem = items[items.length - 1];
//       const scrollLeft = gallery.scrollLeft;
//       const galleryWidth = gallery.scrollWidth - gallery.offsetWidth;
  
//       if (scrollLeft <= 0) {
//         // Jump to the cloned last item
//         gallery.scrollLeft = galleryWidth - lastItem.offsetWidth;
//       } else if (scrollLeft >= galleryWidth) {
//         // Jump to the cloned first item
//         gallery.scrollLeft = firstItem.offsetLeft;
//       }
//     };
  
//     // Setup clones and event listeners
//     setupClones();

//     gallery.addEventListener('mousemove', handleMouseMove);
//     gallery.addEventListener('scroll', updateGallery);
  
//     return () => {
//       // Cleanup event listeners
//       gallery.removeEventListener('scroll', updateGallery);
//       gallery.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   // This useEffect is for cloning more than one gallery element at a time, 
//     // it currently breaks the module but might work if further adapted
    
//   // useEffect(() => {
//   //   const gallery = document.querySelector(`.${styles.gallery}`);
  
//   //   // Function to clone multiple items
//   //   const setupClones = () => {
//   //     const items = Array.from(gallery.children);
//   //     const cloneCount = 2; // Number of items to clone from the start and end
//   //     const clones = [];

//   //     // Clone the first `cloneCount` items and last `cloneCount` items
//   //     for (let i = 0; i < cloneCount; i++) {
//   //       const firstClone = items[i].cloneNode(true);
//   //       const lastClone = items[items.length - 1 - i].cloneNode(true);
//   //       clones.push({ firstClone, lastClone });
//   //     }

//   //     // Append clones to the gallery
//   //     clones.forEach(({ firstClone, lastClone }) => {
//   //       gallery.appendChild(firstClone);
//   //       gallery.insertBefore(lastClone, gallery.firstChild);
//   //     });

//   //     // Set initial scroll position to start after the cloned last items
//   //     gallery.scrollLeft = cloneCount * items[0].offsetWidth;
//   //   };

//   //   // Dynamic mouse-driven scrolling
//   //   const handleMouseMove = (event) => {
//   //       const { left, width } = gallery.getBoundingClientRect();
//   //       const mouseX = event.clientX - left;
//   //       const threshold = 100;
//   //       const speedFactor = 0.2;
//   //       let scrollSpeed = 0;
  
//   //       if (mouseX < threshold) {
//   //         scrollSpeed = -speedFactor * (threshold - mouseX);
//   //       } else if (mouseX > width - threshold) {
//   //         scrollSpeed = speedFactor * (mouseX - (width - threshold));
//   //       }
  
//   //       gallery.scrollLeft += scrollSpeed;
//   //     };
  
//   //   // Function to handle seamless looping
//   //   const updateGallery = () => {
//   //     const items = Array.from(gallery.children);
//   //     const cloneCount = 2; // Same number of clones as in `setupClones`
//   //     const firstRealItem = items[cloneCount];
//   //     const lastRealItem = items[items.length - 1 - cloneCount];
//   //     const scrollLeft = gallery.scrollLeft;
//   //     const galleryWidth = gallery.scrollWidth - gallery.offsetWidth;
  
//   //     if (scrollLeft <= 0) {
//   //       // Jump to the equivalent position for the original last items
//   //       gallery.scrollLeft = galleryWidth - lastRealItem.offsetWidth * cloneCount;
//   //     } else if (scrollLeft >= galleryWidth - cloneCount * firstRealItem.offsetWidth) {
//   //       // Jump to the equivalent position for the original first items
//   //       gallery.scrollLeft = cloneCount * firstRealItem.offsetWidth;
//   //     }
//   //   };
  
//   //   // Setup clones and event listeners
//   //   setupClones();
//   //   gallery.addEventListener('mousemove', handleMouseMove);
//   //   gallery.addEventListener('scroll', updateGallery);
  
//   //   return () => {
//   //     // Cleanup event listeners
//   //     gallery.removeEventListener('scroll', updateGallery);
//   //     gallery.removeEventListener('mousemove', handleMouseMove);
//   //   };
//   // }, []);


//   const handleGalleryItemClick = (index) => {
//     if (activeIndex === index) {
//       closeAccordion(index);
//     } else {
//       openAccordion(index);
//     }
//   };
  
//   const openAccordion = (index) => {
//     setActiveIndex(index);

//     // Center and enlarge the clicked item
//     const galleryItem = galleryItemsRef.current[index];
//     gsap.to(galleryItem, { scale: 1.5, x: 0, duration: 0.5 });
//     galleryItemsRef.current.forEach((item, i) => {
//       if (i !== index) {
//         gsap.to(item, { scale: 0.8, opacity: 0.5, duration: 0.5 });
//       }
//     });

//       // Accordion animation
//       gsap.to(accordionRefs.current[index], {
//         height: 'auto',
//         opacity: 1,
//         duration: 0.5,
//         ease: 'power3.out',
//       });
//   };

//   const closeAccordion = () => {
//     setActiveIndex(null);

//      // Close accordion
//      accordionRefs.current.forEach((ref) => {
//       gsap.to(ref, { height: 0, opacity: 0, duration: 0.5, ease: 'power3.in' });
//     });
//     // Reset gallery items
//     galleryItemsRef.current.forEach((item) => {
//       gsap.to(item, { scale: 1, opacity: 1, duration: 0.5 });
//     });
//   };

//   const renderAccordionContent = (index) => {
//    if (activeIndex === index) { 
//     switch (index) {
//       case 0:
//         return <TextOnlyExample />;
//       case 1:
//         return <ImageLeftExample />;
//       case 2:
//         return <ImageRightExample />;
//         case 3:
//         return <TextOnlyExample />;
//         case 4:
//         return <ImageLeftExample />;
//         case 5:
//         return <ImageRightExample />;
//       default:
//         return null;
//     }}
//   };

//   return (
//     <div
//       id="work-examples"
//       className={`${styles.workExamples} ${theme === 'dark' ? styles.darkTheme : ''}`}
//     >
//       {/* Gallery Section */}
//       <div ref={galleryRef} className={styles.gallery}>
//         {[0, 1, 2, 3, 4, 5].map((index) => (
//           <div
//             key={index}
//             ref={(el) => (galleryItemsRef.current[index] = el)}
//             className={styles.galleryItem}
//             onClick={() => handleGalleryItemClick(index)}
//           >
//             <img src={`assets/workImages/example${index + 1}.png`} alt={`Example ${index + 1}`} />
//             <p>Example {index + 1}</p>
//           </div>
//         ))}
//       </div>

//       {/* Accordion Section */}
//     <div className={styles.accordion}>
//       {[0, 1, 2, 3, 4, 5].map((index) => (
//      <div
//         key={index}
//         className={`${styles.accordionTab} ${activeIndex === index ? styles.active : ''}`}
//         onClick={() => handleGalleryItemClick(index)}
//       >
//         <p>Tab {index + 1}</p>
//         <div
//           ref={(el) => (accordionRefs.current[index] = el)}
//           className={styles.accordionContent}
//           style={{ height: activeIndex === index ? 'auto' : 0 }}
//         >
//           {renderAccordionContent(index)}
//         </div>
//       </div>
//       ))}
//     </div>
//   </div>
//   );
// };

// export default WorkExamples;