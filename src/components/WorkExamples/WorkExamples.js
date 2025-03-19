import React, { useRef, useState, useEffect, useContext, useCallback } from 'react';
import gsap from 'gsap';
import styles from './WorkExamples.module.css';
import ThemeContext from '../../contexts/ThemeContext';
import TextOnlyExample from './TextOnlyExample';
import ImageLeftExample from './ImageLeftExample';
import ImageRightExample from './ImageRightExample';

// TODO: the gallery and accordion need to be refactored through CSS

const WorkExamples = () => {
  const { theme } = useContext(ThemeContext);
  const [activeIndex, setActiveIndex] = useState(null);
  const galleryRef = useRef(null);
  const galleryItemsRef = useRef([]);
  const accordionRefs = useRef([]);

  let currentIndex = 0;
  let isHovering = false;
  
   // Wraps the gallery in an inifinite loop so that as you scroll past either edge, you return to the beginning or end respectively
   const scrollGallery = useCallback(
    (direction) => {
      // Checks to see if gallery ref is rendered before proceeding
      if (!galleryRef.current) return;
      const gallery = galleryRef.current;
      // Saves gallery items to a flat array
      const items = gsap.utils.toArray(`.${styles.galleryItem}`);

      const itemWidth = items[0].offsetWidth; // Get width of one item
      const totalWidth = items.length * itemWidth; // Get total width of all items

      // First parameter is the minimum number in the range of values that it wraps back to , second parameter is the array it wraps
      const wrapIndex = gsap.utils.wrap(0, items.length);
      // changes current index + or - 1 based on direction, and passes the index to wrapIndex. 
        // Returns the corresponding index from the wrapped array, so that the direction past current index gets added to the assigned edge
      currentIndex = wrapIndex(currentIndex + direction);

      // gsap.to(items, {
      //   duration: 0.5,
      //   ease: "power2.out",
      //   x: `+=${direction * items[0].offsetWidth}`,
      //   modifiers: {
      //     x: gsap.utils.unitize(x => parseFloat(x) % (items.length * items[0].offsetWidth))
      //   },
      // });


      // gsap.to(gallery, {
      //   x: () => -items[currentIndex].offsetLeft, // Moves to the selected item
      //   duration: 0.5,
      //   ease: "power2.out",
      //   modifiers: {
      //     x: (xValue) => {
      //       let newX = parseFloat(xValue);
  
      //       // Ensure that the items loop seamlessly
      //       if (newX <= -totalWidth) {
      //         newX += totalWidth; // Wrap forward
      //       } else if (newX >= 0) {
      //         newX -= totalWidth; // Wrap backward
      //       }
  
      //       return `${newX}px`; // GSAP will apply this new position
      //     },
      //   },
      // });

      // gsap.to(gallery, {
      //   x: () => -items[currentIndex].offsetLeft,
      //   duration: 0.5,
      //   ease: 'power2.out',
      //   modifiers: {
      //     x: gsap.utils.wrap(-items.length * items[0].offsetWidth, 0),
      //   },
      // });

      gsap.to(gallery, {
        x: -items[currentIndex].offsetLeft * 0.6,
        duration: 0.5,
        ease: 'power2.out',
      });

    },
    []
  );

  // const scrollGallery = useCallback(
  //   (direction) => {
  //     if (!galleryRef.current) return;
  //     const gallery = galleryRef.current;
  //     const items = gsap.utils.toArray(`.${styles.galleryItem}`);
  //     const itemWidth = items[0].offsetWidth;
  //     const totalWidth = items.length * itemWidth;
  
  //     gsap.to(gallery, {
  //       duration: 0.5,
  //       ease: "power2.out",
  //       x: `-=${direction * itemWidth}`, // Move left or right
  //       modifiers: {
  //         x: gsap.utils.unitize((x) => {
  //           let newX = parseFloat(x);
  //           if (newX <= -totalWidth) return `${newX + totalWidth}px`; // Loop forward
  //           if (newX >= 0) return `${newX - totalWidth}px`; // Loop backward
  //           return `${newX}px`; // Normal movement
  //         }),
  //       },
  //     });
  //   },
  //   []
  // );
  

  // TODO: Rebuild mouseMove function so that if the cursor is in either side third of the screen, 
  //        the gallery scrolls in that direction, otherwise it stops scrolling
  useEffect(() => {
    const gallery = galleryRef.current;
    console.log('galleryRef in useEffect', gallery)
    // Handles mouse hovering over the gallery
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
          x: `+=${scrollSpeed * 100}`, // Adjust for smooth scroll
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
    gsap.to(galleryItem, { scale: 1.5, x: 0, duration: 0.25 });
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
      className={`${styles.workExamples}`}
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