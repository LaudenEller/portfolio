import React, { useEffect } from 'react';
import styles from './WorkExamples.module.css';

import FadeInOnScroll from './FadeInOnScroll'; // 👈 Make sure this path is correct

const MCafe = () => (
  <div className={styles.imageRight}>
    {/* Client Name - Service provided */}
    <FadeInOnScroll>
      <h4>DoorDash, Uber Eats & Revel POS integration with new SquareSpace website</h4>
    </FadeInOnScroll>
    
      {/* Who is the client and what do they need  */}
    <FadeInOnScroll delay={100}>
    <p>After 25 years serving natural foods to LA's Hollywood crowd iconic M Cafe got priced out of their brick & mortar. Pivoting to the modern landscape, the owners decided to launch a ghost kitchen concept.
      <br></br>
      <br></br>
      Like I always do with new clients, we conducted research into their options. Upon evaluating the landscape of delivery app middleware providers and the web-hosting plans tailor-made to restaurants. We decided that while their eventual goal of signing up with the newest all-in-one solution of having a website hosted on the popular Toast POS, sticking with their current tech stack of SquareSpace site combined with Rvel POS was the best current option without having to heavily invest in a complete site, menu and pos system overhaul which is an investment that was too large.
      <br></br> 
      In the over-crowded market of delivery fulfillment many restaurants are flailing with twelve software subscriptions and three KDS tablets losing time and struggling with fees.</p>
     </FadeInOnScroll>    

    {/* What I did for them */}
    <FadeInOnScroll delay={200}>
    <p>Transferring to Toast POS combined website hosting with order management and POS integration, so all elements including marketing and reporting are easily managed with only one subscription fee.</p>    
    </FadeInOnScroll>

    {/* How this helped them */}
    <FadeInOnScroll delay={300}>
    <p>In order to align with an immediate location launch, I extended their current tech-stack to accommodate while completely rebuilding their website, menu and logistics infrastructure by transferring them from Revel to Toast POS systems.</p>
    </FadeInOnScroll>
    
  </div>
);

export default MCafe;
