const validCommands = [1, 2, 99];

function intCode(array, optCode = 0) {
    let command = array[optCode];

    if (validCommands.indexOf(command) < 0) {
        console.error(`Invalid command: ${command}`);
        return array;
    }

    if (command == 99) return array;

    let param1 = array[array[optCode + 1]];
    let param2 = array[array[optCode + 2]];
    let output = 0;
    switch(command) {
        case 1: output = param1 + param2; break;
        case 2: output = param1 * param2; break;
    }

    array.splice(array[optCode + 3], 1, output);
    // console.log(array);
    return intCode(array, optCode + 4);
}

module.exports = intCode;
