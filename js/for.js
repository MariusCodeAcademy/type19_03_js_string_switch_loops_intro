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
// console.log('ilgasString ===', ilgasString);

// su for ciklu atspausdinti skaicius nuo 25 iki 80 kas antra skaiciu

for (let i = 25; i < 81; i += 2) {
  // console.log('i ===', i);
}

// atspausdinti visus 3 kartotinius nuo 1 iki 100
// sukti cikla nuo 1 iki 100
for (let i = 1; i <= 100; i++) {
  //// tikrtinti ar skaicius yra 3 kartotinis?
  if (i % 3 === 0) {
    console.log('kartotinis ===', i);
  }
}

// psiaudo kodas
// sukti cikla nuo 1 iki 100
//// tikrtinti ar skaicius yra 3 kartotinis?
//// taip - spausdinam
//// ne - praleidziam
