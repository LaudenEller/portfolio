import React, { useRef, useState, useEffect, useContext, useCallback } from 'react';
import gsap from 'gsap';
import styles from './WorkExamples.module.css';
import ThemeContext from '../../contexts/ThemeContext';
import TextOnlyExample from './TextOnlyExample';
import ImageLeftExample from './ImageLeftExample';
import ImageRightExample from './ImageRightExample';

// TODO: The gallery item images need to be resized and reformatted,
//  the gallery and accordion need to be refactored through CSS

const WorkExamples = () => {
  const { theme } = useContext(ThemeContext);
  const [activeIndex, setActiveIndex] = useState(null);
  const galleryRef = useRef(null);
  const galleryItemsRef = useRef([]);
  const accordionRefs = useRef([]);

  let currentIndex = 0;
  let isHovering = false;

   // Wraps the gallery in an inifinite loop so that as you scroll past either edge, you return to the beginning or end respectively
    // TODO: The esample images have to be resized to fit in the gallery item image slots
   const scrollGallery = useCallback(
    (direction) => {
      // Checks to see if gallery ref is rendered before proceeding
      if (!galleryRef.current) return;
      const gallery = galleryRef.current;
      // Saves gallery items to a flat array
      const items = gsap.utils.toArray(`.${styles.galleryItem}`);
      // First parameter is the minimum number in the range of values that it wraps back to , second parameter is the array it wraps
      const wrapIndex = gsap.utils.wrap(0, items.length);
      // changes current index + or - 1 based on direction, and passes the index to wrapIndex. 
        // Returns the corresponding index from the wrapped array, so that the direction past current index gets added to the assigned edge
      currentIndex = wrapIndex(currentIndex + direction);
      gsap.to(gallery, {
        x: -items[currentIndex].offsetLeft,
        duration: 0.5,
        ease: 'power2.out',
      });
    },
    []
  );

  useEffect(() => {
    const gallery = galleryRef.current;

    // Handles mouse hovering over the gallery
      // TODO: Correct the sizes of the gallery item images so that they're getting rendered to the DOM and test if the hovering works
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
        case 6:
          return <TextOnlyExample />;
        case 7:
          return <ImageLeftExample />;
        case 8:
          return <ImageRightExample />;
        case 9:
          return <TextOnlyExample />;
        case 10:
          return <ImageLeftExample />;
          case 11:
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
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((index) => (
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