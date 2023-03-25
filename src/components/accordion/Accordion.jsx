import React, { useRef } from "react";

import "./accordion-styles.scss";

const Accordion = (props) => {
  const {
    answer,
    answerStyle,
    CloseIcon,
    containerStyle,
    index,
    isExpanded,
    onClick,
    OpenIcon,
    question,
    questionStyle,
  } = props;

  const AccordionOpenIcon = OpenIcon ? (
    <OpenIcon />
  ) : (
    <span className="icon">+</span>
  );
  const AccordionCloseIcon = CloseIcon ? (
    <CloseIcon />
  ) : (
    <span className="icon">-</span>
  );

  return (
    <div style={containerStyle} className="accordion">
      <div onClick={onClick(index)} className="question-container">
        <span style={questionStyle} className="question">
          {question}
        </span>
        {isExpanded ? AccordionCloseIcon : AccordionOpenIcon}
      </div>
      {isExpanded && (
        <div style={answerStyle} className="answer-container">
          <div className="answer" style={answerStyle}>
            {answer}
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
