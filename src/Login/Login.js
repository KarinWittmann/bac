import React, { Component } from 'react';
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './Registration/Registration';
import {BrowserRouter, Route} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

class Login extends Component {

    state = {
        isLoginOpen: true,
        isRegisterOpen: false,
    }


    handleRegisterClicked(){
        console.log("bin in registerclicked")
        this.setState({
            isLoginOpen: true,
            isRegisterOpen: false
        })
    }

    render() {

       

        return (
            <div>
   
            <BrowserRouter>
            <Redirect from="/" to="/login"/>
                <Route path="/login" component={LoginForm}/>
                <Route path="/register" component={RegisterForm} />
            </BrowserRouter>
            </div>
           
        );
    }
}

export default Login;