import React from "react";
import { useDropdown } from "./dropdown-context";

const Option = (props) => {
  const context = useDropdown();

  return (
    <div
      className="flex items-center justify-between p-4 cursor-pointer select-none option-item"
      onClick={() => context.onClick(props.children)}
    >
      {props.children}
    </div>
  );
};

export default Option;
