const intCode = require('../src/intCode.v3');
const program = require('../inputs/thirteen.json');

let input = [2];
let state = {
    output: [],
    index: 0,
    rIndex: 0
};

let tiles, blockTiles, paddle, currentBall, screen;
let shouldExit = 0;

do {
    while (state.index != 'HALT') state = intCode(program, input, state.output, state.index, state.rIndex);
    screen = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]
    tiles = [];

    for (let b = 0; b < state.output.length; b += 3) {
        let t = [state.output[b], state.output[b + 1], state.output[b + 2]];
        screen[0] = (t[0] < screen[0]) ? t[0] : screen[0]; 
        screen[1] = (t[1] < screen[1]) ? t[1] : screen[1]; 
        screen[2] = (t[0] > screen[2]) ? t[0] : screen[2]; 
        screen[3] = (t[1] > screen[3]) ? t[1] : screen[3];
        tiles.push(t);
    }

    let display = '';
    for(let y = screen[1]; y <= screen[3]; y++) {
        for(let x = screen[0]; x <= screen[2]; x++) {
            let tile = tiles.find(t => t[0] == x && t[1] == y);
            if (!tile) {
                display += 'X';
            } else {
                switch(tile[2]) {
                    case 1: display += '\u2588'; break;
                    case 2: display += '\u2592'; break;
                    case 3: display += '\u2550'; break;
                    case 4: display += '\u25A3'; break;
                    default: display += ' '; break;
                }
            }
        }
        display += '\n';
    }

    console.log(display);

    blockTiles = tiles.filter(t => t[2] == 2);

    if (blockTiles.length == 0) {
        shouldExit = true;
    }

    paddle = tiles.filter(t => t[2] == 3);
    currentBall = tiles.filter(t => t[2] == 4)[0];

    input = [];
    if (!currentBall || !paddle) {
        input.push(0);
    } else {
        let paddleLeft = Number.MAX_SAFE_INTEGER;
        let paddleRight = Number.MIN_SAFE_INTEGER;
        paddle.forEach(p => {
            paddleLeft = (p[0] < paddleLeft) ? p[0] : paddleLeft;
            paddleRight = (p[0] > paddleRight) ? p[0] : paddleRight;
        });

        if (currentBall[0] <= paddleLeft) input.push(-1);
        else if (currentBall[0] >= paddleRight) input.push(1);
        else input.push(0);
    }

    state.output = [];
    state.index = 0;
    state.rIndex = 0

    shouldExit++;
} while(shouldExit < 3);

console.log(state);
console.log(screen);
