import React, {Component}from 'react';
import LoginForm from './LoginForm/LoginForm';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  state = {
    backgroundstyle: 'App'
  }

  setBackroundDarkHandler = () => {
    this.setState = {
      tbackgroundstyle: 'AppDark'
    }
    console.log(this.state.backgroundstyle)
  }

render(){

  return (
    <div className={this.state.backgroundstyle}>
      <LoginForm clicked={()=>this.setBackroundDarkHandler()}/>
    </div>
  );
}

}

export default App;
