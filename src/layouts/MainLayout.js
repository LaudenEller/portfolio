import React, { useRef } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import styles from './MainLayout.module.css'
import NavbarSpacer from '../components/Navbar/NavbarSpacer';
import DebugNavbarSpacer from '../utils/DebugNavbar.js';

// This sets up the layout of the app by passing routes as children between navbar and footer components
const MainLayout = ({ children }) => {
  
  const navbarRef = useRef(null); // Create a ref for the Navbar
  console.log('navbarRef in mainLayout', navbarRef.current)
  return (
    <div className={styles.layoutContainer}>
      <Navbar ref={navbarRef} /> {/* Pass ref to Navbar */}
      <NavbarSpacer navbarRef={navbarRef} /> {/*Pass the same ref to NavbarSpacer*/}
      <main>{children}</main>
      <Footer />
      {/* <DebugNavbarSpacer /> */}
    </div>
  );
};

export default MainLayout;