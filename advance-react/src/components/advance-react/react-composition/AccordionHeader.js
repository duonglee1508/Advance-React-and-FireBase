import React from "react";
import { useAccordion } from "./Accordion-context";

//Specialized Component
const AccordionHeader = ({ children }) => {
  const { show, handleToggleShow } = useAccordion();

  return (
    <div className="header" onClick={handleToggleShow}>
      {children}
      {show ? <span>-</span> : <span>+</span>}
    </div>
  );
};

export default AccordionHeader;
