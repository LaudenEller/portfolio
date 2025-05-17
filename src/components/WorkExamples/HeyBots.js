import React from 'react';
import FadeInOnScroll from './FadeInOnScroll';
import styles from './MCafe1.module.css'; // Matches the target layout’s CSS

const HeyBots = () => {
  return (
    <article className={`${styles.article} ${styles.imageRight}`}>
      <header className={styles.articleHeading}>
        <FadeInOnScroll>
          <h1 className={styles.articleHeading__title}>
            AI chatbots for customer service and sales automation
            <span className={styles.dot}>.</span>
          </h1>
        </FadeInOnScroll>
        <FadeInOnScroll delay={50}>
          <span className={styles.articleHeading__byline}>Client: HeyBots</span>
        </FadeInOnScroll>
      </header>

      <div className={`${styles.article__content} ${styles.revealContent}`}>
        <FadeInOnScroll delay={100}>
          <p>
            Customer service is extremely expensive to provide, and if customers need to wait for answers, there's a strong likelihood they'll buy from somewhere else.
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delay={150}>
          <p>
            Trainable chatbots can be affordably maintained and easily updated with all relevant information and sales directives, offering quick, consistent responses across platforms.
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delay={200}>
          <p>
            We utilized FastBots to train ChatGPT-powered bots on each business’s knowledge base and connected them to WhatsApp, websites, and Shopify through Zapier app integration.
          </p>
        </FadeInOnScroll>
      </div>

      <footer className={styles.article__footer}>
        <FadeInOnScroll delay={250}>
          <p className={styles.note}>From static FAQ pages to real-time AI conversations<span className={styles.dot}>.</span></p>
        </FadeInOnScroll>
      </footer>
    </article>
  );
};

export default HeyBots;
