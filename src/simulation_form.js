import React from 'react';
import axios from 'axios';

export default class SimulationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        simulationName: "",
        simulationCount: 50,
        focus: "lowest"
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

    var submittedPlayers = Array.from(document.getElementById("players").children).map(playerDiv => {
      const name = 0
      const playerClass = 1
      const level = 2
      const weapon = 3
      const str = 4
      const dex = 5
      const con = 6
      const int = 7
      const wis = 8
      const cha = 9

      var playerOptions = playerDiv.children

      var stats = playerOptions[str].value + "," +
      playerOptions[dex].value + "," +
      playerOptions[con].value + "," +
      playerOptions[int].value + "," +
      playerOptions[wis].value + "," +
      playerOptions[cha].value

      return {
        name: playerOptions[name].value,
        class: playerOptions[playerClass].value,
        level: playerOptions[level].value,
        weapon: playerOptions[weapon].value,
        stats: stats,
        skills: "0,0"
      };
    })

    var submittedMonsters = Array.from(document.getElementById("monsters").children).map(monsterDiv => {
      const name = 0
      const monsterType = 1

      var monsterOptions = monsterDiv.children

      return {
        name: monsterOptions[name].value,
        monster: monsterOptions[monsterType].value
      };
    })

    var simulation = {
      simulationName: this.state.simulationName,
      simulations: this.state.simulationCount,
      focus: this.state.focus,
      players: submittedPlayers,
      monsters: submittedMonsters
    };

    axios.post('https://${gateway-id}.execute-api.eu-west-2.amazonaws.com/prod/simulator', {
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
    var playerClasses = "barbarian,cleric,fighter,rogue,wizard"
    var levels = "1,2,3,4,5"
    var weapons = "shortsword,greatsword,greataxe"

    const creatures = document.getElementById("players")
    const currentNumCreatures = creatures.children.length
    const creatureIndex = currentNumCreatures + 1

    var newCreatureDiv = document.createElement("div")

    var input = document.createElement("input");
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'enter player name');
    input.setAttribute('name', 'players-' + creatureIndex + '-name');

    newCreatureDiv.append(input)

    var playerClassSelect = document.createElement("select");
    playerClassSelect.setAttribute('name', 'players-' + creatureIndex + "-playerClass");
    playerClasses.split(',').forEach(function(playerClass) {
      var option = document.createElement('option');
      option.setAttribute('value', playerClass)
      option.innerHTML = playerClass.charAt(0).toUpperCase() + playerClass.substring(1)

      playerClassSelect.append(option)
    })

    var levelSelect = document.createElement("select");
    levelSelect.setAttribute('name', 'players-' + creatureIndex + "-level");
    levels.split(',').forEach(function(level) {
      var option = document.createElement('option');
      option.setAttribute('value', level)
      option.innerHTML = "Level " + level

      levelSelect.append(option)
    })

    var weaponSelect = document.createElement("select");
    weaponSelect.setAttribute('name', 'players-' + creatureIndex + "-weapon");
    weapons.split(',').forEach(function(weapon) {
      var option = document.createElement('option');
      option.setAttribute('value', weapon)
      option.innerHTML = weapon.charAt(0).toUpperCase() + weapon.substring(1)

      weaponSelect.append(option)
    })

    newCreatureDiv.append(playerClassSelect)
    newCreatureDiv.append(levelSelect)
    newCreatureDiv.append(weaponSelect)

    newCreatureDiv.append(this.appendModScore(creatureIndex, "Str"))
    newCreatureDiv.append(this.appendModScore(creatureIndex, "Dex"))
    newCreatureDiv.append(this.appendModScore(creatureIndex, "Con"))
    newCreatureDiv.append(this.appendModScore(creatureIndex, "Int"))
    newCreatureDiv.append(this.appendModScore(creatureIndex, "Wis"))
    newCreatureDiv.append(this.appendModScore(creatureIndex, "Cha"))

    creatures.append(newCreatureDiv)
  }

  appendModScore(creatureIndex, score) {
    var input = document.createElement("input");
    input.setAttribute('type', 'text');
    input.setAttribute('class', 'mod-score');
    input.setAttribute('placeholder', score.charAt(0).toUpperCase() + score.substring(1));
    input.setAttribute('name', 'players-' + creatureIndex + '-' + score);

    return input
  }

  appendMonster(event) {
    var monsterTypes = "goblin,zombie,vampire,werewolf"

    const creatures = document.getElementById("monsters")
    const currentNumCreatures = creatures.children.length
    const creatureIndex = currentNumCreatures + 1

    var newCreatureDiv = document.createElement("div")

    var input = document.createElement("input");
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'enter monster name');
    input.setAttribute('name', 'monsters-' + creatureIndex + '-name');

    newCreatureDiv.append(input)

    var select = document.createElement("select");
    select.setAttribute('name', 'monsters-' + creatureIndex + "-monsterType");

    monsterTypes.split(',').forEach(function(monster) {
      var option = document.createElement( 'option' );
      option.setAttribute('value', monster)
      option.innerHTML = monster.charAt(0).toUpperCase() + monster.substring(1)

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
          <div id="players-1">
            <input type="text" placeholder="enter player name" name="players-1-name" />
            <select name="players-1-playerClass">
              <option defaultValue value="barbarian">Barbarian</option>
              <option value= "cleric">Cleric</option>
              <option value= "fighter">Fighter</option>
              <option value= "rogue">Rogue</option>
              <option value= "wizard">Wizard</option>
            </select>
            <select name="players-1-level">
              <option defaultValue value="1">Level 1</option>
              <option value= "2">Level 2</option>
              <option value= "3">Level 3</option>
              <option value= "4">Level 4</option>
              <option value= "5">Level 5</option>
            </select>
            <select name="players-1-weapon">
              <option defaultValue value="shortsword">Shortsword</option>
              <option value= "greatsword">Greatsword</option>
              <option value= "greataxe">Greataxe</option>
            </select>
            <input type="text" className="mod-score" placeholder="Str" name="players-1-str" />
            <input type="text" className="mod-score" placeholder="Dex" name="players-1-dex" />
            <input type="text" className="mod-score" placeholder="Con" name="players-1-con" />
            <input type="text" className="mod-score" placeholder="Int" name="players-1-int" />
            <input type="text" className="mod-score" placeholder="Wis" name="players-1-wis" />
            <input type="text" className="mod-score" placeholder="Cha" name="players-1-cha" />
          </div>
        </div>
        <button type="button" onClick={this.appendPlayer}>Add Player</button>
        <br />
        <label>Monsters:</label>
        <div id="monsters">
          <div id="monsters-1">
            <input type="text" placeholder="enter monster name" name="monsters-1-name" />
            <select name="monsters-1-monsterType">
              <option defaultValue value="goblin">Goblin</option>
              <option value= "zombie">Zombie</option>
              <option value= "vampire">Vampire</option>
              <option value= "werewolf">Werewolf</option>
            </select>
          </div>
        </div>
        <button type="button" onClick={this.appendMonster}>Add Monster</button>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
