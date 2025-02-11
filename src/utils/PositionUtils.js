import gsap from 'gsap';

// export function getPerceivedPositionWithGSAP(element, parentRef) {
//   const buttonRect = element.getBoundingClientRect();
//   const parentTransformY = parseFloat(gsap.getProperty(parentRef, 'y')) || 0; // GSAP-applied transform
//   // const globalScrollY = window.scrollY;
//   const parentTop = parentRef.scrollTop

//    // Check if global scroll is needed
//   //  const isCustomScroll = parentRef && parentRef.scrollHeight > parentRef.clientHeight;
//   //  const globalScrollY = isCustomScroll ? 0 : window.scrollY;
//   console.log('parentTop', parentTop)
//   console.log('customScroll', isCustomScroll)
//    console.log('utility window.scrollY', globalScrollY)
//    console.log('utility parentTransformY', parentTransformY)


//   return {
//     top: buttonRect.top + parentTop + parentTransformY,
//     // top: buttonRect.top + globalScrollY + parentTransformY,
//     // top: buttonRect.top + parentTransformY,
//     left: buttonRect.left + window.scrollX,
//   };
// }

export function getPerceivedPositionWithGSAP(element, parentRef) {
  const buttonRect = element.getBoundingClientRect(); // Button's rect relative to viewport
  const parentScrollTop = parentRef.scrollTop || 0; // Scroll offset of the parent container
  const parentTransformY = parseFloat(gsap.getProperty(parentRef, 'y')) || 0; // Transform offset
  const globalScrollY = window.scrollY || 0; // Page scroll (if parent is not a custom container)

  console.log('parentTop', parentScrollTop)
  // console.log('customScroll', isCustomScroll)
  //  console.log('utility window.scrollY', globalScrollY)
   console.log('utility parentTransformY', parentTransformY)

  // Add everything together to calculate the perceived position
  return {
    top: buttonRect.top - parentScrollTop + parentTransformY,
    left: buttonRect.left + window.scrollX,
  };
}


// export function getPerceivedPosition(element) {
//     let rect = element.getBoundingClientRect(); // Position relative to viewport
//     let scrollY = window.scrollY; // Main document scroll
//     let cumulativeScrollY = 0;
//     let cumulativeTransformY = 0;
//     let currentElement = element.parentElement;
  
//     // Traverse up the DOM to account for all scroll containers and transforms
//     while (currentElement) {
//       if (currentElement.scrollTop > 0) {
//         cumulativeScrollY += currentElement.scrollTop;
//       }
  
//       // Handle transforms
//       const transformMatch = getComputedStyle(currentElement).transform.match(/matrix.*\((.+)\)/);
//       if (transformMatch) {
//         const transformY = parseFloat(transformMatch[1].split(',')[5]) || 0;
//         cumulativeTransformY += transformY;
//       }
  
//       currentElement = currentElement.parentElement;
//     }
  
//     return {
//       top: rect.top + scrollY + cumulativeScrollY + cumulativeTransformY,
//       left: rect.left + window.scrollX,
//     };
//   }
  