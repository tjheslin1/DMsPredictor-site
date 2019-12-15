import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import SimulationForm from './simulation_form'
import SimulationResults from './simulation_results'
import * as serviceWorker from './serviceWorker';

var submitted = true

//ReactDOM.render(<App />, document.getElementById('root'));
if (submitted) {
  ReactDOM.render(<SimulationResults />, document.getElementById('root'));
} else {
  ReactDOM.render(<SimulationForm />, document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
