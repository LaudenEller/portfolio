import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from './ProjectHighlights.module.css';

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const scrollBoxRef = useRef(null);

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
      { opacity: 0, x: -200 },
      { opacity: 1, x: 200, duration: 0.5, ease: "power1.inOut" }
    );

    // Section Pinning and Content Animation
    const pinTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top-=5% top",
        end: () => `+=${scrollBoxRef.current.scrollHeight + window.innerHeight * 0.5}`,
        pin: true,
        pinSpacing: true,
        markers: true,
      },
    });

    // Left-side image animation
    pinTimeline.fromTo(
      imageRef.current,
      { opacity: 0, y: "100%" },
      { opacity: 0.75, y: "-50", duration: 1, ease: "none" },
      "0"
    );

    // Right-side scroll box entrance animation
    pinTimeline.fromTo(
      scrollBoxRef.current,
      { opacity: 0, y: "100%" },
      { opacity: 1, y: "8%", duration: 1, ease: "none" },
      "0"
    );
      
    // Internal Scrolling Animation for Right-Side Scroll Box
    pinTimeline.to(scrollBoxRef.current, {
        scrollTrigger: {
          trigger: scrollBoxRef.current,
          start: "top-=50% top",
          end: () => `+=${scrollBoxRef.current.scrollHeight}`, // Internal scrolling completes before pinning ends
          scrub: true,
          onUpdate: (self) => {
            const scrollableHeight =
              scrollBoxRef.current.scrollHeight - scrollBoxRef.current.clientHeight;
            scrollBoxRef.current.scrollTop =
              self.progress * scrollableHeight;
          },
          markers: true,
        },
        ease: "none",
      },
    );
  }, );

  return (
    <div ref={sectionRef} className={styles.projectHighlight}>
      {/* Left Side - Intro Text & Image */}
      <div className={styles.leftSide}>
        <div className={styles.introTextContainer}>
          <p ref={textRef} className={styles.introText}>
            My Better Portfolios app uses AI to calculate ESG-Alpha
          </p>
        </div>
        <div ref={imageRef} className={styles.imageContainer}>
          <img src="assets/highlightImages/ESGSq.png" alt="Project Image" />
        </div>
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
            <button className="btn btn-primary">Button 1</button>
            <button className="btn btn-secondary">Button 2</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;