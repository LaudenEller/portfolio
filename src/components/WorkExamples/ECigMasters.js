// import React, { useEffect } from 'react';
// import styles from './WorkExamples.module.css';

// const ECigMasters = () => (
     
//   <div className={styles.imageRight}>
//     <h4>E-Cig Masters</h4>
//     <p>B2B wholesaler operating in a heavy regulated space with constantly changing products that weren't being reflected in their printed newsletter. Corner store owners were reading an outdated pamphlet of what they could buy by the time it reached them in the mail.</p>
// <p>ManageMore and Woo Commerce incorporated Wordpress site with full rebrand and a pos that incorporated unique tax implications for each sale </p>    
// <p>Configuring sales software to replace default Woo Commerce functions with easily updatable and accurate inventory tracking</p>
//   </div>
// );

// export default ECigMasters;

import React from 'react';
import FadeInOnScroll from './FadeInOnScroll';
import styles from './MCafe1.module.css'; // Reusing the same module CSS file as MCafe1

const ECigMasters = () => {
  return (
    <article className={`${styles.article} ${styles.imageRight}`}>
      <header className={styles.articleHeading}>
        <FadeInOnScroll>
          <h1 className={styles.articleHeading__title}>
            ManageMore & WooCommerce integration for B2B e-commerce
            <span className={styles.dot}>.</span>
          </h1>
        </FadeInOnScroll>
        <FadeInOnScroll delay={50}>
          <span className={styles.articleHeading__byline}>Client: E-Cig Masters</span>
        </FadeInOnScroll>
      </header>

      <div className={`${styles.article__content} ${styles.revealContent}`}>
        <FadeInOnScroll delay={100}>
          <p>
            B2B wholesaler operating in a heavily regulated space with constantly changing products that weren’t being reflected in their printed newsletter. Corner store owners were reading an outdated pamphlet of what they could buy by the time it reached them in the mail.
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delay={150}>
          <p>
            We built a WordPress site using WooCommerce and integrated ManageMore as a point-of-sale system that handled complex tax scenarios and inventory rules. This enabled faster updates and automated compliance.
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delay={200}>
          <p>
            The system allowed store owners to see real-time stock and prices, removing the need for slow, outdated printed catalogs. This also helped the internal team reduce manual data entry.
          </p>
        </FadeInOnScroll>
      </div>

      <footer className={styles.article__footer}>
        <FadeInOnScroll delay={250}>
          <p className={styles.note}>From static mailers to dynamic inventory-driven e-commerce<span className={styles.dot}>.</span></p>
        </FadeInOnScroll>
      </footer>
    </article>
  );
};

export default ECigMasters;
