import React from 'react';
import axios from 'axios';

// https://hackernoon.com/tutorial-how-to-make-http-requests-in-react-part-3-daa6b31b66be

export default class SimulationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simulationCount: 50
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleClick(event) {
      event.preventDefault();

      const simulation = {
        name: this.state.simulationName,
        focus: this.state.focus
      };

      alert('A simulation submitted: ' + simulation);

      axios.post('https://jsonplaceholder.typicode.com', {

        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        },
        body: simulation
      }).then(res => {
        console.log(res);
        console.log(res.data);
      }).catch(error => {
        console.log(error.config);
      });
    }

// https://stackoverflow.com/questions/38510640/how-to-make-a-rest-post-call-from-reactjs-code

  render() {
    return (
      <form>
        <label>Simulation name:</label>
        <input type="text" name="simulationName" value={this.state.simulationName} />
        <br />
        <label>
          Number of simulation runs:
          <input
            name="simulationCount"
            type="number"
            value={this.state.simulationCount}
            onChange={this.handleInputChange} />
        </label>
        <br />
        Choose focus strategy (monsters will follow the same strategy):<br />
        <select value={this.state.focus} onChange={this.handleChange}>
          <option defaultValue value="lowest">Lowest health first (experienced players)</option>
          <option value="random">Random (inexperienced players)</option>
        </select>
        <br />
        <input type="submit" value="Submit" onClick={this.handleClick} />
      </form>
    );
  }
}

//const domContainer = document.querySelector('#simulation_form_container');
//ReactDOM.render(e(SimulationForm), domContainer);