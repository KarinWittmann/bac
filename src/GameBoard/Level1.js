import React from 'react';
import GameBoard from './GameBoard';
import Button from './Button';


// TODO - exit Button oder nur 10x spiele?

 class Level1 extends React.Component {


state = {
  boardClicked: false,
  targetClicked: false,
  bgColor: '#474747'
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
    bgColor: '#474747',
  })
}

boardClickedHandler = () => {
  this.setState({
    ...this.state,
    bgColor: 'green',
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
     
    </div>
    
  )
}
}

export default Level1