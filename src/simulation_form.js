import axios from 'axios';
import React from 'react';

export default class SimulationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      simulationCount: 50
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
      event.preventDefault();

      const simulation = {
        name: this.state.simulationName,
        focus: this.state.focus
      };

      alert('A simulation submitted: ' + simulation);

      axios.post(`https://jsonplaceholder.typicode.com`, {simulation})
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
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
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

//const domContainer = document.querySelector('#simulation_form_container');
//ReactDOM.render(e(SimulationForm), domContainer);