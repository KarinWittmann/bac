import React from 'react';
import styles from './LoginForm.module.css';

const loginform = (props) => {
   
    
    const wrapper = {
          
        position: 'absolute',
        top: '70%',
        left: '0',
        width: '100%',
        height: '100%',
        marginTop: '-200px',
        overflow: 'hidden',
        textAlign: 'center',
        backgroundColor: 'lightblue',
    };

    return(
        <div style={wrapper}>
            <div className={styles.container}>
		<h1>Welcome</h1>
		
		<form className="form">
			<input className={styles.Input} onClick={props.clicked} placeholder="Username" type="text" />
			<input className={styles.Input} placeholder="Passwort" type="password" />
			<button className={styles.Input} type="submit" id="login-button">Login</button>
		</form>

	    </div>
        </div>
    )
}

export default loginform;