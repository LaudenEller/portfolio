import React, { useRef, useState, useEffect, useContext } from 'react';
import gsap from 'gsap';
import styles from './WorkExamples.module.css';
import ThemeContext from '../../contexts/ThemeContext';
import TextOnlyExample from './TextOnlyExample';
import ImageLeftExample from './ImageLeftExample';
import ImageRightExample from './ImageRightExample';

const WorkExamples = () => {
  const { theme } = useContext(ThemeContext);
  const [activeIndex, setActiveIndex] = useState(null); // Tracks the active accordion
  const galleryRef = useRef(null);
  const galleryItemsRef = useRef([]);
  const accordionRefs = useRef([]);

  useEffect(() => {
    const gallery = document.querySelector(`.${styles.gallery}`);
  
    // This code currently makes clones that don't open accordion sections when clicked
    // Function to clone first and last items
    const setupClones = () => {
      const items = Array.from(gallery.children);
      const firstItem = items[0];
      const lastItem = items[items.length - 1];
  
      // Clone first and last items
      const firstClone = firstItem.cloneNode(true);
      const lastClone = lastItem.cloneNode(true);
  
      // Add clones to the gallery
      gallery.appendChild(firstClone);
      gallery.insertBefore(lastClone, firstItem);
  
      // Set initial scroll position
      gallery.scrollLeft = lastItem.offsetWidth; // Start with the cloned last item
    };

    // Dynamic mouse-driven scrolling
    const handleMouseMove = (event) => {
        const { left, width } = gallery.getBoundingClientRect();
        const mouseX = event.clientX - left;
        const threshold = 100;
        const speedFactor = 0.2;
        let scrollSpeed = 0;
  
        if (mouseX < threshold) {
          scrollSpeed = -speedFactor * (threshold - mouseX);
        } else if (mouseX > width - threshold) {
          scrollSpeed = speedFactor * (mouseX - (width - threshold));
        }
  
        gallery.scrollLeft += scrollSpeed;
      };
  
    // Function to handle seamless looping
    const updateGallery = () => {
      const items = Array.from(gallery.children);
      const firstItem = items[0];
      const lastItem = items[items.length - 1];
      const scrollLeft = gallery.scrollLeft;
      const galleryWidth = gallery.scrollWidth - gallery.offsetWidth;
  
      if (scrollLeft <= 0) {
        // Jump to the cloned last item
        gallery.scrollLeft = galleryWidth - lastItem.offsetWidth;
      } else if (scrollLeft >= galleryWidth) {
        // Jump to the cloned first item
        gallery.scrollLeft = firstItem.offsetLeft;
      }
    };
  
    // Setup clones and event listeners
    setupClones();
    gallery.addEventListener('mousemove', handleMouseMove);
    gallery.addEventListener('scroll', updateGallery);
  
    return () => {
      // Cleanup event listeners
      gallery.removeEventListener('scroll', updateGallery);
      gallery.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // This useEffect is for cloning more than one gallery element at a time, 
    // it currently breaks the module but might work if further adapted
    
  // useEffect(() => {
  //   const gallery = document.querySelector(`.${styles.gallery}`);
  
  //   // Function to clone multiple items
  //   const setupClones = () => {
  //     const items = Array.from(gallery.children);
  //     const cloneCount = 2; // Number of items to clone from the start and end
  //     const clones = [];

  //     // Clone the first `cloneCount` items and last `cloneCount` items
  //     for (let i = 0; i < cloneCount; i++) {
  //       const firstClone = items[i].cloneNode(true);
  //       const lastClone = items[items.length - 1 - i].cloneNode(true);
  //       clones.push({ firstClone, lastClone });
  //     }

  //     // Append clones to the gallery
  //     clones.forEach(({ firstClone, lastClone }) => {
  //       gallery.appendChild(firstClone);
  //       gallery.insertBefore(lastClone, gallery.firstChild);
  //     });

  //     // Set initial scroll position to start after the cloned last items
  //     gallery.scrollLeft = cloneCount * items[0].offsetWidth;
  //   };

  //   // Dynamic mouse-driven scrolling
  //   const handleMouseMove = (event) => {
  //       const { left, width } = gallery.getBoundingClientRect();
  //       const mouseX = event.clientX - left;
  //       const threshold = 100;
  //       const speedFactor = 0.2;
  //       let scrollSpeed = 0;
  
  //       if (mouseX < threshold) {
  //         scrollSpeed = -speedFactor * (threshold - mouseX);
  //       } else if (mouseX > width - threshold) {
  //         scrollSpeed = speedFactor * (mouseX - (width - threshold));
  //       }
  
  //       gallery.scrollLeft += scrollSpeed;
  //     };
  
  //   // Function to handle seamless looping
  //   const updateGallery = () => {
  //     const items = Array.from(gallery.children);
  //     const cloneCount = 2; // Same number of clones as in `setupClones`
  //     const firstRealItem = items[cloneCount];
  //     const lastRealItem = items[items.length - 1 - cloneCount];
  //     const scrollLeft = gallery.scrollLeft;
  //     const galleryWidth = gallery.scrollWidth - gallery.offsetWidth;
  
  //     if (scrollLeft <= 0) {
  //       // Jump to the equivalent position for the original last items
  //       gallery.scrollLeft = galleryWidth - lastRealItem.offsetWidth * cloneCount;
  //     } else if (scrollLeft >= galleryWidth - cloneCount * firstRealItem.offsetWidth) {
  //       // Jump to the equivalent position for the original first items
  //       gallery.scrollLeft = cloneCount * firstRealItem.offsetWidth;
  //     }
  //   };
  
  //   // Setup clones and event listeners
  //   setupClones();
  //   gallery.addEventListener('mousemove', handleMouseMove);
  //   gallery.addEventListener('scroll', updateGallery);
  
  //   return () => {
  //     // Cleanup event listeners
  //     gallery.removeEventListener('scroll', updateGallery);
  //     gallery.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);


  const handleGalleryItemClick = (index) => {
    if (activeIndex === index) {
      closeAccordion(index);
    } else {
      openAccordion(index);
    }
  };
  
  const openAccordion = (index) => {
    setActiveIndex(index);

    // Center and enlarge the clicked item
    const galleryItem = galleryItemsRef.current[index];
    gsap.to(galleryItem, { scale: 1.5, x: 0, duration: 0.5 });
    galleryItemsRef.current.forEach((item, i) => {
      if (i !== index) {
        gsap.to(item, { scale: 0.8, opacity: 0.5, duration: 0.5 });
      }
    });

      // Accordion animation
      gsap.to(accordionRefs.current[index], {
        height: 'auto',
        opacity: 1,
        duration: 0.5,
        ease: 'power3.out',
      });
  };

  const closeAccordion = () => {
    setActiveIndex(null);

     // Close accordion
     accordionRefs.current.forEach((ref) => {
      gsap.to(ref, { height: 0, opacity: 0, duration: 0.5, ease: 'power3.in' });
    });
    // Reset gallery items
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
        return <ImageRightExample />;
        case 4:
        return <ImageRightExample />;
        case 5:
        return <ImageRightExample />;
      default:
        return null;
    }}
  };

  return (
    <div
      id="work-examples"
      className={`${styles.workExamples} ${theme === 'dark' ? styles.darkTheme : ''}`}
    >
      {/* Gallery Section */}
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