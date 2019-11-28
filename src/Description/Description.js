import React, {Component} from 'react';
import './Description.css';


class Description extends Component {

    render(){

        return (
           
            <div className="Description1">
                
            <h1>Beginner</h1>
            <p> Let's give it a smooth start.</p>
            <p>In this Level the main Display ist gray.</p>
            <p>As soon as your Dog touches the Screen the display turnes green</p>
            <p>The important part now is, that you give your Dog a Leckerli</p>

            <p>Have fun</p>
            {/* <p>{this.state.games.spiel1.name}</p> */}
            </div>  
            
        )
    }
    
}

export default Description;

