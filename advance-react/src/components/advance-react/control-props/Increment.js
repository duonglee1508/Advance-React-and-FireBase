import React from "react";
import { useCount } from "./count-context";

const Increment = () => {
  const { handleIncrement } = useCount();
  return (
    <button
      className="flex items-center justify-center p-5 text-lg cursor-pointer increment bg-slate-200"
      onClick={handleIncrement}
    >
      +
    </button>
  );
};

export default Increment;
