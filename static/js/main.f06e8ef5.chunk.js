(this["webpackJsonpDMsPredictor-site"]=this["webpackJsonpDMsPredictor-site"]||[]).push([[0],{38:function(e,t,a){e.exports=a(86)},43:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(28),i=a.n(r),s=(a(43),a(29)),o=a(30),c=a(31),u=a(36),m=a(32),p=a(7),d=a(37),h=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={simulationName:"",simulationCount:50,focus:"LowestFirst"},a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.handlePlayerClassChange=a.handlePlayerClassChange.bind(Object(p.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a.appendPlayer=a.appendPlayer.bind(Object(p.a)(a)),a.appendMonster=a.appendMonster.bind(Object(p.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(s.a)({},n,a))}},{key:"handlePlayerClassChange",value:function(e){this.handleChange(e);var t=e.target,a=t.name.charAt(t.name.length-1);"fighter"===t.value?(document.getElementById("players-"+a+"-fighterfightingstyles").style.display="inline",document.getElementById("players-"+a+"-paladinfightingstyles").style.display="none",document.getElementById("players-"+a+"-rangerfightingstyles").style.display="none"):"paladin"===t.value?(document.getElementById("players-"+a+"-fighterfightingstyles").style.display="none",document.getElementById("players-"+a+"-paladinfightingstyles").style.display="inline",document.getElementById("players-"+a+"-rangerfightingstyles").style.display="none"):"ranger"===t.value?(document.getElementById("players-"+a+"-fighterfightingstyles").style.display="none",document.getElementById("players-"+a+"-paladinfightingstyles").style.display="none",document.getElementById("players-"+a+"-rangerfightingstyles").style.display="inline"):(document.getElementById("players-"+a+"-fighterfightingstyles").style.display="none",document.getElementById("players-"+a+"-paladinfightingstyles").style.display="none",document.getElementById("players-"+a+"-rangerfightingstyles").style.display="none")}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=Array.from(document.getElementById("players").children).filter((function(e){return"DIV"===e.nodeName})).map((function(e){var t=e.children,a=t[10].value+","+t[11].value+","+t[12].value+","+t[13].value+","+t[14].value+","+t[15].value,n={name:t[0].value,class:t[1].value,level:t[5].value,weapon:t[6].value,armour:t[7].value,offHand:t[8].value,stats:a,skills:"0,0"};return"fighter"===t[1].value&&(n.fighterFightingStyle=t[2].value),"paladin"===t[1].value&&(n.paladinFightingStyle=t[3].value),"ranger"===t[1].value&&(n.rangerFightingStyle=t[4].value),n})),n=Array.from(document.getElementById("monsters").children).filter((function(e){return"DIV"===e.nodeName})).map((function(e){var t=e.children;return{name:t[0].value,monster:t[1].value}})),l={simulationName:this.state.simulationName,simulations:this.state.simulationCount,focus:this.state.focus,players:t,monsters:n};a(18).default.newClient({invokeUrl:"https://4zoom92ov5.execute-api.eu-west-2.amazonaws.com",region:"eu-west-2"}).invokeApi({},"/prod/simulator","POST",{headers:{},queryParams:{}},l).then((function(e){console.log(e.data),window.location.href="/#/results/"+e.data.body})).catch((function(e){console.log(e.message)}))}},{key:"appendPlayer",value:function(e){for(var t=this,a=document.getElementById("players"),n=a.children.length+1;document.getElementById("players-"+n);)n++;var l=document.createElement("div");l.setAttribute("id","players-"+n);var r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("placeholder","enter player name"),r.setAttribute("name","players-"+n+"-name"),l.append(r);var i=document.createElement("select");i.setAttribute("name","playerClass_"+n),i.onchange=function(e){return t.handlePlayerClassChange(e)},"barbarian,cleric,fighter,paladin,ranger,rogue,wizard".split(",").forEach((function(e){var t=document.createElement("option");t.setAttribute("value",e),t.innerHTML=e.charAt(0).toUpperCase()+e.substring(1),i.append(t)}));var s=document.createElement("select");s.setAttribute("id","players-"+n+"-fighterfightingstyles"),s.setAttribute("name","players-"+n+"-fighterfightingstyles"),s.setAttribute("style","display: none;"),"none,archery,defense,dueling,great_weapon_fighting,protection,two_weapon_fighting".split(",").forEach((function(e){var t=document.createElement("option");t.setAttribute("value",e);var a=e.charAt(0).toUpperCase()+e.substring(1);t.innerHTML=a.replace(/_/g," "),s.append(t)}));var o=document.createElement("select");o.setAttribute("id","players-"+n+"-paladinfightingstyles"),o.setAttribute("name","players-"+n+"-paladinfightingstyles"),o.setAttribute("style","display: none;"),"none,defense,dueling,great_weapon_fighting".split(",").forEach((function(e){var t=document.createElement("option");t.setAttribute("value",e);var a=e.charAt(0).toUpperCase()+e.substring(1);t.innerHTML=a.replace(/_/g," "),o.append(t)}));var c=document.createElement("select");c.setAttribute("id","players-"+n+"-rangerfightingstyles"),c.setAttribute("name","players-"+n+"-rangerfightingstyles"),c.setAttribute("style","display: none;"),"none,archery,defense,dueling,two_weapon_fighting".split(",").forEach((function(e){var t=document.createElement("option");t.setAttribute("value",e);var a=e.charAt(0).toUpperCase()+e.substring(1);t.innerHTML=a.replace(/_/g," "),c.append(t)}));var u=document.createElement("select");u.setAttribute("name","players-"+n+"-level"),"1,2,3,4,5".split(",").forEach((function(e){var t=document.createElement("option");t.setAttribute("value",e),t.innerHTML="Level "+e,u.append(t)}));var m=document.createElement("select");m.setAttribute("name","players-"+n+"-weapon"),"shortsword,plus_one_shortsword,greatsword,greataxe,longbow".split(",").forEach((function(e){var t=document.createElement("option");t.setAttribute("value",e);var a=e.charAt(0).toUpperCase()+e.substring(1);t.innerHTML=a.replace(/_/g," "),m.append(t)}));var p=document.createElement("select");p.setAttribute("name","players-"+n+"-armour"),"noarmour,chain_shirt,chain_mail".split(",").forEach((function(e){var t=document.createElement("option");t.setAttribute("value",e);var a=e.charAt(0).toUpperCase()+e.substring(1);t.innerHTML=a.replace(/_/g," "),p.append(t)}));var d=document.createElement("select");d.setAttribute("name","players-"+n+"-offHand"),"none,shield,shortsword,plus_one_shortsword".split(",").forEach((function(e){var t=document.createElement("option");if(t.setAttribute("value",e),"none"===e)t.innerHTML="No Off Hand";else{var a=e.charAt(0).toUpperCase()+e.substring(1);t.innerHTML=a.replace(/_/g," ")}d.append(t)}));var h=document.createElement("input");h.setAttribute("type","button"),h.setAttribute("style","background-color: white; color: black; border: 2px solid #fd837b"),h.onclick=function(e){return t.removeCreature(n,"players-")},h.value="X",l.append(i),l.append(s),l.append(o),l.append(c),l.append(u),l.append(m),l.append(p),l.append(d),l.append(document.createElement("br")),l.append(this.appendModScore(n,"Str")),l.append(this.appendModScore(n,"Dex")),l.append(this.appendModScore(n,"Con")),l.append(this.appendModScore(n,"Int")),l.append(this.appendModScore(n,"Wis")),l.append(this.appendModScore(n,"Cha")),l.append(h),a.append(document.createElement("hr")),a.append(l)}},{key:"appendModScore",value:function(e,t){var a=document.createElement("input");return a.setAttribute("type","text"),a.setAttribute("class","mod-score"),a.setAttribute("placeholder",t.charAt(0).toUpperCase()+t.substring(1)),a.setAttribute("name","players-"+e+"-"+t),a}},{key:"appendMonster",value:function(e){for(var t=this,a=document.getElementById("monsters"),n=a.children.length+1;document.getElementById("monsters-"+n);)n++;var l=document.createElement("div");l.setAttribute("id","monsters-"+n);var r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("placeholder","enter monster name"),r.setAttribute("name","monsters-"+n+"-name"),l.append(r);var i=document.createElement("select");i.setAttribute("name","monsters-"+n+"-monsterType"),"goblin,lich,werewolf,vampire,zombie".split(",").forEach((function(e){var t=document.createElement("option");t.setAttribute("value",e),t.innerHTML=e.charAt(0).toUpperCase()+e.substring(1),i.append(t)}));var s=document.createElement("input");s.setAttribute("type","button"),s.setAttribute("style","background-color: white; color: black; border: 2px solid #fd837b"),s.onclick=function(e){return t.removeCreature(n,"monsters-")},s.value="X",l.append(i),l.append(s),a.append(document.createElement("hr")),a.append(l)}},{key:"removeCreature",value:function(e,t){document.getElementById(t+e).remove()}},{key:"render",value:function(){return l.a.createElement("div",{className:"centered"},l.a.createElement("h3",{className:"mobile_message"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/tjheslin1/DMsPredictor"},"This project")," ",l.a.createElement("i",null,"is a work in progress! If you have any feedback, suggestions or questions please ",l.a.createElement("a",{href:"mailto:tjheslin1@kolabnow.com?subject=DMsPredictor-site"},"email me"),", referencing a ",l.a.createElement("u",null,"simulation results ID")," where relevant.")),l.a.createElement("a",{href:"/#/results"},"Click here to query simulation results"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("form",{id:"simulationForm",onSubmit:this.handleSubmit},l.a.createElement("label",null,"Simulation name:"),l.a.createElement("input",{type:"text",placeholder:"enter name here",name:"simulationName",value:this.state.simulationName,onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("label",null,"Number of simulation runs:",l.a.createElement("input",{name:"simulationCount",type:"number",value:this.state.simulationCount,onChange:this.handleChange})),l.a.createElement("br",null),"Choose focus strategy (monsters will follow the same strategy):",l.a.createElement("br",null),l.a.createElement("select",{name:"focus",value:this.state.focus,onChange:this.handleChange},l.a.createElement("option",{defaultValue:!0,value:"LowestFirst"},"Lowest health first *"),l.a.createElement("option",{value:"RandomFocus"},"Random **")),l.a.createElement("br",null),l.a.createElement("label",null,"Players:"),l.a.createElement("br",null),l.a.createElement("div",{id:"players"},l.a.createElement("div",{id:"players-1"},l.a.createElement("input",{type:"text",placeholder:"enter player name",name:"players-1-name"}),l.a.createElement("select",{name:"playerClass_1",onChange:this.handlePlayerClassChange},l.a.createElement("option",{defaultValue:!0,value:"barbarian"},"Barbarian"),l.a.createElement("option",{value:"cleric"},"Cleric"),l.a.createElement("option",{value:"fighter"},"Fighter"),l.a.createElement("option",{value:"paladin"},"Paladin"),l.a.createElement("option",{value:"ranger"},"Ranger"),l.a.createElement("option",{value:"rogue"},"Rogue"),l.a.createElement("option",{value:"wizard"},"Wizard")),l.a.createElement("select",{id:"players-1-fighterfightingstyles",name:"players-1-fighterfightingstyles",style:{display:"none"}},l.a.createElement("option",{defaultValue:!0,value:"none"},"None"),l.a.createElement("option",{value:"archery"},"Archery"),l.a.createElement("option",{value:"defense"},"Defense"),l.a.createElement("option",{value:"dueling"},"Dueling"),l.a.createElement("option",{value:"great_weapon_fighting"},"Great Weapon Fighting"),l.a.createElement("option",{value:"protection"},"Protection"),l.a.createElement("option",{value:"two_weapon_fighting"},"Two Weapon Fighting")),l.a.createElement("select",{id:"players-1-paladinfightingstyles",name:"players-1-paladinfightingstyles",style:{display:"none"}},l.a.createElement("option",{defaultValue:!0,value:"none"},"None"),l.a.createElement("option",{value:"defense"},"Defense"),l.a.createElement("option",{value:"dueling"},"Dueling"),l.a.createElement("option",{value:"great_weapon_fighting"},"Great Weapon Fighting")),l.a.createElement("select",{id:"players-1-rangerfightingstyles",name:"players-1-rangerfightingstyles",style:{display:"none"}},l.a.createElement("option",{defaultValue:!0,value:"none"},"None"),l.a.createElement("option",{value:"archery"},"Archery"),l.a.createElement("option",{value:"defense"},"Defense"),l.a.createElement("option",{value:"dueling"},"Dueling"),l.a.createElement("option",{value:"two_weapon_fighting"},"Two Weapon Fighting")),l.a.createElement("select",{name:"players-1-level"},l.a.createElement("option",{defaultValue:!0,value:"1"},"Level 1"),l.a.createElement("option",{value:"2"},"Level 2"),l.a.createElement("option",{value:"3"},"Level 3"),l.a.createElement("option",{value:"4"},"Level 4"),l.a.createElement("option",{value:"5"},"Level 5")),l.a.createElement("select",{name:"players-1-weapon"},l.a.createElement("option",{defaultValue:!0,value:"shortsword"},"Shortsword"),l.a.createElement("option",{value:"plus_one_shortsword"},"Plus one shortsword"),l.a.createElement("option",{value:"greatsword"},"Greatsword"),l.a.createElement("option",{value:"greataxe"},"Greataxe"),l.a.createElement("option",{value:"longbow"},"Longbow")),l.a.createElement("select",{name:"players-1-armour"},l.a.createElement("option",{defaultValue:!0,value:"noarmour"},"NoArmour"),l.a.createElement("option",{value:"chain_shirt"},"Chain shirt"),l.a.createElement("option",{value:"chain_mail"},"Chain mail")),l.a.createElement("select",{name:"players-1-offHand"},l.a.createElement("option",{defaultValue:!0,value:"none"},"No Off Hand"),l.a.createElement("option",{value:"shield"},"Shield"),l.a.createElement("option",{value:"shortsword"},"Shortsword"),l.a.createElement("option",{value:"plus_one_shortsword"},"Plus one shortsword")),l.a.createElement("br",null),l.a.createElement("input",{type:"text",className:"mod-score",placeholder:"Str",name:"players-1-str"}),l.a.createElement("input",{type:"text",className:"mod-score",placeholder:"Dex",name:"players-1-dex"}),l.a.createElement("input",{type:"text",className:"mod-score",placeholder:"Con",name:"players-1-con"}),l.a.createElement("input",{type:"text",className:"mod-score",placeholder:"Int",name:"players-1-int"}),l.a.createElement("input",{type:"text",className:"mod-score",placeholder:"Wis",name:"players-1-wis"}),l.a.createElement("input",{type:"text",className:"mod-score",placeholder:"Cha",name:"players-1-cha"}))),l.a.createElement("div",{className:"padded"},l.a.createElement("button",{type:"button",onClick:this.appendPlayer},"Add Player")),l.a.createElement("br",null),l.a.createElement("label",{className:"padded"},"Monsters:"),l.a.createElement("div",{id:"monsters"},l.a.createElement("div",{id:"monsters-1"},l.a.createElement("input",{type:"text",placeholder:"enter monster name",name:"monsters-1-name"}),l.a.createElement("select",{name:"monsters-1-monsterType"},l.a.createElement("option",{defaultValue:!0,value:"goblin"},"Goblin"),l.a.createElement("option",{value:"lich"},"Lich"),l.a.createElement("option",{value:"werewolf"},"Werewolf"),l.a.createElement("option",{value:"vampire"},"Vampire"),l.a.createElement("option",{value:"zombie"},"Zombie")))),l.a.createElement("div",{className:"padded"},l.a.createElement("button",{type:"button",onClick:this.appendMonster},"Add Monster")),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Submit"})),l.a.createElement("br",null),l.a.createElement("p",null,"* to represent experienced players"),l.a.createElement("p",null,"** to represent inexperienced players"))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=a(33),y=a(6);function E(){return l.a.createElement(g.a,null,l.a.createElement("div",null,l.a.createElement(y.c,null,l.a.createElement(y.a,{exact:!0,path:"/"},l.a.createElement(h,null)),l.a.createElement(y.a,{path:"/results/:id?"},l.a.createElement(v,null)))))}function v(){var e=Object(y.f)().id;return null!==e&&""!==e&&void 0!==e?(function(e){var t=a(18).default,n=t.newClient({invokeUrl:"https://4zoom92ov5.execute-api.eu-west-2.amazonaws.com",region:"eu-west-2"}),l={simhashValue:e};n.invokeApi(l,"/prod/query/{simhashValue}","GET",{headers:{},queryParams:{}}).then((function(e){document.getElementById("results-header").innerHTML='Your simulation id is: <div style="color: green">'+JSON.stringify(e.data.Items[0].sim_hash.S).replace(/"/g,"")+"</div><br/><i>make a note of it (or copy the full URL) to return to the results in the future.</i><br /><br/>Results: "+JSON.stringify(e.data.Items[0].result.S).replace(/"/g,"").replace(/,/g," and")})).catch((function(e){document.getElementById("results-header").innerHTML=e.message+'<br /><i style="color: red">this is likely an unknown simulation ID</i>'}))}(e),l.a.createElement("div",null,l.a.createElement("div",{className:"centered"},l.a.createElement("h3",{className:"mobile_message"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/tjheslin1/DMsPredictor"},"This project")," ",l.a.createElement("i",null,"is a work in progress! If you have any feedback, suggestions or questions please ",l.a.createElement("a",{href:"mailto:tjheslin1@kolabnow.com?subject=DMsPredictor-site"},"email me"),", referencing a ",l.a.createElement("u",null,"simulation results ID")," where relevant.")),l.a.createElement("h3",{id:"results-header"},"waiting..."),l.a.createElement("form",{id:"simulationResults",onSubmit:function(e){e.preventDefault(),f(document.getElementById("simHash").value)}},l.a.createElement("input",{id:"simHash",type:"text",placeholder:"enter simHash"}),l.a.createElement("input",{type:"submit",value:"Submit"})),l.a.createElement("a",{href:"/#/results/".concat(e)},l.a.createElement("i",null,"refresh ",e," results"))),l.a.createElement("img",{className:"gif",src:"https://dmspredictor-site-assets.s3.eu-west-2.amazonaws.com/roll_tiny.gif",alt:"rolling dice..."}))):l.a.createElement("div",null,l.a.createElement("div",{className:"centered"},l.a.createElement("h3",{className:"mobile_message"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/tjheslin1/DMsPredictor"},"This project")," ",l.a.createElement("i",null,"is a work in progress! If you have any feedback, suggestions or questions please ",l.a.createElement("a",{href:"mailto:tjheslin1@kolabnow.com?subject=DMsPredictor-site"},"email me"),", referencing a ",l.a.createElement("u",null,"simulation results ID")," where relevant.")),l.a.createElement("h3",{id:"results-header"},"Enter your simulation id:"),l.a.createElement("form",{id:"simulationResults",onSubmit:function(e){e.preventDefault(),f(document.getElementById("simHash").value)}},l.a.createElement("input",{id:"simHash",type:"text",placeholder:"enter simHash"}),l.a.createElement("input",{type:"submit",value:"Submit"})),l.a.createElement("a",{href:"/#/results"},"Refresh"),l.a.createElement("br",null)),l.a.createElement("img",{className:"gif",src:"https://dmspredictor-site-assets.s3.eu-west-2.amazonaws.com/roll_tiny.gif",alt:"rolling dice..."}))}function f(e){window.location.href="/#/results/"+e}a.d(t,"default",(function(){return E})),i.a.render(l.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.f06e8ef5.chunk.js.map