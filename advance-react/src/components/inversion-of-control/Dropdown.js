import React, { useState } from "react";
import { DropdownProvider } from "./dropdown-context";

const Dropdown = ({ placeholder, children, ...props }) => {
  const [show, setShow] = useState(false);
  const handleToggleDropdown = () => {
    setShow(!show);
  };

  return (
    <DropdownProvider {...props}>
      <div className="relative w-full max-w-[300px]">
        <div
          className="flex items-center px-2 py-4 border border-gray-300 rounded cursor-pointer select-none justify-left placeholder"
          onClick={handleToggleDropdown}
        >
          {placeholder}
        </div>
        {show && children}
      </div>
    </DropdownProvider>
  );
};

export default Dropdown;
