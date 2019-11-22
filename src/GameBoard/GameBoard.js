import React from "react";
import "./GameBoard.css";

class GameBoard extends React.Component {

  render() {
    return (
      <div onClick={this.props.onClick} style={this.props.styles} id="game-board">
        {this.props.children}
      </div>
    );
  }
}

export default GameBoard;
