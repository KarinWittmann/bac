import React from "react";
import GameBoard from "./GameBoard";
import Target from "./Target/Target";

class Level3 extends React.Component {

  
  targetClickHandler() {
    alert("Treffer!");
    
    
    // TODO neue position setzen bzw. neu rendern
  }
  
  render() {
    console.log("render");
    const fieldSize = 300;
    const styles = {
      height: fieldSize,
      width: fieldSize,
      backgroundColor: "gray"
    };
    return (
      <div id="level3">
        <GameBoard flashBackground={'green'}>
          <Target
            onClick={this.onGameTargetClickHandler}
            position="random"
            parentSize={fieldSize}
          />
        </GameBoard>
      </div>
    );
  }
}

export default Level3;
