import React from 'react';
import GameBoard from "./GameBoard";

class Button extends React.Component {
    render() {
        return (
          <div>
            
            <Button Classname="exit" id="exit" onClick={window.location.href="/Panel"}></Button>
            
          </div>
          
        )
      }
      }



    export default Button