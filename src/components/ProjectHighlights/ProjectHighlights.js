import React from 'react';
import styles from './ProjectHighlight.module.css';

const ProjectHighlight = ({ projects }) => {
  return (
    <section id="projects" className={styles.projectHighlight}>
      {projects.map((project, index) => (
        <div key={index} className={styles.project}>
          <h2>{project.title}</h2>
          <img src={project.image} alt={project.title} />
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
};

export default ProjectHighlight;