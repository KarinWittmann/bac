import React from 'react';
import GameBoard from './GameBoard';

class Level1 extends React.Component {
  constructor() {
    super();
    this.onGameBoardClickHandler = this.onGameBoardClickHandler.bind(this);
  }
  state = {
    styles : {
      height: 300,
      width: 300,
      backgroundColor: "gray"
    }
  };

  onGameBoardClickHandler() {
    this.setState({styles : {backgroundColor : "green", height: 300, width: 300}});
    
    
    setTimeout(
      function() {
          this.setState({styles : {backgroundColor : "gray", height: 300, width: 300}});
      }
      .bind(this), 1000);
  }
    
    render() {
      const fieldSize = 300;
      return (
        <div id="level1">
        <GameBoard styles={this.state.styles} onClick={this.onGameBoardClickHandler} size={fieldSize}>
        
        </GameBoard>
      </div>
      )
    }
  }
  export default Level1;