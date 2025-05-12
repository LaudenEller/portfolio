// import React, { useEffect, useRef, useState } from 'react';
// import styles from './WorkExampleTest3.module.css';

// import MCafe from './MCafe';
// import ECigMasters from './ECigMasters';
// import Alpenglow from './Alpenglow';
// import HeyBots from './HeyBots';
// import SolidGroundConstruction from './SolidGroundConstruction';
// import NomadicVintageRugs from './NomadicVintageRugs';
// import VallartaBnb from './VallartaBnb';


// export default function WorkExamplesTest3() {
//   const [activeIndex, setActiveIndex] = useState(null);

// //   const accordionData = [
// //     { id: 0, heading: 'M Cafe', },
// //     { id: 1, heading: 'Alpenglow' },
// //     { id: 2, heading: 'HeyBots' },
// //     { id: 3, heading: 'Solid Ground Construciton'},
// //     { id: 4, heading: 'Nomadic Vintage Rugs'},
// //     { id: 5, heading: 'VallartaBnb'},
// //     { id: 6, heading: 'E-Cig Masters'}
// //   ];

// const accordionData = [
//     { id: 0, heading: 'M Cafe', component: <MCafe /> },
//     { id: 1, heading: 'ECig Masters', component: <ECigMasters /> },
//     { id: 2, heading: 'Alpenglow', component: <Alpenglow /> },
//     { id: 3, heading: 'HeyBots', component: <HeyBots /> },
//     { id: 4, heading: 'Solid Ground Construction', component: <SolidGroundConstruction /> },
//     { id: 5, heading: 'Nomadic Vintage Rugs', component: <NomadicVintageRugs /> },
//     { id: 6, heading: 'Vallarta Bnb', component: <VallartaBnb /> },
//   ];

// const closeAccordion = () => {
//   setActiveIndex(null);
// };

// const openAccordion = (index) => {
//   setActiveIndex(index);
// };

//   const handleAccordionClick = (index) => {
//     console.log('accordion clicked')
//     console.log(index)
//     if (activeIndex === index) {
//       closeAccordion();
//     } else {
//       openAccordion(index);
//     }
//   };

//   return (
//     // section container
//      <div
//       id="work-examples"
//       className={`${styles.workExamples}`}
//     >
// {/* accordion container */}
// <div className={styles.accordionContainer}>
//   {accordionData.map((item) => (
//     <div
//       key={item.id}
//       className={styles.accordionTab}
//       onClick={() => handleAccordionClick(item.id )} // Open accordion when clicked
//       >
//         <p>{item.heading}</p>
//         <div
//                   className={styles.accordionContent}
//                   style={{ height: activeIndex === item.id ? '100px' : 0 }}
//                 >
//                     {/* <img src={`assets/workImages/example${item.id}.png`} alt={`Example ${item.id}`} /> */}
//                     {activeIndex === item.id && item.component}
//                     </div>
//     </div>
//   ))}
// </div>
//     </div>
//   );
// }

import React, { useRef, useState } from 'react';
import styles from './WorkExampleTest3.module.css';

import MCafe from './MCafe';
import ECigMasters from './ECigMasters';
import Alpenglow from './Alpenglow';
import HeyBots from './HeyBots';
import SolidGroundConstruction from './SolidGroundConstruction';
import NomadicVintageRugs from './NomadicVintageRugs';
import VallartaBnb from './VallartaBnb';

const accordionData = [
  {
    id: 0,
    heading: 'M Cafe',
    image: '/assets/workImages/example0.png',
    summary: 'Branding and website design for a modern café.',
    component: <MCafe />,
  },
  {
    id: 1,
    heading: 'ECig Masters',
    image: '/assets/workImages/example1.png',
    summary: 'E-commerce development for vape products.',
    component: <ECigMasters />,
  },
  {
    id: 2,
    heading: 'Alpenglow',
    image: '/assets/workImages/example2.png',
    summary: 'Visual identity for a mountain lodge.',
    component: <Alpenglow />,
  },
  {
    id: 3,
    heading: 'HeyBots',
    image: '/assets/workImages/example3.png',
    summary: 'Conversational AI landing page.',
    component: <HeyBots />,
  },
  {
    id: 4,
    heading: 'Solid Ground Construction',
    image: '/assets/workImages/example4.png',
    summary: 'Web presence for a construction company.',
    component: <SolidGroundConstruction />,
  },
  {
    id: 5,
    heading: 'Nomadic Vintage Rugs',
    image: '/assets/workImages/example5.png',
    summary: 'One-of-a-kind Shopify rug store.',
    component: <NomadicVintageRugs />,
  },
  {
    id: 6,
    heading: 'Vallarta Bnb',
    image: '/assets/workImages/example6.png',
    summary: 'Booking platform for vacation rentals.',
    component: <VallartaBnb />,
  },
];

export default function WorkExamplesTest3() {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);
  const wrapperRefs = useRef([]); // For expanding up & down
  const accordionTabRefs = useRef([]); // For expanding down only


//   For expanding but not scrolling to open sections
//   const handleAccordionClick = (index) => {
//     setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
//   };

// // For scrolling to item when clicked simultaneously
// const handleAccordionClick = (index) => {
//     if (activeIndex === index) {
//       setActiveIndex(null);
//     } else {
//       // Scroll immediately before state updates
//       wrapperRefs.current[index]?.scrollIntoView({
//         behavior: 'smooth',
//         block: 'center',
//       });
//       setActiveIndex(index); // Triggers expansion
//     }
//   };

  // // For scrolling to item when clicked after expanding
  // const handleAccordionClick = (index) => {
  //   if (activeIndex === index) {
  //     setActiveIndex(null);
  //   } else {
  //     setActiveIndex(index);
  //     // Scroll into view after setting active index
  //     setTimeout(() => {
  //       wrapperRefs.current[index]?.scrollIntoView({
  //         behavior: 'smooth',
  //         block: 'center',
  //       });
  //     }, 200); // Delay to allow DOM to update
  //   }
  // };
  
   // For scrolling to item when clicked before expanding
  const handleAccordionClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      wrapperRefs.current[index]?.scrollIntoView({ // For expanding up & down
        // accordionTabRef.current[index]?.scrollIntoView({ // For expanding down only
          behavior: 'smooth',
          // block: 'center', // For expanding up & down
          block: 'start', // For expanding down only
        });
      // Scroll into view after setting active index
      setTimeout(() => {
        setActiveIndex(index);
      }, 200); // Delay to allow DOM to update
    }
  };
  

  return (
    <div id="work-examples" className={styles.workExamples}>
      <div className={styles.accordionContainer}>
        {/* For expanding sections downwards and upwards */}
      {accordionData.map((item, index) => {
  const isActive = activeIndex === item.id;
  return (
    <div key={item.id} className={styles.accordionWrapper} ref={(el) => (wrapperRefs.current[index] = el)}>
      <div
        ref={(el) => (accordionTabRefs.current[index] = el)}
        className={`${styles.accordionTab} ${isActive ? styles.active : ''}`}
        onClick={() => handleAccordionClick(item.id)}
      >
        <div className={styles.tabHeader}>
          <img src={item.image} alt={item.heading} className={styles.tabImage} />
          <div>
            <h3>{item.heading}</h3>
            <p>{item.summary}</p>
          </div>
        </div>
        <div
          ref={(el) => (contentRefs.current[index] = el)}
          className={styles.accordionContent}
          style={{
            height: isActive
              ? `${contentRefs.current[index]?.scrollHeight}px`
              : '0px',
          }}
        >
          <div className={styles.innerContent}>{item.component}</div>
        </div>
      </div>
    </div>
  );
})}
{/* For expanding sections downwards only */}
        {/* {accordionData.map((item, index) => {
          const isActive = activeIndex === item.id;
          return (
            <div
              key={item.id}
              ref={(el) => (accordionTabRef.current[index] = el)}
              className={`${styles.accordionTab} ${isActive ? styles.active : ''}`}
              onClick={() => handleAccordionClick(item.id)}
            >
              <div className={styles.tabHeader}>
                <img src={item.image} alt={item.heading} className={styles.tabImage} />
                <div>
                  <h3>{item.heading}</h3>
                  <p>{item.summary}</p>
                </div>
              </div>
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className={styles.accordionContent}
                style={{
                  height: isActive
                    ? `${contentRefs.current[index]?.scrollHeight}px`
                    : '0px',
                }}
              >
                <div className={styles.innerContent}>{item.component}</div>
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
}
