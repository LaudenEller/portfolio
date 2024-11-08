import React, { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './WorkExamples.module.css';
import TextOnlyExample from './TextOnlyExample';
import ImageLeftExample from './ImageLeftExample';
import ImageRightExample from './ImageRightExample';

// This sources different components for each work example and then displays them in a bootstrap style accordion
  // I should change out the inline css for imported properties from WorkExamples.module.css
const WorkExamples = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      id="work-examples"
      className={`${styles.workExamples} ${theme === 'dark' ? styles.darkTheme : ''}`}
      aria-labelledby="workExamplesTitle"
    >
      <div className="container">
        <h2 id="workExamplesTitle" className="text-center mb-4">
          Work Examples
        </h2>

        {/* Bootstrap Accordion for collapsible sections */}
        <div className="accordion" id="workExamplesAccordion">
          <div className="accordion-item">
            <h3 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Text Only Example
              </button>
            </h3>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#workExamplesAccordion"
            >
              <div className="accordion-body">
                <TextOnlyExample />
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h3 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Image Left Example
              </button>
            </h3>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#workExamplesAccordion"
            >
              <div className="accordion-body">
                <ImageLeftExample />
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h3 className="accordion-header" id="headingThree">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Image Right Example
              </button>
            </h3>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#workExamplesAccordion"
            >
              <div className="accordion-body">
                <ImageRightExample />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExamples;
