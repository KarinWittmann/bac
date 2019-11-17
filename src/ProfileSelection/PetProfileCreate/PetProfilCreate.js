
import React from 'react';
import styles from './PetProfilCreate.module.css';
import axios from 'axios';

class PetProfilCreate extends React.Component {


     state ={

        selectedFile: null
     }
    fileSelectedHandler = event =>{
        this.setState({
        selectedFile: event.target.files[0]
        })
    }
    fileUploadHandler =() => {
        const fd = new FormData();
        fd.append('image',this.state.selectedFile, this.state.selectedFile.name);
        axios.post('https://targetpractise-3737.restdb.io/home/db/5dc45091d6e2626100021dac/cards/5dc936c1d6e262610002df5d/detail/5dcd8047d6e26261000343d5', fd);
        .then(res =>{

            console.log(res);
        });
    }
    
    postDataHandler() {
        const name = document.getElementById("petname").value;
        const age = document.getElementById("age").value;

        axios.post('https://targetpractise-3737.restdb.io/rest/usertable/5dc4608cd6e262610002212d/pet',
            {
                name,
                age
            },
            {
                headers: {
                    'content-type': 'application/json',
                    'x-apikey': '5dc456d464e7774913b6ea11',
                    'cache-control': 'no-cache'
                }
            }).then(response => {
                console.log("geht");
                console.log(response);
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

                    <div className="FilePicker" >
                    <input type="file" onChange={this.fileSelectedHandler} />
                    <button onClick={this.fileUploadHandler}>Upload the Pic</button>
                         
                   </div>

                    <form onSubmit={this.postDataHandler} >

                        <input id="petname" className={styles.Input} onClick={this.props.clicked} placeholder="your dog's name" type="text" required />
                        <input id="age" className={styles.Input} placeholder="your dog´s age" type="text" required />

                        <button className="Input" id="save_button">save data</button>
                    </form>
                </div >
            </div>
        );
    }

};

export default PetProfilCreate;