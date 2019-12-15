import React from 'react';

export default class SimulationForm extends React.Component {

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
    var AWS = require("aws-sdk");

    AWS.config.update({
      region: "us-west-2",
      endpoint: ""
    });

    var docClient = new AWS.DynamoDB.DocumentClient();

    var params = {
      ExpressionAttributeValues: {
        ':s': {S: this.state.simHash}
      },
      KeyConditionExpression: 'sum_hash = :s',
      ProjectionExpression: 'result',
      FilterExpression: '',
      TableName: 'simulation_results',
      Limit: 1
    };
  }

  render() {
    return <form id="simulationResults" class="centered" onSubmit={this.queryDatabase}>
      <input type="text" placeholder="enter simHash" name="simHash" value={this.state.simHash} onChange={this.handleChange}  />
      <input type="submit" value="Submit" />
    </form>
  }
}