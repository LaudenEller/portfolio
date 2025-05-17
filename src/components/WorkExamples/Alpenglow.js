import React from 'react';
import FadeInOnScroll from './FadeInOnScroll';
import styles from './MCafe1.module.css';

const Alpenglow = () => {
  return (
    <article className={`${styles.article} ${styles.textOnly}`}>
      <header className={styles.articleHeading}>
        <FadeInOnScroll>
          <h1 className={styles.articleHeading__title}>
            Branding, WordPress, and AI chatbot for a luxury real estate agency
            <span className={styles.dot}>.</span>
          </h1>
        </FadeInOnScroll>
        <FadeInOnScroll delay={50}>
          <span className={styles.articleHeading__byline}>Client: Alpenglow</span>
        </FadeInOnScroll>
      </header>

      <div className={`${styles.article__content} ${styles.revealContent}`}>
        <FadeInOnScroll delay={100}>
          <p>
            A new luxury realtor operating in Puerto Vallarta, Mexico needed branding and a website that would appeal to English-speaking tourists.
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delay={150}>
          <p>
            In this part of Mexico, many websites feel outdated, so we designed an image-rich, modern platform that matched the aesthetic expectations of a global clientele. The site also includes a WhatsApp-enabled AI chatbot that delivers sales support in hundreds of languages — 24/7.
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delay={200}>
          <p>
            To accommodate listings from multiple MLS providers with different database structures, we developed a heavily customized WordPress theme tailored to Alpenglow’s unique backend needs.
          </p>
        </FadeInOnScroll>
      </div>

      <footer className={styles.article__footer}>
        <FadeInOnScroll delay={250}>
          <p className={styles.note}>Luxury, multilingual support, and performance — all in one<span className={styles.dot}>.</span></p>
        </FadeInOnScroll>
      </footer>
    </article>
  );
};

export default Alpenglow;
