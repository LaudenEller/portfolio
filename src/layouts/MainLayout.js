import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import styles from './MainLayout.module.css'
import NavbarSpacer from '../components/Navbar/NavbarSpacer';
import DebugNavbarSpacer from '../utils/DebugNavbar.js';

// This sets up the layout of the app by passing routes as children between navbar and footer components
const MainLayout = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <Navbar />
      <NavbarSpacer />
      <DebugNavbarSpacer />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;