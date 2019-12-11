const findBestStation = require('../src/findBestStation');
const fs = require('fs');
const input = fs.readFileSync("G:/Projects/aoc_2019/inputs/ten.txt").toString();

console.log(findBestStation(input));
