import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import "semantic-ui-css/semantic.min.css";
import "./assets/css/App.css";
import "./assets/css/basic.css";
import "./assets/iconsmind/iconsmind.css";

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
