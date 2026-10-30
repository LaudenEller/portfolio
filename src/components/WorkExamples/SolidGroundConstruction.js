import FadeInOnScroll from './FadeInOnScroll';
import styles from './MCafe.module.css';

/**
 * SolidGroundConstruction Component
 * 
 * This component presents a case study article detailing the
 * custom bidding and budget tracking system developed for Solid Ground Construction.
 * 
 * Key features highlighted include:
 * - Transition from manual spreadsheets to an efficient, cloud-based solution
 * - Use of Google Business Suite for accessible project management and cost tracking
 * - Development of a custom Chrome extension to automate service and supply entries
 * - Addressing challenges of accuracy, scalability, and usability in construction bidding
 * 
 * The content is animated using the FadeInOnScroll component to
 * create smooth scroll-triggered reveal effects.
 * 
 * @component
 * @returns {JSX.Element} Case study article for Solid Ground Construction project
 */
const SolidGroundConstruction = ({ color, color2 }) => {
  return (
    <article className={styles.article} style={{ backgroundColor: color }}>
      <div className={styles.container}>
      {/* Article header with title and byline fading in on scroll */}
      <header className={styles.header}>
        <FadeInOnScroll>
          <h2 className={styles.title}>
            SOLID GROUND CONSTRUCTION — CUSTOM BIDDING AND BUDGET TRACKING SYSTEM
          <span className={styles.titleDot} style={{ color: color2 }}>.</span>
          </h2>
          <div className={styles.titleRule} style={{ backgroundColor: color2 }} />
        </FadeInOnScroll>
        <FadeInOnScroll delay={50}>
          <p className={styles.subhead}>
            <strong>
              Streamlining cost projections and project management with tailored tools
            </strong>
          </p>
        </FadeInOnScroll>
      </header>

      {/* Main article content with multiple fade-in sections */}
      <section className={styles.section}>
        
        {/* Section: Where we started */}
        <FadeInOnScroll delay={100}>
          <h3>Where we started</h3>
          <p className={styles.body}>📍 <strong>Client:</strong> Solid Ground Construction</p>
          <p className={styles.body}>
            Solid Ground Construction needed an affordable, reliable solution to create accurate bids and track budgets
            across multiple projects.
          </p>
          <p className={styles.body}>
            Their existing processes relied heavily on spreadsheets and manual tracking, which made estimating and cost
            forecasting inefficient and error-prone.
          </p>
          <blockquote className={styles.pullQuote}>
            <span className={styles.pullQuoteMark} style={{ color: color2 }}>“</span>
            <span className={styles.pullQuoteText}>They needed a system that worked for their unique workflows—not a one-size-fits-all tool.</span>
          </blockquote>
          {/* 📸 Media to add (M2-T13): Screenshot of old spreadsheet-based bidding */}
        </FadeInOnScroll>

        {/* Section: Research and direction */}
        <FadeInOnScroll delay={150}>
          <h3>Research and direction</h3>
          <p className={styles.body}>
            After exploring project management platforms, we chose to build a customized lightweight system using Google Business Suite.
            This gave the team flexible tools for organizing bids, tracking costs, and forecasting budgets—without heavy software overhead.
          </p>
          <blockquote className={styles.pullQuote}>
            <span className={styles.pullQuoteMark} style={{ color: color2 }}>“</span>
            <span className={styles.pullQuoteText}>The goal was to simplify complex data flows while keeping everything accessible to the whole team.</span>
          </blockquote>
          {/* 📸 Media to add (M2-T13): Workflow diagram or Google Sheets dashboard */}
        </FadeInOnScroll>

        {/* Section: Implementation */}
        <FadeInOnScroll delay={200}>
          <h3>Implementation</h3>
          <p className={styles.body}>
            To further optimize planning, I developed a custom Chrome extension that:
          </p>
          <ul>
            <li>Provides an internal library of services and supplies</li>
            <li>Automatically loads supply lists into budgets when services are selected</li>
            <li>Integrates seamlessly with Google Sheets for real-time budget updates</li>
          </ul>
          <p className={styles.body}>
            This innovation dramatically reduced manual entry and helped keep estimates consistent and transparent across projects.
          </p>
          {/* 📸 Media to add (M2-T13): Chrome extension interface or budget template */}
        </FadeInOnScroll>

        {/* Section: Challenges */}
        <FadeInOnScroll delay={250}>
          <h3>Challenges</h3>
          <p className={styles.body}>
            Construction bidding requires high accuracy and adaptability. We had to ensure the system could scale with
            fluctuating supply costs and variable project scopes, all while remaining user-friendly for the team.
          </p>
          <blockquote className={styles.pullQuote}>
            <span className={styles.pullQuoteMark} style={{ color: color2 }}>“</span>
            <span className={styles.pullQuoteText}>Balancing complexity with simplicity was key to adoption.</span>
          </blockquote>
          {/* 📸 Media to add (M2-T13): Example of variable pricing or cost update process */}
        </FadeInOnScroll>

        {/* Section: The outcome */}
        <FadeInOnScroll delay={300}>
          <h3>The outcome</h3>
          <p className={styles.body}>
            Solid Ground Construction now runs a streamlined, tailored bidding and budget tracking system that:
          </p>
          <ul>
            <li>Reduces errors from manual data entry</li>
            <li>Improves visibility into project costs and forecasts</li>
            <li>Supports team collaboration with accessible, cloud-based tools</li>
            <li>Scales as the company grows and projects increase</li>
          </ul>
          <blockquote className={styles.pullQuote}>
            <span className={styles.pullQuoteMark} style={{ color: color2 }}>“</span>
            <span className={styles.pullQuoteText}>From spreadsheets to streamlined estimates—their bidding process was transformed.</span>
          </blockquote>
          {/* 📸 Media to add (M2-T13): Final dashboard or project overview */}
        </FadeInOnScroll>

        {/* Section: Tools used */}
        <FadeInOnScroll delay={350}>
          <h3>Tools used</h3>
          <ul>
            <li><strong>Google Business Suite</strong> – Core platform for project management, cost tracking, and forecasting</li>
            <li><strong>Custom Chrome Extension</strong> – Service library and auto-fill functionality to speed budget creation</li>
          </ul>
        </FadeInOnScroll>
      </section>

      {/* Footer with closing note */}
      <footer className={styles.articleFooter}>
          <p className={styles.note}>
            From spreadsheets to streamlined estimates
            <span className={styles.titleDot} style={{ color: color2 }}>.</span>
          </p>
      </footer>
      </div>
    </article>
  );
};

export default SolidGroundConstruction;
