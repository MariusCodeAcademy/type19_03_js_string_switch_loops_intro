'use strict';
console.log('switch.js file was loaded');

let diena = 5;

console.log('diena ===', diena);

/*
switch(expression) {
  case x: // expression === x
    // code block
    break;
  case y:// expression === y
    // code block
    break;
  default:
    // code block
}
*/

switch (diena) {
  case 1:
    //primadienis
    console.log('Pirmadienis');
    break;
  case 2:
    console.log('Antradienis');
    break;
  case 3:
    console.log('Trečiadienis');
    break;
  case 4:
    console.log('Ketvirtadienis');
    break;
  case 5:
    console.log('Penktadienis');
    break;
  case 6:
  case 7:
    console.log('Savaitgalis');
    break;
  default:
    console.log('Netinkama dienos reikšmė');
}

let value2 = 'hello';
value2 = 45;
value2 = true;
value2 = [];

// parasyti switch statment kad nustayti kokio tipo yra value2
switch (typeof value2) {
  case 'string':
    console.log('textas');
    break;
  case 'boolean':
    console.log('Tiesa netiesa');
    break;
  case 'number':
    console.log('Skaiciuks');
    break;
  default:
    console.log(' neskaicius nestringas ir neboolean');
}
// su konsole log pranesti lietuviskai koks yra value2 tipas
// pranesti jei reiksme yra neskaicius nestringas ir neboolean

let amzius = -80;

// jei amzius yra iki 18 - vaikas
// jei amzius yra 18 iki 55 - suauges
// jei daugiau nei 56 - paauges

if (amzius < 18) {
  console.log('vaikas');
} else if (amzius < 55) {
  console.log('suauges');
} else if (amzius > 56) {
  console.log('paauges');
}

switch (true) {
  case amzius < 18:
    console.log('vaikas');
    break;
  case amzius < 55:
    console.log('suauges');
    break;
  case amzius > 56:
    console.log('paauges');
    break;
}
