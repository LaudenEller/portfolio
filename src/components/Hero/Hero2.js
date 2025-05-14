// components/Hero/Hero.js
import React from "react";
import styles from "./Hero2.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          I'm Sarah Chen, design student and explorer of visual languages. I'm
          passionate about understanding how different design disciplines
          intersect and create meaningful connections.
        </h1>
      </div>
    </section>
  );
};

export default Hero;