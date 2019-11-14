
import React from 'react';
import styles from './Registration.module.css';
import axios from 'axios';

class Register extends React.Component {


    state = {
        isRegistered: false
    }

    postDataHandler() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        /* axios.post('https://targetpractise-3737.restdb.io/rest/usertable/', {
            username: username,
            password: password 
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });  */


        const query = '?q={"username": "' + username + '", "password": "' + password + '"}';
        axios.post('https://targetpractise-3737.restdb.io/rest/usertable',
            {
                username,
                password,
            },
            {
                headers: {
                      'content-type': 'application/json',
                      'x-apikey': '5dc456d464e7774913b6ea11',
                      'cache-control': 'no-cache'
                    }
            }).then(response => {
                console.log("Registrierung hat funktioniert");
                this.setState({
                    isRegistered: true
                })

            }).catch(error => {
                console.log(error);
            })
    }

    render() {


        const wrapper = {

            position: 'absolute',
            width: '100%',
            height: '100%',
            marginTop: '0',
            overflow: 'hidden',
            textAlign: 'center',
            backgroundColor: 'rosybrown',
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        };


        return (
            <div style={wrapper}>
                <div className={styles.container}>
                    <h1>Registration </h1>

                    <input id="username" className={styles.Input} onClick={this.props.clicked} placeholder="Username" type="text" />
                    <input id="password" className={styles.Input} placeholder="Password" type="password" />
                    <button onClick={this.postDataHandler, this.props.registerClicked} className={styles.Input} id="login-button">Save my Data</button>
                </div >
            </div>
        );
    }

};

export default Register;