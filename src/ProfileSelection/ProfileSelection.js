import React from 'react';
import ProfileButton from './ProfileButton/ProfileButton';
import './ProfileSelection.css'

class ProfileSelection extends React.Component {


    render() {
        return (
        <div className="ProfileSelection">
            <h1 className="ProfileHeading"> Pick a Profile</h1>
            <div className="ProfileButtonWrapper">  
                <ProfileButton id="PetProfil_1" profilePicture={require('../assets/PetProfil_1.jpg')}/>
                <ProfileButton profilePicture={require('../assets/PetProfil_2.jpg')}/>
                <ProfileButton profilePicture={require('../assets/PetProfil_3.jpg')}/>
            </div>

            <div className="Anlegen">
            <ProfileButton profilePicture={require('../assets/PetProfil_create.jpg')}/>
            </div>
         </div>        
            )
      }
    }








export default ProfileSelection;