import React, { useState } from "react";
import { AccordionProvider } from "./Accordion-context";
import AccordionContent from "./AccordionContent";
import AccordionHeader from "./AccordionHeader";

const Accordion = ({ header, children }) => {
  return (
    <AccordionProvider>
      <div>
        <AccordionHeader>{header}</AccordionHeader>
        <AccordionContent>{children}</AccordionContent>
      </div>
    </AccordionProvider>
  );
};

export default Accordion;
