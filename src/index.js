import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Level3 from './Level3';


import * as serviceWorker from './serviceWorker';
import ProfileSelection from './ProfileSelection';
import ProfileButton from './ProfileButton';

ReactDOM.render(<ProfileSelection />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
