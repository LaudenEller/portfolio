// components/Projects/Projects.js
import React from "react";
import styles from "./Projects.module.css";

const projectData = [
  {
    title: "Yoga studio rebrand",
    category: "Design",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
  },
  {
    title: "Creative direction for art fair",
    category: "Art Direction",
    image: "https://images.unsplash.com/photo-1581091012184-7c82f236b1bc",
  },
  {
    title: "Editorial layout experiment",
    category: "Typography",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
  },
];

const Projects = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.wrapper}>
        <hr className={styles.divider} />
        {projectData.map((project, index) => (
          <div key={index} className={styles.card}>
            <img src={project.image} alt={project.title} className={styles.image} />
            <div className={styles.details}>
              <span className={styles.category}>{project.category}</span>
              <h2 className={styles.title}>{project.title}</h2>
              <button className={styles.button}>Explore</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;