import React from 'react';
import ProfileButton from './ProfileButton';

class ProfileSelection extends React.Component {

    render() {
        return (
        <div>
            <h1> Pick a Profile</h1>
            <div id="profile-buttons">
                <ProfileButton profilePicture="./wenzi.JPG"/>
                <ProfileButton profilePicture="./wenzi.JPG"/>
                <ProfileButton profilePicture="./wenzi.JPG"/>
            </div>
         </div>
        
            )
      }
    }








export default ProfileSelection;