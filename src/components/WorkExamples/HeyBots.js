import FadeInOnScroll from './FadeInOnScroll';
import styles from './MCafe.module.css'; // Matches the target layout’s CSS

/**
 * HeyBots Component
 * 
 * This component renders a case study article showcasing the HeyBots project,
 * which focuses on AI-powered chatbots for customer service and sales automation.
 * 
 * Features include:
 * - Animated fade-in effects on scroll using FadeInOnScroll component
 * - Semantic HTML structure with article, header, main content sections, and footer
 * - Reuse of existing CSS module styles for consistent styling and layout
 * - Sections covering project overview, research, implementation, challenges, outcomes, and tools used
 * - Placeholders for images or diagrams to support the textual content
 * 
 * @component
 * @returns {JSX.Element} Case study article for HeyBots AI chatbot project
 */
const HeyBots = ({ color, color2 }) => {
  return (
    <article className={styles.article} style={{ backgroundColor: color }}>
      <div className={styles.container}>
      {/* Article header with title and byline, both fading in on scroll */}
      <header className={styles.header}>
        <FadeInOnScroll>
          <h2 className={styles.title}>
            HEYBOTS — AI CHATBOTS FOR CUSTOMER SERVICE AND SALES AUTOMATION<span className={styles.titleDot} style={{ color: color2 }}>.</span>
          </h2>
          <div className={styles.titleRule} style={{ backgroundColor: color2 }} />
        </FadeInOnScroll>
        <FadeInOnScroll delay={50}>
          <p className={styles.subhead}>
            <strong>
              Reducing costs and response times with smart, trainable AI chatbots across key platforms
            </strong>
          </p>
        </FadeInOnScroll>
      </header>

      {/* Main article content with multiple fade-in sections */}
      <section className={styles.section}>
        {/* Section: Where we started */}
        <FadeInOnScroll delay={100}>
          <h3>Where we started</h3>
          <p className={styles.body}>📍 <strong>Client:</strong> HeyBots</p>
          <p className={styles.body}>
            Customer service can be one of the largest and most unpredictable expenses for businesses. When customers
            wait too long for answers, they often buy elsewhere—causing lost revenue and damaged brand loyalty.
          </p>
          <p className={styles.body}>
            HeyBots wanted to build AI chatbots that not only reduce these costs but also provide consistent,
            immediate support to customers across multiple channels.
          </p>
          <blockquote className={styles.pullQuote}>
            <span className={styles.pullQuoteMark} style={{ color: color2 }}>“</span>
            <span className={styles.pullQuoteText}>Fast, accurate responses are no longer a luxury—they’re table stakes.</span>
          </blockquote>
          {/* 📸 Media to add (M2-T13): Screenshot of traditional FAQ page vs chatbot interaction */}
        </FadeInOnScroll>

        {/* Section: Research and direction */}
        <FadeInOnScroll delay={150}>
          <h3>Research and direction</h3>
          <p className={styles.body}>
            We identified that trainable chatbots powered by AI could provide a scalable solution. Leveraging FastBots,
            we trained ChatGPT-based bots on each client’s unique knowledge base—turning static information into dynamic,
            conversational assistance.
          </p>
          <p className={styles.body}>
            The goal was to integrate these bots smoothly into existing platforms such as WhatsApp, client websites,
            and Shopify storefronts.
          </p>
          <blockquote className={styles.pullQuote}>
            <span className={styles.pullQuoteMark} style={{ color: color2 }}>“</span>
            <span className={styles.pullQuoteText}>The chatbot needed to feel like a helpful human agent—without the wait or cost.</span>
          </blockquote>
          {/* 📸 Media to add (M2-T13): Diagram of chatbot training pipeline or integration flow */}
        </FadeInOnScroll>

        {/* Section: Implementation */}
        <FadeInOnScroll delay={200}>
          <h3>Implementation</h3>
          <p className={styles.body}>
            Using Zapier as a middleware, we connected the trained chatbots to multiple channels:
          </p>
          <ul>
            <li>WhatsApp, for instant messaging with customers worldwide</li>
            <li>Websites, to offer real-time support without needing live agents</li>
            <li>Shopify stores, to guide customers through sales and product queries</li>
          </ul>
          <p className={styles.body}>
            The system was designed to be easily updated, so businesses could add or refine knowledge without retraining from scratch.
          </p>
          {/* 📸 Media to add (M2-T13): Screenshot of Zapier workflow or chatbot in action on WhatsApp */}
        </FadeInOnScroll>

        {/* Section: Challenges */}
        <FadeInOnScroll delay={250}>
          <h3>Challenges</h3>
          <p className={styles.body}>
            Training AI to accurately understand diverse product lines and varied customer questions required
            iterative refinement and close collaboration with client teams. Ensuring the chatbot maintained
            up-to-date information across all platforms was critical to maintaining trust.
          </p>
          <blockquote className={styles.pullQuote}>
            <span className={styles.pullQuoteMark} style={{ color: color2 }}>“</span>
            <span className={styles.pullQuoteText}>The technology was complex—but the experience needed to be seamless.</span>
          </blockquote>
          {/* 📸 Media to add (M2-T13): Screenshot of chatbot training dashboard or user feedback */}
        </FadeInOnScroll>

        {/* Section: The outcome */}
        <FadeInOnScroll delay={300}>
          <h3>The outcome</h3>
          <p className={styles.body}>
            HeyBots’ clients now enjoy fast, consistent customer engagement that scales cost-effectively.
          </p>
          <ul>
            <li>Significantly reduced need for live customer service agents during peak hours</li>
            <li>Improved response times and customer satisfaction scores</li>
            <li>Easy-to-update knowledge bases for evolving product and sales info</li>
            <li>Multi-channel presence ensures customers get help wherever they shop</li>
          </ul>
          <blockquote className={styles.pullQuote}>
            <span className={styles.pullQuoteMark} style={{ color: color2 }}>“</span>
            <span className={styles.pullQuoteText}>From static FAQ pages to real-time AI conversations—customer support evolved.</span>
          </blockquote>
          {/* 📸 Media to add (M2-T13): Analytics dashboard or chatbot conversation screenshot */}
        </FadeInOnScroll>

        {/* Section: Tools used */}
        <FadeInOnScroll delay={350}>
          <h3>Tools used</h3>
          <ul>
            <li><strong>FastBots</strong> – AI chatbot training platform based on ChatGPT</li>
            <li><strong>Zapier</strong> – Middleware to connect chatbots with WhatsApp, Shopify, and websites</li>
            <li><strong>WhatsApp</strong> – Instant messaging channel for customer conversations</li>
            <li><strong>Shopify</strong> – E-commerce platform integrated with chatbot for sales support</li>
          </ul>
        </FadeInOnScroll>
      </section>

      {/* Article footer with concluding note */}
      <footer className={styles.articleFooter}>
          <p className={styles.note}>
            From static FAQ pages to real-time AI conversations
            <span className={styles.titleDot} style={{ color: color2 }}>.</span>
          </p>
      </footer>
      </div>
    </article>
  );
};

export default HeyBots;
