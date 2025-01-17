import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './PopUps.module.css';

const PopUp = ({ content, position, theme, visible, duration = 4000, onClose }) => {
  const boxRef = useRef(null);
  useEffect(() => {
  if (visible && boxRef.current) {
    // Animate the box appearing
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.3, ease: "power1.out" }
    );

    // Set timeout to hide the box
    const timeout = setTimeout(() => {
      gsap.to(boxRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.5,
        onComplete: onClose,
      });
    }, duration);

    return () => clearTimeout(timeout);
  }
}, [visible, duration, onClose]);

  if (!visible) return null;  

  return (
    
    <div
      ref={boxRef}
      className={`${styles.PopUp} ${styles[theme]} ${styles[position]}`}
      style={{ 
      top: `${position?.top || 0}px`,
      left: `${position?.left || 0}px`,
      transform: 'translate(-50%, -100%)',}}
    >
      {content}
    </div>
  );
};

export default PopUp;