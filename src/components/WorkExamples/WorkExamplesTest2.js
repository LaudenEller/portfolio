import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { horizontalLoop } from '../../utils/HorizontalLoop2';

export default function HorizontalLoopWithControls({
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7'],
  speed = 1,
  paused = false,
  reversed = false,
  repeat = -1,
  paddingRight = 20, // 👈 this now controls the ghost spacing
}) {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const elements = gsap.utils.toArray(
      containerRef.current.querySelectorAll('.loopItem')
    );

    if (!elements.length) return;

    const tl = horizontalLoop(elements, {
      speed,
      paused: true,
      reversed,
      repeat,
      paddingRight, // 👈 important to force GSAP to count this in totalWidth
    });

    animationRef.current = tl;
    return () => tl.kill();
  }, [speed, paused, reversed, repeat, paddingRight]);

  const handleBoxClick = (index) => {
    animationRef.current?.toIndex(index, {
      duration: 1,
      ease: 'power1.inOut',
    });
  };

  const handleNext = () => {
    animationRef.current?.next({
      duration: 1,
      ease: 'power1.inOut',
    });
  };

  const handlePrev = () => {
    animationRef.current?.previous({
      duration: 1,
      ease: 'power1.inOut',
    });
  };

  return (
    <div>
      <div
        ref={containerRef}
        style={{
          display: 'flex',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          cursor: 'pointer',
          margin: '50px',
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="box loopItem"
            style={{
              minWidth: '200px',
              marginRight: '20px',
              background: '#eee',
              textAlign: 'center',
              padding: '20px',
              boxSizing: 'border-box',
              flexShrink: 0,
            }}
            onClick={() => handleBoxClick(index)}
          >
            {item}
          </div>
        ))}

        {/* 👇 This element forces spacing after the last item */}
        <div
          style={{
            width: `${paddingRight}px`,
            flexShrink: 0,
          }}
        />
      </div>

      <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}
