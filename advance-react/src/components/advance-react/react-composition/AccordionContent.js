import React from "react";
import { useAccordion } from "./Accordion-context";

//Specialized Component
const AccordionContent = ({ children }) => {
  const { show } = useAccordion();

  return <div>{show && <div className="content">{children}</div>}</div>;
};

export default AccordionContent;
