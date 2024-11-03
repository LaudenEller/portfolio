import React from 'react';
import styles from './WorkExamples.module.css';

const ImageRightExample = () => (
  <div className={styles.imageRight}>
    <div>
      <h4>Image Right Example</h4>
      <p>This example shows a layout with an image on the right.</p>
    </div>
    <img src="/images/image-right.jpg" alt="Example with image on the right" />
  </div>
);

export default ImageRightExample;
