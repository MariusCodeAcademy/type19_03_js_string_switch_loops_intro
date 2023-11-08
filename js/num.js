'use strict';
console.log('num.js file was loaded');

let x = '45.5.4em';

let xNum1 = Number(x);
let xNum2 = +x;
let xNum3 = parseInt(x); //
let xNum4 = parseFloat(x);

console.log('xNum1 ===', xNum1);
console.log('xNum2 ===', xNum2);
console.log('xNum3 ===', xNum3);
console.log('xNum4 ===', xNum4);
