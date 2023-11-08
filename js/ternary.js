'use strict';
console.log('ternary.js file was loaded');

let isAdmin = false;

// sudaryti pasisveikinimo stringa priklausomai nuo
// ar vartotojas yra admin

// jei admin - Sveiki Admin
// jei ne admin - Sveiki Svecias

// let adminOrNot;
// if (isAdmin === true) {
//   adminOrNot = 'Admin';
// } else {
//   adminOrNot = 'Svecias';
// }

// ternaru operatorius
// salyga ? jei true : jei false

let adminOrNot = isAdmin === true ? 'Admin' : 'Svecias';

let greet = `Sveiki ${adminOrNot}`;
console.log('greet ===', greet);

let amzius = 25;
// jei amzius yra iki 18 - vaikas
// jei amzius yra 18 iki 55 - suauges
// jei daugiau nei 56 - paauges
let amziausZodis = '';
if (amzius < 18) {
  amziausZodis = 'vaikas';
} else if (amzius < 55) {
  amziausZodis = 'suauges';
} else if (amzius > 56) {
  amziausZodis = 'paauges';
}
console.log('amziausZodis ===', amziausZodis);
