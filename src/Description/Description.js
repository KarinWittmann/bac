import React, {Component} from 'react';
import './Description.css';


class Description extends Component {

    render(){

        return (
           
            <div className="Description">
                <h1>{this.props.description.heading}</h1>
                <div className="DescriptionBody">
                <p>{this.props.description.text}</p>
                </div>
            </div>  
            
        )
    }
    
}

export default Description;

