import React, { Component } from "react";
import "./Scores.css";
import ProfileSelection from "../ProfileSelection/ProfileSelection";
import DisplayScores from "../Scores/DisplayScores";
import WithNavbar from "../HOC/withNavbar";
import Scorejetzt from "../Scores/Scorejetzt";
class Scores extends Component {
  render() {
    return (
      <div className="Panel">
        <div className="Oben">
          <Scorejetzt />
        </div>
        <div className="Unten">
          <DisplayScores />
        </div>
      </div>
    );
  }
}

export default WithNavbar(Scores);
