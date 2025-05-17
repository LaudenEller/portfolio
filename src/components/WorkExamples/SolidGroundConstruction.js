import React from 'react';
import FadeInOnScroll from './FadeInOnScroll';
import styles from './MCafe1.module.css';

const SolidGroundConstruction = () => {
  return (
    <article className={`${styles.article} ${styles.imageRight}`}>
      <header className={styles.articleHeading}>
        <FadeInOnScroll>
          <h1 className={styles.articleHeading__title}>
            Custom bidding and budget tracking system for a construction company
            <span className={styles.dot}>.</span>
          </h1>
        </FadeInOnScroll>
        <FadeInOnScroll delay={50}>
          <span className={styles.articleHeading__byline}>Client: Solid Ground Construction</span>
        </FadeInOnScroll>
      </header>

      <div className={`${styles.article__content} ${styles.revealContent}`}>
        <FadeInOnScroll delay={100}>
          <p>
            Solid Ground Construction approached me to build a custom and affordable bidding solution capable of making accurate cost projections.
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delay={150}>
          <p>
            We implemented Google Business Suite as a lightweight project management system, supporting bidding, cost tracking, project organization, and budget forecasting.
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delay={200}>
          <p>
            A Chrome extension was developed to facilitate internal service libraries and automatically load supply lists into the budget when services are selected — streamlining planning across projects.
          </p>
        </FadeInOnScroll>
      </div>

      <footer className={styles.article__footer}>
        <FadeInOnScroll delay={250}>
          <p className={styles.note}>From spreadsheets to streamlined estimates<span className={styles.dot}>.</span></p>
        </FadeInOnScroll>
      </footer>
    </article>
  );
};

export default SolidGroundConstruction;
