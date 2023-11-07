'use strict';
console.log('string.js file was loaded');

//         0123456789
let str = 'Laba diena siandien.';
str = 'james Bond';
console.log('str.length ===', str.length);
console.log('str ===', str);

// prima raide
let primRaide = str.charAt(0);
console.log('primRaide ===', primRaide);

console.log('str.toUpperCase() ===', str.toUpperCase());

console.log('str ===', str);

// console.log(str.charAt(0));
// console.log(str.charAt(1));
// console.log(str.charAt(2));
// console.log(str.charAt(3));
// console.log(str.charAt(4));
// console.log(str.charAt(5));
// console.log(str.charAt(6));
// console.log(str.charAt(7));
// console.log(str.charAt(8));
// console.log(str.charAt(9));
const strIlgis = str.length;
for (let i = 0; i < str.length; i++) {
  // console.log('i ===', i);
  console.log(str.charAt(i));
  // str.charAt(i) === ' ';
}

// istraukti is str prima zodi

let prim3Raides = str.slice(0, 3);
let pask3Raides = str.slice(-3);
console.log('prim3Raides ===', prim3Raides);
console.log('pask3Raides ===', pask3Raides);

// pakelti pirma raide i diziaja
let sentCase = str.charAt(0).toUpperCase() + str.slice(1);

console.log('sentCase ===', sentCase);
