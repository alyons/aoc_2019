const detectAsteroids = require('../src/detectAsteroids');
const fs = require('fs');
const input = fs.readFileSync("C:/Users/pyrot/Projects/aoc_2019/inputs/ten.txt").toString();

let position = [-1,-1];
let maxAsteroids = Number.MIN_SAFE_INTEGER;

for(let x = 0; x < 24; x++) {
    for(let y = 0; y < 24; y++) {
        let array = detectAsteroids(input, x, y);
        if (array.length > maxAsteroids) {
            position = [x, y];
            maxAsteroids = array.length;
        }
    }
}

console.log(maxAsteroids);
