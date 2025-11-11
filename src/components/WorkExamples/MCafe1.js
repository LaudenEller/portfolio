// import FadeInOnScroll from './FadeInOnScroll';
// import styles from './MCafe1.module.css';

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

// const MCafe1 = ({color, color2,}) => {
//   return (
//     <article style={{backgroundColor: color}} className={`${styles.article} ${styles.imageRight}`}>

//       {/* Article header with animated title and byline */}
//       <header className={styles.articleHeading}>
//         <FadeInOnScroll>
//           <span style={{color: color2}} className={styles.date}>MARCH - AUGUST 2025</span>
//           <h2 className={styles.articleHeading__title}>
//             M CAFE - ONLINE 
//           </h2>
//           <h2>ORDERING</h2>
//             <div style={{backgroundColor: color2}} className={styles.redBar}></div>
//         </FadeInOnScroll>
//         <FadeInOnScroll delay={50}>
//           <span className={styles.articleHeading__byline}><strong>New website with delivery app integration for a ghost kitchen model</strong></span>
//         </FadeInOnScroll>
//         </header>
//         <br></br>
//         {/* Main article content with multiple sections animated on scroll */}
//         <div className={`${styles.article__content} ${styles.revealContent}`}>
        
//           {/* Section: Where We Started */}
//           <FadeInOnScroll delay={100}>
//             {/* <h3>Where we started</h3> */}
//             <p>
//               After 25 years serving natural foods to LA’s Hollywood crowd, M Café got priced out of their brick-and-mortar.
//               Pivoting to a modern model, the team launched a <strong>ghost kitchen</strong>—where online orders are everything.
//             </p>
//             <br></br>
//             <p>
//               But their set up was ancient with legacy POS software and a basic informative website. 
//               They were dependent on delivery platforms and expensive middleware technology. They needed a fix, fast.
//             </p>
//             <br></br>
//             <blockquote>“With margins eating more than 30% in fees, our business model needs to change.”</blockquote>
//             <br></br>
//             <p>📸 [Insert: Screenshot of new website]</p>
//           </FadeInOnScroll>

//           {/* Section: Research and Direction */}
//           <FadeInOnScroll delay={150}>
//             <h3>Research and direction</h3>
//             <p>
//               The project kicked off with a deep dive into delivery app integrations. I reviewed and compared over a dozen
//               platforms—from Otter to Chowly to native APIs—looking for the smartest way to unify their backend.
//             </p>
//             <br></br>
//             <p>
//               Ultimately, I zero'd in on a brand new feature in their current POS system, <strong>Revel</strong>, that could
//               connect directly to DoorDash Drive and reduce third-party fees.
//             </p>
//             <br></br>
//             <blockquote>“Speed to market was critical. We didn’t need more tools—we needed cheaper ones.”</blockquote>
//             <br></br>
//             <p>📸 [Insert: screen recording of Milanote board]</p>
//           </FadeInOnScroll>

//           {/* Section: Building The Bridge */}
//           <FadeInOnScroll delay={200}>
//             <h3>Building the bridge</h3>
//             <p>We migrated the restaurant’s new <strong>Squarespace</strong> website to act as the central hub. From there, I configured:</p>
//             <ul>
//               <li>SEO-optimized landing pages to help convert traffic</li>
//               <li>Integrated DoorDash Drive via Revel to handle deliveries</li>
//               <li>Tuned checkout flows to steer customers away from third-party apps</li>
//             </ul>
//             <p>
//               I also ensured the restaurant’s online ordering was fully mobile-responsive and synced across delivery platforms.
//             </p>
//             <br></br>
//             <p>📸 [Insert: Screenshot of website order page or Revel dashboard]</p>
//           </FadeInOnScroll>

//           {/* Section: The Ugle Middle */}
//           <FadeInOnScroll delay={250}>
//             <h3>The ugly middle</h3>
//             <p>
//               Nothing works perfectly on the first try. We spent months in customer support limbo troubleshooting bugs between
//               Revel and DoorDash.
//             </p>
//             <br></br>
//             <p>Orders failed. Menus got lost. Support pointed fingers.</p>
//             <br></br>
//             <blockquote>“Some nights I felt more like a translator than a developer.”</blockquote>
//             <br></br>
//             <p>
//               But the work paid off—I eventually stabilized the stack with clean data flows and direct, traceable orders.
//             </p>
//             <br></br>
//             <p>📸 [Insert: Email thread or backend bug log—redacted]</p>
//           </FadeInOnScroll>

//           {/* Section: SEO & discoverability */}
//           <FadeInOnScroll delay={300}>
//           <h3>SEO & discoverability</h3>
//           <p>
//             While integration was the priority, SEO wasn’t optional. As a ghost kitchen, M Café lives or dies by its online
//             visibility.
//           </p>
//           <ul>
//             <li>Metadata and page speed</li>
//             <li>Keyword targeting for local food searches</li>
//             <li>Open graph and link previews for social sharing</li>
//           </ul>
//           <p>📸 [Insert: SEO dashboard or site preview]</p>
//           </FadeInOnScroll>

//           {/* Section: The outcome */}
//           <FadeInOnScroll delay={350}>
//           <h3>The outcome</h3>
//           <p>
//             M Café now operates a <strong>fully integrated ghost kitchen</strong> with a lean, connected digital ecosystem:
//           </p>
//           <ul>
//             <li>Delivery fees dropped significantly by rerouting traffic from third-party apps</li>
//             <li>Website orders go directly to the POS, eliminating mutliple KDS tablets</li>
//             <li>Online visibility improved with optimized SEO and consistent social linking</li>
//             <li>The owners regained <strong>control over their customer experience</strong>—and margins</li>
//           </ul>
//           <blockquote>“The tech works. The team’s breathing easier. And customers get their food faster.”</blockquote>
//           <br></br>
//           <p>📸 [Insert: final screenshot of full flow—website to delivery confirmation]</p>
//           </FadeInOnScroll>

//           {/* Section: Tools used */}
//           <FadeInOnScroll delay={400}>
//             <h3>Tools used</h3>
//             <ul>
//               <li><strong>Squarespace</strong> – Built and configured the primary marketing and ordering website</li>
//               <li><strong>Revel POS</strong> – Connected in-store operations to delivery services and handled online order processing</li>
//               <li><strong>DoorDash Drive</strong> – Integrated directly into the POS to power low-fee delivery from M Café’s site</li>
//               <li><strong>DoorDash Marketplace & Uber Eats</strong> – Managed and optimized listings while helping reroute traffic toward direct ordering</li>
//               <li><strong>Google Search Console</strong> – Monitored site indexing, page speed, and search keyword performance</li>
//               <li><strong>Instagram</strong> – Aligned content and bio links with web traffic strategy to convert more delivery customers</li>
//             </ul>
//           </FadeInOnScroll>
//       </div>

//       {/* Article footer with closing note */}
//       <footer className={styles.article__footer}>
//           <p className={styles.note}>A modern tech shift, built for speed and simplicity.</p>
//       </footer>
//     </article>
//   );
// };

// export default MCafe1;

import FadeInOnScroll from './FadeInOnScroll';
import styles from './MCafe1.module.css';

const MCafe1 = ({ color, color2 }) => {
  // You can replace these src values with your actual image paths
  const heroImg = '/assets/workImages/mcafe/hero.png';
  const boardImg = '/assets/workImages/mcafe/board.png';
  const posImg = '/assets/workImages/mcafe/pos.png';
  const orderingImg = '/assets/workImages/mcafe/ordering.png';
  const siteImg = '/assets/workImages/mcafe/site.png';

  return (
    <article className={styles.article} style={{ backgroundColor: color }}>
      <div className={styles.container}>
        {/* Header / Intro */}
        <header className={styles.header}>
          <FadeInOnScroll>
            <div className={styles.seasonLabel}>SPRING 2025</div>
            <div className={styles.titleBlock}>
              <h1 className={styles.title}>
                M CAFE - ONLINE <br /> ORDERING<span className={styles.titleDot} style={{ color: color2 }}>.</span>
              </h1>
              <div className={styles.titleRule} style={{ backgroundColor: color2 }} />
            </div>
            <p className={styles.subhead}>
              New website with delivery app integration for a ghost kitchen model
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={60}>
            <div className={styles.screenshot}>
              <img className={styles.screenshotImg} src={heroImg} alt="M Cafe website preview" />
            </div>
          </FadeInOnScroll>
        </header>

        {/* Narrative block 1 */}
        <section className={styles.section}>
          <FadeInOnScroll>
            <p className={styles.body}>
              After 25 years serving natural foods to LA’s Hollywood crowd, iconic M Cafe got priced
              out of their brick & mortar. Pivoting to the modern landscape, the owners decided to
              launch a <strong>ghost kitchen</strong> concept — where online orders are everything.
            </p>
            <p className={styles.body}>
              But their set up was ancient with legacy POS software and a basic informative website.
              They were dependent on delivery platforms and expensive middleware technology.
              They needed a fix, fast.
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={60}>
            <blockquote className={styles.pullQuote}>
              <span className={styles.pullQuoteMark} style={{ color: color2 }}>“</span>
              <span className={styles.pullQuoteText}>
                In the over-crowded market of delivery fulfillment, many restaurants are flailing
                with twelve software subscriptions and three KDS tablets, losing time and struggling
                with fees.
              </span>
            </blockquote>
          </FadeInOnScroll>

          <FadeInOnScroll delay={90}>
            <p className={styles.body}>
              M Cafe was losing nearly 30% to software subscriptions and platform fees so we built a
              website that offers delivery at a lower price to the customers, while increasing margins
              for the business.
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={120}>
            <div className={styles.screenshot}>
              <img className={styles.screenshotImg} src={boardImg} alt="Project proposal board" />
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={150}>
            <p className={styles.body}>
              The project kicked off with a deep dive into delivery app integrations. I reviewed and
              compared over a dozen platforms—from Otter to Chowly to native APIs—looking for the
              smartest way to unify their backend.
            </p>
            <p className={styles.body}>
              Ultimately, I zero’d in on a brand new feature in their current POS system, Revel, that
              could connect directly to DoorDash Drive and reduce third‑party fees.
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={180}>
            <blockquote className={styles.pullQuote}>
              <span className={styles.pullQuoteMark} style={{ color: color2 }}>“</span>
              <span className={styles.pullQuoteText}>
                In‑House ordering with DoorDash delivery but no commission.
              </span>
            </blockquote>
          </FadeInOnScroll>
        </section>

        {/* POS Integration */}
        <section className={styles.section}>
          <FadeInOnScroll>
            <h2 className={styles.h2}>POS Integration</h2>
          </FadeInOnScroll>

          <FadeInOnScroll delay={60}>
            <div className={styles.screenshot}>
              <img className={styles.screenshotImg} src={posImg} alt="Revel POS integration" />
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={90}>
            <h3 className={styles.h3}>Revel needs a makeover, but it does everything</h3>
            <p className={styles.body}>
              Revel is a leading POS provider for decades and their graphics look it. Though this client
              initially wanted a fully integrated shopping experience, Revel’s ample features and dated
              multi‑site checkout would have to be born for now.
            </p>
            <p className={styles.body}>
              Revel integrates their website, ordering platforms like Uber Eats etc, third‑party
              payments, delivery logistics and CRM without taking any commission.
            </p>
          </FadeInOnScroll>
        </section>

        {/* Online ordering avoids fees */}
        <section className={styles.section}>
          <FadeInOnScroll>
            <h2 className={styles.h2}>Online ordering avoids delivery fees</h2>
          </FadeInOnScroll>

          <FadeInOnScroll delay={60}>
            <div className={styles.screenshot}>
              <img className={styles.screenshotImg} src={orderingImg} alt="Direct ordering flow" />
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={90}>
            <blockquote className={styles.pullQuote}>
              <span className={styles.pullQuoteMark} style={{ color: color2 }}>“</span>
              <span className={styles.pullQuoteText}>
                Between delivery platforms, middleware providers, software subscriptions and a website,
                we lost over 30 cents on the dollar.
              </span>
            </blockquote>
          </FadeInOnScroll>
        </section>

        {/* With Revel, customers pay the fees */}
        <section className={styles.section}>
          <FadeInOnScroll>
            <h3 className={styles.h3}>With Revel, customers pay the fees</h3>
            <p className={styles.body}>
              M Cafe’s new website increases the value of their core customer orders by significant
              margins while allowing the owner to stop doing the deliveries himself, and focus on
              growing his business.
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={60}>
            <div className={styles.screenshot}>
              <img className={styles.screenshotImg} src={siteImg} alt="Site ordering example" />
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={90}>
            <p className={styles.body}>
              As the new location opened, we repurposed their Squarespace site to act as the gateway to
              their online ordering platform and added a new location to their Revel POS software.
              We revamped the menu and added all new photos. We then connected the website to Uber
              Eats and DoorDash so the new location could be found on popular apps.
            </p>
            <p className={styles.body}>
              Launch day arrived with a beautiful new website and plenty of content for their socials.
              Everything was perfect… until it wasn’t.
            </p>
          </FadeInOnScroll>
        </section>

        {/* Integration problem section */}
        <section className={styles.section}>
          <FadeInOnScroll>
            <h2 className={styles.h2}>Revel’s new DoorDash Drive integration, didn’t integrate</h2>
            <p className={styles.body}>
              A critical Revel ⇄ DoorDash Drive automation failed. We hit a rare “unicorn case” where
              DoorDash Marketplace and Drive accounts became entangled, blocking website order
              processing.
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={60}>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                6 months, ~25 hours on support calls across multiple teams
              </li>
              <li className={styles.listItem}>
                Inconsistent responses, long gaps, repeated non‑solutions
              </li>
              <li className={styles.listItem}>
                Required deep technical sleuthing and escalation pathfinding
              </li>
            </ul>
          </FadeInOnScroll>

          <FadeInOnScroll delay={90}>
            <p className={styles.body}>
              I became the de facto product expert—documenting the integration behavior, identifying the
              misconfiguration, and guiding both Revel and DoorDash support through the exact steps to
              correct it and separate Marketplace from Drive.
            </p>
          </FadeInOnScroll>

          {/* The Wins */}
          <FadeInOnScroll delay={120}>
            <div className={styles.winsBlock}>
              <div className={styles.winsTitle}>The Wins:</div>
              <ul className={styles.wins}>
                <li className={styles.winsItem}>
                  <span className={styles.winsBullet} />
                  <span className={styles.winsUnderline}>Location‑based metrics</span>
                </li>
                <li className={styles.winsItem}>
                  <span className={styles.winsBullet} />
                  <span className={styles.winsUnderline}>Online orders</span>
                </li>
                <li className={styles.winsItem}>
                  <span className={styles.winsBullet} />
                  <span className={styles.winsUnderline}>DoorDash delivery</span>
                </li>
                <li className={styles.winsItem}>
                  <span className={styles.winsBullet} />
                  <span className={styles.winsUnderline}>Customers pay fees</span>
                </li>
                <li className={styles.winsItem}>
                  <span className={styles.winsBullet} />
                  <span className={styles.winsUnderline}>Zero commissions</span>
                </li>
              </ul>
            </div>
          </FadeInOnScroll>
        </section>

        {/* SEO / Marketing section */}
        <section className={styles.section}>
          <FadeInOnScroll>
            <blockquote className={styles.pullQuote}>
              <span className={styles.pullQuoteMark} style={{ color: color2 }}>“</span>
              <span className={styles.pullQuoteText}>
                Restaurants live or die by the whims of online fads and trends
              </span>
            </blockquote>
          </FadeInOnScroll>

          <FadeInOnScroll delay={60}>
            <p className={styles.body}>
              Creating online engagement is crucial for a ghost kitchen and isn’t only driven by bots,
              but you do have to be friendly with them.
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={90}>
            <div className={styles.screenshot}>
              <img className={styles.screenshotImg} src={boardImg} alt="Search console/settings example" />
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={120}>
            <div className={styles.bodyTight}>
              <p>
                <strong className={styles.leadLabel}>M Cafe offers modern macrobiotic meals in Los Angeles</strong> — our uncompromising
                chef‑crafted meals are available for pickup or delivery from La Brea and Lincoln Heights.
              </p>
              <p>
                Having perfect keywords tells AI indexing bots who we are and how to find us, and who to
                recommend us to…
              </p>
              <p>
                <strong className={styles.leadLabel}>On‑page and off‑page synergy —</strong> Both are needed to drive SEO. Configuring on‑page
                SEO with a unified social media and online presence is the bedrock for driving both
                conventional search engine and delivery platform results. I set up all the tools M Cafe
                needs to champion their digital presence going forward.
              </p>
              <p>Next is the part they’re already good at, impressing customers.</p>
            </div>
          </FadeInOnScroll>
        </section>

        {/* Footer note */}
        <footer className={styles.articleFooter}>
          <p className={styles.note}>A modern tech shift, built for speed and simplicity.</p>
        </footer>
      </div>
    </article>
  );
};

export default MCafe1;