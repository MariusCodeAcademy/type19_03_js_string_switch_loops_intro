'use strict';
console.log('else.js file was loaded');

let diena = 5;

if (diena === 1) {
  console.log('Pirmadienis');
} else if (diena === 2) {
  console.log('Antradienis');
} else if (diena === 3) {
  console.log('Trečiadienis');
} else if (diena === 4) {
  console.log('Ketvirtadienis');
} else if (diena === 5) {
  console.log('Penktadienis');
} else if (diena === 6 || diena === 7) {
  console.log('Savaitgalis');
} else {
  console.log('Netinkama dienos reikšmė');
}
