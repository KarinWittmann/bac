
import React from 'react';
import './PetProfilCreate.css';
import axios from 'axios';

class PetProfilCreate extends React.Component {

    postDataHandler() {
        const petname = document.getElementById("petname").value;
        const age = document.getElementById("age").value;

        

        const query = '?q={"petname": "' + petname + '", "age": "' + age + '"}';
        axios.post('https://targetpractise-3737.restdb.io/rest/usertable',
            {
                petname,
                age,
            },
            {
                headers: {
                      'content-type': 'application/json',
                      'x-apikey': '5dc456d464e7774913b6ea11',
                      'cache-control': 'no-cache'
                    }
            }).then(response => {
                console.log("geht");
            });
    }

    render() {


       


        return (
            <div className="wrapper">
                <div className="container">
                    <h1>Create a new profile for your animal </h1>

                    <form onSubmit={this.onLoginClickHandler} >
            <input id="petname" className="Input" onClick={this.props.clicked} placeholder="your dog's name" type="text" required />
            <input id="age" className="Input" placeholder="your dog´s age" type="text" required  />

            <button type="submit" className="Input" id="login-button">save data</button>
            
</form>    
                </div >
            </div>
        );
    }

};

export default PetProfilCreate;