
import React from 'react';
import styles from './PetProfilCreate.module.css';
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

        const wrapper = {

            position: 'absolute',
            width: '100%',
            height: '100%',
            marginTop: '0',
            overflow: 'hidden',
            textAlign: 'center',
            backgroundColor: 'rosybrown',
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        };


        return (
            <div style={wrapper}>
                <div className={styles.container}>
                    <h1>Create a new profile for your animal </h1>

                    <form onSubmit={this.onLoginClickHandler} >
                        <input id="petname" className={styles.Input} onClick={this.props.clicked} placeholder="your dog's name" type="text" required />
                        <input id="age" className={styles.Input} placeholder="your dog´s age" type="text" required />

                        <button type="submit" className="Input" id="save_button">save data</button>

                    </form>
                </div >
            </div>
        );
    }

};

export default PetProfilCreate;