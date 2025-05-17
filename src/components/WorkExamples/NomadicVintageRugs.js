import React from 'react';
import FadeInOnScroll from './FadeInOnScroll';
import styles from './MCafe1.module.css';

const NomadicVintageRugs = () => {
  return (
    <article className={`${styles.article} ${styles.imageRight}`}>
      <header className={styles.articleHeading}>
        <FadeInOnScroll>
          <h1 className={styles.articleHeading__title}>
            Shopify e-commerce setup for vintage rug dealer
            <span className={styles.dot}>.</span>
          </h1>
        </FadeInOnScroll>
        <FadeInOnScroll delay={50}>
          <span className={styles.articleHeading__byline}>Client: Nomadic Vintage Rugs</span>
        </FadeInOnScroll>
      </header>

      <div className={`${styles.article__content} ${styles.revealContent}`}>
        <FadeInOnScroll delay={100}>
          <p>
            A vintage rug dealer needed to expand the reach of their Portland-based store while building a way to stay in contact with their client base.
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delay={150}>
          <p>
            A Shopify site provided a complete CRM and POS solution that was easy to maintain and allowed the business to operate online without giving up the feel of a personal experience.
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delay={200}>
          <p>
            Digitizing the inventory was the largest hurdle — we designed and coordinated a photography guide for consistency across all products, then provided SEO research and optimization to support long-term organic growth.
          </p>
        </FadeInOnScroll>
      </div>

      <footer className={styles.article__footer}>
        <FadeInOnScroll delay={250}>
          <p className={styles.note}>Bringing texture and tradition to the web<span className={styles.dot}>.</span></p>
        </FadeInOnScroll>
      </footer>
    </article>
  );
};

export default NomadicVintageRugs;
