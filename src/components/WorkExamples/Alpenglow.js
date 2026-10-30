import FadeInOnScroll from './FadeInOnScroll';
import styles from './MCafe.module.css';

/**
 * Alpenglow Component
 * 
 * This component presents a detailed case study article for Alpenglow,
 * a luxury real estate agency in Puerto Vallarta, Mexico. It highlights
 * the branding, multilingual AI chatbot, MLS integration, and WordPress development
 * that deliver a high-end experience for international buyers.
 * 
 * Features:
 * - Animated fade-in content sections using FadeInOnScroll component
 * - Structured semantic HTML with header, multiple content sections, and footer
 * - Focus on luxury branding, multilingual AI sales support, and backend engineering
 * - Placeholders for images and diagrams to enhance storytelling
 * 
 * @component
 * @returns {JSX.Element} Case study article for Alpenglow real estate platform
 */
const Alpenglow = () => {
  return (
    <article className={`${styles.article} ${styles.textOnly}`}>
      {/* Article header with title and byline animated on scroll */}
      <header className={styles.articleHeading}>
        <FadeInOnScroll>
          <h2 className={styles.articleHeading__title}>
            ALPENGLOW — BRANDING, WORDPRESS, AND AI CHATBOT FOR LUXURY REAL ESTATE
          <span className={styles.dot}>.</span>
          </h2>
        </FadeInOnScroll>
        <FadeInOnScroll delay={50}>
          <span className={styles.articleHeading__byline}>
            <strong>
              Multilingual automation, MLS integration, and a modern brand identity for global buyers in Mexico
            </strong>
          </span>
        </FadeInOnScroll>
      </header>

      {/* Main article content with fade-in animated sections */}
      <div className={`${styles.article__content} ${styles.revealContent}`}>
        <br></br>
        {/* Section: Where we started */}
        <FadeInOnScroll delay={100}>
          <h3>Where we started</h3>
          <p>📍 <strong>Client:</strong> Alpenglow</p>
          <p>
            Alpenglow is a new luxury real estate agency based in Puerto Vallarta, Mexico, serving international clients—
            especially English-speaking buyers exploring second homes and vacation properties.
          </p>
          <p>
            In a market where many real estate sites feel dated or slow, the challenge was to build a platform that looked
            global, performed locally, and guided clients seamlessly toward a sale.
          </p>
          <blockquote>“They needed to look like a brand from L.A., not just another listing site in Mexico.”</blockquote>
          {/* 📸 Media to add (M2-T13): Screenshot of typical competitor site vs. Alpenglow homepage */}
        </FadeInOnScroll>

        {/* Section: Design and direction */}
        <FadeInOnScroll delay={150}>
          <h3>Design and direction</h3>
          <p>
            We started by creating a clean, modern brand identity—elegant fonts, warm color palettes, and full-bleed imagery
            reflecting Puerto Vallarta’s high-end lifestyle. The brand was built to evoke confidence and taste across all devices.
          </p>
          <p>
            From there, I developed a custom <strong>WordPress site</strong> that prioritized immersive visuals, fast performance,
            and clear property calls to action.
          </p>
          <blockquote>“Design had to feel premium, but never overwhelming.”</blockquote>
          {/* 📸 Media to add (M2-T13): Moodboard or homepage mockup */}
        </FadeInOnScroll>

        {/* Section: Multilingual AI sales support */}
        <FadeInOnScroll delay={200}>
          <h3>Multilingual AI sales support</h3>
          <p>
            One of Alpenglow’s biggest differentiators is its 24/7 sales support via a WhatsApp-enabled AI chatbot. I integrated
            a multilingual chatbot that can answer inquiries in hundreds of languages, instantly pulling from property data,
            FAQs, and lead intake flows.
          </p>
          <p>
            This allows international buyers to message the agency, get answers immediately, and begin a purchase journey—
            without waiting for a business-hour reply.
          </p>
          <blockquote>“It’s like having a real estate agent who never sleeps—and speaks 100 languages.”</blockquote>
          {/* 📸 Media to add (M2-T13): Screenshot of chatbot UI on WhatsApp and/or training flow */}
        </FadeInOnScroll>

        {/* Section: Engineering for the backend */}
        <FadeInOnScroll delay={250}>
          <h3>Engineering for the backend</h3>
          <p>
            The property listings weren’t straightforward. Alpenglow pulls from multiple MLS providers, each with different
            database formats and structures. I developed a custom WordPress theme tailored to interpret and display these listings
            cleanly—no matter the source.
          </p>
          <p>
            The backend was designed to be intuitive for their internal team, making it easy to manage properties without
            breaking the user experience or performance.
          </p>
          <blockquote>“Most MLS feeds are messy. We made them elegant.”</blockquote>
          {/* 📸 Media to add (M2-T13): Admin view of listings or database mapping diagram */}
        </FadeInOnScroll>

        {/* Section: The outcome */}
        <FadeInOnScroll delay={300}>
          <h3>The outcome</h3>
          <p>
            The result is a high-performing real estate platform that feels at home in a luxury market. International buyers
            can explore, inquire, and start the purchase process entirely from their phones—with confidence and clarity.
          </p>
          <ul>
            <li>Fully branded WordPress site tailored for global luxury appeal</li>
            <li>Custom MLS integration across multiple backend sources</li>
            <li>AI-powered WhatsApp chatbot handling sales inquiries 24/7</li>
            <li>Optimized for SEO, mobile performance, and international traffic</li>
          </ul>
          <blockquote>“Luxury, multilingual support, and performance—built into every click.”</blockquote>
          {/* 📸 Media to add (M2-T13): Final homepage, mobile view, and chatbot in use on WhatsApp */}
        </FadeInOnScroll>

        {/* Section: Tools used */}
        <FadeInOnScroll delay={350}>
          <h3>Tools used</h3>
          <ul>
            <li><strong>WordPress</strong> – Custom theme development and CMS management</li>
            <li><strong>MLS API Feeds</strong> – Multi-provider integration for property listings</li>
            <li><strong>WhatsApp AI Chatbot</strong> – Custom-trained, multilingual conversational assistant</li>
            <li><strong>Google Search Console</strong> – SEO optimization and indexing tracking</li>
            <li><strong>Figma</strong> – Brand and layout collaboration for modern luxury design</li>
          </ul>
        </FadeInOnScroll>
      </div>

      {/* Article footer with closing note */}
      <footer className={styles.article__footer}>
          <p className={styles.note}>
            Luxury, multilingual support, and performance — all in one
            <span className={styles.dot}>.</span>
          </p>
      </footer>
    </article>
  );
};

export default Alpenglow;
