import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Button from "../button/Button";

import { TRANSLATION_PREFIX } from "./constants";

import "./plans-styles.scss";

const Plans = () => {
  const [selectedPlanId, setSelectedPlanId] = useState("");
  const { t } = useTranslation();

  const continueButtonStyle = {
    marginRight: "20px",
    border: "none",
    borderRadius: "unset",
    fontSize: "15px",
    backgroundColor: "#077af5",
    opacity: selectedPlanId !== "" ? "1" : "0.7",
  };
  const cancelButtonStyle = {
    background: "white",
    color: "black",
    border: "none",
    borderRadius: "unset",
    fontSize: "15px",
  };

  const renderPlanStatus = (planId, name) => {
    let component = null;

    if (planId !== selectedPlanId) {
      component = <div className="plans-item-top">{name}</div>;
    } else {
      component = (
        <>
          <div className="plans-item-top current-plan">
            {t(`${TRANSLATION_PREFIX}.plan`)}:
          </div>
          <div className="plans-item-bottom selected-plan-text">{name}</div>
        </>
      );
    }

    return component;
  };

  const handlePlanClick = (id) => () => {
    setSelectedPlanId(id);
  };

  const renderPlans = () => {
    const plansList = t(`${TRANSLATION_PREFIX}.plansList`, {
      returnObjects: true,
    });
    return plansList.map((item) => {
      const { cost, description, id, name } = item;

      const className =
        id === selectedPlanId
          ? "plans-item-container selected"
          : "plans-item-container";
      const leftClassName =
        id === selectedPlanId
          ? "plans-item-left left-selected"
          : "plans-item-left";

      return (
        <div key={id} onClick={handlePlanClick(id)} className={className}>
          <div className={leftClassName}>{renderPlanStatus(id, name)}</div>
          <div className="plans-item-middle">{description}</div>
          <div className="plans-item-right">{cost}</div>
        </div>
      );
    });
  };

  const handleContinue = () => {};

  return (
    <div className="plans">
      <h1 className="plans-heading">{t(`${TRANSLATION_PREFIX}.heading`)}</h1>
      {renderPlans()}
      <div className="plans-buttons">
        <Button
          buttonStyle={continueButtonStyle}
          isDisabled={selectedPlanId === ""}
          onClick={handleContinue}
          text={t("common.continue")}
        />
        <Button
          buttonStyle={cancelButtonStyle}
          onClick={() => {
            setSelectedPlanId("");
          }}
          text={t("common.cancel")}
        />
      </div>
    </div>
  );
};

export default Plans;
