import React from "react";
import useCounter from "./useCounter";

const Decrement = ({ onClick, ...props }) => {
  return (
    <button
      className="flex items-center justify-center p-5 text-lg cursor-pointer decrement bg-slate-200"
      onClick={onClick}
    >
      -
    </button>
  );
};

export default Decrement;
