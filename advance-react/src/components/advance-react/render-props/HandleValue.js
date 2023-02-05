import React, { useState } from "react";
//lifting state
const HandleValue = () => {
  return <Input render={(value) => <DisplayValue value={value} />}></Input>;
};
const Input = (props) => {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      {props.render(value)}
    </>
  );
};
const DisplayValue = ({ value }) => {
  return <span>{value}</span>;
};

export default HandleValue;
