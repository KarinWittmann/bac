import React, { Component } from "react";

import Slider from "./Slider/Slider";
import Navbar from "./Navbar/Navbar";
import Panel from "./Panel/Panel";
import GameBoard from "./GameBoard/GameBoard";
import Target from "./GameBoard/Target/Target";
import ProfileSelection from "./ProfileSelection/ProfileSelection";
import LoginForm from "./Login/LoginForm/LoginForm";
import Registration from "./Login/Registration/Registration";
import Level2 from "./GameBoard/Level2";

import "./App.css";
import PetProfilCreate from "./ProfileSelection/PetProfileCreate/PetProfilCreate";

//ToDo Routing

class App extends Component {
  state = {
    loggedIn: true,
    backgroundstyle: "App"
  };

  render() {
    if (this.state.loggedIn) {
      return <Level2 />;
    } else {
      return <ProfileSelection />;
    }
  }
}

export default App;
