import React from "react";
import GameBoard from "./GameBoard";
import Target from "./Target/Target";


// TODO - exit Button
class Level3 extends React.Component {

  state = {
    boardClicked: false,
    targetClicked: false,
    bgColor: 'grey',
    targetPosition: {
      x: 100,
      y: 80,
    },
  }
//level
  changePosition = (x, y) => {
    this.setState({
      ...this.state,
      targetPosition: {
        x: x,
        y: y,
      },
    })
  }
  //level3
  changePositionRandom = () => {
    let x = Math.random() * window.innerWidth - 50
    let y = Math.random() * window.innerHeight - 50

    if (x < 0) {
      x -= x
    }
    if (y < 0) {
      y -= y
    }

    this.changePosition(x, y)
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
      this.changePositionRandom()
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

export default Level3;
