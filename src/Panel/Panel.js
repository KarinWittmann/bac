import React from 'react';
import Slider from '../Slider/Slider';
import Description from '../Description/Description';

import './Panel.css';

const panel = (props) => {

    return(
        <div className="Panel">
            
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

