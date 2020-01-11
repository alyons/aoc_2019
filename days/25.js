const intCode = require('../src/intCode.v3');
const program = require('../inputs/25.json');
const { printSameLine } = require('../src/utils');

const NORTH = 1, SOUTH = 2, EAST = 3, WEST = 4, TAKE = 5, DROP = 6, INV = 7, EXIT = 8;

let userInput;
let input = [];
let state = {
    output: [],
    index: 0,
    rIndex: 0
};

function generateInput(command, args = '') {
    let cmdString;
    switch(command) {
        case NORTH: cmdString = 'north'; break;
        case SOUTH: cmdString = 'north'; break;
        case EAST: cmdString = 'north'; break;
        case WEST: cmdString = 'north'; break;
        case TAKE: cmdString = 'north'; break;
        case DROP: cmdString = 'north'; break;
        default: cmdString = 'inv'; break;
    }

    if (cmdString != '' && (command == TAKE || command == DROP)) cmdString += ' ' + args;
    cmdString += '\n';

    return cmdString.split('').map(c => c.charCodeAt(0));
}

while (state.index != 'HALT') {
    state = intCode(program, input, state.output, state.index, state.rIndex);
    console.log(String.fromCharCode.apply(null, state.output));
}
// console.log(state);
// console.log(program[state.index]);
