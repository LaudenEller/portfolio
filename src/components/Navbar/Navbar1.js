// components/Navbar/Navbar.js
import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.profile}>
        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          className={styles.avatar}
        />
        <span className={styles.name}>Sarah Chen</span>
      </div>
      <div className={styles.links}>
        <a href="#" className={styles.link} style={{ color: "#b833e1" }}>Home</a>
        <a href="#" className={styles.link} style={{ color: "#d0a321" }}>About</a>
        <a href="#" className={styles.link} style={{ color: "#5d29cc" }}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
