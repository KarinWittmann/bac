import React from "react";
import "./GameBoard.css";

class GameBoard extends React.Component {
  render() {
    return (
      <div style={this.props.styles} id="game-board">
        {this.props.children}
      </div>
    );
  }
}

export default GameBoard;
