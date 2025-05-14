// components/ModalView.js
import React, { useEffect } from 'react';
import styles from './ModalView.module.css';

export default function ModalView({ children, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()} // prevent close on content click
      >
        {children}
      </div>
    </div>
  );
}
