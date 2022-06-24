import React from "react";
import "../styles/BackGround.scss";

const BackGround = (props) => {
  return <div className="BackGround">{props.children}</div>;
};

export default BackGround;
