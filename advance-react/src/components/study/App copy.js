import React, { useState } from "react";
import FetchingData from "../advance-react/hoc/FetchingData";
import Accordion from "../advance-react/react-composition/Accordion";
import Editable from "../advance-react/react-composition/Editable";
import Input from "../advance-react/render-props/HandleValue";
import HandleValue from "../advance-react/render-props/HandleValue";
import Title from "../advance-react/render-props/Title";
import Switch from "../advance-react/prop collection/Switch";

function useToggle() {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);
  function getToggleProps({ onClick, ...rest } = {}) {
    return {
      onClick: () => {
        onClick && onClick();
        toggle();
      },
      ...rest,
    };
  }
  //toggleProps
  return {
    on,
    toggle,
    getToggleProps,
    // toggleProps: {
    //   onClick: toggle,
    // },
  };
}

//HOC : higher order component pattern
// Props collection - Kentc Dodds - creator of Remix
// Props getter
function App() {
  const { on, getToggleProps } = useToggle();
  return (
    <div>
      <Switch on={on} {...getToggleProps({ on })}></Switch>
      <hr />
      <button
        aria-label="custom-button"
        {...getToggleProps({
          onClick: () => console.info("onButtonClicked"),
        })}
      >
        {on ? "on" : "off"}
      </button>
    </div>
  );
}

export default App;
