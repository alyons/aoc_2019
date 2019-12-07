function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function add(program, input, output, index, shouldLog) {
    let params = ('' + program[index]).slice(0, -2);
    while (params.length < 3) params = '0' + params;
    params = params.split('');

    let param1 = (params[2] == '0') ? program[program[index + 1]] : program[index + 1];
    let param2 = (params[1] == '0') ? program[program[index + 2]] : program[index + 2];
    let result = param1 + param2;
    program.splice(program[index + 3], 1, result);

    if (shouldLog) {
        console.log(`Adding: ${param1} + ${param2} = ${result}. Setting program[${program[index + 3]}]: ${program[program[index + 3]]}`);
    }

    return [program, input, output, index + 4, shouldLog];
}

function multiply(program, input, output, index, shouldLog) {
    let params = ('' + program[index]).slice(0, -2);
    while (params.length < 3) params = '0' + params;
    params = params.split('');

    let param1 = (params[2] == '0') ? program[program[index + 1]] : program[index + 1];
    let param2 = (params[1] == '0') ? program[program[index + 2]] : program[index + 2];
    let result = param1 * param2;
    program.splice(program[index + 3], 1, result);

    if (shouldLog) {
        console.log(`Multiplying: ${param1} * ${param2} = ${result}. Setting program[${program[index + 3]}]: ${program[program[index + 3]]}`);
    }

    return [program, input, output, index + 4, shouldLog];
}

async function getInput(program, input, output, index, shouldLog) {
    while(input.length == 0) {
        console.log('Waiting for input...');
        await sleep(5000);
    }

    let value = input.shift();
    program.splice(program[index + 1], 1, value);
    if (shouldLog) {
        console.log(`Placing value (${value}) at index ${program[index + 1]}: ${program[program[index + 1]]}`);
    }

    return new Promise(resolve => () => { resolve([program, input, output, index + 2, shouldLog]); });
}

function setOutput(program, input, output, index, shouldLog) {
    let params = ('' + program[index]).slice(0, -2);
    while (params.length < 1) params = '0' + params;
    let value = (params == '0') ? program[program[index + 1]] : program[index + 1];
    output.push(value);

    if (shouldLog) console.log(`Output set to: ${output}`);

    return [program, input, output, index + 2, shouldLog];
}

function jumpIfTrue(program, input, output, index, shouldLog) {
    let params = ('' + program[index]).slice(0, -2);
    while (params.length < 2) params = '0' + params;
    params = params.split('');
    let param1 = (params[1] == '0') ? program[program[index + 1]] : program[index + 1];
    let param2 = (params[0] == '0') ? program[program[index + 2]] : program[index + 2];

    if (shouldLog) {
        console.log(`Jump if True: If ${param1} is non-zero, jump to instruction ${param2}`);
    }

    if (param1 !== 0) {
        index = param2;
    } else {
        index += 3;
    }

    return [program, input, output, index, shouldLog];
}

function jumpIfFalse(program, input, output, index, shouldLog) {
    let params = ('' + program[index]).slice(0, -2);
    while (params.length < 2) params = '0' + params;
    params = params.split('');
    let param1 = (params[1] == '0') ? program[program[index + 1]] : program[index + 1];
    let param2 = (params[0] == '0') ? program[program[index + 2]] : program[index + 2];

    if (shouldLog) {
        console.log(`Jump if False: If ${param1} is zero, jump to instruction ${param2}`);
    }

    if (param1 == 0) {
        index = param2;
    } else {
        index += 3;
    }

    return [program, input, output, index, shouldLog];
}

function lessThan(program, input, output, index, shouldLog) {
    if (shouldLog) console.log('Less Than');
    let params = ('' + program[index]).slice(0, -2);
    while (params.length < 3) params = '0' + params;
    params = params.split('');

    let param1 = (params[2] == '0') ? program[program[index + 1]] : program[index + 1];
    let param2 = (params[1] == '0') ? program[program[index + 2]] : program[index + 2];
    let result = (param1 < param2) ? 1 : 0;
    program.splice(program[index + 3], 1, result);

    if (shouldLog) {
        console.log(`Less than: ${param1} < ${param2} = ${result}. Setting program[${program[index + 3]}]: ${program[program[index + 3]]}`);
    }

    return [program, input, output, index + 4, shouldLog];
}

function equalTo(program, input, output, index, shouldLog) {
    let params = ('' + program[index]).slice(0, -2);
    while (params.length < 3) params = '0' + params;
    params = params.split('');

    let param1 = (params[2] == '0') ? program[program[index + 1]] : program[index + 1];
    let param2 = (params[1] == '0') ? program[program[index + 2]] : program[index + 2];
    let result = (param1 == param2) ? 1 : 0;
    program.splice(program[index + 3], 1, result);

    if (shouldLog) {
        console.log(`Equal to: ${param1} == ${param2} = ${result}. Setting program[${program[index + 3]}]: ${program[program[index + 3]]}`);
    }

    return [program, input, output, index + 4, shouldLog];
}

async function intCode(program, input, output, index = 0, shouldLog = false) {
    let shouldExit = false;
    let values = [program, input, output, index, shouldLog];
    
    do {
        let instruction = program[index];
        let optCode = Number.parseInt(('' + instruction).slice(-2));
        if (shouldLog) console.log(`${index}: ${optCode}`);

        switch(optCode) {
            case 1: values = add(program, input, output, index, shouldLog); break;
            case 2: values = multiply(program, input, output, index, shouldLog); break;
            case 3: values = await getInput(program, input, output, index, shouldLog); break;
            case 4: values = setOutput(program, input, output, index, shouldLog); break;
            case 5: values = jumpIfTrue(program, input, output, index, shouldLog); break;
            case 6: values = jumpIfFalse(program, input, output, index, shouldLog); break;
            case 7: values = lessThan(program, input, output, index, shouldLog); break;
            case 8: values = equalTo(program, input, output, index, shouldLog); break;
            case 99: shouldExit = true; break;
            default: throw new Error(`Invalid Opt Code found: ${optCode}`);
        }

        program = values[0];
        input = values[1];
        output = values[2];
        index = values[3];
        shouldLog = values[4];

    } while(!shouldExit);


    return output[0];
}

module.exports = intCode;
