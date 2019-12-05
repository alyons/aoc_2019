const readline = require('readline');
const validCommands = [1, 2, 3, 4, 99];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1 = Add
function add(array, optCode) {
    let param1 = array[array[optCode + 1]];
    let param2 = array[array[optCode + 2]];
    let output = param1 + param2;
    array.splice(array[optCode + 3], 1, output);
    return intCode(array, optCode + 4);
}

// 2 = Multiply
function multiply(array, optCode) {
    let param1 = array[array[optCode + 1]];
    let param2 = array[array[optCode + 2]];
    let output = param1 * param2;
    array.splice(array[optCode + 3], 1, output);
    return intCode(array, optCode + 4);
}

// 3 = Get Input
function getInput(array, optCode) {
    rl.question('Provide input: ', (input) => {
        array.splice(array[optCode + 1], i, input);
        console.log(`Placing value ${input} at index ${array[optCode + 1]}`);
    });
    return intCode(array, optCode + 2);
}

// 4 = Place Output
function putOutput(array, optCode) {
    console.log(`${array[optCode + 1]}`);
    return intCode(array, optCode + 2);
}

function intCode(array, optCode = 0) {
    let command = array[optCode];

    if (command == 99) return array;

    if (validCommands.indexOf(command) < 0) {
        console.error(`Invalid command: ${command}`);
        return array;
    }

    switch(command) {
        case 1: return add(array, optCode);
        case 2: return multiply(array, optCode);
        case 3: return getInput(array, optCode);
        case 4: return putOutput(array, optCode);
    }
}

module.exports = intCode;
