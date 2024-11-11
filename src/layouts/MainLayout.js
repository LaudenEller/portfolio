import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import styles from './MainLayout.module.css'

// This sets up the layout of the app by passing routes as children between navbar and footer components
const MainLayout = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <Navbar />
      <div class={styles.navbar_spacer}></div>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;