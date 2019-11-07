
import React from 'react';
import styles from './Registration.module.css';
 import axios from 'axios';

class Register extends React.Component {

    //     onLoginClickHandler() {

            
         //  axios.put('https://targetpractise-3737.restdb.io/rest/usertable' + query,{
    //             headers: {
    //               'content-type': 'application/json',
    //               'x-apikey': '5dc456d464e7774913b6ea11',
    //               'cache-control': 'no-cache'
    //             }}).then(response => {
    //             if (response.data.length > 0) {
    //                 alert("login erfolgreich");
    //             }
    //             else {
    //                 alert("benutzername oder passwort falsch");
    //             }
    //         });
    //     }

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

                    <input id="username" className={styles.Input} onClick={this.props.clicked} placeholder="Username" type="text" />
                    <input id="password" className={styles.Input} placeholder="Password" type="password" />
                    <button onClick={this.onLoginClickHandler} className={styles.Input} id="login-button">Save my Data</button>
                </div >
             </div>
        );
    }

};

export default Register;