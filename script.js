let currentLocation = 0;

const startCode = "LIBERTE INCONDITIONELLE";

const locations = [

{
name:"Melrose Place",
coords:{lat:34.0837,lng:-118.3761},
mission:"Take one picture illustrating the rich and poor divide."
},

{
name:"Paul Smith Wall",
coords:{lat:34.08384,lng:-118.36879},
mission:"Take one picture of the famous pink wall."
},

{
name:"The Grove",
coords:{lat:34.0722,lng:-118.3579},
mission:"Take one picture that recalls Totally Spies."
},

{
name:"Farmers Market",
coords:{lat:34.07199,lng:-118.36041},
mission:"Take one picture of a Brazilian stand."
},

{
name:"H&H Brazilian Steakhouse",
coords:{lat:34.07633,lng:-118.37627},
mission:"No mission. You reached the final destination."
}

];

const codes = [
"COCO",
"COCKTAIL",
"DANSE",
"PALMIER"
];

document.addEventListener("DOMContentLoaded",()=>{

document.getElementById("start-btn").addEventListener("click",startGame);
document.getElementById("unlock-btn").addEventListener("click",checkCode);
document.getElementById("open-maps").addEventListener("click",openMaps);

});


function startGame(){

let input=document.getElementById("start-code").value;

if(input.trim().toUpperCase()===startCode){

document.getElementById("welcome-screen").style.display="none";
document.getElementById("game-screen").style.display="block";

updateMission();

}else{

alert("Incorrect passcode.");

}

}


function updateMission(){

let loc = locations[currentLocation];

document.getElementById("mission-text").textContent =
loc.name + " — " + loc.mission;

document.getElementById("coordinates").textContent =
"Coordinates: " + loc.coords.lat + ", " + loc.coords.lng;

}


function openMaps(){

let loc = locations[currentLocation];

let url = "https://www.google.com/maps?q=" + loc.coords.lat + "," + loc.coords.lng;

window.open(url,"_blank");

}


function checkCode(){

let input=document.getElementById("code-input").value;

if(input.trim().toUpperCase()===codes[currentLocation]){

currentLocation++;

if(currentLocation < locations.length-1){

updateMission();

document.getElementById("code-input").value="";

}else{

finishGame();

}

}else{

alert("Wrong code.");

}

}


function finishGame(){

document.getElementById("game-screen").style.display="none";
document.getElementById("finish-screen").style.display="block";

}