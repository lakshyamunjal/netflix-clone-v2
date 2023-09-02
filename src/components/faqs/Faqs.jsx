import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Accordion from "../accordion/Accordion";

import FAQS, { TRANSLATION_PREFIX } from "./constants";

import "./faqs-styles.scss";

const Faqs = () => {
  const { t } = useTranslation();

  const initialState = Array(FAQS.length)
    .fill(false)
    .map((item, index) => ({ index, isExpanded: item }));
  const [isExpandedList, setIsExpandedList] = useState(initialState);

  const updateExpandedList = (index) => () => {
    const updatedList = isExpandedList.map((item, loopIndex) => {
      const temp = { ...item };
      let isOpen = false;
      if (loopIndex === index) {
        // toggle if open
        isOpen = !item.isExpanded;
      } else {
        // close all others
        isOpen = false;
      }
      temp.isExpanded = isOpen;
      return temp;
    });

    setIsExpandedList([...updatedList]);
  };

  const renderFaqsList = () => {
    return FAQS.map((item, index) => {
      const { answerKey, questionKey } = item;
      return (
        <Accordion
          key={index}
          question={t(questionKey)}
          answer={t(answerKey)}
          onClick={updateExpandedList}
          index={index}
          isExpanded={isExpandedList[index].isExpanded}
        />
      );
    });
  };

  return (
    <div className="faqs">
      <h1 className="title">{t(`${TRANSLATION_PREFIX}.title`)}</h1>
      <div className="accordion-container">{renderFaqsList()}</div>
    </div>
  );
};

export default Faqs;
