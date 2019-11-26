import React from "react";
import "./GameBoard.css";


class GameBoard extends React.Component {

  state = {
        styles : {
          height: "100vh",
           width: "100vw",
           backgroundColor: "gray"
         }
       };

    resetBoardColor = ()=> {
      this.setState({
        styles : {
          height: "100vh",
           width: "100vw",
           backgroundColor: "gray"
         }
      })
    }

    flashBoard = ()=> {
      this.setState({
      styles : {
        ...this.state.styles,
        backgroundColor : this.props.flashBackground
      }
      })
    }

    onGameBoardClickHandler =()=> {
      this.setState({
        styles : {
          ...this.state.styles,
          backgroundColor : this.props.flashBackground
        }
        })
      }
  render() {
  
    return (
      <div onClick={this.onGameBoardClickHandler} style={this.state.styles}>
        {this.props.children}
      </div>
    );
  }
}

export default GameBoard;
