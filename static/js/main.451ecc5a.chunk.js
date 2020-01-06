(this["webpackJsonpDMsPredictor-site"]=this["webpackJsonpDMsPredictor-site"]||[]).push([[0],{38:function(e,t,a){e.exports=a(86)},43:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(29),s=a.n(l),o=(a(43),a(15)),i=a(30),u=a(31),c=a(36),m=a(32),p=a(7),d=a(37),h=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={simulationName:"",simulationCount:50,focus:"LowestFirst"},a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.handlePlayerClassChange=a.handlePlayerClassChange.bind(Object(p.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a.appendPlayer=a.appendPlayer.bind(Object(p.a)(a)),a.appendMonster=a.appendMonster.bind(Object(p.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(o.a)({},n,a))}},{key:"handlePlayerClassChange",value:function(e){this.handleChange(e);var t=e.target,a=t.name.charAt(t.name.length-1);"fighter"===t.value?document.getElementById("players-"+a+"-fightingstyles").style.display="inline":document.getElementById("players-"+a+"-fightingstyles").style.display="none"}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=Array.from(document.getElementById("players").children).map((function(e){var t=e.children,a=t[8].value+","+t[9].value+","+t[10].value+","+t[11].value+","+t[12].value+","+t[13].value,n={name:t[0].value,class:t[1].value,level:t[3].value,weapon:t[4].value,armour:t[5].value,offHand:t[6].value,stats:a,skills:"0,0"};return"fighter"===t[1].value&&(n.fightingStyle=t[2].value),n})),n=Array.from(document.getElementById("monsters").children).map((function(e){var t=e.children;return{name:t[0].value,monster:t[1].value}})),r={simulationName:this.state.simulationName,simulations:this.state.simulationCount,focus:this.state.focus,players:t,monsters:n};a(19).default.newClient({invokeUrl:"https://4zoom92ov5.execute-api.eu-west-2.amazonaws.com",region:"eu-west-2"}).invokeApi({},"/prod/simulator","POST",{headers:{},queryParams:{}},r).then((function(e){console.log(e.data),window.location.href="/results/"+e.data.body})).catch((function(e){console.log(e.message)}))}},{key:"appendPlayer",value:function(e){var t=this,a=document.getElementById("players"),n=a.children.length+1;this.setState(Object(o.a)({},"playerClass_".concat(n),"barbarian"));var r=document.createElement("div");r.setAttribute("id","players-"+n),r.setAttribute("class","padded");var l=document.createElement("input");l.setAttribute("type","text"),l.setAttribute("placeholder","enter player name"),l.setAttribute("name","players-"+n+"-name"),r.append(l);var s=document.createElement("select");s.setAttribute("name","playerClass_"+n),s.onchange=function(e){return t.handlePlayerClassChange(e)},"barbarian,cleric,fighter,rogue,wizard".split(",").forEach((function(e){var t=document.createElement("option");t.setAttribute("value",e),t.innerHTML=e.charAt(0).toUpperCase()+e.substring(1),s.append(t)}));var i=document.createElement("select");i.setAttribute("id","players-"+n+"-fightingstyles"),i.setAttribute("name","players-"+n+"-fightingstyles"),i.setAttribute("style","display: none;"),"archery,defense".split(",").forEach((function(e){var t=document.createElement("option");t.setAttribute("value",e),t.innerHTML=e.charAt(0).toUpperCase()+e.substring(1),i.append(t)}));var u=document.createElement("select");u.setAttribute("name","players-"+n+"-level"),"1,2,3,4,5".split(",").forEach((function(e){var t=document.createElement("option");t.setAttribute("value",e),t.innerHTML="Level "+e,u.append(t)}));var c=document.createElement("select");c.setAttribute("name","players-"+n+"-weapon"),"shortsword,greatsword,greataxe".split(",").forEach((function(e){var t=document.createElement("option");t.setAttribute("value",e),t.innerHTML=e.charAt(0).toUpperCase()+e.substring(1),c.append(t)}));var m=document.createElement("select");m.setAttribute("name","players-"+n+"-armour"),"noarmour,chainshirt".split(",").forEach((function(e){var t=document.createElement("option");t.setAttribute("value",e),t.innerHTML=e.charAt(0).toUpperCase()+e.substring(1),m.append(t)}));var p=document.createElement("select");p.setAttribute("name","players-"+n+"-offHand"),"none,shield,shortsword".split(",").forEach((function(e){var t=document.createElement("option");t.setAttribute("value",e),t.innerHTML=e.charAt(0).toUpperCase()+e.substring(1),p.append(t)})),r.append(s),r.append(i),r.append(u),r.append(c),r.append(m),r.append(p),r.append(document.createElement("br")),r.append(this.appendModScore(n,"Str")),r.append(this.appendModScore(n,"Dex")),r.append(this.appendModScore(n,"Con")),r.append(this.appendModScore(n,"Int")),r.append(this.appendModScore(n,"Wis")),r.append(this.appendModScore(n,"Cha")),a.append(r)}},{key:"appendModScore",value:function(e,t){var a=document.createElement("input");return a.setAttribute("type","text"),a.setAttribute("class","mod-score"),a.setAttribute("placeholder",t.charAt(0).toUpperCase()+t.substring(1)),a.setAttribute("name","players-"+e+"-"+t),a}},{key:"appendMonster",value:function(e){var t=document.getElementById("monsters"),a=t.children.length+1,n=document.createElement("div"),r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("placeholder","enter monster name"),r.setAttribute("name","monsters-"+a+"-name"),n.append(r);var l=document.createElement("select");l.setAttribute("name","monsters-"+a+"-monsterType"),"goblin,zombie,vampire,werewolf".split(",").forEach((function(e){var t=document.createElement("option");t.setAttribute("value",e),t.innerHTML=e.charAt(0).toUpperCase()+e.substring(1),l.append(t)})),n.append(l),t.append(n)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("a",{className:"centered",href:"/results"},"Click here to query simulation results"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("form",{id:"simulationForm",className:"centered",onSubmit:this.handleSubmit},r.a.createElement("label",null,"Simulation name:"),r.a.createElement("input",{type:"text",placeholder:"enter name here",name:"simulationName",value:this.state.simulationName,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",null,"Number of simulation runs:",r.a.createElement("input",{name:"simulationCount",type:"number",value:this.state.simulationCount,onChange:this.handleChange})),r.a.createElement("br",null),"Choose focus strategy (monsters will follow the same strategy):",r.a.createElement("br",null),r.a.createElement("select",{name:"focus",value:this.state.focus,onChange:this.handleChange},r.a.createElement("option",{defaultValue:!0,value:"LowestFirst"},"Lowest health first (experienced players)"),r.a.createElement("option",{value:"RandomFocus"},"Random (inexperienced players)")),r.a.createElement("br",null),r.a.createElement("label",null,"Players:"),r.a.createElement("br",null),r.a.createElement("div",{id:"players"},r.a.createElement("div",{id:"players-1",className:"padded"},r.a.createElement("input",{type:"text",placeholder:"enter player name",name:"players-1-name"}),r.a.createElement("select",{name:"playerClass_1",onChange:this.handlePlayerClassChange},r.a.createElement("option",{defaultValue:!0,value:"barbarian"},"Barbarian"),r.a.createElement("option",{value:"cleric"},"Cleric"),r.a.createElement("option",{value:"fighter"},"Fighter"),r.a.createElement("option",{value:"rogue"},"Rogue"),r.a.createElement("option",{value:"wizard"},"Wizard")),r.a.createElement("select",{id:"players-1-fightingstyles",name:"players-1-fightingstyles",style:{display:"none"}},r.a.createElement("option",{defaultValue:!0,value:"archery"},"Archery"),r.a.createElement("option",{value:"defense"},"Defense")),r.a.createElement("select",{name:"players-1-level"},r.a.createElement("option",{defaultValue:!0,value:"1"},"Level 1"),r.a.createElement("option",{value:"2"},"Level 2"),r.a.createElement("option",{value:"3"},"Level 3"),r.a.createElement("option",{value:"4"},"Level 4"),r.a.createElement("option",{value:"5"},"Level 5")),r.a.createElement("select",{name:"players-1-weapon"},r.a.createElement("option",{defaultValue:!0,value:"shortsword"},"Shortsword"),r.a.createElement("option",{value:"greatsword"},"Greatsword"),r.a.createElement("option",{value:"greataxe"},"Greataxe")),r.a.createElement("select",{name:"players-1-armour"},r.a.createElement("option",{defaultValue:!0,value:"noarmour"},"NoArmour"),r.a.createElement("option",{value:"chainshirt"},"ChainShirt")),r.a.createElement("select",{name:"players-1-offHand"},r.a.createElement("option",{defaultValue:!0,value:"none"},"No Off Hand"),r.a.createElement("option",{value:"shield"},"Shield"),r.a.createElement("option",{value:"shortsword"},"Shortsword")),r.a.createElement("br",null),r.a.createElement("input",{type:"text",className:"mod-score",placeholder:"Str",name:"players-1-str"}),r.a.createElement("input",{type:"text",className:"mod-score",placeholder:"Dex",name:"players-1-dex"}),r.a.createElement("input",{type:"text",className:"mod-score",placeholder:"Con",name:"players-1-con"}),r.a.createElement("input",{type:"text",className:"mod-score",placeholder:"Int",name:"players-1-int"}),r.a.createElement("input",{type:"text",className:"mod-score",placeholder:"Wis",name:"players-1-wis"}),r.a.createElement("input",{type:"text",className:"mod-score",placeholder:"Cha",name:"players-1-cha"}))),r.a.createElement("button",{type:"button",onClick:this.appendPlayer},"Add Player"),r.a.createElement("br",null),r.a.createElement("label",null,"Monsters:"),r.a.createElement("div",{id:"monsters"},r.a.createElement("div",{id:"monsters-1"},r.a.createElement("input",{type:"text",placeholder:"enter monster name",name:"monsters-1-name"}),r.a.createElement("select",{name:"monsters-1-monsterType"},r.a.createElement("option",{defaultValue:!0,value:"goblin"},"Goblin"),r.a.createElement("option",{value:"zombie"},"Zombie"),r.a.createElement("option",{value:"vampire"},"Vampire"),r.a.createElement("option",{value:"werewolf"},"Werewolf")))),r.a.createElement("button",{type:"button",onClick:this.appendMonster},"Add Monster"),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=a(33),E=a(6);function y(){return r.a.createElement(v.a,null,r.a.createElement("div",null,r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/"},r.a.createElement(h,null)),r.a.createElement(E.a,{path:"/results/:id?"},r.a.createElement(b,null)))))}function b(){var e=Object(E.f)().id;return null!==e&&""!==e&&void 0!==e?(function(e){var t=a(19).default,n=t.newClient({invokeUrl:"https://4zoom92ov5.execute-api.eu-west-2.amazonaws.com",region:"eu-west-2"}),r={simhashValue:e};n.invokeApi(r,"/prod/query/{simhashValue}","GET",{headers:{},queryParams:{}}).then((function(e){document.getElementById("results-header").innerHTML='Your simulation id is: <div style="color: green">'+JSON.stringify(e.data.Items[0].sim_hash.S).replace(/"/g,"")+"</div><br/><i>make a note of it (or copy the full URL) to return to the results in the future.</i><br /><br/>Results: "+JSON.stringify(e.data.Items[0].result.S).replace(/"/g,"").replace(/,/g," and")})).catch((function(e){document.getElementById("results-header").innerHTML=e.message+'<br /><i style="color: red">this is likely an unknown simulation ID</i>'}))}(e),r.a.createElement("div",{className:"centered"},r.a.createElement("h3",{id:"results-header"},"waiting..."),r.a.createElement("form",{id:"simulationResults",onSubmit:function(e){e.preventDefault(),f(document.getElementById("simHash").value)}},r.a.createElement("input",{id:"simHash",type:"text",placeholder:"enter simHash"}),r.a.createElement("input",{type:"submit",value:"Submit"})),r.a.createElement("a",{href:"/results/".concat(e)},r.a.createElement("i",null,"refresh ",e," results")))):r.a.createElement("div",{className:"centered"},r.a.createElement("h3",{id:"results-header"},"Enter your simulation id:"),r.a.createElement("form",{id:"simulationResults",onSubmit:function(e){e.preventDefault(),f(document.getElementById("simHash").value)}},r.a.createElement("input",{id:"simHash",type:"text",placeholder:"enter simHash"}),r.a.createElement("input",{type:"submit",value:"Submit"})),r.a.createElement("a",{href:"/results"},"Refresh"))}function f(e){window.location.href="/results/"+e}a.d(t,"default",(function(){return y})),s.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.451ecc5a.chunk.js.map