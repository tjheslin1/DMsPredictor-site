(this["webpackJsonpDMsPredictor-site"]=this["webpackJsonpDMsPredictor-site"]||[]).push([[0],{38:function(e,t,a){e.exports=a(86)},43:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(28),o=a.n(l),s=(a(43),a(29)),i=a(30),c=a(31),u=a(36),m=a(32),p=a(7),d=a(37),h=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={simulationName:"",simulationCount:50,focus:"LowestFirst"},a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.handlePlayerClassChange=a.handlePlayerClassChange.bind(Object(p.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a.appendPlayer=a.appendPlayer.bind(Object(p.a)(a)),a.appendMonster=a.appendMonster.bind(Object(p.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(s.a)({},n,a))}},{key:"handlePlayerClassChange",value:function(e){this.handleChange(e);var t=e.target,a=t.name.charAt(t.name.length-1);"fighter"===t.value?(document.getElementById("players-"+a+"-fighterfightingstyles").style.display="inline",document.getElementById("players-"+a+"-rangerfightingstyles").style.display="none"):"ranger"===t.value?(document.getElementById("players-"+a+"-fighterfightingstyles").style.display="none",document.getElementById("players-"+a+"-rangerfightingstyles").style.display="inline"):(document.getElementById("players-"+a+"-fighterfightingstyles").style.display="none",document.getElementById("players-"+a+"-rangerfightingstyles").style.display="none")}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=Array.from(document.getElementById("players").children).filter((function(e){return"DIV"===e.nodeName})).map((function(e){var t=e.children,a=t[9].value+","+t[10].value+","+t[11].value+","+t[12].value+","+t[13].value+","+t[14].value,n={name:t[0].value,class:t[1].value,level:t[4].value,weapon:t[5].value,armour:t[6].value,offHand:t[7].value,stats:a,skills:"0,0"};return"fighter"===t[1].value&&(n.fighterFightingStyle=t[2].value),"ranger"===t[1].value&&(n.rangerFightingStyle=t[3].value),n})),n=Array.from(document.getElementById("monsters").children).filter((function(e){return"DIV"===e.nodeName})).map((function(e){var t=e.children;return{name:t[0].value,monster:t[1].value}})),r={simulationName:this.state.simulationName,simulations:this.state.simulationCount,focus:this.state.focus,players:t,monsters:n};a(18).default.newClient({invokeUrl:"https://4zoom92ov5.execute-api.eu-west-2.amazonaws.com",region:"eu-west-2"}).invokeApi({},"/prod/simulator","POST",{headers:{},queryParams:{}},r).then((function(e){console.log(e.data),window.location.href="/#/results/"+e.data.body})).catch((function(e){console.log(e.message)}))}},{key:"appendPlayer",value:function(e){for(var t=this,a=document.getElementById("players"),n=a.children.length+1;document.getElementById("players-"+n);)n++;var r=document.createElement("div");r.setAttribute("id","players-"+n);var l=document.createElement("input");l.setAttribute("type","text"),l.setAttribute("placeholder","enter player name"),l.setAttribute("name","players-"+n+"-name"),r.append(l);var o=document.createElement("select");o.setAttribute("name","playerClass_"+n),o.onchange=function(e){return t.handlePlayerClassChange(e)},"barbarian,cleric,fighter,ranger,rogue,wizard".split(",").forEach((function(e){var t=document.createElement("option");t.setAttribute("value",e),t.innerHTML=e.charAt(0).toUpperCase()+e.substring(1),o.append(t)}));var s=document.createElement("select");s.setAttribute("id","players-"+n+"-fighterfightingstyles"),s.setAttribute("name","players-"+n+"-fighterfightingstyles"),s.setAttribute("style","display: none;"),"archery,defense,dueling,great_weapon_fighting,protection,two_weapon_fighting".split(",").forEach((function(e){var t=document.createElement("option");t.setAttribute("value",e);var a=e.charAt(0).toUpperCase()+e.substring(1);t.innerHTML=a.replace(/_/g," "),s.append(t)}));var i=document.createElement("select");i.setAttribute("id","players-"+n+"-rangerfightingstyles"),i.setAttribute("name","players-"+n+"-rangerfightingstyles"),i.setAttribute("style","display: none;"),"archery,defense,dueling,two_weapon_fighting".split(",").forEach((function(e){var t=document.createElement("option");t.setAttribute("value",e);var a=e.charAt(0).toUpperCase()+e.substring(1);t.innerHTML=a.replace(/_/g," "),i.append(t)}));var c=document.createElement("select");c.setAttribute("name","players-"+n+"-level"),"1,2,3,4,5".split(",").forEach((function(e){var t=document.createElement("option");t.setAttribute("value",e),t.innerHTML="Level "+e,c.append(t)}));var u=document.createElement("select");u.setAttribute("name","players-"+n+"-weapon"),"shortsword,greatsword,greataxe,longbow".split(",").forEach((function(e){var t=document.createElement("option");t.setAttribute("value",e),t.innerHTML=e.charAt(0).toUpperCase()+e.substring(1),u.append(t)}));var m=document.createElement("select");m.setAttribute("name","players-"+n+"-armour"),"noarmour,chainshirt".split(",").forEach((function(e){var t=document.createElement("option");t.setAttribute("value",e),t.innerHTML=e.charAt(0).toUpperCase()+e.substring(1),m.append(t)}));var p=document.createElement("select");p.setAttribute("name","players-"+n+"-offHand"),"none,shield,shortsword".split(",").forEach((function(e){var t=document.createElement("option");t.setAttribute("value",e),t.innerHTML="none"===e?"No Off Hand":e.charAt(0).toUpperCase()+e.substring(1),p.append(t)}));var d=document.createElement("input");d.setAttribute("type","button"),d.setAttribute("style","background-color: white; color: black; border: 2px solid #fd837b"),d.onclick=function(e){return t.removeCreature(n,"players-")},d.value="X",r.append(o),r.append(s),r.append(i),r.append(c),r.append(u),r.append(m),r.append(p),r.append(document.createElement("br")),r.append(this.appendModScore(n,"Str")),r.append(this.appendModScore(n,"Dex")),r.append(this.appendModScore(n,"Con")),r.append(this.appendModScore(n,"Int")),r.append(this.appendModScore(n,"Wis")),r.append(this.appendModScore(n,"Cha")),r.append(d),a.append(document.createElement("hr")),a.append(r)}},{key:"appendModScore",value:function(e,t){var a=document.createElement("input");return a.setAttribute("type","text"),a.setAttribute("class","mod-score"),a.setAttribute("placeholder",t.charAt(0).toUpperCase()+t.substring(1)),a.setAttribute("name","players-"+e+"-"+t),a}},{key:"appendMonster",value:function(e){for(var t=this,a=document.getElementById("monsters"),n=a.children.length+1;document.getElementById("monsters-"+n);)n++;var r=document.createElement("div");r.setAttribute("id","monsters-"+n);var l=document.createElement("input");l.setAttribute("type","text"),l.setAttribute("placeholder","enter monster name"),l.setAttribute("name","monsters-"+n+"-name"),r.append(l);var o=document.createElement("select");o.setAttribute("name","monsters-"+n+"-monsterType"),"goblin,lich,werewolf,vampire,zombie".split(",").forEach((function(e){var t=document.createElement("option");t.setAttribute("value",e),t.innerHTML=e.charAt(0).toUpperCase()+e.substring(1),o.append(t)}));var s=document.createElement("input");s.setAttribute("type","button"),s.setAttribute("style","background-color: white; color: black; border: 2px solid #fd837b"),s.onclick=function(e){return t.removeCreature(n,"monsters-")},s.value="X",r.append(o),r.append(s),a.append(document.createElement("hr")),a.append(r)}},{key:"removeCreature",value:function(e,t){document.getElementById(t+e).remove()}},{key:"render",value:function(){return r.a.createElement("div",{className:"centered"},r.a.createElement("h3",{className:"mobile_message"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/tjheslin1/DMsPredictor"},"This project")," ",r.a.createElement("i",null,"is a work in progress! If you have any feedback, suggestions or questions please ",r.a.createElement("a",{href:"mailto:tjheslin1@kolabnow.com?subject=DMsPredictor-site"},"email me"),", referencing a ",r.a.createElement("u",null,"simulation results ID")," where relevant.")),r.a.createElement("a",{href:"/#/results"},"Click here to query simulation results"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("form",{id:"simulationForm",onSubmit:this.handleSubmit},r.a.createElement("label",null,"Simulation name:"),r.a.createElement("input",{type:"text",placeholder:"enter name here",name:"simulationName",value:this.state.simulationName,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",null,"Number of simulation runs:",r.a.createElement("input",{name:"simulationCount",type:"number",value:this.state.simulationCount,onChange:this.handleChange})),r.a.createElement("br",null),"Choose focus strategy (monsters will follow the same strategy):",r.a.createElement("br",null),r.a.createElement("select",{name:"focus",value:this.state.focus,onChange:this.handleChange},r.a.createElement("option",{defaultValue:!0,value:"LowestFirst"},"Lowest health first *"),r.a.createElement("option",{value:"RandomFocus"},"Random **")),r.a.createElement("br",null),r.a.createElement("label",null,"Players:"),r.a.createElement("br",null),r.a.createElement("div",{id:"players"},r.a.createElement("div",{id:"players-1"},r.a.createElement("input",{type:"text",placeholder:"enter player name",name:"players-1-name"}),r.a.createElement("select",{name:"playerClass_1",onChange:this.handlePlayerClassChange},r.a.createElement("option",{defaultValue:!0,value:"barbarian"},"Barbarian"),r.a.createElement("option",{value:"cleric"},"Cleric"),r.a.createElement("option",{value:"fighter"},"Fighter"),r.a.createElement("option",{value:"ranger"},"Ranger"),r.a.createElement("option",{value:"rogue"},"Rogue"),r.a.createElement("option",{value:"wizard"},"Wizard")),r.a.createElement("select",{id:"players-1-fighterfightingstyles",name:"players-1-fighterfightingstyles",style:{display:"none"}},r.a.createElement("option",{defaultValue:!0,value:"archery"},"Archery"),r.a.createElement("option",{value:"defense"},"Defense"),r.a.createElement("option",{value:"dueling"},"Dueling"),r.a.createElement("option",{value:"great_weapon_fighting"},"Great Weapon Fighting"),r.a.createElement("option",{value:"protection"},"Protection"),r.a.createElement("option",{value:"two_weapon_fighting"},"Two Weapon Fighting")),r.a.createElement("select",{id:"players-1-rangerfightingstyles",name:"players-1-rangerfightingstyles",style:{display:"none"}},r.a.createElement("option",{defaultValue:!0,value:"archery"},"Archery"),r.a.createElement("option",{value:"defense"},"Defense"),r.a.createElement("option",{value:"dueling"},"Dueling"),r.a.createElement("option",{value:"two_weapon_fighting"},"Two Weapon Fighting")),r.a.createElement("select",{name:"players-1-level"},r.a.createElement("option",{defaultValue:!0,value:"1"},"Level 1"),r.a.createElement("option",{value:"2"},"Level 2"),r.a.createElement("option",{value:"3"},"Level 3"),r.a.createElement("option",{value:"4"},"Level 4"),r.a.createElement("option",{value:"5"},"Level 5")),r.a.createElement("select",{name:"players-1-weapon"},r.a.createElement("option",{defaultValue:!0,value:"shortsword"},"Shortsword"),r.a.createElement("option",{value:"greatsword"},"Greatsword"),r.a.createElement("option",{value:"greataxe"},"Greataxe"),r.a.createElement("option",{value:"longbow"},"Longbow")),r.a.createElement("select",{name:"players-1-armour"},r.a.createElement("option",{defaultValue:!0,value:"noarmour"},"NoArmour"),r.a.createElement("option",{value:"chainshirt"},"ChainShirt")),r.a.createElement("select",{name:"players-1-offHand"},r.a.createElement("option",{defaultValue:!0,value:"none"},"No Off Hand"),r.a.createElement("option",{value:"shield"},"Shield"),r.a.createElement("option",{value:"shortsword"},"Shortsword")),r.a.createElement("br",null),r.a.createElement("input",{type:"text",className:"mod-score",placeholder:"Str",name:"players-1-str"}),r.a.createElement("input",{type:"text",className:"mod-score",placeholder:"Dex",name:"players-1-dex"}),r.a.createElement("input",{type:"text",className:"mod-score",placeholder:"Con",name:"players-1-con"}),r.a.createElement("input",{type:"text",className:"mod-score",placeholder:"Int",name:"players-1-int"}),r.a.createElement("input",{type:"text",className:"mod-score",placeholder:"Wis",name:"players-1-wis"}),r.a.createElement("input",{type:"text",className:"mod-score",placeholder:"Cha",name:"players-1-cha"}))),r.a.createElement("div",{className:"padded"},r.a.createElement("button",{type:"button",onClick:this.appendPlayer},"Add Player")),r.a.createElement("br",null),r.a.createElement("label",{className:"padded"},"Monsters:"),r.a.createElement("div",{id:"monsters"},r.a.createElement("div",{id:"monsters-1"},r.a.createElement("input",{type:"text",placeholder:"enter monster name",name:"monsters-1-name"}),r.a.createElement("select",{name:"monsters-1-monsterType"},r.a.createElement("option",{defaultValue:!0,value:"goblin"},"Goblin"),r.a.createElement("option",{value:"lich"},"Lich"),r.a.createElement("option",{value:"werewolf"},"Werewolf"),r.a.createElement("option",{value:"vampire"},"Vampire"),r.a.createElement("option",{value:"zombie"},"Zombie")))),r.a.createElement("div",{className:"padded"},r.a.createElement("button",{type:"button",onClick:this.appendMonster},"Add Monster")),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Submit"})),r.a.createElement("br",null),r.a.createElement("p",null,"* to represent experienced players"),r.a.createElement("p",null,"** to represent inexperienced players"))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=a(33),E=a(6);function y(){return r.a.createElement(g.a,null,r.a.createElement("div",null,r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/"},r.a.createElement(h,null)),r.a.createElement(E.a,{path:"/results/:id?"},r.a.createElement(v,null)))))}function v(){var e=Object(E.f)().id;return null!==e&&""!==e&&void 0!==e?(function(e){var t=a(18).default,n=t.newClient({invokeUrl:"https://4zoom92ov5.execute-api.eu-west-2.amazonaws.com",region:"eu-west-2"}),r={simhashValue:e};n.invokeApi(r,"/prod/query/{simhashValue}","GET",{headers:{},queryParams:{}}).then((function(e){document.getElementById("results-header").innerHTML='Your simulation id is: <div style="color: green">'+JSON.stringify(e.data.Items[0].sim_hash.S).replace(/"/g,"")+"</div><br/><i>make a note of it (or copy the full URL) to return to the results in the future.</i><br /><br/>Results: "+JSON.stringify(e.data.Items[0].result.S).replace(/"/g,"").replace(/,/g," and")})).catch((function(e){document.getElementById("results-header").innerHTML=e.message+'<br /><i style="color: red">this is likely an unknown simulation ID</i>'}))}(e),r.a.createElement("div",null,r.a.createElement("div",{className:"centered"},r.a.createElement("h3",{className:"mobile_message"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/tjheslin1/DMsPredictor"},"This project")," ",r.a.createElement("i",null,"is a work in progress! If you have any feedback, suggestions or questions please ",r.a.createElement("a",{href:"mailto:tjheslin1@kolabnow.com?subject=DMsPredictor-site"},"email me"),", referencing a ",r.a.createElement("u",null,"simulation results ID")," where relevant.")),r.a.createElement("h3",{id:"results-header"},"waiting..."),r.a.createElement("form",{id:"simulationResults",onSubmit:function(e){e.preventDefault(),f(document.getElementById("simHash").value)}},r.a.createElement("input",{id:"simHash",type:"text",placeholder:"enter simHash"}),r.a.createElement("input",{type:"submit",value:"Submit"})),r.a.createElement("a",{href:"/#/results/".concat(e)},r.a.createElement("i",null,"refresh ",e," results"))),r.a.createElement("img",{className:"gif",src:"https://dmspredictor-site-assets.s3.eu-west-2.amazonaws.com/roll_tiny.gif",alt:"rolling dice..."}))):r.a.createElement("div",null,r.a.createElement("div",{className:"centered"},r.a.createElement("h3",{className:"mobile_message"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/tjheslin1/DMsPredictor"},"This project")," ",r.a.createElement("i",null,"is a work in progress! If you have any feedback, suggestions or questions please ",r.a.createElement("a",{href:"mailto:tjheslin1@kolabnow.com?subject=DMsPredictor-site"},"email me"),", referencing a ",r.a.createElement("u",null,"simulation results ID")," where relevant.")),r.a.createElement("h3",{id:"results-header"},"Enter your simulation id:"),r.a.createElement("form",{id:"simulationResults",onSubmit:function(e){e.preventDefault(),f(document.getElementById("simHash").value)}},r.a.createElement("input",{id:"simHash",type:"text",placeholder:"enter simHash"}),r.a.createElement("input",{type:"submit",value:"Submit"})),r.a.createElement("a",{href:"/#/results"},"Refresh"),r.a.createElement("br",null)),r.a.createElement("img",{className:"gif",src:"https://dmspredictor-site-assets.s3.eu-west-2.amazonaws.com/roll_tiny.gif",alt:"rolling dice..."}))}function f(e){window.location.href="/#/results/"+e}a.d(t,"default",(function(){return y})),o.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.b75e6f60.chunk.js.map