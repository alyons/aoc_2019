const fs = require('fs');
const { createChemical, parseProcesses, removeChemical } = require('../src/chemicalPlant');
const { printSameLine } = require('../src/utils');

const BASE_PATH = 'G:/Projects/aoc_2019';
// const INPUT = fs.readFileSync(`${BASE_PATH}/src/__data__/fuelProcess3.txt`).toString();

// const BASE_PATH = '/Users/ag22845/workspace/aoc_2019';
const INPUT = fs.readFileSync(`${BASE_PATH}/inputs/fourteen.txt`).toString();
