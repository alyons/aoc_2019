const fs = require('fs');
const { createChemical, parseProcesses, removeChemical } = require('../src/chemicalPlant.v2');
const { printSameLine } = require('../src/utils');

const BASE_PATH = 'G:/Projects/aoc_2019';
// const INPUT = fs.readFileSync(`${BASE_PATH}/src/__data__/fuelProcess3.txt`).toString();

// const BASE_PATH = '/Users/ag22845/workspace/aoc_2019';
const INPUT = fs.readFileSync(`${BASE_PATH}/inputs/fourteen.txt`).toString();

let store = new Map([['ORE', 0]]);
let processes = parseProcesses(INPUT);
const maxOre = 1000000000000;

function formatNumber(number) {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

createChemical('FUEL', 1, processes, store);

// console.log(chemicalStore);
console.log(`Ore Required: ${store.get('ORE')}`);

let incValue = 100000;
let shouldExit = false;

do {
    while(store['ORE'] < maxOre && !shouldExit) {
        createChemical('FUEL', store.get('FUEL') + incValue, processes, store);
        printSameLine(`Current Ore: ${store['ORE']}`);
    }

    incValue /= 2;
    shouldExit = incValue < 2;

    while(store['ORE'] > maxOre && !shouldExit) {
        removeChemical('FUEL', incValue, processes, store);
        printSameLine(`Current Ore: ${store['ORE']}`);
    }

    incValue /= 2;
    shouldExit = incValue < 2;
} while (!shouldExit);

// 6323777400 is too high...
// My program returns that 6323777403 uses exactly 1 trillion ore

createChemical('FUEL', 3756877, processes, store);

console.log(`Fuel Generated: ${formatNumber(store.get('FUEL'))}`);
console.log(`Ore Consumed: ${formatNumber(store.get('ORE'))}`);
console.log(`Max Ore:      ${formatNumber(maxOre)}`);
