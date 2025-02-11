import React, { useRef, useState, useContext } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from './ProjectHighlights.module.css';
import PopUp from '../PopUps/PopUps';
import _gsap from 'gsap/gsap-core';
import { getPerceivedPositionWithGSAP } from '../../utils/PositionUtils';
import ThemeContext from '../../contexts/ThemeContext';

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const secondImageRef = useRef(null);
  const scrollBoxRef = useRef(null);
  const barRef = useRef(null);
  const introSectionRef = useRef(null);
  const { theme } = useContext(ThemeContext);
  const [PopUpProps, setPopUpProps] = useState({
    message: '',
    position: { top: 0, left: 0 },
    theme: theme,
    visible: false,
  });

  
  const handlePopUp = (e, content) => {

    // This is to find the transform value of the scrollbox done by gsap
    // const scrollBox = document.querySelector('.scrollBox');
    // const gsapY = gsap.getProperty(scrollBox, 'y');
    // console.log(`GSAP Transform Y: ${gsapY}`);

    // This is to find how much scrollable containers there are on the page as a whole
    // document.querySelectorAll('*').forEach((el) => {
    //   if (el.scrollHeight > el.clientHeight) {
    //     console.log('Scrollable container:', el);
    //   }
    // });
    // console.log(`Page height: ${document.body.scrollHeight}`);
  
    // This is the many attempts at finding the perceived location of the button when clicked, window.scrollY 
    // const buttonRect = e.target.getBoundingClientRect();
    const parent = e.target.offsetParent; // Get the transformed parent
    // const parentX = _gsap.getProperty(parent, "x") || 0; // GSAP x transform
    const parentY = _gsap.getProperty(parent, "y") || 0; // GSAP y transform
    // const containerScrollY = scrollBoxRef.current.scrollTop;
    // const containerScrollY = sectionRef.current.scrollTop;
    // const top = buttonRect.top + containerScrollY; // Adjust for scroll and parent transform
    // const left = buttonRect.left + window.scrollX + parentX + buttonRect.width / 2; // Center the box horizontally
    // console.log('scrollY', containerScrollY)
    // console.log('parent', parent)
    const position = getPerceivedPositionWithGSAP(e.target, scrollBoxRef.current);
    // const position = getPerceivedPositionWithGSAP(e.target, sectionRef.current);
    const buttonRect = e.target.getBoundingClientRect();
    const top = buttonRect.top; // Adjust for scroll position
    const t = barRef.bottom;
    const left = buttonRect.left + buttonRect.width / 2 + window.scrollX;
    const l = 500;
console.log('client top', top)
console.log('parent', parent)
console.log('l', l)
    // This utility function was supposed to get the correct perceived position of the button but it puts it very far from the actual spot becuase it accumulates all the scrollable area instead of offsetting it to find the corrrect scrollY
    // const perceivedPosition = getPerceivedPosition(e.target);

    setPopUpProps({
      content,
      position: { top, left },
      // position: { t, l },
      // position,
      theme: theme,
      visible: true,
    });
  };

  useGSAP(() => {
    // Intro Text Animation on Scroll
    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%",
        end: "top top",
        scrub: true,
      },
    }).fromTo(
      textRef.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: -20, duration: 0.5, ease: "power1.inOut" }
    );

    // Bar Width Animation on Scroll
    gsap.to(barRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top", // Animation begins when the section hits the top
        end: () => `+=${scrollBoxRef.current.scrollHeight + window.innerHeight}`,
        scrub: 1,
      },
      width: "60%", // Expands to full width
      ease: "power1.inOut",
    });

    // Section Pinning and Content Animation
    const pinTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${scrollBoxRef.current.scrollHeight + window.innerHeight * 1.25}`,
        pin: true,
        pinSpacing: true,
        // markers: true,
      },
    });

    // Left-side image animation
    pinTimeline.fromTo(
      imageRef.current,
      { opacity: 0, y: "100%", x: "50" },
      { opacity: 1, y: "-50", x: "50", duration: 1, ease: "none" },
      "0"
    );

    // TODO button module is getting messed up by this because it's making the parent element y value = -35 so the transform 
      // is messing up the window.scrollY value  and other calculations necessary to place the message box in relation
      // to the boundingclientrect from the button that's clicked
    // Right-side scroll box entrance animation
    pinTimeline.fromTo(
      scrollBoxRef.current,
      { opacity: 0, y: "100%" },
      { opacity: 1, y: "-35", duration: 1, ease: "none" },
      "0"
    );

      
    // Internal Scrolling Animation for Right-Side Scroll Box
    pinTimeline.to(scrollBoxRef.current, {
        scrollTrigger: {
          trigger: scrollBoxRef.current,
          start: "top-=15% top",
          end: () => `+=${scrollBoxRef.current.scrollHeight}`, // Internal scrolling completes before pinning ends
          scrub: true,
          onUpdate: (self) => {
            const scrollableHeight =
              scrollBoxRef.current.scrollHeight - scrollBoxRef.current.clientHeight;
            scrollBoxRef.current.scrollTop =
              self.progress * scrollableHeight;
          },
          // markers: true,
        },
        ease: "none",
      },
    );

    // Left-side image animations based on scroll progress
    ScrollTrigger.create({
      trigger: scrollBoxRef.current,
      start: "top top",
      end: () => `+=${scrollBoxRef.current.scrollHeight}`,
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress; // Value between 0 (start) and 1 (end)
        if (progress <= 0.5) {
          // Show first image
          gsap.to(imageRef.current, { opacity: 1, y: "-50", x: "50", duration: 1, ease: "none" });
          gsap.to(secondImageRef.current, { opacity: 0, y: "100%", x: "50", duration: 0.5, ease: "none" });
        } else {
          // Show second image
          gsap.to(imageRef.current, { opacity: 0, y: "-500", x: "50", duration: 1, ease: "none" });
          gsap.to(secondImageRef.current, { opacity: 1, y: "-50", x: "50", duration: 0.5, ease: "none" });
        }
      },
    });

  }, );

  return (
    <div ref={sectionRef} className={styles.projectHighlight}>
       <PopUp
        content={PopUpProps.content}
        position={PopUpProps.position}
        theme={PopUpProps.theme}
        visible={PopUpProps.visible}
        onClose={() => setPopUpProps(() => ({ ...PopUpProps, visible: false }))}
      />
       
       {/* Intro Text Container */}
       <div ref={introSectionRef} className={styles.introContainer}>
        <p ref={textRef} className={styles.introText}>
          My Better Portfolios app uses AI to calculate ESG-Alpha
        </p>
        {/* Animated Bar */}
        <div ref={barRef} className={styles.animatedBar}></div>
      </div>
<div className={styles.projectContent}>
      {/* Image Container */}
      <div className={styles.imageContainer}>
        <img ref={imageRef} src="assets/highlightImages/ESGSq_adobe.png" alt="Project Image" className={styles.firstProjectImage} />
        <img ref={secondImageRef} src="assets/highlightImages/ESGSq_adobe.png" alt="Project Image" className={styles.hiddenImage} />
      </div>

      {/* Right Side - Scroll Box with Text and Buttons */}
      <div ref={scrollBoxRef} className={styles.scrollBox}>
      <div className={styles.scrollContent}>
          <p>In 2019, the UN declared the Sustainable Development Goals which gave rise to ESG in global financial markets.</p>
           <p>Environmental, Social & Governance is the grab-bag term where investors compile ethical concerns. It's traditionally considered normative, immeasurable and besides-the-point in serious analyses.</p>
           <p>Environmental, Social & Governance is the grab-bag term where investors compile ethical concerns. It's traditionally considered normative, immeasurable and besides-the-point in serious analyses.</p>
           <p>Environmental, Social & Governance is the grab-bag term where investors compile ethical concerns. It's traditionally considered normative, immeasurable and besides-the-point in serious analyses.</p>
           <p>Better Portfolios is an AI tool I created to help investors grade, organize and prioritize ESG concerns in a clear and comparable way</p>
           <p>By compiling contemporary ESG metrics AI is trained to explain which investments more likely promote the UN's SDGs and why</p>
           <div className={styles.buttonsContainer}>
            <button className="btn btn-primary"
             onClick={(e) => handlePopUp(e, 'ESG button clicked!')}
             >
              Button 1</button>
            <button className="btn btn-secondary"
             onClick={(e) => handlePopUp(e, 'A button click!')}
             >
              Button 2</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Highlights;