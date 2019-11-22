import React from "react";
import GameBoard from "./GameBoard";
import Target from "./Target/Target";

class Level2 extends React.Component {
  render() {
    const fieldSize = 300;
    const styles = {
      height: fieldSize,
      width: fieldSize,
      backgroundColor: "gray"
    };
    return (
      <div id="level2">
        <GameBoard styles={styles} size={fieldSize}>
          <Target position="center" parentSize={fieldSize} />
        </GameBoard>
      </div>
    );
  }
}
export default Level2;
