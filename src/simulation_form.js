import React from 'react';
import axios from 'axios';

// https://hackernoon.com/tutorial-how-to-make-http-requests-in-react-part-3-daa6b31b66be

export default class SimulationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        simulationName: "",
        simulationCount: 50,
        focus: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.appendPlayer = this.appendPlayer.bind(this);
    this.appendMonster = this.appendMonster.bind(this);
  }

  // https://stackoverflow.com/questions/26505064/react-js-what-is-the-best-way-to-add-a-value-to-an-array-in-state

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    var submittedPlayers = []
    Array.from(document.getElementById("newPlayer").children).forEach(player => submittedPlayers.push(player))

    console.log("submittedPlayers: " + submittedPlayers)

    var simulation = {
      name: this.state.simulationName,
      simulationCount: this.state.simulationCount,
      focus: this.state.focus,
      players: submittedPlayers
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

  appendPlayer(event) {
    this.appendCreature("newPlayer")
  }

  appendMonster(event) {
    this.appendCreature("newMonster")
  }

  appendCreature(creatureType) {
    const newCreatureDiv = document.getElementById(creatureType)

    const currentNumCreatures = newCreatureDiv.children.length

    var input = document.createElement("input");
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'enter name');
    input.setAttribute('name', creatureType + '-' + (currentNumCreatures + 1));

    newCreatureDiv.append(input)
  }

  render() {
    return (
      <form id="simulationForm" onSubmit={this.handleSubmit}>
        <label>Simulation name:</label>
        <input type="text" placeholder="enter name here" name="simulationName" value={this.state.simulationName} onChange={this.handleChange}  />
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
        <select name="focus" value={this.state.focus} onChange={this.handleChange}>
          <option defaultValue value="lowest">Lowest health first (experienced players)</option>
          <option value="random">Random (inexperienced players)</option>
        </select>
        <br />
        <label>Players:</label>
        <br />
        <div id="newPlayer">
            <input type="text" placeholder="enter player name" name="newPlayer-1" />
        </div>
        <button type="button" onClick={this.appendPlayer}>Add Player</button>
        <br />
        <label>Monsters:</label>
        <div id="newMonster">
            <input type="text" placeholder="enter player name" name="newMonster-1" />
        </div>
        <button type="button" onClick={this.appendMonster}>Add Monster</button>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
