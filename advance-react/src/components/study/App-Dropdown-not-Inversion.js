import React, { useState } from "react";
import Counter from "./components/advance-react/state-reducer/Counter";
import useCounter from "./components/advance-react/state-reducer/useCounter";
import Dropdown from "./components/inversion-of-control/Dropdown";
const options = [
  { title: "Frontend Developer", onClick: () => {} },
  { title: "Backend Developer", onClick: () => {} },
  { title: "Fullstack Developer", onClick: () => {} },
];
function App() {
  return (
    <div>
      <Dropdown
        options={options}
        placeholder="Please select your job"
        inputPlaceholder={"Search your job..."}
        visibleIconCheck
        visibleSearch
      ></Dropdown>
    </div>
  );
}

export default App;
