import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SimulationForm from './simulation_form'
//import SimulationResults from './simulation_results'
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<SimulationResults />, document.getElementById('root'));
ReactDOM.render(<SimulationForm />, document.getElementById('root'));
//ReactDOM.render(<Display submitted={false} />, document.getElementById('root'))

//function Display(props) {
//  const submitted = props.submitted;
//  if (submitted) {
//    return <SimulationResults />;
//  } else {
//    return <SimulationForm />;
//  }
//}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
