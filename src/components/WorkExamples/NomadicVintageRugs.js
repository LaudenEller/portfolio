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
    <article className={styles.article} style={{ backgroundColor: color }}>
      <div className={styles.container}>
      {/* Article header with title and byline, fading in on scroll */}
      <header className={styles.header}>
        <FadeInOnScroll>
          <span style={{color: color2}} className={styles.seasonLabel}>SPRING 2024</span>
          <h2 className={styles.title}>
            CATALOGUING UNIQUE RUGS
          </h2>
          <div style={{backgroundColor: color2}} className={styles.titleRule}></div>
        </FadeInOnScroll>
        <FadeInOnScroll delay={50}>
          <p className={styles.subhead}>
            <strong>
              Digitizing inventory, building community, and optimizing for organic growth
            </strong>
          </p>
        </FadeInOnScroll>
      </header>
      {/* Main content sections with fade-in animations */}
      <section className={styles.section}>
        {/* Section: Where we started */}
        <FadeInOnScroll delay={100}>
          <p className={styles.body}>📍 <strong>Client:</strong> Nomadic Vintage Rugs</p>
          <p className={styles.body}>
            A vintage rug dealer in Portland wanted to expand beyond the local storefront and build a stronger connection
            with their growing client base—without losing the personal, tactile feel their customers loved.
          </p>
          <p className={styles.body}>
            Their goal was a seamless online shopping experience that reflected the texture, story, and tradition behind each rug.
          </p>
          <blockquote className={styles.pullQuote}>
            <span className={styles.pullQuoteMark} style={{ color: color2 }}>“</span>
            <span className={styles.pullQuoteText}>We needed to bring the warmth of a rug store into the digital world.</span>
          </blockquote>
          {/* 📸 Media to add (M2-T13): Photo of physical store or vintage rugs */}
        </FadeInOnScroll>

        {/* Section: Research and direction */}
        <FadeInOnScroll delay={150}>
          <h3>Research and direction</h3>
          <p className={styles.body}>
            After evaluating multiple platforms, we chose <strong>Shopify</strong> for its robust CRM, integrated POS,
            and ease of maintenance. Shopify offered a strong foundation to scale online sales while keeping customer
            relationships close.
          </p>
          <p className={styles.body}>
            Digitizing the inventory posed a unique challenge due to the one-of-a-kind nature of each rug, requiring
            consistent, high-quality photography to showcase details.
          </p>
          {/* 📸 Media to add (M2-T13): Sample photography guide or product photo setup */}
        </FadeInOnScroll>

        {/* Section: Implementation */}
        <FadeInOnScroll delay={200}>
          <h3>Implementation</h3>
          <p className={styles.body}>
            I coordinated a detailed photography guide to ensure consistency across all product images—key to building
            trust and brand identity online.
          </p>
          <ul>
            <li>Created SEO-optimized product pages focused on long-tail keywords</li>
            <li>Set up Shopify’s POS and CRM to unify online and in-store customer data</li>
            <li>Ensured the site maintained a personal, boutique feel despite scaling digitally</li>
          </ul>
          {/* 📸 Media to add (M2-T13): Screenshot of Shopify admin or product page */}
        </FadeInOnScroll>

        {/* Section: Challenges */}
        <FadeInOnScroll delay={250}>
          <h3>Challenges</h3>
          <p className={styles.body}>
            Because each rug is unique, traditional inventory management systems weren’t sufficient. We needed a process
            flexible enough to handle one-off items while remaining searchable and SEO-friendly.
          </p>
          <blockquote className={styles.pullQuote}>
            <span className={styles.pullQuoteMark} style={{ color: color2 }}>“</span>
            <span className={styles.pullQuoteText}>One size doesn’t fit all—especially for vintage treasures.</span>
          </blockquote>
          {/* 📸 Media to add (M2-T13): Inventory management interface or SEO report */}
        </FadeInOnScroll>

        {/* Section: The outcome */}
        <FadeInOnScroll delay={300}>
          <h3>The outcome</h3>
          <p className={styles.body}>
            Nomadic Vintage Rugs now runs a Shopify-powered e-commerce site that balances scalability with authenticity.
            Customers enjoy browsing rich product images and stories, while the business benefits from streamlined
            inventory and customer management.
          </p>
          <ul>
            <li>Strong SEO performance supporting organic growth</li>
            <li>Unified customer data from both online and physical stores</li>
            <li>Scalable platform ready to support growing demand</li>
          </ul>
          {/* 📸 Media to add (M2-T13): Final website homepage or product gallery */}
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
      </section>

      {/* Footer with a closing tagline */}
      <footer className={styles.articleFooter}>
          <p className={styles.note}>
            Bringing texture and tradition to the web
            <span className={styles.titleDot} style={{ color: color2 }}>.</span>
          </p>
      </footer>
      </div>
    </article>
  );
};

export default NomadicVintageRugs;
