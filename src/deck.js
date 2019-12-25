const CUT = 'cut';
const DEAL = 'deal';
const INC = 'increment';

function deal(deck) {
    let output = [];
    while (deck.length > 0) output.splice(0, 0, deck.shift());
    return output;
}

function dealIncrement(deck, increment) {
    let output = deck.map(() => -1);
    let dIndex = 0;
    let oIndex = 0;
    do {
        output[oIndex] = deck[dIndex];
        dIndex++;
        oIndex += increment;
        if (oIndex > deck.length) oIndex -= deck.length;
    } while(deck.length > dIndex);

    return output;
}

function cut(deck, count) {
    let output = [];

    if (count > 0) {
        output = deck.slice(count);
        output = output.concat(deck.slice(0, count));
    } else {
        let otherCount = deck.length + count;
        output = deck.slice(count);
        output = output.concat(deck.slice(0, otherCount));
    }

    return output;
}

function parseProgram(program) {
    let instructions = [];

    program.split('\n').forEach(instruction => {
        let lastWord = instruction.split(' ').pop();
        if (instruction.includes(INC)) {
            instructions.push([INC, parseInt(lastWord)])
        } else if (instruction.includes(CUT)) {
            instructions.push([CUT, parseInt(lastWord)]);
        } else {
            instructions.push([DEAL]);
        }
    });
    
    return instructions;
}

function runProgram(deck, program) {
    let instructions = parseProgram(program);

    for(let i = 0; i < instructions.length; i++) {
        switch(instructions[i][0]) {
            case CUT:
                deck = cut(deck, instructions[i][1]);
                break;
            case INC:
                deck = dealIncrement(deck, instructions[i][1]);
                break;
            default:
                deck = deal(deck);
                break;
        }
    }

    return deck;
}

function reverseIncrement(length, index, increment) {
    let d = 0;
    let i = 0;
    do {
        d++;
        i += increment;
        if (i >= length) i -= length;
    } while (i != index);
    return d;
}

function reverseCut(length, index, cut) {
    index += cut;
    if (index < 0) index += length;
    if (index >= length) index -= length;
    return index;
}

function reverseIndex(program, length, index) {
    let instructions = parseProgram(program);
    
    for (let i = instructions.length - 1; i > -1; i--) {
        switch(instructions[i][0]) {
            case CUT:
                index = reverseCut(length, index, instructions[i][1]);
                break;
            case INC:
                index = reverseIncrement(length, index, instructions[i][1]);
                break;
            default:
                index = (length - 1) - index;
                break;
        }
    }

    return index;
}

module.exports = {
    cut, 
    deal,
    dealIncrement,
    reverseIndex,
    runProgram
};
