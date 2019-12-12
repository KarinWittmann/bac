import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Router } from "react-router";
import Slider from "./Slider/Slider";
import Navbar from "./Navigation/Navigation";
import Panel from "./Panel/Panel";
import GameBoard from "./GameBoard/GameBoard";
import Target from "./GameBoard/Target/Target";
import ProfileSelection from "./ProfileSelection/ProfileSelection";
import LoginForm from "./Login/LoginForm/LoginForm";
import Registration from "./Login/Registration/Registration";
import Level1 from "./GameBoard/Level1";
import Level2 from "./GameBoard/Level2";
import Level3 from "./GameBoard/Level3";

import "./App.css";
import PetProfilCreate from "./ProfileSelection/PetProfileCreate/PetProfilCreate";
import Description from "./Description/Description";
import Scores from "./Scores/Scores";
import Spinner from "./UI/Spinner/Spinner";

//ToDo Routing

const AppContext = React.createContext("appContext");

class App extends Component {
  state = {
    loggedIn: false,
    backgroundstyle: "App"
  };

  render() {
    AppContext.displayName = "MyDisplayName";

    //if (this.state.loggedIn) {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/spinner" component={Spinner} />
            <Route exact path="/" component={Panel} />
            <Route path="/level1" component={Level1} />
            <Route path="/level2" component={Level2} />
            <Route path="/level3" component={Level3} />
            <Route path="/panel" component={Panel} />
            <Route path="/profileSelection" component={ProfileSelection} />
            <Route path="/loginForm" component={LoginForm} />
            <Route path="/petProfileCreate" component={PetProfilCreate} />
            <Route path="/register" component={Registration} />
            <Route path="/scores" component={Scores} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
