import React from "react";
import styles from "./PetProfilCreate.module.css";
import axios from "axios";

class PetProfilCreate extends React.Component {
  state = {
    selectedFile: null,
    name: "testname",
    dogname: "testdogname"
  };

  fileChangedHandler = event => {
    this.setState({ selectedFile: event.target.files[0] }, () => {
      console.log(this.state.selectedFile);
    });
  };

  /*  uploadHandler = () => {
    const image = new FormData();

    image.append("file", this.state.selectedFile);
    for (var p of image) {
      console.log(p);
    }
    axios
      .post(
        "https://targetpractise-3737.restdb.io/rest/usertable/5dc4608cd6e262610002212d/pet",
        {
          image
        },
        {
          headers: {
            "content-type": "multipart/form-data",
            "x-apikey": "5dc456d464e7774913b6ea11",
            "cache-control": "no-cache"
          }
        }
      )
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }; */

  postDataHandler = event => {
    event.preventDefault();
    const name = document.getElementById("petname").value;
    const age = document.getElementById("age").value;
    let image = this.state.selectedFile;

    axios
      .post(
        "https://targetpractise-3737.restdb.io/rest/usertable/5dc4608cd6e262610002212d/pet",
        {
          name,
          age,
          image
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
        console.log("geht");
        console.log(response);
      })
      .catch(error => {
        alert("Eingabefelder überprüfen");
        console.log(error);
      });
  };

  render() {
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
          <h1>Create a new profile for your animal </h1>

          <div className="FilePicker">
            <input
              id="fileButton"
              type="file"
              onChange={this.fileChangedHandler}
            />
          </div>

          <form>
            <input
              id="petname"
              className={styles.Input}
              onClick={this.props.clicked}
              placeholder="your dog's name"
              type="text"
              required
            />
            <input
              id="age"
              className={styles.Input}
              placeholder="your dog´s age"
              type="number"
              required
            />

            <button
              className="Input"
              onClick={this.postDataHandler}
              id="save_button"
            >
              save data
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default PetProfilCreate;
