import React, { useState } from "react";
import GameBoard from "./GameBoard";
import Target from "./Target/Target";
import "./level.css";

//// TODO - exit Button

const element = {
  target: "gameboard-target",
  board: "gameboard-board",
  default: "gameboard"
};

export default function Level2() {
  const [clicked, setClicked] = useState(element.default);
  const targetPosition = {
    x: "50%",
    y: "50%"
  };

  const clickedhandler = selectedElement => {
    console.log(selectedElement);
    setClicked(selectedElement);
    setTimeout(() => setClicked(element.default), 1000);
  };

  return (
    <div>
      <GameBoard
        style={clicked}
        boardClicked={() => clickedhandler(element.board)}
      />
      <Target
        position={targetPosition}
        clicked={() => clickedhandler(element.target)}
      />
    </div>
  );
}
