import React from 'react';
import GameBoard from './GameBoard';

class Level1 extends React.Component {
    render() {
      const fieldSize = 300;
      const styles = {
          height: fieldSize,
          width: fieldSize,
          backgroundColor: "gray"
      };
      return (
        <div id="level1">
        <GameBoard styles={styles} size={fieldSize}>
        
        </GameBoard>
      </div>
      )
    }
  }
  export default Level1;