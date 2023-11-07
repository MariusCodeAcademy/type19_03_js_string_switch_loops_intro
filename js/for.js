'use strict';
console.log('for.js file was loaded');

/*
for (begin; condition; step) {​

  // ... loop body ...​

}​
*/

// atspausdinti skaicius nuo 1 iki 56 su for ciklu
let ilgasString = '';
for (let i = 1; i <= 60; i++) {
  // console.log(`<li>sekunde ${i}</li>`);
  ilgasString = ilgasString + `<li>sekunde ${i}</li>\n`;
}
console.log('ilgasString ===', ilgasString);

// su for ciklu atspausdinti skaicius nuo 25 iki 80 kas antra skaiciu
