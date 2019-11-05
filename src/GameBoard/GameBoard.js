import React from 'react';
import './GameBoard.css';




class GameBoard extends React.Component {
  
    render() {
      return (
      <div className="GameBoard" id="game-board">{this.props.children}
      
      </div>
      );
    }

  }

  export default GameBoard;