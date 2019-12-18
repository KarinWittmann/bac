//mouse on und mouse up (get time) statt Button

import React from "react";
import "./GameBoard.css";

export default function GameBoard({ boardClicked, style }) {
  return <div onClick={boardClicked} className={style} />;
  pa;
}
