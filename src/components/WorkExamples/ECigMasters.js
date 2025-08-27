import FadeInOnScroll from './FadeInOnScroll';
import styles from './MCafe1.module.css'; // Reusing the same module CSS file as MCafe1

/**
 * ECigMasters component
 * 
 * This component renders a detailed case study article about the
 * E-Cig Masters wholesale e-commerce project. It highlights the
 * challenges, research, implementation, and outcomes of building
 * a compliant, inventory-synced, mobile-first online store.
 * 
 * Key features:
 * - Uses FadeInOnScroll for smooth reveal animations on scroll
 * - Structured with semantic HTML: article, header, sections, footer
 * - Reuses CSS module styles for consistent styling
 * - Includes placeholders for illustrative images/screenshots
 * 
 * @component
 * @returns {JSX.Element} The ECigMasters case study article
 */
const ECigMasters = () => {
  return (
    <article className={`${styles.article} ${styles.imageRight}`}>
      
      {/* Article header with animated title and byline */}
      <header className={styles.articleHeading}>
        <FadeInOnScroll>
            <h2 className={styles.articleHeading__title}>E-CIG MASTERS — WHOLESALE E-COMMERCE WITH COMPLIANCE BUILT-IN
              <span className={styles.dot}>.</span>
            </h2>
        </FadeInOnScroll>
        <FadeInOnScroll delay={50}>
          <span className={styles.articleHeading__byline}><strong>Inventory sync, regulation-aware tax setup, and mobile purchasing for a fast-moving industry</strong></span>
        </FadeInOnScroll>
      </header>

      {/* Main article content with multiple sections animated on scroll */}
      <div className={`${styles.article__content} ${styles.revealContent}`}>
        <br></br>
        {/* Section: Where we started */}
        <FadeInOnScroll delay={100}>
          <h3>Where we started</h3>
          <p>
            📍 Before their e-commerce platform existed, E-Cig Masters relied on voicemail to collect wholesale orders. Clients would
            call in, leave their product list, and hope nothing was out of stock. It wasn’t scalable—and it was costing the business
            both time and credibility.
          </p>
          <p>
            They needed a proper online store—mobile-first, inventory-aware, and regulation-compliant—that could keep up with the
            speed and complexity of the vaping industry.
          </p>
          <blockquote>“They weren’t just losing time—they were losing trust.”</blockquote>
          <p>📸 [Insert: Screenshot of old voicemail process or manual order logs]</p>

        </FadeInOnScroll>

        {/* Section: Research and direction */}
        <FadeInOnScroll delay={150}>
          <h3>Research and direction</h3>
          <p>
            We started by mapping out what mattered most to their B2B clients: up-to-date inventory, fast mobile purchasing, and
            tax-compliant checkout based on geographic location.
          </p>
          <p>
            After reviewing tools and workflows, we chose to integrate their internal inventory platform <strong>ManageMore</strong>
            with <strong>WooCommerce</strong>, built on <strong>WordPress</strong> for flexibility and plugin support.
          </p>
          <blockquote>“This wasn’t a Shopify situation—it needed backend power and regulatory nuance.”</blockquote>
          <p>📸 [Insert: Visual comparison of system options or workflow diagram]</p>
        </FadeInOnScroll>

        {/* Section: Implementation */}
        <FadeInOnScroll delay={200}>
          <h3>Implementation</h3>
          <p>
            I configured their e-commerce system to sync inventory from ManageMore into WooCommerce, ensuring that product availability
            was always accurate—even when SKUs changed weekly.
          </p>
          <ul>
            <li>Tax zones and compliance rules were built to match U.S. regulations per state</li>
            <li>The store was optimized for mobile-first wholesale buyers placing bulk orders from their phones</li>
            <li>Product visibility and categorization were made dynamic, so the team could update listings without disrupting the frontend</li>
          </ul>
          <p>📸 [Insert: Screenshot of product dashboard or tax rule settings]</p>
        </FadeInOnScroll>

        {/* Section: Challenges in the details */}
        <FadeInOnScroll delay={250}>
        <h3>Challenges in the details</h3>
          <p>
            The biggest challenge was keeping the online catalog stable while product names, pricing, and legal restrictions were in flux.
            A single mistake in product info could trigger compliance issues or customer confusion.
          </p>
          <p>
            We built flexible category structures and validation rules to reduce manual errors and keep listings compliant—even when the
            industry shifted overnight.
          </p>
          <blockquote>“In this space, speed matters—but so does compliance.”</blockquote>
          <p>📸 [Insert: Product update interface or compliance workflow]</p>
        </FadeInOnScroll>

        {/* Section: SEO & discoverability */}
        <FadeInOnScroll delay={300}>
        <h3>SEO & discoverability</h3>
          <p>
            Once the site was functional, we focused on visibility. Using keyword-optimized metadata and structured markup, we targeted
            high-value B2B search queries.
          </p>
          <p>
            Within weeks, E-Cig Masters ranked in the top 5 Google results for major vape brands + “wholesale” and “B2B”.
          </p>
          <blockquote>“They weren’t just online—they were dominant in search.”</blockquote>
          <p>📸 [Insert: Google search results or traffic analytics graph]</p>
        </FadeInOnScroll>

        {/* Section: The outcome */}
        <FadeInOnScroll delay={350}>
        <h3>The outcome</h3>
          <p>
            The team now runs a stable, scalable wholesale store where clients can order confidently from their phones—without needing
            to leave a voicemail or call for stock checks.
          </p>
          <ul>
            <li>Online orders replaced manual processing, saving hours per day</li>
            <li>Inventory now syncs automatically between POS and storefront</li>
            <li>The site ranks top 5 on Google for multiple vape-related B2B search terms</li>
            <li>The client now has a reliable, compliant foundation for future growth</li>
          </ul>
          <blockquote>“Their clients stopped calling. Not because they didn’t care—but because everything just worked.”</blockquote>
          <p>📸 [Insert: Screenshot of live store or mobile checkout experience]</p>
        </FadeInOnScroll>

        {/* Section: Tools used */}
        <FadeInOnScroll delay={400}>
          <h3>Tools used</h3>
          <ul>
            <li><strong>ManageMore</strong> – Inventory and backend platform, synced to online store</li>
            <li><strong>WordPress</strong> – CMS used for managing site content and plugins</li>
            <li><strong>WooCommerce</strong> – E-commerce engine for checkout, tax zones, and product catalog</li>
            <li><strong>Google Search Console</strong> – Monitoring search visibility, indexing, and keyword performance</li>
          </ul>
        </FadeInOnScroll>

      </div>

 {/* Article footer with closing note */}
      <footer className={styles.article__footer}>
          <p className={styles.note}>From static mailers to dynamic inventory-driven e-commerce<span className={styles.dot}>.</span></p>
      </footer>
    </article>
  );
};

export default ECigMasters;
