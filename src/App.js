import React, {Component} from 'react';

import Slider from './Slider/Slider';
import Navbar from './Navbar/Navbar';
import Panel from './Panel/Panel';
import GameBoard from './GameBoard/GameBoard';
import Target from './Target/Target';
import ProfileSelection from './ProfileSelection/ProfileSelection';
import LoginForm from'./Login/LoginForm/LoginForm';
import Registration from './Login/Registration/Registration';


import './App.css';


class App extends Component {

  state = {
    loggedIn: false,
    backgroundstyle: 'App'
  }

  render(){
    if(this.state.loggedIn){
      return (
        <Registration />
      );
    }else{
      return (
        <LoginForm />
    )
  }
}

}

export default App;
