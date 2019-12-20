import React, { useState } from "react";
import GameBoard from "./GameBoard";
import "./level.css";
import ApiHelper from "../ApiHelper";
import axios from "axios";

//// TODO - exit Button

const element = {
  target: "gameboard-target",
  board: "gameboard-board",
  default: "gameboard"
};

export default function Level1() {
  const [clicked, setClicked] = useState(element.default);
  const [points, setPoints] = useState(0);
  const [clickEnabled, setClickEnabled] = useState(true);

  // TODO schnell hintereinander aufs gameboard klicken bugged noch
  const clickedhandler = selectedElement => {
    if (clickEnabled == true) {
      setClickEnabled(false);
      setPoints(points + 1);
      
      if (points == 3) {
        alert("level abgeschlossen");
        // TODO spinner andrehen
        const level = "Level 1";
        const profile = "pet profilename TODO";
        // TODO statt axios hier aufzurufen, den ApiHelper verwenden. allerdings irgendwie auf das then() vom ApiHelper warten
        axios.post(
          "https://targetpractise-3737.restdb.io/rest/usertable/5dc4608cd6e262610002212d/scores",
          {
            level,
            profile,
            points
          },
          {
            headers: {
              "content-type": "application/json",
              "x-apikey": "5dc456d464e7774913b6ea11"
            }
          }
        )
      .then(response => {
        // TODO abfrage ob funktioniert hat
        ApiHelper.addScore("Level 1", "Fixer Name: TODO", points);
        // TODO spinner abdrehen
        window.location.href = "/";
        console.log("score gespeichert");
        console.log(response);
      });
      }
      else {
        console.log(selectedElement);
        setClicked(selectedElement);
        setTimeout(() => {
          setClickEnabled(true);
          setClicked(element.default);
        }, 1000);
      }
    }
    
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
