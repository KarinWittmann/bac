// TODO - exit Button

import React from 'react'

const Target = props => {
  return (
    <div
      onClick={props.clicked}
      style={{
        width: '110px',
        height: '110px',
        position: 'absolute',
        top: props.posY,
        left: props.posX,
        backgroundColor: 'white',
      }}
    />
  )
}

export default Target
