import FadeInOnScroll from './FadeInOnScroll';
import styles from './MCafe1.module.css';

/**
 * VallartaBnb Component
 * 
 * This component displays a case study article for VallartaBnb,
 * showcasing the development of a custom Bubble web app integrated with Lodgify
 * to unify local vacation rental listings and boost direct bookings in Puerto Vallarta.
 * 
 * Features:
 * - Animated scroll-based fade-ins using FadeInOnScroll component
 * - Clear structure with sections covering project start, research, implementation, challenges, outcomes, and tools used
 * - Emphasis on centralizing listings and empowering local hosts
 * - Placeholders for screenshots, diagrams, and UI examples to visually support the content
 * 
 * @component
 * @returns {JSX.Element} Case study article for VallartaBnb project
 */
const VallartaBnb = () => {
  return (
    <article className={`${styles.article} ${styles.imageRight}`}>
      {/* Article header with title and byline, animated on scroll */}
      <header className={styles.articleHeading}>
        <FadeInOnScroll>
          <h2 className={styles.articleHeading__title}>
            VALLARTABNB — BUBBLE WEB APP AND LODGIFY INTEGRATION FOR LOCAL VACATION RENTALS
          </h2>
          <span className={styles.dot}>.</span>
        </FadeInOnScroll>
        <FadeInOnScroll delay={50}>
          <span className={styles.articleHeading__byline}>
            <strong>
              Unifying rental listings and boosting direct bookings for property owners in Puerto Vallarta
            </strong>
          </span>
        </FadeInOnScroll>
      </header>

      {/* Main article content with fade-in animated sections */}
      <div className={`${styles.article__content} ${styles.revealContent}`}>
        
        {/* Section: Where we started */}
        <FadeInOnScroll delay={100}>
          <h3>Where we started</h3>
          <p>📍 <strong>Client:</strong> VallartaBnb</p>
          <p>
            In Puerto Vallarta, many property owners manage only a handful of vacation rentals but lose time and revenue
            paying high fees to multiple listing platforms.
          </p>
          <p>
            These owners needed a better way to centralize their listings and increase direct bookings while still leveraging
            popular platforms like Airbnb.
          </p>
          <blockquote>“Local hosts were being sidelined by big platforms—and their margins suffered.”</blockquote>
          <p>📸 [Insert: Screenshot of multiple listing platforms or fee breakdown]</p>
        </FadeInOnScroll>

        {/* Section: Research and direction */}
        <FadeInOnScroll delay={150}>
          <h3>Research and direction</h3>
          <p>
            We developed a custom web app on <strong>Bubble</strong> to unify all rental listings in a single branded website,
            creating a direct connection to potential guests.
          </p>
          <p>
            To manage synchronization across Booking.com, Airbnb, and Vrbo, we integrated <strong>Lodgify</strong>, giving
            VallartaBnb the ability to invite other hosts to list and manage their properties collaboratively from one platform.
          </p>
          <blockquote>“We wanted to empower hosts to reclaim control—without sacrificing reach or convenience.”</blockquote>
          <p>📸 [Insert: Workflow diagram of Bubble app and Lodgify sync]</p>
        </FadeInOnScroll>

        {/* Section: Implementation */}
        <FadeInOnScroll delay={200}>
          <h3>Implementation</h3>
          <p>
            The Bubble app acts as a front-facing website, showcasing unified listings with a local brand feel while supporting
            direct bookings that avoid costly third-party fees.
          </p>
          <ul>
            <li>Seamless property sync across major platforms using Lodgify’s APIs</li>
            <li>Collaboration features for hosts to manage multiple properties together</li>
            <li>Optimized booking flows focused on trust and ease of use</li>
          </ul>
          <p>📸 [Insert: Screenshot of Bubble app UI or Lodgify dashboard]</p>
        </FadeInOnScroll>

        {/* Section: Challenges */}
        <FadeInOnScroll delay={250}>
          <h3>Challenges</h3>
          <p>
            Integrating listings across platforms with different APIs and data structures required careful mapping and
            ongoing synchronization to prevent double bookings and data inconsistencies.
          </p>
          <blockquote>“We had to keep data flowing smoothly—no matter how many platforms or hosts joined.”</blockquote>
          <p>📸 [Insert: Example sync error resolution or data mapping schema]</p>
        </FadeInOnScroll>

        {/* Section: The outcome */}
        <FadeInOnScroll delay={300}>
          <h3>The outcome</h3>
          <p>
            VallartaBnb now provides a centralized, branded home for local hosts that increases direct bookings and reduces
            dependency on large platforms.
          </p>
          <ul>
            <li>Hosts save on third-party fees by converting platform traffic into direct reservations</li>
            <li>Multiple hosts collaborate effectively within one system</li>
            <li>The app scales to onboard new hosts and properties easily</li>
          </ul>
          <blockquote>“Built to empower local hosts—not platforms.”</blockquote>
          <p>📸 [Insert: Final app homepage or host collaboration screen]</p>
        </FadeInOnScroll>

        {/* Section: Tools used */}
        <FadeInOnScroll delay={350}>
          <h3>Tools used</h3>
          <ul>
            <li><strong>Bubble</strong> – No-code web app platform for unified listing and booking experience</li>
            <li><strong>Lodgify</strong> – Channel manager syncing listings across Booking.com, Airbnb, and Vrbo</li>
            <li><strong>API integrations</strong> – Custom sync and data management between platforms</li>
          </ul>
        </FadeInOnScroll>
      </div>

      {/* Footer with a closing statement */}
      <footer className={styles.article__footer}>
        <FadeInOnScroll delay={400}>
          <p className={styles.note}>
            Built to empower local hosts — not platforms
            <span className={styles.dot}>.</span>
          </p>
        </FadeInOnScroll>
      </footer>
    </article>
  );
};

export default VallartaBnb;
