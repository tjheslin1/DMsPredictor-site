import React from 'react';

export default class SimulationForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      simulationName: "",
      simulationCount: 50,
      focus: "LowestFirst"
    };

    this.handleChange             = this.handleChange.bind(this);
    this.handlePlayerClassChange  = this.handlePlayerClassChange.bind(this);
    this.handleSubmit             = this.handleSubmit.bind(this);
    this.appendPlayer             = this.appendPlayer.bind(this);
    this.appendMonster            = this.appendMonster.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handlePlayerClassChange(event) {
    this.handleChange(event)

    const target = event.target;
    const index = target.name.charAt(target.name.length - 1)

    if (target.value === "fighter") {
      document.getElementById("players-" + index + "-fighterfightingstyles").style.display = "inline";
      document.getElementById("players-" + index + "-rangerfightingstyles").style.display = "none";
    }
    else if (target.value === "ranger") {
    document.getElementById("players-" + index + "-fighterfightingstyles").style.display = "none";
      document.getElementById("players-" + index + "-rangerfightingstyles").style.display = "inline";
    } else {
      document.getElementById("players-" + index + "-fighterfightingstyles").style.display = "none";
      document.getElementById("players-" + index + "-rangerfightingstyles").style.display = "none";
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    var submittedPlayers = Array.from(document.getElementById("players").children)
    .filter(element => element.nodeName === "DIV")
    .map(playerDiv => {
      const name = 0
      const playerClass = 1
      const fighterFightingStyle = 2
      const rangerFightingStyle = 3
      const level = 4
      const weapon = 5
      const armour = 6
      const offHand = 7

      const str = 9
      const dex = 10
      const con = 11
      const int = 12
      const wis = 13
      const cha = 14

      var playerOptions = playerDiv.children

      var stats = playerOptions[str].value + "," +
      playerOptions[dex].value + "," +
      playerOptions[con].value + "," +
      playerOptions[int].value + "," +
      playerOptions[wis].value + "," +
      playerOptions[cha].value

      var json = {
        name: playerOptions[name].value,
        class: playerOptions[playerClass].value,
        level: playerOptions[level].value,
        weapon: playerOptions[weapon].value,
        armour: playerOptions[armour].value,
        offHand: playerOptions[offHand].value,
        stats: stats,
        skills: "0,0"
      };

      if (playerOptions[playerClass].value === "fighter") {
        json.fighterFightingStyle = playerOptions[fighterFightingStyle].value
      }

      if (playerOptions[playerClass].value === "ranger") {
        json.rangerFightingStyle = playerOptions[rangerFightingStyle].value
      }

      return json;
    })

    var submittedMonsters = Array.from(document.getElementById("monsters").children)
    .filter(element => element.nodeName === "DIV")
    .map(monsterDiv => {
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

    // https://github.com/kndt84/aws-api-gateway-client
    var apigClientFactory = require('aws-api-gateway-client').default;

    let config = {
      invokeUrl:'https://4zoom92ov5.execute-api.eu-west-2.amazonaws.com',
      region: 'eu-west-2'
    }

    var apigClient = apigClientFactory.newClient(config);

    var pathParams = {};
    var pathTemplate = '/prod/simulator'
    var method = 'POST';
    var additionalParams = {
      headers: {},
      queryParams: {}
    };

    var body = simulation

//    console.log("simulation = " + JSON.stringify(simulation))

    apigClient.invokeApi(pathParams, pathTemplate, method, additionalParams, body)
      .then(function(result){
        console.log(result.data);
        window.location.href = '/#/results/' + result.data.body
      }).catch( function(error){
        console.log(error.message);
      });
  }

  appendPlayer(event) {
    var playerClasses = "barbarian,cleric,fighter,ranger,rogue,wizard"
    var levels = "1,2,3,4,5"
    var weapons = "shortsword,greatsword,greataxe,longbow"
    var armours = "noarmour,chainshirt"
    var offHands = "none,shield,shortsword"
    var fighterFightingStyles = "archery,defense,dueling,great_weapon_fighting,protection,two_weapon_fighting"
    var rangerFightingStyles = "archery,defense,dueling,two_weapon_fighting"

    const creatures = document.getElementById("players")
    const currentNumCreatures = creatures.children.length
    var creatureIndex = currentNumCreatures + 1

    while (document.getElementById("players-" + creatureIndex)) {
      creatureIndex++
    }

    var newCreatureDiv = document.createElement("div")
    newCreatureDiv.setAttribute('id', 'players-' + creatureIndex)

    var input = document.createElement("input");
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'enter player name');
    input.setAttribute('name', 'players-' + creatureIndex + '-name');

    newCreatureDiv.append(input)

    var playerClassSelect = document.createElement("select");
    playerClassSelect.setAttribute('name', 'playerClass_' + creatureIndex);
    playerClassSelect.onchange = (e) => this.handlePlayerClassChange(e);
    playerClasses.split(',').forEach(function(playerClass) {
      var option = document.createElement('option');
      option.setAttribute('value', playerClass)
      option.innerHTML = playerClass.charAt(0).toUpperCase() + playerClass.substring(1)

      playerClassSelect.append(option)
    })

    var fighterFightingStylesSelect = document.createElement("select");
    fighterFightingStylesSelect.setAttribute('id', 'players-' + creatureIndex + "-fighterfightingstyles");
    fighterFightingStylesSelect.setAttribute('name', 'players-' + creatureIndex + "-fighterfightingstyles");
    fighterFightingStylesSelect.setAttribute('style', 'display: none;');
    fighterFightingStyles.split(',').forEach(function(fightingStyle) {
      var option = document.createElement('option');
      option.setAttribute('value', fightingStyle)

      var styleName = fightingStyle.charAt(0).toUpperCase() + fightingStyle.substring(1)
      option.innerHTML = styleName.replace(/_/g, " ")

      fighterFightingStylesSelect.append(option)
    })

    var rangerFightingStylesSelect = document.createElement("select");
    rangerFightingStylesSelect.setAttribute('id', 'players-' + creatureIndex + "-rangerfightingstyles");
    rangerFightingStylesSelect.setAttribute('name', 'players-' + creatureIndex + "-rangerfightingstyles");
    rangerFightingStylesSelect.setAttribute('style', 'display: none;');
    rangerFightingStyles.split(',').forEach(function(fightingStyle) {
      var option = document.createElement('option');
      option.setAttribute('value', fightingStyle)

      var styleName = fightingStyle.charAt(0).toUpperCase() + fightingStyle.substring(1)
      option.innerHTML = styleName.replace(/_/g, " ")

      rangerFightingStylesSelect.append(option)
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
      option.setAttribute('value', weapon);
      option.innerHTML = weapon.charAt(0).toUpperCase() + weapon.substring(1);

      weaponSelect.append(option)
    })

    var armourSelect = document.createElement("select");
    armourSelect.setAttribute('name', 'players-' + creatureIndex + "-armour");
    armours.split(',').forEach(function(armour) {
      var option = document.createElement('option');
      option.setAttribute('value', armour);
      option.innerHTML = armour.charAt(0).toUpperCase() + armour.substring(1);

      armourSelect.append(option)
    })

    var offHandSelect = document.createElement("select");
    offHandSelect.setAttribute('name', 'players-' + creatureIndex + "-offHand");
    offHands.split(',').forEach(function(offHand) {
      var option = document.createElement('option');
      option.setAttribute('value', offHand);

      if (offHand === "none") {
        option.innerHTML = "No Off Hand";
      }
      else {
        option.innerHTML = offHand.charAt(0).toUpperCase() + offHand.substring(1);
      }

      offHandSelect.append(option)
    })

    var removeButton = document.createElement("input");
    removeButton.setAttribute('type', "button");
    removeButton.setAttribute('style', "background-color: white; color: black; border: 2px solid #fd837b");
    removeButton.onclick = (e) => this.removeCreature(creatureIndex, "players-");
    removeButton.value = "X"

    newCreatureDiv.append(playerClassSelect)
    newCreatureDiv.append(fighterFightingStylesSelect)
    newCreatureDiv.append(rangerFightingStylesSelect)
    newCreatureDiv.append(levelSelect)
    newCreatureDiv.append(weaponSelect)
    newCreatureDiv.append(armourSelect)
    newCreatureDiv.append(offHandSelect)

    newCreatureDiv.append(document.createElement("br"))

    newCreatureDiv.append(this.appendModScore(creatureIndex, "Str"))
    newCreatureDiv.append(this.appendModScore(creatureIndex, "Dex"))
    newCreatureDiv.append(this.appendModScore(creatureIndex, "Con"))
    newCreatureDiv.append(this.appendModScore(creatureIndex, "Int"))
    newCreatureDiv.append(this.appendModScore(creatureIndex, "Wis"))
    newCreatureDiv.append(this.appendModScore(creatureIndex, "Cha"))

    newCreatureDiv.append(removeButton)

    creatures.append(document.createElement("hr"))
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
    var creatureIndex = currentNumCreatures + 1

    while (document.getElementById("monsters-" + creatureIndex)) {
      creatureIndex++
    }

    var newCreatureDiv = document.createElement("div")
    newCreatureDiv.setAttribute('id', 'monsters-' + creatureIndex)

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

    var removeButton = document.createElement("input");
    removeButton.setAttribute('type', "button");
    removeButton.setAttribute('style', "background-color: white; color: black; border: 2px solid #fd837b");
    removeButton.onclick = (e) => this.removeCreature(creatureIndex, "monsters-");
    removeButton.value = "X"

    newCreatureDiv.append(select)
    newCreatureDiv.append(removeButton)

    creatures.append(document.createElement("hr"))
    creatures.append(newCreatureDiv)
  }

  removeCreature(creatureIndex, prefix) {
    document.getElementById(prefix + creatureIndex).remove()
  }

  render() {
    return(
      <div className="centered">
        <h3 className="mobile_message"><a target="_blank" rel="noopener noreferrer" href="https://github.com/tjheslin1/DMsPredictor">This project</a> <i>is a work in progress! If you have any feedback, suggestions or questions please <a href="mailto:tjheslin1@kolabnow.com?subject=DMsPredictor-site">email me</a>, referencing a <u>simulation results ID</u> where relevant.</i></h3>
        <a href="/#/results">Click here to query simulation results</a>
        <br />
        <br />
        <form id="simulationForm" onSubmit={this.handleSubmit}>
          <label>Simulation name:</label>
          <input type="text" placeholder="enter name here" name="simulationName" value={this.state.simulationName} onChange={this.handleChange} />
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
            <option defaultValue value="LowestFirst">Lowest health first *</option>
            <option value="RandomFocus">Random **</option>
          </select>
          <br />
          <label>Players:</label>
          <br />
          <div id="players">
            <div id="players-1">
              <input type="text" placeholder="enter player name" name="players-1-name" />
              <select name="playerClass_1" onChange={this.handlePlayerClassChange}>
                <option defaultValue value="barbarian">Barbarian</option>
                <option value= "cleric">Cleric</option>
                <option value= "fighter">Fighter</option>
                <option value= "ranger">Ranger</option>
                <option value= "rogue">Rogue</option>
                <option value= "wizard">Wizard</option>
              </select>
              <select id="players-1-fighterfightingstyles" name="players-1-fighterfightingstyles" style={{display: "none"}}>
                <option defaultValue value= "archery">Archery</option>
                <option value= "defense">Defense</option>
                <option value= "dueling">Dueling</option>
                <option value= "great_weapon_fighting">Great Weapon Fighting</option>
                <option value= "protection">Protection</option>
                <option value= "two_weapon_fighting">Two Weapon Fighting</option>
              </select>
              <select id="players-1-rangerfightingstyles" name="players-1-rangerfightingstyles" style={{display: "none"}}>
                <option defaultValue value= "archery">Archery</option>
                <option value= "defense">Defense</option>
                <option value= "dueling">Dueling</option>
                <option value= "two_weapon_fighting">Two Weapon Fighting</option>
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
                <option value= "longbow">Longbow</option>
              </select>
              <select name="players-1-armour">
                <option defaultValue value="noarmour">NoArmour</option>
                <option value= "chainshirt">ChainShirt</option>
              </select>
              <select name="players-1-offHand">
                <option defaultValue value="none">No Off Hand</option>
                <option value="shield">Shield</option>
                <option value= "shortsword">Shortsword</option>
              </select>
              <br />
              <input type="text" className="mod-score" placeholder="Str" name="players-1-str" />
              <input type="text" className="mod-score" placeholder="Dex" name="players-1-dex" />
              <input type="text" className="mod-score" placeholder="Con" name="players-1-con" />
              <input type="text" className="mod-score" placeholder="Int" name="players-1-int" />
              <input type="text" className="mod-score" placeholder="Wis" name="players-1-wis" />
              <input type="text" className="mod-score" placeholder="Cha" name="players-1-cha" />
            </div>
          </div>
          <div className="padded"><button type="button" onClick={this.appendPlayer}>Add Player</button></div>
          <br />
          <label className="padded">Monsters:</label>
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
          <div className="padded"><button type="button" onClick={this.appendMonster}>Add Monster</button></div>
          <br />
          <input type="submit" value="Submit" />
        </form>
        <br />
        <p>* to represent experienced players</p>
        <p>** to represent inexperienced players</p>
      </div>
    );
  }
}
