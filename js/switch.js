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
