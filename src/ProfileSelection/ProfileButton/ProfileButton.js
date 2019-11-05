import React from 'react';
import './ProfileButton.css';

class ProfileButton extends React.Component {

    render() {
        return (
        <div className="ProfileButton">

            <img src={this.props.profilePicture} />
            
         </div>
        
            )
      }
    }










export default ProfileButton;