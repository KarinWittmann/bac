import React from 'react';
import GameBoard from "./GameBoard";

class Button extends React.Component {
    render() {
        return (
          <div>
            
            <button Classname="exit" id="exit" onClick={window.location.href="/Panel"}></button>
            
          </div>
          
        )
      }
      }



    export default Button