import FadeInOnScroll from './FadeInOnScroll';
import styles from './MCafe.module.css';

/**
 * NomadicVintageRugs Component
 * 
 * This component presents a case study article describing the
 * Shopify e-commerce setup for Nomadic Vintage Rugs, a vintage rug dealer.
 * 
 * Highlights include:
 * - Transition from local storefront to a seamless online shopping experience
 * - Emphasis on preserving the tactile and storytelling elements of unique rugs
 * - Implementation of consistent product photography and SEO optimization
 * - Challenges managing unique inventory with SEO-friendly searchability
 * - Tools used including Shopify platform and custom photography guidelines
 * 
 * The article content is animated using FadeInOnScroll components
 * for engaging scroll-triggered reveals.
 * 
 * @component
 * @returns {JSX.Element} Case study article for Nomadic Vintage Rugs Shopify project
 */
const NomadicVintageRugs = ({color, color2}) => {
  return (
    <article style={{backgroundColor: color}} className={`${styles.article} ${styles.imageRight}`}>
      {/* Article header with title and byline, fading in on scroll */}
      <header className={styles.articleHeading}>
        <FadeInOnScroll>
          <span style={{color: color2}} className={styles.date}>SRING 2024</span>
          <h2 className={styles.articleHeading__title}>
            CATALOGUING UNIQUE RUGS
          </h2>
          <div style={{backgroundColor: color2}} className={styles.redBar}></div>
        </FadeInOnScroll>
        <FadeInOnScroll delay={50}>
          <span className={styles.articleHeading__byline}>
            <strong>
              Digitizing inventory, building community, and optimizing for organic growth
            </strong>
          </span>
        </FadeInOnScroll>
      </header>
<br></br>
      {/* Main content sections with fade-in animations */}
      <div className={`${styles.article__content} ${styles.revealContent}`}>
        {/* Section: Where we started */}
        <FadeInOnScroll delay={100}>
          <p>📍 <strong>Client:</strong> Nomadic Vintage Rugs</p>
          <p>
            A vintage rug dealer in Portland wanted to expand beyond the local storefront and build a stronger connection
            with their growing client base—without losing the personal, tactile feel their customers loved.
          </p>
          <br></br>
          <p>
            Their goal was a seamless online shopping experience that reflected the texture, story, and tradition behind each rug.
          </p>
          <br></br>
          <blockquote>“We needed to bring the warmth of a rug store into the digital world.”</blockquote>
          <p>📸 [Insert: Photo of physical store or vintage rugs]</p>
        </FadeInOnScroll>

        {/* Section: Research and direction */}
        <FadeInOnScroll delay={150}>
          <h3>Research and direction</h3>
          <p>
            After evaluating multiple platforms, we chose <strong>Shopify</strong> for its robust CRM, integrated POS,
            and ease of maintenance. Shopify offered a strong foundation to scale online sales while keeping customer
            relationships close.
          </p>
          <br></br>
          <p>
            Digitizing the inventory posed a unique challenge due to the one-of-a-kind nature of each rug, requiring
            consistent, high-quality photography to showcase details.
          </p>
          <br></br>
          <p>📸 [Insert: Sample photography guide or product photo setup]</p>
        </FadeInOnScroll>

        {/* Section: Implementation */}
        <FadeInOnScroll delay={200}>
          <h3>Implementation</h3>
          <p>
            I coordinated a detailed photography guide to ensure consistency across all product images—key to building
            trust and brand identity online.
          </p>
          <ul>
            <li>Created SEO-optimized product pages focused on long-tail keywords</li>
            <li>Set up Shopify’s POS and CRM to unify online and in-store customer data</li>
            <li>Ensured the site maintained a personal, boutique feel despite scaling digitally</li>
          </ul>
          <br></br>
          <p>📸 [Insert: Screenshot of Shopify admin or product page]</p>
        </FadeInOnScroll>

        {/* Section: Challenges */}
        <FadeInOnScroll delay={250}>
          <h3>Challenges</h3>
          <p>
            Because each rug is unique, traditional inventory management systems weren’t sufficient. We needed a process
            flexible enough to handle one-off items while remaining searchable and SEO-friendly.
          </p>
          <br></br>
          <blockquote>“One size doesn’t fit all—especially for vintage treasures.”</blockquote>
          <p>📸 [Insert: Inventory management interface or SEO report]</p>
        </FadeInOnScroll>

        {/* Section: The outcome */}
        <FadeInOnScroll delay={300}>
          <h3>The outcome</h3>
          <p>
            Nomadic Vintage Rugs now runs a Shopify-powered e-commerce site that balances scalability with authenticity.
            Customers enjoy browsing rich product images and stories, while the business benefits from streamlined
            inventory and customer management.
          </p>
          <ul>
            <li>Strong SEO performance supporting organic growth</li>
            <li>Unified customer data from both online and physical stores</li>
            <li>Scalable platform ready to support growing demand</li>
          </ul>
          <br></br>
          <p>📸 [Insert: Final website homepage or product gallery]</p>
        </FadeInOnScroll>

        {/* Section: Tools used */}
        <FadeInOnScroll delay={350}>
          <h3>Tools used</h3>
          <ul>
            <li><strong>Shopify</strong> – E-commerce platform with CRM and POS integration</li>
            <li><strong>Custom photography guide</strong> – For consistent product visuals</li>
            <li><strong>SEO tools</strong> – For keyword research and optimization</li>
          </ul>
        </FadeInOnScroll>
      </div>

      {/* Footer with a closing tagline */}
      <footer className={styles.article__footer}>
          <p className={styles.note}>
            Bringing texture and tradition to the web
            <span className={styles.dot}>.</span>
          </p>
      </footer>
    </article>
  );
};

export default NomadicVintageRugs;
