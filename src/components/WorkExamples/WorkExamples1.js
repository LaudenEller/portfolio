import React, { useRef, useState, useEffect, useContext, useCallback } from 'react';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import styles from './WorkExamples.module.css';
import ThemeContext from '../../contexts/ThemeContext';
import TextOnlyExample from './TextOnlyExample';
import ImageLeftExample from './ImageLeftExample';
import ImageRightExample from './ImageRightExample';
import MCafe from './MCafe';
import Alpenglow from './Alpenglow';
import HeyBots from './HeyBots';
import SolidGroundConstruction from './SolidGroundConstruction';
import NomadicVintageRugs from './NomadicVintageRugs';
import VallartaBnb from './VallartaBnb';
import ECigMasters from './ECigMasters';

const WorkExamples1 = () => {
  const { theme } = useContext(ThemeContext);
  const [activeIndex, setActiveIndex] = useState(null);
  const galleryContainerRef = useRef(null);
  const galleryRef = useRef(null);
  const galleryItemsRef = useRef([]);
  const accordionRefs = useRef([]);
  const [currentHeading, setCurrentHeading] = useState('');  // Store heading from child

  let currentIndex = 0;
  // let isHovering = false;
  
  // TODO: fix scroll gallery; this attempt jumps around like crazy and doesn't scroll smoothly while resetting the carousel
    //  to first and last positions instead of it being a never-ending loop
  // Wraps the gallery in an infinite loop for scrolling
  const scrollGallery = useCallback((direction) => {
      if (!galleryRef.current) return;
      const gallery = galleryRef.current;
      const items = gsap.utils.toArray(`.${styles.galleryItem}`);
      // const itemWidth = items[0].offsetWidth; // Width of one item
      // const totalWidth = items.length * itemWidth; // Total width of all items

      // Wrapping logic for infinite scrolling
      const wrapIndex = gsap.utils.wrap(0, items.length);
      currentIndex = wrapIndex(currentIndex + direction);

      const targetOffset = -items[currentIndex].offsetLeft;

      // Horizontal scroll animation with GSAP
      gsap.to(gallery, {
        // x: -items[currentIndex].offsetLeft * 0.6, // Move horizontally
        // x: -items[currentIndex].offsetLeft + (gallery.offsetWidth - itemWidth) / 2,
        x: targetOffset,
        duration: 0.5,
        ease: 'power2.out',
      });
    }, []);

  // TODO: fix gallery scroll, This attempt clones the first/last items and attaches them to the ends of the carousel causing
    //  the correct function when scrolling right and the entire carousel to break when scrolling left
  //   const scrollGallery = useCallback((direction) => {
  //     if (!galleryRef.current) return;
    
  //     const gallery = galleryRef.current;
  //     const items = gsap.utils.toArray(`.${styles.galleryItem}`);
  //     const itemWidth = items[0].offsetWidth;
    
  //     const firstItem = items[0];
  // const lastItem = items[items.length - 1];

  //     let duplicate;

  // // Duplicate the first or last item only when it's necessary
  // if (direction === 1) {
  //   // Move right, duplicate the first item at the end
  //   duplicate = firstItem.cloneNode(true);
  //   gallery.appendChild(duplicate); // Only append one duplicate
  // } else if (direction === -1) {
  //   // Move left, duplicate the last item at the start
  //   duplicate = lastItem.cloneNode(true);
  //   gallery.insertBefore(duplicate, firstItem); // Only prepend one duplicate
  // }
    
  //     // Calculate the target position for scrolling
  //     const targetOffset = -items[0].offsetLeft * (direction === 1 ? 1 : -1);
    
  //     // Animate the scroll with GSAP
  //     gsap.to(gallery, {
  //       x: targetOffset,
  //       duration: 0.5,
  //       ease: 'power2.out',
  //       onComplete: () => {
  //         // After the animation completes, reset the position without jump
  //         if (direction === 1) {
  //           gallery.appendChild(firstItem);
  //         } else if (direction === -1) {
  //             // Move left, duplicate the last item at the start
  //             gallery.insertBefore(lastItem, firstItem); // Only prepend one duplicate
  //           }
  //           // Remove the duplicate item after it’s no longer needed
  //     duplicate.remove();
  //       },
  //     });
  //   }, []);

  // // Mouse move to trigger hover scroll
  // // useEffect(() => {
  // //   const gallery = galleryRef.current;
  // //   const handleMouseMove = (event) => {
  // //     const { left, width } = gallery.getBoundingClientRect();
  // //     const mouseX = event.clientX - left;
  // //     const threshold = 100;
  // //     let scrollSpeed = 0;

  // //     if (mouseX < threshold) {
  // //       scrollSpeed = -0.5;
  // //     } else if (mouseX > width - threshold) {
  // //       scrollSpeed = 0.5;
  // //     }

  // //     if (!isHovering) {
  // //       isHovering = true;
  // //       gsap.to(gallery, {
  // //         x: `+=${scrollSpeed * 100}`, // Adjust for smooth scroll
  // //         duration: 0.3,
  // //         ease: 'power2.out',
  // //         repeat: -1,
  // //       });
  // //     }
  // //   };

  // //   const stopHoverScroll = () => {
  // //     isHovering = false;
  // //     gsap.killTweensOf(gallery);
  // //   };

  // //   gallery.addEventListener('mousemove', handleMouseMove);
  // //   gallery.addEventListener('mouseleave', stopHoverScroll);

  // //   return () => {
  // //     gallery.removeEventListener('mousemove', handleMouseMove);
  // //     gallery.removeEventListener('mouseleave', stopHoverScroll);
  // //   };
  // // }, []);

  // // Initialize GSAP Observer for scrolling
  // useEffect(() => {
  //   gsap.registerPlugin(Observer);
  //   const galleryContainer = galleryContainerRef.current;

  //   Observer.create({
  //     target: galleryContainer,
  //     type: "wheel,touch,pointer",
  //     onDown: () => scrollGallery(-1),
  //     onUp: () => scrollGallery(1),
  //     preventDefault: true
  //   });
  // }, );

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
  };

  const closeAccordion = () => {
    setActiveIndex(null);
    galleryItemsRef.current.forEach((item) => {
      gsap.to(item, { scale: 1, x: 0, opacity: 1, duration: 0.5 });
    });
  };

  const accordionData = [
    { id: 0, heading: "M Cafe", component: <MCafe /> },
    { id: 1, heading: "ECig Masters", component: <ECigMasters /> },
    { id: 2, heading: "Alpenglow", component: <Alpenglow /> },
    { id: 3, heading: "HeyBots", component: <HeyBots /> },
    { id: 4, heading: "Solid Ground Construction", component: <SolidGroundConstruction /> },
    { id: 5, heading: "Nomadic Vintage Rugs", component: <NomadicVintageRugs /> },
    { id: 6, heading: "Vallarta Bnb", component: <VallartaBnb /> }
  ];

  return (
    <div id="work-examples" className={styles.workExamples}>
      <div className={styles.galleryWrapper} ref={galleryContainerRef}>
        {/* <button className={styles.prevButton} onClick={() => scrollGallery(-1)}>←</button> */}
        <div ref={galleryRef} className={styles.gallery}>
          {accordionData.map((item) => (
            <div
              key={item.id}
              ref={(el) => (galleryItemsRef.current[item.id] = el)}
              className={styles.galleryItem}
              onClick={() => handleGalleryItemClick(item.id)}
            >
              <img src={`assets/workImages/example${item.id + 1}.png`} alt={`Example ${item.id + 1}`} />
              <p>{item.heading}</p>
            </div>
          ))}
        </div>
        {/* <button className={styles.nextButton} onClick={() => scrollGallery(1)}>→</button> */}
      </div>

 {/* Accordion Section */}
 <div className={styles.accordion}>
        {accordionData.map((item) => (
          <div
            key={item.id}
            className={`${styles.accordionTab} ${activeIndex === item.id ? styles.active : ''}`}
            onClick={() => handleGalleryItemClick(item.id)}
          >
            <p>{item.heading}</p> {/* Use the heading from the mapping */}
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

export default WorkExamples1;
