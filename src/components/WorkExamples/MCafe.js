import FadeInOnScroll from './FadeInOnScroll';
import styles from './MCafe.module.css';

const MCafe = ({ color, color2 }) => {
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

export default MCafe;