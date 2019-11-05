import React, {Component} from 'react';
import './Description.css';

class Description extends Component {

    render(){

        return (
            <div>
            <h1>Name</h1>
            <p>Lore Ipsumore Ipsum ore Ipsumore Ipsum ore Ipsumore Ipsumore Ipsumore Ipsumore Ipsumore Ipsumore Ipsumore Ipsumore Ipsum</p>
            <p>{this.state.games.spiel1.name}</p>
            </div>  
            
        )
    }
    
}

export default Description;

