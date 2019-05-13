'use strict';

const e = React.createElement;

class SimulationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      simulationCount: 50
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

// https://stackoverflow.com/questions/38510640/how-to-make-a-rest-post-call-from-reactjs-code

  render() {
    return (
      <form>
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
        <select value={this.state.value} onChange={this.handleChange}>
          <option defaultValue value="lowest">Lowest health first (experienced players)</option>
          <option value="random">Random (inexperienced players)</option>
        </select>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const domContainer = document.querySelector('#simulation_form_container');
ReactDOM.render(e(SimulationForm), domContainer);