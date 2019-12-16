const fs = require('fs');
const { createChemical, parseProcesses, removeChemical } = require('../src/fuel');
const { printSameLine } = require('../src/utils');

// const BASE_PATH = 'G:/Projects/aoc_2019';
const BASE_PATH = '/Users/ag22845/workspace/aoc_2019';
// const INPUT = fs.readFileSync(`${BASE_PATH}/inputs/fourteen.txt`).toString();
const INPUT = fs.readFileSync(`${BASE_PATH}/src/__data__/fuelProcess1.txt`).toString();

let chemicalStore = { ORE: 0 };
let processes = parseProcesses(INPUT);
const maxOre = 1000000000000;

function formatNumber(number) {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

// createChemical('FUEL', 1, processes, chemicalStore);

// console.log(chemicalStore);
// console.log(`Ore Required: ${chemicalStore['ORE']}`);

// let incValue = 100000;
// let shouldExit = false;

// do {
//     while(chemicalStore['ORE'] < maxOre && !shouldExit) {
//         createChemical('FUEL', incValue, processes, chemicalStore);
//         printSameLine(`Current Ore: ${chemicalStore['ORE']}`);
//     }

//     incValue /= 2;
//     shouldExit = incValue < 2;

//     while(chemicalStore['ORE'] > maxOre && !shouldExit) {
//         removeChemical('FUEL', incValue, processes, chemicalStore);
//         printSameLine(`Current Ore: ${chemicalStore['ORE']}`);
//     }

//     incValue /= 2;
//     shouldExit = incValue < 2;
// } while (!shouldExit);

// 6323777400 is too high...
// My program returns that 6323777403 uses exactly 1 trillion ore

createChemical('FUEL', 6323777403, processes, chemicalStore);

console.log(`Fuel Generated: ${formatNumber(chemicalStore['FUEL'])}`);
console.log(`Ore Consumed: ${formatNumber(chemicalStore['ORE'])}`);
