import React from "react";
import spinner from "../assets/spinner.svg";

const Loading = () => (
  <div className="spinner">
    <img src={spinner} alt="Loading" />
  </div>
);

export default Loading;
