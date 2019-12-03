import React from "react";
 import GameBoard from "./GameBoard";
import Target from "./Target/Target";

//// TODO - exit Button



class Level2 extends React.Component {
  state = {
    boardClicked: false,
    targetClicked: false,
    bgColor: 'grey',
    targetPosition: {
      x: 520,
      y: 380,
    },
  }

  targetClickedHandler = () => {
    this.setState({
      ...this.state,
      targetClicked: true,
      bgColor: 'green',
    })

    setTimeout(() => {
      this.resetState()
      this.resetBgColor()
      
    }, 1000)
  }

  resetBgColor = () => {
    this.setState({
      ...this.state,
      bgColor: 'grey',
    })
  }

  boardClickedHandler = () => {
    this.setState({
      ...this.state,
      bgColor: 'red',
      boardClicked: true,
    })

    setTimeout(() => {
      this.resetState()
      this.resetBgColor()
    }, 1000)
  }

  resetState = () => {
    this.setState({
      ...this.state,
      targetClicked: false,
      boardClicked: false,
    })
  }

  render() {
    return (
      <div>
        <GameBoard
          bg={this.state.bgColor}
          boardClicked={this.boardClickedHandler}
        />
        <Target
          posX={this.state.targetPosition.x}
          posY={this.state.targetPosition.y}
          clicked={this.targetClickedHandler}
        />
      </div>
    )
  }
}

export default Level2
