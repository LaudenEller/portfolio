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
          <p>Environmental, Social & Governance is the grab-bag term where investors compile ethical concerns...</p>
          <p>Better Portfolios is an AI tool I created to help investors grade, organize and prioritize ESG concerns...</p>
          <p>
             Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
             The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
           </p>
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
