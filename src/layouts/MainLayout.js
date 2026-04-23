import React, { useRef, useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import styles from './MainLayout.module.css'
import Navbar1 from '../components/Navbar/Navbar1';
import { useNavShrink } from '../contexts/NavShrinkContext';



// This sets up the layout of the app by passing routes as children between navbar and footer components
const MainLayout = ({ children }) => {
  const mainRef = useRef(null);
  const navbarRef = useRef(null);
  const [showFloatingNav, setShowFloatingNav] = useState(false);
  const { shrinkFactor } = useNavShrink();

useEffect(() => {
    const handleScroll = () => {
      setShowFloatingNav(window.scrollY > 125);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate dynamic offset based on navbar state
  const getMainOffset = () => {
    if (!showFloatingNav) return '0';
    const baseHeight = 10; // 10vh base
    const shrunkHeight = 8.5; // 8.5vh shrunk
    const height = baseHeight - (shrinkFactor * (baseHeight - shrunkHeight));
    return `${height + 0.25}vh`; // Add small buffer
  };

  return (
    <div className={styles.layoutContainer}>
      <Navbar1 ref={navbarRef} />
      {/* <NavbarSpacer navbarRef={navbarRef} mainRef={mainRef} />  */}
      <main 
      ref={mainRef}
      className={showFloatingNav ? styles.withStickyOffset : ''}
      style={{ marginTop: getMainOffset() }}
      >{children}</main>
      <Footer />
      {/* <DebugNavbarSpacer /> */}
    </div>
  );
};

export default MainLayout;