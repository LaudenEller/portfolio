import React from 'react';
import styles from './WorkExamples.module.css';

const ImageLeftExample = () => (
  <div className={styles.imageLeft}>
    <img src='/assets/workImages/Asset1.png' alt="Example with image on the left" />
    <div>
      <h4>Image Left Example</h4>
      <p>This example shows a layout with an image on the left.</p>
    </div>
  </div>
);

export default ImageLeftExample;
