import React from 'react';
import axios from 'axios';

// https://hackernoon.com/tutorial-how-to-make-http-requests-in-react-part-3-daa6b31b66be

export default class SimulationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        simulationName: "enter name here",
        simulationCount: 50,
        focus: "lowest"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

console.log("updating "+ name + " to " + value)

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    var simulation = {
      name: this.state.simulationName,
      simulationCount: this.state.simulationCount,
      focus: this.state.focus
    };

    axios.post('https://jsonplaceholder.typicode.com/posts', {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
      },
      body: simulation
    }).then(res => {
      console.log(res.data);
    }).catch(error => {
      console.log(error.message);
    });
  }

// https://stackoverflow.com/questions/38510640/how-to-make-a-rest-post-call-from-reactjs-code

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Simulation name:</label>
        <input type="text" name="simulationName" value={this.state.simulationName} onChange={this.handleChange}  />
        <br />
        <label>
          Number of simulation runs:
          <input
            name="simulationCount"
            type="number"
            value={this.state.simulationCount}
            onChange={this.handleChange} />
        </label>
        <br />
        Choose focus strategy (monsters will follow the same strategy):<br />
        <select value={this.state.focus} onChange={this.handleChange}>
          <option defaultValue value="lowest">Lowest health first (experienced players)</option>
          <option value="random">Random (inexperienced players)</option>
        </select>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

//const domContainer = document.querySelector('#simulation_form_container');
//ReactDOM.render(e(SimulationForm), domContainer);