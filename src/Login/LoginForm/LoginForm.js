import React from "react";
import styles from "./LoginForm.module.css";
import axios from "axios";
import { link } from "fs";
import { withRouter } from "react-router-dom";
import Footer from "../../Footer/Footer";

const LoginForm = props => {
  const onLoginClickHandler = event => {
    event.preventDefault();
    console.log(event);

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const query =
      '?q={"username": "' +
      encodeURIComponent(username) +
      '", "password": "' +
      encodeURIComponent(password) +
      '"}';
    axios
      .get("https://targetpractise-3737.restdb.io/rest/usertable" + query, {
        headers: {
          "content-type": "application/json",
          "x-apikey": "5dc456d464e7774913b6ea11",
          "cache-control": "no-cache"
        }
      })
      .then(response => {
        console.log(response.data);
        if (response.data.length > 0) {
          window.loginInfo = {
            id : response.data._id,
            loggedIn : true
          };
          window.location.href = "/ProfileSelection"; // nicht super -> Läd Seite neu neu
          //this.context.history.push('/ProfileSelection')
          alert("login erfolgreich");
        } else {
          alert("benutzername oder passwort falsch");
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

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
  const button = {
    appearance: "none",
    outline: "0",
    backgroundColor: "white",
    border: "0",
    padding: "10px 15px",
    marginTop: "15px",
    color: "#50a3a2",
    borderRadius: "3px",
    width: "250px",
    cursor: "pointer",
    fontSize: "18px",
    transitionDuration: "0.25s",
    boxShadow: "6px 6px 10px hsla(300,15%,25%,0.3) inset"
  };

  return (
    <div style={wrapper}>
      <div className={styles.container}>
        <h1>Welcome</h1>
        <form onSubmit={onLoginClickHandler}>
          <input
            id="username"
            className={styles.Input}
            onClick={props.clicked}
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
          <button type="submit" className={styles.Input} id="login-button">
            Login
          </button>
        </form>
      </div>

      <button style={button} className="register-button" id="register-button">
        Register
      </button>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
};

export default withRouter(LoginForm);
