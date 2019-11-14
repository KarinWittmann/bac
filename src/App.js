import React, {Component} from 'react';
import Login from './Login/Login';
import Slider from './Slider/Slider';
import Navbar from './Navbar/Navbar';
import Panel from './Panel/Panel';
import GameBoard from './GameBoard/GameBoard';
import Target from './Target/Target';
import ProfileSelection from './ProfileSelection/ProfileSelection';
import PetProfilCreate from './ProfileSelection/PetProfileCreate/PetProfilCreate';

import './App.css';


class App extends Component {

  state = {
    loggedIn: false,
    backgroundstyle: 'App',
  }


  render(){
    
    return(
      <div>
        <Login />
      </div>

    )
}

}

export default App;
