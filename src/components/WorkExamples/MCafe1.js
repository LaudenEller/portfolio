import React from 'react';
import FadeInOnScroll from './FadeInOnScroll';
import styles from './MCafe1.module.css'; // Make sure this matches the CSS file name

const MCafe1 = () => {
  return (
    <article className={`${styles.article} ${styles.imageRight}`}>
      <header className={styles.articleHeading}>
        <FadeInOnScroll>
          <h1 className={styles.articleHeading__title}>
            DoorDash, Uber Eats & Revel POS integration with new SquareSpace website
            <span className={styles.dot}>.</span>
          </h1>
        </FadeInOnScroll>
        <FadeInOnScroll delay={50}>
          <span className={styles.articleHeading__byline}>Client: M Cafe</span>
        </FadeInOnScroll>
      </header>

      <div className={`${styles.article__content} ${styles.revealContent}`}>
        <FadeInOnScroll delay={100}>
          <p>
            After 25 years serving natural foods to LA's Hollywood crowd, iconic M Cafe got priced out of their brick & mortar. Pivoting to the modern landscape, the owners decided to launch a ghost kitchen concept.
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delay={150}>
          <p>
            Like I always do with new clients, we conducted research into their options. Upon evaluating the landscape of delivery app middleware providers and the web-hosting plans tailor-made to restaurants, we decided that while their eventual goal was signing up with the newest all-in-one solution (Toast POS), sticking with their current tech stack of a SquareSpace site combined with Revel POS was the best short-term option.
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delay={200}>
          <blockquote>
            <p>
              “In the over-crowded market of delivery fulfillment, many restaurants are flailing with twelve software subscriptions and three KDS tablets, losing time and struggling with fees.”
            </p>
          </blockquote>
        </FadeInOnScroll>

        <FadeInOnScroll delay={250}>
          <p>
            Transferring to Toast POS combined website hosting with order management and POS integration, so all elements including marketing and reporting are easily managed with only one subscription fee.
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delay={300}>
          <p>
            To align with an immediate location launch, I extended their current tech stack to accommodate while completely rebuilding their website, menu, and logistics infrastructure by transferring them from Revel to Toast POS systems.
          </p>
        </FadeInOnScroll>
      </div>

      <footer className={styles.article__footer}>
        <FadeInOnScroll delay={350}>
          <p className={styles.note}>A modern tech shift, built for speed and simplicity.</p>
        </FadeInOnScroll>
      </footer>
    </article>
  );
};

export default MCafe1;
