import React from 'react';
import ProfileButton from './ProfileButton/ProfileButton';
import './ProfileSelection.css'

class ProfileSelection extends React.Component {


    render() {
        return (
        <div className="ProfileSelection">
            <h1 className="ProfileHeading"> Pick a Profile</h1>
            <div className="ProfileButtonWrapper">  
                <ProfileButton profilePicture={require('../assets/wenzi.JPG')}/>
                <ProfileButton profilePicture={require('../assets/wenzi.JPG')}/>
                <ProfileButton profilePicture={require('../assets/wenzi.JPG')}/>
            </div>

            <div className="Anlegen">
            <ProfileButton profilePicture={require('../assets/wenzi.JPG')}/>
            </div>
         </div>        
            )
      }
    }








export default ProfileSelection;