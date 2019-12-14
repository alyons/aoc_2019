const fs = require('fs');
const { createChemical, parseProcesses } = require('../src/fuel');
const { printSameLine } = require('../src/utils');

const BASE_PATH = 'G:/Projects/aoc_2019';
// const INPUT = fs.readFileSync(`${BASE_PATH}/inputs/fourteen.txt`).toString();
const INPUT = fs.readFileSync(`${BASE_PATH}/src/__data__/fuelProcess1.txt`).toString();

let chemicalStore = { ORE: 0 };
let processes = parseProcesses(INPUT);
const maxOre = 1000000000000;

function formatNumber(number) {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

createChemical('FUEL', 1, processes, chemicalStore);

console.log(chemicalStore);
console.log(`Ore Required: ${chemicalStore['ORE']}`);

// do {
//     createChemical('FUEL', processes, chemicalStore);
//     printSameLine(`Current Ore Consumption: ${formatNumber(chemicalStore['ORE'])}`);
// } while(chemicalStore['ORE'] < maxOre);

// console.log(`Fuel Generated: ${formatNumber(chemicalStore['FUEL'] - 1)}`);
