// components/Features/Features.js
import React from "react";
import styles from "./Features.module.css";

const Features = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>What You Get</h2>
        <div className={styles.grid}>
          {featureItems.map((item, i) => (
            <div key={i} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const featureItems = [
  { title: "Responsive Design", description: "Looks great on any device." },
  { title: "Easy Customization", description: "Edit styles and components quickly." },
  { title: "Fast Loading", description: "Optimized for performance." },
];

export default Features;