import React, { useRef, useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import styles from './MainLayout.module.css'

// This sets up the layout of the app by passing routes as children between navbar and footer components
const MainLayout = ({ children }) => {
  const mainRef = useRef(null);
  const navbarRef = useRef(null);
  const [showFloatingNav, setShowFloatingNav] = useState(false);

useEffect(() => {
    const handleScroll = () => {
      setShowFloatingNav(window.scrollY > 125);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.layoutContainer}>
      <Navbar ref={navbarRef} />
      {/* <NavbarSpacer navbarRef={navbarRef} mainRef={mainRef} />  */}
      <main 
      ref={mainRef}
      className={showFloatingNav ? styles.withStickyOffset : ''}
      >{children}</main>
      <Footer />
      {/* <DebugNavbarSpacer /> */}
    </div>
  );
};

export default MainLayout;