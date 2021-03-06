import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SimulationForm from './simulation_form'
import * as serviceWorker from './serviceWorker';

import {
  HashRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

ReactDOM.render(<Index />, document.getElementById('root'));

export default function Index() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <SimulationForm />
          </Route>
          <Route path="/results/:id?">
            <Results />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// 208297758

function Results() {
  let { id } = useParams();

  if (id !== null && id !== "" && id !== undefined) {
    queryDatabase(id);

    return (
      <div>
        <div className="centered" >
          <h3 className="mobile_message"><a target="_blank" rel="noopener noreferrer" href="https://github.com/tjheslin1/DMsPredictor">This project</a> <i>is a work in progress! If you have any feedback, suggestions or questions please <a href="mailto:tjheslin1@kolabnow.com?subject=DMsPredictor-site">email me</a>, referencing a <u>simulation results ID</u> where relevant.</i></h3>
          <h3 id="results-header">waiting...</h3>
          <form id="simulationResults" onSubmit={(e) => {e.preventDefault(); passQueryToUrl(document.getElementById("simHash").value)}}>
            <input id="simHash" type="text" placeholder="enter simHash" />
            <input type="submit" value="Submit" />
          </form>
          <a href={`/#/results/${id}`}><i>refresh {id} results</i></a>
        </div>
        <img className="gif" src="https://dmspredictor-site-assets.s3.eu-west-2.amazonaws.com/roll_tiny.gif" alt="rolling dice..."/>
      </div>
    )
  } else {
    return (
      <div>
        <div className="centered" >
          <h3 className="mobile_message"><a target="_blank" rel="noopener noreferrer" href="https://github.com/tjheslin1/DMsPredictor">This project</a> <i>is a work in progress! If you have any feedback, suggestions or questions please <a href="mailto:tjheslin1@kolabnow.com?subject=DMsPredictor-site">email me</a>, referencing a <u>simulation results ID</u> where relevant.</i></h3>
          <h3 id="results-header">Enter your simulation id:</h3>
          <form id="simulationResults" onSubmit={(e) => {e.preventDefault(); passQueryToUrl(document.getElementById("simHash").value)}}>
            <input id="simHash" type="text" placeholder="enter simHash" />
            <input type="submit" value="Submit" />
          </form>
          <a href='/#/results'>Refresh</a>
          <br />
        </div>
        <img className="gif" src="https://dmspredictor-site-assets.s3.eu-west-2.amazonaws.com/roll_tiny.gif" alt="rolling dice..." />
      </div>
    )
  }
}

function passQueryToUrl(simHash) {
  window.location.href = '/#/results/' + simHash
}

function queryDatabase(simHash) {
  // https://github.com/kndt84/aws-api-gateway-client
  var apigClientFactory = require('aws-api-gateway-client').default;

  let config = {
    invokeUrl:'https://4zoom92ov5.execute-api.eu-west-2.amazonaws.com',
    region: 'eu-west-2'
  }

  var apigClient = apigClientFactory.newClient(config);

  var pathParams = {
    simhashValue: simHash
  };

  var pathTemplate = '/prod/query/{simhashValue}'
  var method = 'GET';
  var additionalParams = {
    headers: {},
    queryParams: {}
  };

  apigClient.invokeApi(pathParams, pathTemplate, method, additionalParams)
    .then(function(result){
      document.getElementById("results-header").innerHTML = "Your simulation id is: <div style=\"color: green\">" + JSON.stringify(result.data.Items[0].sim_hash.S).replace(/"/g, "") + "</div><br/><i>make a note of it (or copy the full URL) to return to the results in the future.</i><br /><br/>Results: "
          + JSON.stringify(result.data.Items[0].result.S).replace(/"/g, "").replace(/,/g, " and");
    }).catch( function(error){
      document.getElementById("results-header").innerHTML = error.message
      + '<br /><i style="color: red">this is likely an unknown simulation ID</i>';
    });
}

serviceWorker.unregister();
