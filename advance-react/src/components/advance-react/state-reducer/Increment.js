import React from "react";
import useCounter from "./useCounter";

const Increment = ({ onClick, ...props }) => {
  return (
    <button
      className="flex items-center justify-center p-5 text-lg cursor-pointer increment bg-slate-200"
      onClick={onClick}
      {...props}
    >
      +
    </button>
  );
};

export default Increment;
