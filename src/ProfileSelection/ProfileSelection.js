import React from "react";
import ProfileButton from "./ProfileButton/ProfileButton";
import "./ProfileSelection.css";
import axios from "axios";
import Spinner from "../UI/Spinner/Spinner";
import WithNavbar from "../HOC/withNavbar";
import ProfilePicker from "../ProfilePicker/ProfilePicker";
//ToDo
// CSS Styling responsiv
// Nur 3 Angelegte Profile zulassen
// Löschesn eines Profils
class ProfileSelection extends React.Component {
  state = {
    profiles: [],
    isLoading: true
  };

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
        this.setState({
          isLoading: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          isLoading: false
        });
      });
  }

  profileButtonHandler(e) {
    alert("profil ausgewählt von: " + e.target.id);
  }

  createProfileButtonHandler() {
    window.location.href = "/PetProfileCreate";
    alert("neues profil erstellen");
  }

  render() {
    // map -> läuft this.state.profiles durch und sagt quasi "führe für jedes profile die funktion darunter aus mit dem return"
    // bei map kommt immer ein array raus. undzwar alle elemente die returned worden sind
    const profiles = this.state.profiles.map(profile => {
      return profile.image ? (
        <ProfileButton
          key={profile._id}
          onClick={this.profileButtonHandler}
          profilePicture={
            "https://targetpractise-3737.restdb.io/media/" + profile.image
          }
        />
      ) : null;
    });

    return (
      <div className="ProfileSelection">
        {this.state.isLoading ? <Spinner /> : null}
        {/* <h1 className="ProfileHeading"> Pick a Profile</h1> */}
        {/* <div className="ProfileButtonWrapper">{profiles}</div>

        <div className="Anlegen">
          <ProfileButton
            onClick={this.createProfileButtonHandler}
            id="create-profile"
            petId="-1"
            profilePicture={require("../assets/PetProfil_create.jpg")}
          /> </div>*/}
        <ProfilePicker
          profiles={this.state.profiles}
          heading="Pick a Profile"
        />
      </div>
    );
  }
}

export default WithNavbar(ProfileSelection);
