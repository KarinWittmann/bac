import React, {Component} from 'react';
import LoginForm from './LoginForm/LoginForm';
import Slider from './Slider/Slider';
import Navbar from './Navbar/Navbar';
import Panel from './Panel/Panel';
import './App.css';


class App extends Component {

  state = {
    backgroundstyle: 'App'
  }

render(){

  return (
    <div>
      <Navbar />
      <Panel />
    </div>
  );
}

}

export default App;
