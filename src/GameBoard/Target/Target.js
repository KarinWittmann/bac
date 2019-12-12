// TODO - exit Button

import React from "react";
import "./target.css";

export default function Target({ clicked, posX, posY }) {
  return (
    <div
      className="target"
      onClick={clicked}
      style={{
        top: posY,
        left: posX
      }}
    >
      <img
        src={require("../../assets/target.png")}
        className="target_image"
        alt=""
      />
    </div>
  );
}
