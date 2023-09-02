import React from "react";
import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
  styled,
} from "@mui/material";

import "./accordion-styles.scss";

const StyledAccordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: "#2d2d2d",
  border: `1px solid ${theme.palette.divider}`,
  fontSize: '22px',
  paddingTop: '10px',
  paddingBottom: '10px',
  marginBottom: '10px',
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const StyledAccordionSummary = styled((props) => (
  <AccordionSummary
    expandIcon={props.isExpanded ? <span>-</span> : <span>+</span>}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1), 
  },
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(3),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Accordion = (props) => {
  const {
    answer,
    index,
    isExpanded,
    onClick,
    question,
  } = props;

  return (
    <StyledAccordion expanded={isExpanded} onChange={onClick(index)}>
      <StyledAccordionSummary isExpanded={isExpanded}>
        <span>{question}</span>
      </StyledAccordionSummary>
      <StyledAccordionDetails>{answer}</StyledAccordionDetails>
    </StyledAccordion>
  );
};

export default Accordion;
