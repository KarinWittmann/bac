import React from 'react';
import './css/Target.css';


class Target extends React.Component {
    sizePercantage = 20; // 20% of parent
  
    constructor(props) {
      super(props)
      
      const targetSize = ((this.props.parentSize * this.sizePercantage) / 100);
      let leftShift, topShift;
      if (this.props.position === "center") {
        leftShift = (this.props.parentSize / 2) - (targetSize / 2);
        topShift = leftShift;
      }
      else if (this.props.position === "random") {
        const min = 0;
        const max = this.props.parentSize - targetSize;
        leftShift = this.getRandomInt(min, max);
        topShift = this.getRandomInt(min, max);
      }
      
      this.state = {
        styles: {
          top: topShift,
          left: leftShift,
          height: this.sizePercantage + "%",
          width: this.sizePercantage + "%"
        }
      };
    }
      
    render() {
      return (<div onClick={this.props.onClick} style={this.state.styles} id="target"></div>);
    }
  
  //https://stackoverflow.com/a/1527820
    /**
     * Returns a random integer between min (inclusive) and max (inclusive).
     * The value is no lower than min (or the next integer greater than min
     * if min isn't an integer) and no greater than max (or the next integer
     * lower than max if max isn't an integer).
     * Using Math.round() will give you a non-uniform distribution!
     */
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }

  export default Target;