// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// jsdom lacks these browser APIs; the site (and GSAP) use them (run 002, T18).
// matchMedia never matches, so tests get the full layout with animations not set up.
window.matchMedia = window.matchMedia || ((query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
}));

window.IntersectionObserver = window.IntersectionObserver || class {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() { return []; }
};

window.scrollTo = jest.fn();
Element.prototype.scrollIntoView = jest.fn();
