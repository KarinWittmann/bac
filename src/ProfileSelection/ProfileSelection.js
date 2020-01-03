import React, { useState, useEffect, useContext } from "react";
import DogProfile from "./DogProfile";
import axios from "../services/axios";
import Spinner from "../UI/Spinner/Spinner";
import Navigation from "../Navigation/Navigation";
import UserContext from '../context/user';
import { Link } from 'react-router-dom';
import "./ProfileSelection.css";
//ToDo
// CSS Styling responsiv
// Nur 3 Angelegte Profile zulassen
// Löschesn eines Profils
export default function ProfileSelection({}) {
  const [dogs, setDogs] = useState([]);
  const user = useContext(UserContext);

  useEffect(() => {
    axios.get("/dogs", {
        params: {
          q: {
            "owner": user,
          }
        }   
      })
      .then(response => {
        setDogs(response.data);
      })
      .catch(error => {
        console.log(error);
        this.setState({
          isLoading: false
        });
      });
  }, [user]);


    // map -> läuft this.state.profiles durch und sagt quasi "führe für jedes profile die funktion darunter aus mit dem return"
    // bei map kommt immer ein array raus. undzwar alle elemente die returned worden sind
    // const profiles = this.state.profiles.map(profile => {
    //   return profile.image ? (
    //     <ProfileButton
    //       key={profile._id}
    //       onClick={this.profileButtonHandler}
    //       profilePicture={
    //         "https://targetpractise-3737.restdb.io/media/" + profile.image
    //       }
    //     />
    //   ) : null;
    // });

  return dogs === 0 ? <Spinner /> : (
    <div className="ProfileSelection">
      <Navigation />
      <div className="Heading">
        <h1>Pick a Dog</h1>
      </div>
      <div className="Wrapper">
        { dogs.map(dog => <DogProfile key={dog._id} dog={dog} onClick={dog => console.log(dog)} />) }
        <Link to="/petProfileCreate"> 
          <div className="profile">
            <div className="plus">
              <p>Add a profile</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}