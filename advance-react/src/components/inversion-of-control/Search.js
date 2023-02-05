import React from "react";
import { useDropdown } from "./dropdown-context";

const Search = (props) => {
  return (
    <div className="p-2">
      <input
        type="text"
        className="w-full p-4 border border-gray-200 rounded outline-none "
      />
    </div>
  );
};

export default Search;
