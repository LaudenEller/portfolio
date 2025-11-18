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
  
  // You can replace these src values with your actual image paths
  const goldenEagleMobileImg = '/assets/workImages/ECigMasters/goldenEagleMobile.png';
  const goldenEagleDesktopImg = '/assets/workImages/ECigMasters/goldenEagleDesktop.png';
  const logoChoices = '/assets/workImages/ECigMasters/logoChoices.png';
  const logoSlideShowSVG = '/assets/workImages/ECigMasters/logoSlideShow.svg';
  const gumiVapes = '/assets/workImages/ECigMasters/gumiVapes.png';
  const fireVapes = '/assets/workImages/ECigMasters/fireVapes.png';
  const manageMoreUpdates = '/assets/workImages/ECigMasters/manageMoreUpdates.png';
  const horizontalGimi = '/assets/workImages/ECigMasters/horizontalGimi.png';
  const puffKiwiStrawberry = '/assets/workImages/ECigMasters/puffKiwiStrawberry.png';
  const verticalGimi = '/assets/workImages/ECigMasters/verticalGimi.png';
  const minuteMaid = '/assets/workImages/ECigMasters/minuteMaid.png';
  const flumPebble = '/assets/workImages/ECigMasters/flumPebble.png';
  const viewModeSVGMobile = '/assets/workImages/ECigMasters/viewModeSVGMobile.png';
  const viewModeSVGNicotine = '/assets/workImages/ECigMasters/viewModeSVGNicotine.png';
  const swiftMatrix = '/assets/workImages/ECigMasters/swiftMatrix.png';
  const flumFloat = '/assets/workImages/ECigMasters/flumFloat.png';
  const eCigScreenshot = '/assets/workImages/ECigMasters/eCigScreenshot.png';
  
  return (
    <article className={styles.article} style={{ backgroundColor: color }}>
      <div className={styles.container}>
        
      {/* Header / Intro */}
      <header className={styles.header}>
        <FadeInOnScroll>
          <div className={styles.seasonLabel}>FALL 2023</div>
            <div className={styles.titleBlock}>
            <h1 className={styles.title}>
              E-CIG MASTERS — WHOLESALE <br /> E-COMMERCE WITH COMPLIANCE BUILT-IN
              <span className={styles.titleDot} style={{ color: color2 }}>.</span>
            </h1>
            <div className={styles.titleRule} style={{ backgroundColor: color2 }} />
            </div>
            <p className={styles.subhead}>
              Inventory sync, regulation-aware tax setup, and mobile purchasing for a fast-moving industry
            </p>
        </FadeInOnScroll>
      </header>

      {/* Project intro section */}
      <section className={styles.section}>
        <FadeInOnScroll>
          <p className={styles.body}>
            📍 Before their e-commerce platform existed, E-Cig Masters relied on voicemail to collect wholesale orders. Clients would
            call in, leave their product list, and hope nothing was out of stock. It wasn’t scalable—and it was costing the business
            both time and credibility.
          </p>
          <FadeInOnScroll delay={60}>
            <div className={styles.screenshot}>
              <img className={styles.screenshotImg} src={goldenEagleDesktopImg} alt="Competitor desktop website" />
            </div>
            <div className={styles.screenshot}>
              <img className={styles.screenshotImg} src={goldenEagleMobileImg} alt="Competitor mobile website" />
            </div>
          </FadeInOnScroll>
            <p className={styles.body}>
              They dreamed of having what one of their competitors were offering with both regulatory software and graphic choices that matched their industry best standards.
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={60}>
          <p className={styles.body}>
            They needed a proper online store—mobile-first, inventory-aware, and regulation-compliant—that could keep up with the
            speed and complexity of the vaping industry.
          </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={90}>
          <blockquote className={styles.pullQuote}>
            <span className={styles.pullQuoteMark} style={{ color: color2 }}>“</span>
              <span className={styles.pullQuoteText}>
            They weren’t just losing time—they were losing trust.”
            </span>
            </blockquote>
          </FadeInOnScroll>  

          </section>

        {/* Section: Research and direction */}
       <section className={styles.section}>
        <FadeInOnScroll>
          <h3>Research and direction</h3>
          </FadeInOnScroll>
          
          <FadeInOnScroll delay={60}>
          <p className={styles.body}>
            We started by mapping out what mattered most to their B2B clients: up-to-date inventory, fast mobile purchasing, and
            tax-compliant checkout based on geographic location.
          </p>
          <p className={styles.body}>
            After reviewing tools and workflows, we chose to integrate their internal inventory platform <strong>ManageMore</strong>
            with <strong>WooCommerce</strong>, built on <strong>WordPress</strong> for flexibility and plugin support.
          </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={90}>
            <blockquote className={styles.pullQuote}>
              <span className={styles.pullQuoteMark} style={{ color: color2 }}>“</span>
              <span className={styles.pullQuoteText}>
                This wasn’t a Shopify situation—it needed backend power and regulatory nuance.”
              </span>
            </blockquote>
          </FadeInOnScroll>

          <FadeInOnScroll delay={120}>
          <div className={styles.screenshot}>
              <img className={styles.screenshotImg} src={logoSlideShowSVG} alt="Slideshow comparisons of their logo choices" />
            </div>
            <div className={styles.screenshot}>
              <img className={styles.screenshotImg} src={logoChoices} alt="Large versions of the logos they settled on" />
            </div>
        </FadeInOnScroll>
        </section>

        {/* Section: Implementation */}
        <section className={styles.section}>
        <FadeInOnScroll>
          <h3>Implementation</h3>
          </FadeInOnScroll>

          <FadeInOnScroll delay={60}>
          <p className={styles.body}>
            We built a new WordPress website and set up their online catalogue using WooCommerce ensuring live updates and secure order processing. Most of our time was used preparing photos for the web and building their product catalogue inside ManageMore.
          </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={90}>
          <div className={styles.screenshot}>
              <img className={styles.screenshotImg} src={fireVapes} alt="Fire graphic art of nicotine-free vapes" />
            </div>
          <p className={styles.body}>
            Setting up the backend on Kinsta allowed distribution offices in different locations to update the same inventory and process orders in the correct queue.
            <br/>
            <br/>
            We had to configure a new online store in ManageMore by creating a client database, a product database, a tax and payments database with extensive state-by-state configurations.
          </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={120}>
          <div className={styles.screenshot}>
              <img className={styles.screenshotImg} src={gumiVapes} alt="Gumi .jpg and .png comparison examples" />
            </div>
          <p className={styles.body}>
            We had to prepare all the product images for online and mobile presentations.
            </p>
        </FadeInOnScroll>
        </section>

        {/* Section: Challenges in the details */}
        <section className={styles.section}>
        <FadeInOnScroll>
        <h3>Challenges in the details</h3>
        </FadeInOnScroll>

        <FadeInOnScroll delay={60}>
          <p className={styles.body}>
            The biggest challenge was keeping the online catalog stable while product names, pricing, and legal restrictions were in flux.
            A single mistake in product info could trigger compliance issues or customer confusion.
          </p>
          <p className={styles.body}>
            We built flexible category structures and validation rules to reduce manual errors and keep listings compliant—even when the
            industry shifted overnight.
          </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={90}>
          <blockquote className={styles.pullQuote}>
            <span className={styles.pullQuoteMark} style={{ color: color2 }}>"</span>
            <span className={styles.pullQuoteText}>
            In this space, speed matters—but so does compliance.”
            </span>
            </blockquote>
          <div className={styles.screenshot}>
              <img className={styles.screenshotImg} src={manageMoreUpdates} alt="Product update interface on ManageMore" />
            </div>
          </FadeInOnScroll>
        </section>

        {/* Section: ManageMore & Kinsta */}
        <section className={styles.section}>
            <FadeInOnScroll>
        <h3>Architecting the Digital Backbone: ManageMore on Kinsta</h3>
        </FadeInOnScroll>

          <FadeInOnScroll delay={60}>
          <p className={styles.body}>
            Backend Synchronization: Leveraging Kinsta hosting, we enabled distribution offices in different locations to update the same inventory in real-time, ensuring accurate stock levels and efficient order queuing
          <br/>
          <br/>
            ManageMore Configuration: This involved meticulously configuring a new online store within ManageMore, building extensive client, product, and tax databases with granular state-by-state rules.
          </p>
            <div className={styles.screenshot}>
              <img className={styles.screenshotImg} src={verticalGimi} alt="Vertical Gimi yellow E-Cigarettes image" />
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={90}>
          <div className={styles.screenshot}>
              <img className={styles.screenshotImg} src={puffKiwiStrawberry} alt="2000 puff Kiwi Strawberry image" />
            </div>
          <p className={styles.body}>
            Visualizing the Product: Preparing thousands of product images for optimal online and mobile presentation, ensuring a visually rich and accurate catalog.
          </p>
          </FadeInOnScroll>

          <FadeInOnScroll elay={120}>
          <div className={styles.screenshot}>
              <img className={styles.screenshotImg} src={horizontalGimi} alt="horizontal Gimi yellow e-cigarette image" />
            </div>
            <p className={styles.body}>
              Automated Compliance Logic: The most demanding aspect was the intricate configuration of ManageMore's product catalog and the automated tax rules. The sheer volume of constantly changing products, regulations, and tax implications across states demanded continuous updates and meticulous attention.
            </p>
          </FadeInOnScroll>          
        </section>

        {/* Section: Product Matrixes */}
        <section className={styles.section}>
            <FadeInOnScroll>
            <h3>Product Matrix Hell</h3>
            </FadeInOnScroll>
          
          <FadeInOnScroll delay={60}>
          <p className={styles.body}>
            Not only did every item come in 45 flavors, the choices changed every couple weeks and they offered several purchase size options for many products - necessitating even more flexibility and likewise careful and accurate cataloguing.
          </p>
          </FadeInOnScroll>
          
          <FadeInOnScroll delay={90}>
          <div className={styles.screenshot}>
              <img className={styles.screenshotImg} src={minuteMaid} alt="Minute Maid juice matrix image" />
            </div>
          <p className={styles.body}>
            Preparing thousands of product images for optimal online and mobile presentation, ensuring a visually rich and accurate catalog.
          </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={120}>
          <div className={styles.screenshot}>
              <img className={styles.screenshotImg} src={viewModeSVGNicotine} alt="View mode SVG for nicotine free" />
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={150}>
            <h6>Flum pebble icy mint</h6>
            <p className={styles.body}>
              Flavors would become incredibly popular and then never be seen again.
              </p>
          <div className={styles.screenshot}>
              <img className={styles.screenshotImg} src={flumPebble} alt="Flum Pebble matrix image" />
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={180}>
          <div className={styles.screenshot}>
              <img className={styles.screenshotImg} src={viewModeSVGMobile} alt="View mode SVG for mobile" />
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={210}>
          <div className={styles.screenshot}>
              <img className={styles.screenshotImg} src={swiftMatrix} alt="Swift matrix image" />
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={240}>
          <p classNmae={styles.body}>
            Product image processing for the constantly rotating flavors was almost a full time job.
            </p>
          <div className={styles.screenshot}>
              <img className={styles.screenshotImg} src={flumFloat} alt="Flum Float 3000 more flavors coming soon image" />
            </div>
          </FadeInOnScroll>
</section>

        {/* Section: The outcome */}
        <section className={styles.section}>
        <FadeInOnScroll>
        <h3>Our Outcomes</h3>
        </FadeInOnScroll>
        <FadeInOnScroll delay={60}>
          <br />
          <p className={styles.body}>
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
          </FadeInOnScroll>
          
          <FadeInOnScroll delay={90}>
          <blockquote className={styles.pullQuote}>
            <span className={styles.pullQuoteMark} style={{color: color2 }}>
              "
              </span>
            <span className={styles.pullQuoteText}>
              “Their clients stopped calling. Not because they didn’t care—but because everything just worked.”
              </span>
              </blockquote>
        <div className={styles.screenshot}>
              <img className={styles.screenshotImg} src={eCigScreenshot} alt="Screenshot of live store or mobile checkout experience" />
            </div>
        </FadeInOnScroll>
        </section>

        {/* Section: Tools used */}
        <section className={styles.section}>
        <FadeInOnScroll>
          <h3>Tools used</h3>
          </FadeInOnScroll>
          <FadeInOnScroll delay={60}>
          <br />
          <ul>
            <li><strong>WordPress</strong> – CMS used for managing site content and plugins</li>
            <li><strong>WooCommerce</strong> – E-commerce engine for checkout, and order management</li>
            <li><strong>ManageMore</strong> – Inventory and compliance software, synced to online store</li>
            <li><strong>Kinsta</strong> – Backend server that hosted ManageMore for all their warehouses</li>
            <li><strong>GSC</strong> – Monitoring search visibility, indexing, and keyword performance</li>
          </ul>
        </FadeInOnScroll>
      </section>

 {/* Article footer with closing note */}
      <footer className={styles.articleFooter}>
          <p className={styles.note}>
            From static mailers to dynamic inventory-driven e-commerce
            <span className={styles.dot} style={{ color: color2}}>
              .
              </span>
              </p>
      </footer>
      </div>
    </article>
  );
};

export default ECigMasters;
