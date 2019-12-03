import React from "react";
import styles from "./Registration.module.css";
import axios from "axios";

class Register extends React.Component {
  postDataHandler(event) {
    event.preventDefault();
    console.log(event);

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    axios
      .post(
        "https://targetpractise-3737.restdb.io/rest/usertable",
        {
          username,
          password
        },
        {
          headers: {
            "content-type": "application/json",
            "x-apikey": "5dc456d464e7774913b6ea11",
            "cache-control": "no-cache"
          }
        }
      )
      .then(response => {
        // TODO abfrage auf erfolg
        // TODO navigiere auf startseite nach erfolgreicher registration
        window.loginInfo = {
          id : response.data._id,
          loggedIn : true
        };
        console.log(response);
        
      });
  }

  render() {
    console.log("context");
    console.log(this.context);
    const wrapper = {
      position: "absolute",
      width: "100%",
      height: "100%",
      marginTop: "0",
      overflow: "hidden",
      textAlign: "center",
      backgroundColor: "rosybrown",
      display: "flex",
      flexFlow: "column",
      alignItems: "center",
      justifyContent: "center"
    };

    return (
      <div style={wrapper}>
        <div className={styles.container}>
          <h1>Registration </h1>
          <form onSubmit={this.postDataHandler}>
            <input
              id="username"
              className={styles.Input}
              onClick={this.props.clicked}
              placeholder="Username"
              type="text"
              required
            />
            <input
              id="password"
              className={styles.Input}
              placeholder="Password"
              type="password"
              required
            />
            <button className={styles.Input} id="login-button">
              Save my Data
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
