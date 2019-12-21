const { calculateFFT, parseInput } = require('../src/frequency');
const input = require('../inputs/16.json').value;
let offset = parseInt(input.substring(0, 8));

const pattern = [0, 1, 0, -1];

let signal = parseInput(input);
calculateFFT(signal, pattern, 100);
console.log(input.length);
console.log(signal);
