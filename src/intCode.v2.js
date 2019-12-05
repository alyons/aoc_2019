const validCommands = [1, 2, 3, 4, 5, 6, 7, 8, 99];

// 1 = Add
function add(array, optCode, input, output, shouldLog) {
    if (shouldLog) console.log('Add');
    let params = ('' + array[optCode]).slice(0, -2);
    while (params.length < 3) params = '0' + params;
    params = params.split('');

    let param1 = (params[2] == '0') ? array[array[optCode + 1]] : array[optCode + 1];
    let param2 = (params[1] == '0') ? array[array[optCode + 2]] : array[optCode + 2];
    let result = param1 + param2;
    array.splice(array[optCode + 3], 1, result);
    return intCode(array, optCode + 4, input, output, shouldLog);
}

// 2 = Multiply
function multiply(array, optCode, input, output, shouldLog) {
    if (shouldLog) console.log('Multiply');
    let params = ('' + array[optCode]).slice(0, -2);
    while (params.length < 3) params = '0' + params;
    params = params.split('');

    let param1 = (params[2] == '0') ? array[array[optCode + 1]] : array[optCode + 1];
    let param2 = (params[1] == '0') ? array[array[optCode + 2]] : array[optCode + 2];
    let result = param1 * param2;
    array.splice(array[optCode + 3], 1, result);
    return intCode(array, optCode + 4, input, output, shouldLog);
}

// 3 = Get Input
function getInput(array, optCode, input, output, shouldLog) {
    array.splice(array[optCode + 1], 1, input);
    if (shouldLog) {
        console.log(`Placing value ${input} at index ${array[optCode + 1]}: ${array[array[optCode + 1]]}`);
    }
    return intCode(array, optCode + 2, input, output, shouldLog);
}

// 4 = Place Output
function putOutput(array, optCode, input, output, shouldLog) {
    if (shouldLog) console.log('Output');
    let params = ('' + array[optCode]).slice(0, -2);
    while (params.length < 1) params = '0' + params;
    output = (params == '0') ? array[array[optCode + 1]] : array[optCode + 1];
    return intCode(array, optCode + 2, input, output, shouldLog);
}

// 5 = Jump If True
function jumpIfTrue(array, optCode, input, output, shouldLog) {
    let params = ('' + array[optCode]).slice(0, -2);
    while (params.length < 2) params = '0' + params;
    params = params.split('');
    let param1 = (params[1] == '0') ? array[array[optCode + 1]] : array[optCode + 1];
    let param2 = (params[0] == '0') ? array[array[optCode + 2]] : array[optCode + 2];

    if (shouldLog) {
        console.log(`Jump if True\nIf ${param1} == '0', jump to instruction ${param2}`);
    }

    if (param1 !== 0) {
        optCode = param2;
    } else {
        optCode += 3;
    }

    return intCode(array, optCode, input, output, shouldLog);
}

// 6 = Jump If False
function jumpIfFalse(array, optCode, input, output, shouldLog) {
    if (shouldLog) console.log('Jump If False');

    let params = ('' + array[optCode]).slice(0, -2);
    while (params.length < 2) params = '0' + params;
    params = params.split('');
    let param1 = (params[1] == '0') ? array[array[optCode + 1]] : array[optCode + 1];
    let param2 = (params[0] == '0') ? array[array[optCode + 2]] : array[optCode + 2];
    if (param1 == 0) {
        optCode = param2;
    } else {
        optCode += 3;
    }

    return intCode(array, optCode, input, output, shouldLog);
}

// 7 = Less Than
function lessThan(array, optCode, input, output, shouldLog) {
    if (shouldLog) console.log('Less Than');
    let params = ('' + array[optCode]).slice(0, -2);
    while (params.length < 3) params = '0' + params;
    params = params.split('');

    let param1 = (params[2] == '0') ? array[array[optCode + 1]] : array[optCode + 1];
    let param2 = (params[1] == '0') ? array[array[optCode + 2]] : array[optCode + 2];
    let result = (param1 < param2) ? 1 : 0;
    array.splice(array[optCode + 3], 1, result);
    return intCode(array, optCode + 4, input, output, shouldLog);
}

// 8 = EqualTo
function equalTo(array, optCode, input, output, shouldLog) {
    let params = ('' + array[optCode]).slice(0, -2);
    while (params.length < 3) params = '0' + params;
    params = params.split('');

    let param1 = (params[2] == '0') ? array[array[optCode + 1]] : array[optCode + 1];
    let param2 = (params[1] == '0') ? array[array[optCode + 2]] : array[optCode + 2];
    let result = (param1 == param2) ? 1 : 0;
    array.splice(array[optCode + 3], 1, result);

    if (shouldLog) {
        console.log(`if (${param1} == ${param2}) array[${array[optCode + 3]}] == ${result} => ${array[array[optCode + 3]]}`);
    }

    return intCode(array, optCode + 4, input, output, shouldLog);
}

function intCode(array, optCode = 0, input = 0, output = 0, shouldLog = false) {
    let fullCommand = array[optCode];

    if (fullCommand == 99) return output;

    let command = Number.parseInt(('' + fullCommand).slice(-2));

    if (validCommands.indexOf(command) < 0) {
        console.error(`Invalid command: ${command}`);
        return array;
    }

    switch(command) {
        case 1: return add(array, optCode, input, output, shouldLog);
        case 2: return multiply(array, optCode, input, output, shouldLog);
        case 3: return getInput(array, optCode, input, output, shouldLog);
        case 4: return putOutput(array, optCode, input, output, shouldLog);
        case 5: return jumpIfTrue(array, optCode, input, output, shouldLog);
        case 6: return jumpIfFalse(array, optCode, input, output, shouldLog);
        case 7: return lessThan(array, optCode, input, output, shouldLog);
        case 8: return equalTo(array, optCode, input, output, shouldLog);
    }
}

module.exports = intCode;
