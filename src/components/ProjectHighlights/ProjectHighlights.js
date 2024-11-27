import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from './ProjectHighlights.module.css';

gsap.registerPlugin(ScrollTrigger);

const ProjectHighlight = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const scrollBoxRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top", // Start when section reaches top of viewport
        end: "+=200%", // Timeline duration tied to scrolling through the section
        scrub: true,
        pin: true, // Pin the entire section
        pinSpacing: true,
      },
    });

    // Left-side text animation
    tl.fromTo(
      textRef.current,
      { opacity: 0, x: -200 },
      { opacity: 1, x: 0, duration: 1 },
      "0" // Start this animation immediately
    );

    // Left-side image animation, delayed after text animation
    tl.fromTo(
      imageRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1 },
      "0.5" // Starts slightly after text animation
    );

    // Right-side scroll content animation
    tl.to(scrollBoxRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top", // Sync with timeline start
        end: "+=200%", // Continue scrolling until content finishes
        scrub: true,
        onUpdate: (self) => {
          const scrollableHeight =
            scrollBoxRef.current.scrollHeight - scrollBoxRef.current.clientHeight;
          scrollBoxRef.current.scrollTop =
            self.progress * scrollableHeight;
        },
      },
      ease: "none",
    });

    // Clean up ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className={styles.projectHighlight}>
      {/* Left Side - Intro Text & Image */}
      <div className={styles.leftSide}>
        <p ref={textRef} className={styles.introText}>
          In 2019, the UN declared the Sustainable Development Goals which gave rise to ESG in global financial markets.
        </p>
        <div ref={imageRef} className={styles.imageContainer}>
          <img src="assets/BetterPortfolioLogo.png" alt="Project Image" />
        </div>
      </div>

      {/* Right Side - Scroll Box with Text and Buttons */}
      <div ref={scrollBoxRef} className={styles.scrollBox}>
        <div className={styles.scrollContent}>
          <p>Environmental, Social & Governance is the grab-bag term where investors compile ethical concerns. It's traditionally considered normative, immeasurable and besides-the-point in serious analyses.</p>
          <p>Better Portfolios is an AI tool I created to help investors grade, organize and prioritize ESG concerns in a clear and comparable way</p>
          <p>By compiling contemporary ESG metrics AI is trained to explain which investments more likely promote the UN's SDGs and why</p>
          <div className={styles.buttonsContainer}>
            <button className="btn btn-primary">Button 1</button>
            <button className="btn btn-secondary">Button 2</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHighlight;
