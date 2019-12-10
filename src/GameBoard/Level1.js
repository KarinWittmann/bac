import React, { useState } from "react";
import GameBoard from "./GameBoard";
import "./level.css";

//// TODO - exit Button

const element = {
  target: "gameboard-target",
  board: "gameboard-board",
  default: "gameboard"
};

export default function Level1() {
  const [clicked, setClicked] = useState(element.default);
  //const x = '50%';
  // const y ='50%';

  const clickedhandler = selectedElement => {
    console.log(selectedElement);
    setClicked(selectedElement);
    setTimeout(() => setClicked(element.default), 1000);
  };

  return (
    <div>
      <GameBoard
        style={clicked}
        boardClicked={() => clickedhandler(element.target)}
      />
    </div>
  );
}
