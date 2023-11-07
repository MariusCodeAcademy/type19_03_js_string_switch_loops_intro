'use strict';
console.log('while.js file was loaded');

/*
while (condition) {
  // code block to be executed white condition is true
}
*/

let i = 1;

// i = i + 1;
// i += 1;
// i++;
// console.log('i ===', i);
while (i < 11) {
  // console.log(i);
  i++;
  // i += 2;
}
console.log('i ===', i);

i = 1;
do {
  // console.log(i);
  i++;
} while (i < 11);

// su while arba do wile atspausdinti stringa sveiki12 - sveiki0

i = 12;
while (i >= 0) {
  console.log(`sveiki${i}`);
  i--;
}
