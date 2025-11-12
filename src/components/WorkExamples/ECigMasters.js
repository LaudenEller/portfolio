import FadeInOnScroll from './FadeInOnScroll';
import styles from './MCafe.module.css'; // Reusing the same module CSS file as MCafe1

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
const ECigMasters = ({ color, color2 }) => {
  return (
    <article className={`${styles.article} ${styles.imageRight}`} style={{ backgroundColor: color }}>
      
      {/* Article header with animated title and byline */}
      <header className={styles.articleHeading}>
        <FadeInOnScroll>
          <div className={styles.seasonLabel}>FALL 2023</div>
            <h2 className={styles.articleHeading__title}>E-CIG MASTERS — WHOLESALE E-COMMERCE WITH COMPLIANCE BUILT-IN
              <span className={styles.dot}>.</span>
            </h2>
            <div className={styles.titleRule} style={{ backgroundColor: color2 }} />
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
          <p>📸 [Insert: Slideshow comparisons of their logo choices]</p>
          <p>📸 [Insert: Large versions of the logos they settled on]</p>
        </FadeInOnScroll>

        {/* Section: Implementation */}
        <FadeInOnScroll delay={200}>
          <h3>Implementation</h3>
          <p>
            We built a new WordPress website and set up their online catalogue using WooCommerce ensuring live updates and secure order processing. Most of our time was used preparing photos for the web and building their product catalogue inside ManageMore.
          </p>
          <p>📸 [Insert: Fire graphic art of nicotine-free vapes]</p>
          <p>Setting up the backend on Kinsta allowed distribution offices in different locations to update the same inventory and process orders in the correct queue.
            <br/>
            <br/>
            We had to configure a new online store in ManageMore by creating a client database, a product database, a tax and payments database with extensive state-by-state configurations.
          </p>
          <p>📸 [Insert: Gumi .jpg and .png comparison examples]</p>
          <p>We had to prepare all the product images for online and mobile presentations.</p>
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

        {/* Section: ManageMore & Kinsta */}
        <FadeInOnScroll delay={300}>
        <h3>Architecting the Digital Backbone: ManageMore on Kinsta</h3>
          <article>
          <div id="manageMoreKinstaContentBox">
          <div className='manageMoreKinstaTextBox'>
          <p>
            Backend Synchronization: Leveraging Kinsta hosting, we enabled distribution offices in different locations to update the same inventory in real-time, ensuring accurate stock levels and efficient order queuing
          <br/>
          <br/>
          ManageMore Configuration: This involved meticulously configuring a new online store within ManageMore, building extensive client, product, and tax databases with granular state-by-state rules.
          </p>
          </div>
          <div className="manageMoreKinstaImageBox">
            <p>📸 [Insert: vertical Gimi yellow E-Cigarettes image]</p>
          </div>
          <div className="manageMoreKinstaImageBox">
            <p>📸 [Insert: 2000 puff Kiwi Strawberry image]</p>
          </div>
          <div className='manageMoreKinstaTextBox'>
          <p>
            Visualizing the Product: Preparing thousands of product images for optimal online and mobile presentation, ensuring a visually rich and accurate catalog.
          </p>
          </div>
          <div className="manageMoreKinstaImageBox">
            <p>📸 [Insert: horizontal Gimi yellow e-cigarette image]</p>
          </div>
          <div className='manageMoreKinstaTextBox'>
            <p>Automated Compliance Logic: The most demanding aspect was the intricate configuration of ManageMore's product catalog and the automated tax rules. The sheer volume of constantly changing products, regulations, and tax implications across states demanded continuous updates and meticulous attention.</p>
          </div>
          </div>
          </article>
        </FadeInOnScroll>

        {/* Section: Product Matrixes */}
        <FadeInOnScroll delay={350}>
        <h3>Product Matrix Hell</h3>
          <article>
          <div id="manageMoreKinstaContentBox">
          <div className='manageMoreKinstaTextBox'>
          <p>
            Not only did every item come in 45 flavors, the choices changed every couple weeks and they offered several purchase size options for many products - necessitating even more flexibility and likewise careful and accurate cataloguing.
          </p>
          </div>
          <div className="manageMoreKinstaImageBox">
            <p>📸 [Insert: Minute Maid juice matrix image]</p>
          </div>
          <div className='manageMoreKinstaTextBox'>
          <p>
            Preparing thousands of product images for optimal online and mobile presentation, ensuring a visually rich and accurate catalog.
          </p>
          </div>
          <div className="manageMoreKinstaImageBox">
            <p>📸 [Insert: View mode SVG for nicotine free]</p>
          </div>
          <div className='manageMoreKinstaTextBox'>
            <h6>Flum pebble icy mint</h6>
            <p>Flavors would become incredibly popular and then never be seen again.</p>
          </div>
          <div className="manageMoreKinstaImageBox">
            <p>📸 [Insert: Flum Pebble matrix image]</p>
          </div>
          <div className="manageMoreKinstaImageBox">
            <p>📸 [Insert: View mode SVG for mobile]</p>
          </div>
          <div className="manageMoreKinstaImageBox">
            <p>📸 [Insert: Swift matrix image]</p>
          </div>
          <div className='manageMoreKinstaTextBox'>
          <p>Product image processing for the constantly rotating flavors was almost a full time job.</p>
          </div>
          <div className="manageMoreKinstaImageBox">
            <p>📸 [Insert: Flum Float 3000 more flavors coming soon image]</p>
          </div>
          </div>
          </article>
        </FadeInOnScroll>

        {/* Section: The outcome */}
        <FadeInOnScroll delay={400}>
        <h3>Our Outcomes</h3>
          <br />
          <p>
            <strong>The Transformation:</strong> Six months later, E-Cig Masters operates like a different company. Clients browse live inventory on their phones at 2 AM and place orders that automatically route to the right warehouse with correct tax calculations.
          <br />
          <br />
          <strong>The office went from reactive to proactive.</strong> Instead of fielding calls about out-of-stock items, they're analyzing purchase patterns and planning inventory.
          <br />
          <br />
          <strong>Customer loyalty improved dramatically.</strong> When clients can see exactly what's available and place orders anytime, they stop shopping around.
          <br />
          <br />
          <strong>Compliance became automatic.</strong> The system handles regulatory complexity in the background, reducing legal risk while improving efficiency.
          <br />
          <br />
          <strong>The real win?</strong> E-Cig Masters now collects data on customer behavior, enabling targeted promotions and informed business decisions. They went from guessing what clients wanted to knowing what they'll order next.
          </p>
          <blockquote>“Their clients stopped calling. Not because they didn’t care—but because everything just worked.”</blockquote>
          <p>📸 [Insert: Screenshot of live store or mobile checkout experience]</p>
        </FadeInOnScroll>

        {/* Section: Tools used */}
        <FadeInOnScroll delay={450}>
          <h3>Tools used</h3>
          <br />
          <ul>
            <li><strong>WordPress</strong> – CMS used for managing site content and plugins</li>
            <li><strong>WooCommerce</strong> – E-commerce engine for checkout, and order management</li>
            <li><strong>ManageMore</strong> – Inventory and compliance software, synced to online store</li>
            <li><strong>Kinsta</strong> – Backend server that hosted ManageMore for all their warehouses</li>
            <li><strong>GSC</strong> – Monitoring search visibility, indexing, and keyword performance</li>
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
