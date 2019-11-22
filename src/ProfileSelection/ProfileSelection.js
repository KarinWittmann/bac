import React from "react";
import ProfileButton from "./ProfileButton/ProfileButton";
import "./ProfileSelection.css";
import axios from "axios";

// toDo -> Bilder anzeigen
// CSS Styling
//Nav rein

class ProfileSelection extends React.Component {
  state = {
    profiles: []
  };

  profileButtonHandler(e) {
    alert("profil ausgewählt von: " + e.target.id);
  }

  createProfileButtonHandler() {
    alert("neues profil erstellen");
  }

  render() {
    // map -> läuft this.state.profiles durch und sagt quasi "führe für jedes profile die funktion darunter aus mit dem return"
    // bei map kommt immer ein array raus. undzwar alle elemente die returned worden sind
    const profiles = this.state.profiles.map(profile => {
      return (
        <ProfileButton
          key={profile._id}
          onClick={this.profileButtonHandler}
          profilePicture={profile.image}
        />
      );
    });
    return (
      <div className="ProfileSelection">
        <h1 className="ProfileHeading"> Pick a Profile</h1>
        <div className="ProfileButtonWrapper">{profiles}</div>

        <div className="Anlegen">
          <ProfileButton
            onClick={this.createProfileButtonHandler}
            id="create-profile"
            petId="-1"
            profilePicture={require("../assets/PetProfil_create.jpg")}
          />
        </div>
      </div>
    );
  }

  componentDidMount() {
    axios
      .get(
        "https://targetpractise-3737.restdb.io/rest/usertable/5dc4608cd6e262610002212d/pet",
        {
          headers: {
            "content-type": "application/json",
            "x-apikey": "5dc456d464e7774913b6ea11",
            "cache-control": "no-cache"
          }
        }
      )
      .then(response => {
        if (response.data.length > 0) {
          this.setState({ profiles: response.data });
          console.log(response);
        }
      });
  }
}

export default ProfileSelection;
