import React, { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './ProjectHighlights.module.css';

const ProjectHighlight = ({ projects }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${styles.projectHighlightContainer} ${theme === 'dark' ? styles.darkTheme : ''}`}>
      <div className="container">
        <h2 className="text-center mb-4">Project Highlights</h2>
        {/* <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className={`${styles.projectCard} card h-100`}>
                <img
                  src={project.image}
                  className={`card-img-top ${styles.projectImage}`}
                  alt={`${project.title} screenshot`}
                />
                <div className={`card-body ${styles.cardBody}`}>
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default ProjectHighlight;
