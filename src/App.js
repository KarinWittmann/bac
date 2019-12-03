import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Router} from "react-router";
import Slider from "./Slider/Slider";
import Navbar from "./Navbar/Navbar";
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

//ToDo Routing

const AppContext = React.createContext('appContext');

class App extends Component {
  
  state = {
    loggedIn: false,
    backgroundstyle: "App"
  };

  render() {
    AppContext.displayName = 'MyDisplayName';

    //if (this.state.loggedIn) {
      return (
      <BrowserRouter>
      <div>
      <Switch>
     
        <Route exact path="/" component={Panel}/>
        <Route path="/level1" component ={Level1}/>
        <Route path="/level2" component ={Level2}/>
        <Route path="/level3" component ={Level3}/>  
        <Route path="/Panel" component ={Panel}/>  
        <Route path="/ProfileSelection" component ={ProfileSelection}/> 
        <Route path="/LoginForm" component ={LoginForm}/>
        <Route path="/PetProfileCreate" component ={PetProfilCreate}/>
        <Route path="/register" component ={Registration}/>
       
      </Switch>
      </div>
      </BrowserRouter>
      
      )
   // } else {
     // return <ProfileSelection />;
    //}
  }
}

export default App;
