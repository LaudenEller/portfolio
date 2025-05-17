import React from 'react';
import FadeInOnScroll from './FadeInOnScroll';
import styles from './MCafe1.module.css';

const VallartaBnb = () => {
  return (
    <article className={`${styles.article} ${styles.imageRight}`}>
      <header className={styles.articleHeading}>
        <FadeInOnScroll>
          <h1 className={styles.articleHeading__title}>
            Bubble web app and Lodgify integration for local vacation rentals
            <span className={styles.dot}>.</span>
          </h1>
        </FadeInOnScroll>
        <FadeInOnScroll delay={50}>
          <span className={styles.articleHeading__byline}>Client: VallartaBnb</span>
        </FadeInOnScroll>
      </header>

      <div className={`${styles.article__content} ${styles.revealContent}`}>
        <FadeInOnScroll delay={100}>
          <p>
            In Puerto Vallarta, hundreds of property owners manage just a few rentals and lose time and revenue through high fees from listing on multiple platforms.
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delay={150}>
          <p>
            We built a Bubble app to unify listings in a single branded website, helping owners attract clients through popular platforms like Airbnb and then convert them to direct bookings, avoiding third-party fees while maintaining trust and convenience.
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delay={200}>
          <p>
            We also integrated Lodgify to sync properties across Booking.com, Airbnb, and Vrbo — enabling our client to invite other hosts to list and manage their properties collaboratively from one place.
          </p>
        </FadeInOnScroll>
      </div>

      <footer className={styles.article__footer}>
        <FadeInOnScroll delay={250}>
          <p className={styles.note}>Built to empower local hosts — not platforms<span className={styles.dot}>.</span></p>
        </FadeInOnScroll>
      </footer>
    </article>
  );
};

export default VallartaBnb;
