import React, { useRef } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import styles from './MainLayout.module.css'
import NavbarSpacer from '../components/Navbar/NavbarSpacer';
import DebugNavbarSpacer from '../utils/DebugNavbar.js';

// This sets up the layout of the app by passing routes as children between navbar and footer components
const MainLayout = ({ children }) => {
  const mainRef = useRef(null);
  const navbarRef = useRef(null);

  return (
    <div className={styles.layoutContainer}>
      <Navbar ref={navbarRef} />
      <NavbarSpacer navbarRef={navbarRef} mainRef={mainRef} /> 
      <main ref={mainRef}>{children}</main>
      <Footer />
      {/* <DebugNavbarSpacer /> */}
    </div>
  );
};

export default MainLayout;