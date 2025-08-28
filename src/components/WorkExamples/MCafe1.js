import FadeInOnScroll from './FadeInOnScroll';
import styles from './MCafe1.module.css';

/**
 * M Cafe component
 * 
 * This component renders a detailed case study article about the
 * M Cafe online ordering project. It highlights the
 * challenges, research, implementation, and outcomes of building
 * a POS-integrated online ordering website fully integrated with
 * their online presence, SEO configuration and popular delivery apps.
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

const MCafe1 = () => {
  return (
    <article className={`${styles.article} ${styles.imageRight}`}>

      {/* Article header with animated title and byline */}
      <header className={styles.articleHeading}>
        <FadeInOnScroll>
          <span className={styles.date}>MARCH - AUGUST 2025</span>
          <h2 className={styles.articleHeading__title}>
            M CAFE - ONLINE 
          </h2>
          <h2>ORDERING</h2>
            <div className={styles.redBar}></div>
        </FadeInOnScroll>
        <FadeInOnScroll delay={50}>
          <span className={styles.articleHeading__byline}><strong>New website with delivery app integration for a ghost kitchen model</strong></span>
        </FadeInOnScroll>
        </header>
        <br></br>
        {/* Main article content with multiple sections animated on scroll */}
        <div className={`${styles.article__content} ${styles.revealContent}`}>
        
          {/* Section: Where We Started */}
          <FadeInOnScroll delay={100}>
            {/* <h3>Where we started</h3> */}
            <p>
              After 25 years serving natural foods to LA’s Hollywood crowd, M Café got priced out of their brick-and-mortar.
              Pivoting to a modern model, the team launched a <strong>ghost kitchen</strong>—where online orders are everything.
            </p>
            <br></br>
            <p>
              But their set up was ancient with legacy POS software and a basic informative website. 
              They were dependent on delivery platforms and expensive middleware technology. They needed a fix, fast.
            </p>
            <br></br>
            <blockquote>“With margins eating more than 30% in fees, our business model needs to change.”</blockquote>
            <br></br>
            <p>📸 [Insert: Screenshot of new website]</p>
          </FadeInOnScroll>

          {/* Section: Research and Direction */}
          <FadeInOnScroll delay={150}>
            <h3>Research and direction</h3>
            <p>
              The project kicked off with a deep dive into delivery app integrations. I reviewed and compared over a dozen
              platforms—from Otter to Chowly to native APIs—looking for the smartest way to unify their backend.
            </p>
            <br></br>
            <p>
              Ultimately, I zero'd in on a brand new feature in their current POS system, <strong>Revel</strong>, that could
              connect directly to DoorDash Drive and reduce third-party fees.
            </p>
            <br></br>
            <blockquote>“Speed to market was critical. We didn’t need more tools—we needed cheaper ones.”</blockquote>
            <br></br>
            <p>📸 [Insert: screen recording of Milanote board]</p>
          </FadeInOnScroll>

          {/* Section: Building The Bridge */}
          <FadeInOnScroll delay={200}>
            <h3>Building the bridge</h3>
            <p>We migrated the restaurant’s new <strong>Squarespace</strong> website to act as the central hub. From there, I configured:</p>
            <ul>
              <li>SEO-optimized landing pages to help convert traffic</li>
              <li>Integrated DoorDash Drive via Revel to handle deliveries</li>
              <li>Tuned checkout flows to steer customers away from third-party apps</li>
            </ul>
            <p>
              I also ensured the restaurant’s online ordering was fully mobile-responsive and synced across delivery platforms.
            </p>
            <br></br>
            <p>📸 [Insert: Screenshot of website order page or Revel dashboard]</p>
          </FadeInOnScroll>

          {/* Section: The Ugle Middle */}
          <FadeInOnScroll delay={250}>
            <h3>The ugly middle</h3>
            <p>
              Nothing works perfectly on the first try. We spent months in customer support limbo troubleshooting bugs between
              Revel and DoorDash.
            </p>
            <br></br>
            <p>Orders failed. Menus got lost. Support pointed fingers.</p>
            <br></br>
            <blockquote>“Some nights I felt more like a translator than a developer.”</blockquote>
            <br></br>
            <p>
              But the work paid off—I eventually stabilized the stack with clean data flows and direct, traceable orders.
            </p>
            <br></br>
            <p>📸 [Insert: Email thread or backend bug log—redacted]</p>
          </FadeInOnScroll>

          {/* Section: SEO & discoverability */}
          <FadeInOnScroll delay={300}>
          <h3>SEO & discoverability</h3>
          <p>
            While integration was the priority, SEO wasn’t optional. As a ghost kitchen, M Café lives or dies by its online
            visibility.
          </p>
          <ul>
            <li>Metadata and page speed</li>
            <li>Keyword targeting for local food searches</li>
            <li>Open graph and link previews for social sharing</li>
          </ul>
          <p>📸 [Insert: SEO dashboard or site preview]</p>
          </FadeInOnScroll>

          {/* Section: The outcome */}
          <FadeInOnScroll delay={350}>
          <h3>The outcome</h3>
          <p>
            M Café now operates a <strong>fully integrated ghost kitchen</strong> with a lean, connected digital ecosystem:
          </p>
          <ul>
            <li>Delivery fees dropped significantly by rerouting traffic from third-party apps</li>
            <li>Website orders go directly to the POS, eliminating mutliple KDS tablets</li>
            <li>Online visibility improved with optimized SEO and consistent social linking</li>
            <li>The owners regained <strong>control over their customer experience</strong>—and margins</li>
          </ul>
          <blockquote>“The tech works. The team’s breathing easier. And customers get their food faster.”</blockquote>
          <br></br>
          <p>📸 [Insert: final screenshot of full flow—website to delivery confirmation]</p>
          </FadeInOnScroll>

          {/* Section: Tools used */}
          <FadeInOnScroll delay={400}>
            <h3>Tools used</h3>
            <ul>
              <li><strong>Squarespace</strong> – Built and configured the primary marketing and ordering website</li>
              <li><strong>Revel POS</strong> – Connected in-store operations to delivery services and handled online order processing</li>
              <li><strong>DoorDash Drive</strong> – Integrated directly into the POS to power low-fee delivery from M Café’s site</li>
              <li><strong>DoorDash Marketplace & Uber Eats</strong> – Managed and optimized listings while helping reroute traffic toward direct ordering</li>
              <li><strong>Google Search Console</strong> – Monitored site indexing, page speed, and search keyword performance</li>
              <li><strong>Instagram</strong> – Aligned content and bio links with web traffic strategy to convert more delivery customers</li>
            </ul>
          </FadeInOnScroll>
      </div>

      {/* Article footer with closing note */}
      <footer className={styles.article__footer}>
          <p className={styles.note}>A modern tech shift, built for speed and simplicity.</p>
      </footer>
    </article>
  );
};

export default MCafe1;
