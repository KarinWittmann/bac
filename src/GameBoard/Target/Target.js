import React from "react";
import "./target.css";

export default function Target({
  clicked,
  position,
  size = { width: "100%", height: "100%" }
}) {
  return (
    <div
      className="target"
      onClick={clicked}
      style={{
        top: position.y,
        left: position.x,
        width: size.width,
        height: size.height
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
