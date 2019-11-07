
import React from 'react';
import styles from './Registration.module.css';
 import axios from 'axios';

class Register extends React.Component {

       
            postDataHandler() {
        
                const username = document.getElementById("username").value;
                const password = document.getElementById("password").value;
                const query = '?q={"username": "' + username + '", "password": "' + password + '"}';
                axios.post('https://targetpractise-3737.restdb.io/rest/usertable' + query,{
                    headers: {
                      'content-type': 'application/json',
                      'x-apikey': '5dc4608cd6e262610002212d',
                      'cache-control': 'no-cache'
                    }}).then(response => {
                   console.log("geht");
                });
            }

    render() {

        
        const wrapper = {

            position: 'absolute',
            top: '70%',
            left: '0',
            width: '100%',
            height: '100%',
            marginTop: '-200px',
            overflow: 'hidden',
            textAlign: 'center',
            backgroundColor: 'lightblue',
        };


        return (
            <div style={wrapper}>
                <div className={styles.container}>
                    <h1>Registration </h1>

                    <input id="username" className={styles.Input} onClick={this.props.clicked} placeholder="Username" type="text"/>
                    <input id="password" className={styles.Input} placeholder="Password" type="password" />
                    <button onClick={this.postDataHandler} className={styles.Input} id="login-button">Save my Data</button>
                </div >
             </div>
        );
    }

};

export default Register;