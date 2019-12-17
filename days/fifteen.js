const intCode = require('../src/intCode.v3');
const program = require('../inputs/fifteen.json');
const { printSameLine } = require('../src/utils');

let x = 0, y = 0;
let input = 1;
let state = {
    output: [],
    index: 0,
    rIndex: 0
};
let shouldExit = false;
let directionsTried = 0;
let points = [[x,y]];
let index = 0;
let minX = 0, minY = 0, maxX = 0, maxY = 0; // Screen Size

function getNextDirection(direction) {
    switch (direction) {
        case 1: return 3;
        case 2: return 4;
        case 3: return 2;
        case 4: return 1;
    }
}

do {
    state = intCode(program, [input], state.output, state.index, state.rIndex);
    let data = state.output.shift();
    if (data != 0) {
        switch(input) {
            case 1: y-= 1; minY = Math.min(y, minY); break;
            case 2: y+= 1; maxY = Math.max(y, maxY); break;
            case 3: x+= 1; maxX = Math.max(x, maxX); break;
            case 4: x-= 1; minX = Math.min(x, minX); break;
        }
        points.push([x,y]);
    }
    input = getNextDirection(input);
    index++;
    process.stdout.write('\033c'); // Clear the screen
    process.stdout.write(`${minX} ${minY} ${maxX} ${maxY}\n`);
    for (let y = minY; y <= maxY; y++) {
        for(let x = minX; x <= maxX; x++) {
            process.stdout.write('\u2588');
        }
        process.stdout.write('\n');
    }
    shouldExit = state.index == 'HALT' || data == 2;
} while (!shouldExit);

console.log(points);