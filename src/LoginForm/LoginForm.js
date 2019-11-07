import React from 'react';
import styles from './LoginForm.module.css';
import axios from 'axios';

class LoginForm extends React.Component {
    
    onLoginClickHandler() {
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const query = '?q={"username": "' + username + '", "password": "' + password + '"}';
        axios.get('https://targetpractise-3737.restdb.io/rest/usertable' + query,{
            headers: {
              'content-type': 'application/json',
              'x-apikey': '5dc456d464e7774913b6ea11',
              'cache-control': 'no-cache'
            }}).then(response => {
            if (response.data.length > 0) {
                alert("login erfolgreich");
            }
            else {
                alert("benutzername oder passwort falsch");
            }
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
            backgroundColor: 'rosybrown',
        };
        const button = {
            appearance: 'none',
            outline: '0',
            backgroundColor: 'white',
            border: '0',
            padding: '10px 15px',
            marginTop:'15px',
            color: '#50a3a2',
            borderRadius: '3px',
            width: '250px',
            cursor: 'pointer',
            fontSize: '18px',
            transitionDuration: '0.25s',
            boxShadow: '6px 6px 10px hsla(300,15%,25%,0.3) inset',
        };

        return(
            <div style={wrapper}>
                <div className={styles.container}>
            <h1>Welcome</h1>

            <input id="username" className={styles.Input} onClick={this.props.clicked} placeholder="Username" type="text" />
            <input id="password" className={styles.Input} placeholder="Password" type="password" />
            <button onClick={this.onLoginClickHandler} className={styles.Input} id="login-button">Login</button>
            


            </div >
                

            <button style={button} className="register-button" id="register-button">Register</button>
            </div>
        )
    }
    
}

export default LoginForm;