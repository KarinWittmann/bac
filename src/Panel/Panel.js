import React from 'react';
import Slider from '../Slider/Slider';
import Description from '../Description/Description';
import Navigation from "../Navbar/Navbar";
import './Panel.css';

const panel = (props) => {

    return(
        <div className="Panel">
            <Navigation/>
                <div className="Oben">
                    <Description />
                </div>
                <div className="Unten">
                   <Slider />
                </div>
        </div>
    )
}

export default panel;

