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

//    https://stackoverflow.com/questions/9382167/serializing-object-that-contains-cyclic-object-value

    var submittedPlayers = Array.from(document.getElementById("players").children).map(playerDiv => {
      const name = 0
      const playerClass = 1

      var playerOptions = playerDiv.children

      return {
        name: playerOptions[name],
        class: playerOptions[playerClass]
      };
    })

    console.log("submittedPlayers = " + submittedPlayers)

    var submittedMonsters = Array.from(document.getElementById("monsters").children).map(monster => monster.value)

    var simulation = {
      name: this.state.simulationName,
      simulationCount: this.state.simulationCount,
      focus: this.state.focus,
      players: submittedPlayers,
      monsters: submittedMonsters
    };

//    var seen = [];
//    var json = JSON.stringify(simulation, function(key, val) {
//       if (val != null && typeof val == "object") {
//            if (seen.indexOf(val) >= 0) {
//                return;
//            }
//            seen.push(val);
//        }
//        return val;
//    });

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
    this.appendCreature("players")
  }

  appendMonster(event) {
    this.appendCreature("monsters")
  }

  appendCreature(creatureType) {
    const creatures = document.getElementById(creatureType)
    const currentNumCreatures = creatures.children.length
    const creatureIndex = currentNumCreatures + 1

    var newCreatureDiv = document.createElement("div")

    var input = document.createElement("input");
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'enter name');
    input.setAttribute('name', creatureType + '-' + creatureIndex + '-name');

    newCreatureDiv.append(input)

    var select = document.createElement("select");
    select.setAttribute('name', creatureType + '-' + creatureIndex + "-playerClass");

    var playerClasses = "barbarian,cleric,fighter,rogue,wizard"
    playerClasses.split(',').forEach(function(playerClass) {
      var option = document.createElement( 'option' );
      option.setAttribute('value', playerClass)
      option.innerHTML = playerClass.charAt(0).toUpperCase() + playerClass.substring(1)

      select.append(option)
    })

    newCreatureDiv.append(select)
    creatures.append(newCreatureDiv)
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
        <div id="players">
            <div id="newPlayer-1">
              <input type="text" placeholder="enter player name" name="newPlayer-1-name" />
              <select name="newMonster-1-playerClass">
                <option defaultValue value= "barbarian">Barbarian</option>
                <option value= "cleric">Cleric</option>
                <option value= "fighter">Fighter</option>
                <option value= "rogue">Rogue</option>
                <option value= "wizard">Wizard</option>
              </select>
            </div>
        </div>
        <button type="button" onClick={this.appendPlayer}>Add Player</button>
        <br />
        <label>Monsters:</label>
        <div id="monsters">
          <div id="newMonster-1">
            <input type="text" placeholder="enter player name" name="newMonster-1-name" />
          </div>
        </div>
        <button type="button" onClick={this.appendMonster}>Add Monster</button>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
