import React from "react";
import GameBoard from "./GameBoard";
import Target from "./Target/Target";

class Level2 extends React.Component {

 /*  constructor(){
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

 onGameBoardClickHandler(){
this.setState({styles : { backgroundColor: "green", height: 300, width: 300}});

 
setTimeout(
function(){
  this.setState({styles : { backgroundColor: "green", height: 300, width: 300}});
}
.bind(this),1000);
} */


  render() {
     const fieldSize = 300;
    /*const styles = {
      height: fieldSize,
      width: fieldSize,
      backgroundColor: "gray"
    }; */
    return (
      <div id="level2">
        <GameBoard flashBackground={'green'}>
          <Target position="center" parentSize={fieldSize} />
        </GameBoard>
      </div>
    );
  }
}
export default Level2;
