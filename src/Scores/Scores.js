import React, {Component} from 'react';
import Navigation from "../Navbar/Navbar";
import './Scores.css';
import ProfileSelection from "../ProfileSelection/ProfileSelection";
import DisplayScores from "../Scores/DisplayScores";


class Scores extends Component {

    render(){

        return (

   
        <div className="Panel">
            <Navigation/>
                <div className="Oben">
                    <ProfileSelection />
                </div>
                <div className="Unten">
                   < DisplayScores />
                </div>
        </div>
    )
}
}

export default Scores;

