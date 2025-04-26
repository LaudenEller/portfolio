/*
This helper function makes a group of elements animate along the x-axis in a seamless, responsive loop.

Features:
- Uses xPercent so that even if the widths change (like if the window gets resized), it should still work in most cases.
- When each item animates to the left or right enough, it will loop back to the other side
- Optionally pass in a config object with values like "speed" (default: 1, which travels at roughly 100 pixels per second), paused (boolean),  repeat, reversed, and paddingRight.
- The returned timeline will have the following methods added to it:
- next() - animates to the next element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
- previous() - animates to the previous element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
- toIndex() - pass in a zero-based index value of the element that it should animate to, and optionally pass in a vars object to control duration, easing, etc. Always goes in the shortest direction
- current() - returns the current index (if an animation is in-progress, it reflects the final index)
- times - an Array of the times on the timeline where each element hits the "starting" spot. There's also a label added accordingly, so "label1" is when the 2nd element reaches the start.
*/

import gsap from "gsap";
export function horizontalLoop(items, config) {
  items = gsap.utils.toArray(items);
  config = config || {};
  let tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
      // this callback adjusts the timeline’s position when it reverses to avoid resetting the timeline’s time unexpectedly.
      onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
    }),
    length = items.length,
    startX = items[0].offsetLeft,
    times = [],
    widths = [],
    xPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1),
    totalWidth,
    curX,
    distanceToStart,
    distanceToLoop,
    item,
    i;

    // Get the x value of all gallery items as a percentage of their width
      // instead of as an absolute value (helps with responsive animations)
  gsap.set(items, {
    xPercent: (i, el) => {
      let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
          gsap.getProperty(el, "xPercent")
      );
      return xPercents[i];
    },
  });
  gsap.set(items, { opacity: 1 });  // Set opacity to 1 for all items initially

  // Get total width of the carousel to find where the carousel begins
  totalWidth =
  // gets the x value in px of the last gallery item relative to its parent container
    items[length - 1].offsetLeft +
    // get the percentage along the carousel for the x value of the last item
    (xPercents[length - 1] / 100) * widths[length - 1] -
    // subtracts the initial x value of the first item in teh carousel
    startX +
    // Get width of last item on carousel in pixels
    items[length - 1].offsetWidth *
    // Include any changes in width of the carousel items from scaling for different screens
      gsap.getProperty(items[length - 1], "scaleX") +
    // Add padding to the right of the last item if it's there
    (parseFloat(config.paddingRight) || 0);

    // iterate over the carousel items
  for (i = 0; i < length; i++) {
    // saves current item to a local variable
    item = items[i];
    // Get x value of current item in px
    curX = (xPercents[i] / 100) * widths[i];
    // Get items distance from the CAROUSEL's start position (item1.offsetLeft)
    distanceToStart = item.offsetLeft + curX - startX;
    // Get the distance the item will travel in the animation 
    //  adjusted for scaling and repositioning on different screens
    distanceToLoop =
      distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");

      // GSAP method that animates carousel items from their current state
        //  to the specified properties
    tl.to(
      // the HTML element that is being animated
      item,
      // An object that contains the animation properties
      {
      //  move item distance equal to it's width
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        opacity: 0.3,  // Reduce opacity when moving off-center
        // Make animation last long enough to cover 
        //  the distance it needs to travel at the speed it's traveling at
        duration: distanceToLoop / pixelsPerSecond,
      },
      // Start this .to animation at the beginning of the timeline
      0
    )

    // The fromTo() animation smoothly animates both 
    //  the position (xPercent) and opacity of each item.
    // Items have their opacity reduced as they move off-center 
    //  and are restored when they come back into the viewport.
    // The onUpdate function dynamically calculates the opacity 
      //  based on how far each item is from the center of the viewport, 
        //    giving a smooth fading effect as the items move in and out of the center.
      .fromTo(
        // The HTML element being animated is a carousel item
        item,
        // First object defines starting values for the animation
        {
          xPercent: snap(((curX - distanceToLoop + totalWidth) / widths[i]) * 100),
          opacity: 0.3,  // Reduce opacity when moving off-center
        },
        // Second object defines the ending values for the animation
        {
          // Get starting position of current item
          xPercent: xPercents[i],
          opacity: 1, // Restore opacity as it comes back into view
          // Animation lasts until the item travels its total distance at its current speed
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
            // Wait for timeline to play for animation to start
          immediateRender: false,
          onUpdate: () => {
            // Calculate the distance from the center of the viewport
            const viewportCenter = window.innerWidth / 2;
            const itemPosition = gsap.getProperty(item, 'x') + (widths[i] / 2); // center of the item
            const distanceFromCenter = Math.abs(viewportCenter - itemPosition); // absolute distance from the center

            // Adjust opacity based on the distance from the center of the viewport
            const opacityValue = Math.max(1 - (distanceFromCenter / viewportCenter), 0.3); // limit opacity to between 0.3 and 1
            gsap.to(item, { opacity: opacityValue, duration: 0.3 });
          },
        },
        // The duration of the animation
        distanceToLoop / pixelsPerSecond
      )
      // .add() is a method of GSAP timelines (tl) that adds a label at a specific time in the timeline.
      .add("label" + i, distanceToStart / pixelsPerSecond);
      //  For each item, the code calculates how long it will take for that item to reach its starting position (from the initial point of the carousel).
        // It then stores this time in the times array for reference.
        // The array times helps keep track of when each item starts in the animation timeline, and it is used later to control or manipulate the playhead position of the animation.
    times[i] = distanceToStart / pixelsPerSecond;
  }

  function toIndex(index, vars) {
    // vars stores animation options and defaults to an empty object
    vars = vars || {};

    Math.abs(index - curIndex) > length / 2 &&
      (index += index > curIndex ? -length : length); // always go in the shortest direction
      // Wraps items in the carousel so the first follows the last and vice versa
      let newIndex = gsap.utils.wrap(0, length, index),
      // Stores tarting time of target index from the animation times array
      time = times[newIndex];
      // Checks to see if the animation is crossing a boundary (first to last or vice versa)
    if (time > tl.time() !== index > curIndex) {
      // if we're wrapping the timeline's playhead, make the proper adjustments
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      // This adjusts the time by adding or subtracting the timeline's duration (tl.duration()) to move the playhead in the correct direction.
      time += tl.duration() * (index > curIndex ? 1 : -1);

    }
    // This updates the curIndex to the newIndex, setting it to the current item after the transition.
      // This ensures the current index is correctly tracked and updated after each animation.
    curIndex = newIndex;
    // This ensures that the previous animations are overwritten when the new animation starts. This prevents conflicting or overlapping animations, ensuring that only the current animation takes effect.
    vars.overwrite = true;
    // tl.tweenTo(time, vars) tells the timeline (tl) to animate the playhead to the specific time calculated above. This is where the animation actually occurs.
      // It uses the time calculated earlier, which represents the point in the timeline to which the playhead should move.
      // vars contains any additional settings like easing, modifiers, etc., that are applied during the animation.
    return tl.tweenTo(time, vars);
  }

  tl.next = (vars) => toIndex(curIndex + 1, vars);
  tl.previous = (vars) => toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.times = times;
  tl.progress(1, true).progress(0, true); // pre-render for performance
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }

  return tl;
}
