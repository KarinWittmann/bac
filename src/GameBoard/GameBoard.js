
//mouse on und mouse up (get time) statt Button

import React from 'react'

const Board = props => {
  return (
    <div
      onClick={props.boardClicked}
      style={{
        display: 'flex',
        height: '100vh',
        width: '100%',
        backgroundColor: props.bg,
      }}
    />
  )
}

export default Board
