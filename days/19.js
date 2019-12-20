const intCode = require('../src/intCode.v3');
const program = require('../inputs/19.json');
const { printSameLine } = require('../src/utils');

const input = [];
let output = [];
let maxSquare = 100;

for(let x = 0; x < maxSquare; x++)  { 
    for(let y = 0; y < maxSquare; y++) {
        input.push(x);
        input.push(y);
    }
}

do {
    state = intCode(program.slice(), input, output, 0, 0);
    printSameLine(`Inputs remaining: ${input.length}`);
} while (input.length > 0);
console.log('\n');

console.log(`Input Length: ${input.length}`);
console.log(`Output Length: ${output.length}`);

let hits = output.filter(t => t == 1);
console.log(`Tractored Spaces: ${hits.length}`);

// if (maxSquare <= 100) {
//     for(let i = 0; i < maxSquare; i++) {
//         let toPrint = '';
//         output.slice(i * maxSquare, (i + 1) * maxSquare ).forEach(o => toPrint += (o == 0) ? '.' : '#');
//         console.log(toPrint);
//     }
// }

let rightTopMost = { x: Number.MIN_SAFE_INTEGER, y: Number.MAX_SAFE_INTEGER };
let lowerLeftMost = { x: Number.MAX_SAFE_INTEGER, y: Number.MIN_SAFE_INTEGER };

for(let y = 0; y < maxSquare; y++) {
    for(let x = 0; x < maxSquare; x++) {
        if (output[y * maxSquare + x] == 1) {
            if (x > rightTopMost.x) {
                rightTopMost = { x, y };
            }
            
            if (y > lowerLeftMost.y) {
                lowerLeftMost = { x, y };
            }
        }
    }
}

const f = (x) => Math.floor((rightTopMost.y) / parseFloat(rightTopMost.x) * x);
const g = (x) => Math.floor((lowerLeftMost.y) / parseFloat(lowerLeftMost.x) * x);

let squareSize = 99;
let xA = squareSize+ + 1;

do {
    printSameLine(``);
    let yA = g(xA);
    let state = intCode(program.slice(), [xA,yA], [], 0, 0);
    let tractor = state.output.shift();
    if (tractor == 0) {
        while(tractor == 0) {
            xA++;
            state == intCode(program.slice(), [xA,yA], [], 0, 0);
            tractor = state.output.shift();
        }
    } else if (tractor == 1) {
        while(tractor == 1) {
            state == intCode(program.slice(), [xA - 1,yA], [], 0, 0);
            tractor = state.output.shift();
            if (tractor == 1) xA--;
        }
    }

    lowerLeftMost = { x: xA, y: yA }; // Increase accuracy of g(x) with each step
    let xB = xA + 100;
    let yB = yA - 100;
    state = intCode(program.slice(), [xB,yB], [], 0, 0);
    tractor = state.output.shift();
    if (tractor == 1) {
        console.log('\n');
        console.log(`Point found at ${xA, yB}`);
        break;
    }
    xA++;
} while(true);
