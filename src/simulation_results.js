import React from 'react';

export default class SimulationResults extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      simHash: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.queryDatabase = this.queryDatabase.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  queryDatabase(event) {
    event.preventDefault();

    // https://github.com/kndt84/aws-api-gateway-client
    var apigClientFactory = require('aws-api-gateway-client').default;

    let config = {
      invokeUrl:'https://4zoom92ov5.execute-api.eu-west-2.amazonaws.com',
      region: 'eu-west-2'
    }

    var apigClient = apigClientFactory.newClient(config);

    var pathParams = {
      simhashValue: this.state.simHash
    };

    var pathTemplate = '/prod/query/{simhashValue}'
    var method = 'GET';
    var additionalParams = {
      headers: {},
      queryParams: {}
    };

    apigClient.invokeApi(pathParams, pathTemplate, method, additionalParams)
      .then(function(result){
        console.log(result.data);
      }).catch( function(error){
        console.log(error.message);
      });
  }

  render() {
    return <form id="simulationResults" className="centered" onSubmit={this.queryDatabase}>
      <input type="text" placeholder="enter simHash" name="simHash" value={this.state.simHash} onChange={this.handleChange}  />
      <input type="submit" value="Submit" />
    </form>
  }
}