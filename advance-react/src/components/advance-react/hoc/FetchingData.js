import React from "react";
import withLoading from "./withLoading";

const FetchingData = ({ data }) => {
  console.log("FetchingData ~ props", data);
  return <div></div>;
};

export default withLoading(FetchingData);
