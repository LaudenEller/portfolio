import gsap from 'gsap';

export function getPerceivedPositionWithGSAP(element, parentRef) {
  const buttonRect = element.getBoundingClientRect();
  const parentTransformY = parseFloat(gsap.getProperty(parentRef, 'y')) || 0; // GSAP-applied transform
  const globalScrollY = window.scrollY;

  return {
    top: buttonRect.top + globalScrollY + parentTransformY,
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
  