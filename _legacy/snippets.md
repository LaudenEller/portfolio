# Snippets moved out of live files (run 002, T19)

Commented-out code removed from files that are still in use. Copied here verbatim first, so nothing is lost.
Line numbers refer to the file at `main` @ `fbb7f7d`.

## `components/About/AboutSection.js` — lines 1–36 (selected)

```jsx
// import React, { useState } from 'react';
// import AboutParagraph from './AboutParagraph';
// import styles from './AboutSection.module.css';

// const AboutSection = () => {
//   const [showAbout, setShowAbout] = useState(false);

//   return (
//     <div className={styles.aboutContainer}>
//       <div
//         className={styles.toggleBar}
//         onClick={() => setShowAbout(!showAbout)}
//       >
//         {showAbout ? '' : ''}
//       </div>

//       <div className={`${styles.aboutWrapper} ${showAbout ? styles.visible : ''}`}>
//         {showAbout && <AboutParagraph />}
//       </div>
//     </div>
//   );
// };

// export default AboutSection;

  // Direct expansion
  // const [showAbout, setShowAbout] = useState(false);
```

## `components/Hero/HeroImage.js` — lines 23–62 (selected)

```jsx
    // const basePath = `/assets/heroImages/${theme}`;
    // image.src = `${basePath}/hero-desktop.webp`;
    // <div className={`container-fluid ${styles.heroContainer}`}>
            // <img
            //   src={`${theme}/hero-desktop.webp`}
            //   srcSet={`
            //     /assets/heroImages/${theme}/hero-mobile.webp 600w,
            //     /assets/heroImages/${theme}/hero-tablet.webp 1200w,
            //     /assets/heroImages/${theme}/hero-desktop.webp 1920w
            //   `}
            //   sizes="(max-width: 600px) 200vw, (max-width: 1200px) 150vw, 75vw"
            //   alt="Hero Banner"
            //   className={`img-fluid ${styles.heroImage}`}
            //   loading="eager"
            // />
    // </div>
```

## `components/WorkExamples/WorkExamples1.js` — lines 19–342 (selected)

```jsx
  // { id: 0, heading: 'M Cafe', image: '/assets/workImages/example0.png', summary: 'Branding and website design for a modern café.', component: <MCafe /> },
  // THIS IS MEANT TO PLACE THE EXPANDED ACCORDION TAB ON SCROLL SO IT TAKES UP MORE OF THE SCREEN
//   const getAccordionStyles = (isActive) => {
//   if (!isActive) return {};
  
//   const widthScale = 1 - (shrinkFactor * 0.05);
//   const paddingScale = 1 - (shrinkFactor * 0.1);
  
//   return {
//     transform: `scale(${widthScale})`,
//     transformOrigin: 'top center',
//     paddingLeft: `${paddingScale * 2}rem`,
//     paddingRight: `${paddingScale * 2}rem`
//   };
// };

```

## `contexts/NavShrinkContext.js` — lines 6–10 (selected)

```jsx
  // const [isNavShrinked, setIsNavShrinked] = useState(false);

  // return (
  //   <NavShrinkContext.Provider value={{ isNavShrinked, setIsNavShrinked }}>
  
```

## `components/Navbar/Navbar1.js` — lines 51–52 (selected)

```jsx
      // setIsScrolled(window.scrollY > 125);
      // setShowFloatingNav(window.scrollY > 125);
```

## `components/ProjectHighlights/Highlights.js` — lines 41–48 (selected)

```jsx
    // This utility function was supposed to get the correct perceived position of the button but it puts it very far from the actual spot becuase it accumulates all the scrollable area instead of offsetting it to find the corrrect scrollY
    // const perceivedPosition = getPerceivedPosition(e.target);
      // position: { t, l },
      // position,
```

## `layouts/MainLayout.js` — lines 37–44 (selected)

```jsx
      {/* <NavbarSpacer navbarRef={navbarRef} mainRef={mainRef} />  */}
      {/* <DebugNavbarSpacer /> */}
```

## `components/Footer/Footer.js` — lines 36–36 (selected)

```jsx
                {/* <h2>I'm Lauden, a Software Engineer</h2> */}
```
