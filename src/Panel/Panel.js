import React, { useState, useEffect } from 'react';
import Slider from '../Slider/Slider';
import Description from '../Description/Description';
import Navigation from "../Navbar/Navbar";
import './Panel.css';

const Panel = (props) => {

    const [descriptions , setDescriptions] = useState([
        {
            heading: 'Beginner',
            text: 'In this Level the main Display ist gray. As soon as your Dog touches the Screen the display turnes green. The important part now is, that you give your Dog a Treat.Have fun'
        },
        {
            heading: 'Advanced',
            text: 'Advanced - In this Level the main Display ist gray. As soon as your Dog touches the Screen the display turnes green. The important part now is, that you give your Dog a Leckerli. Have fun'
        },
                {
            heading: 'Expert',
            text: 'Expert - In this Level the main Display ist gray. As soon as your Dog touches the Screen the display turnes green. The important part now is, that you give your Dog a Leckerli. Have fun'
        }
    ])
    const[current, setCurrent] = useState(0);

        /**
     * check if index exceeds > 0 --> reset to 2 else index--
     */
    const leftClickedHandler = () => {
        let currentIndex = current -1;
        if(currentIndex < 0){
            setCurrent(2)
        } else{
            setCurrent(currentIndex)
        }
    }
    /**
     * check if index exceeds > 2 --> reset to 0 else index++
     */
    const rightClickedHandler = () => {
        let currentIndex = current +1;
        if(currentIndex > 2){
            setCurrent(0)
        } else{
            setCurrent(currentIndex)
        }
    }

    return(
        <div className="Panel">
            <Navigation/>
                <div className="Oben">
                    <Description description={descriptions[current]}/>
                </div>
                <div className="Unten">
                   <Slider leftClicked={leftClickedHandler} rightClicked={rightClickedHandler}/>
                </div>
        </div>
    )
}

export default Panel;

