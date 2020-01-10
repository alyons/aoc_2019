const fs = require('fs');
const { runProgram, reverseIndex } = require('../src/deck');
const { printSameLine } = require('../src/utils');
const BASE_PATH = 'G:/Projects/aoc_2019'; //
const program = fs.readFileSync(`${BASE_PATH}/inputs/22.txt`).toString();

let deck = [];
for (let i = 0; i < 10007; i++) { deck.push(i); }
deck = runProgram(deck, program);
console.log(`Index of 2019: ${deck.indexOf(2019)}`);

let loopValue = 0;
let endIndex = 2020;
let index = 2020;
let iterations = 101741582076661;
let deckSize = 119315717514047;

let start = new Date();
console.log(`Start: ${start}`);
let output = reverseIndex(program, deckSize, index);
let end = new Date();
console.log(`End:   ${end}`);

// do {
//     index = reverseIndex(program, 119315717514047, index);
//     loopValue++;
//     printSameLine(`Finished Iteration: ${loopValue}`);
// } while(endIndex != index && loopValue < iterations);
// process.stdout.write('\n');

// console.log(`Iterations to loop: ${loopValue}`);
