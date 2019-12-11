const intCode = require('../src/intCode.v3');
const program = require('../inputs/eleven.json');

let currentPaintColor = 0;
let input = [];
let state = { index: 0, rIndex: 0, output: [] };
let pIndex = 0;
let currentRotation = 0; // 0 = UP, 1 = RIGHT, 2 = DOWN, 3 = LEFT
let currentPosition = { x: 0, y: 0 };
let panels = [];

do {
    input.push(currentPaintColor);
    state = intCode(program, input, state.output, state.index, state.rIndex);
    if (state.output.length % 2 == 0 && state.index != 'HALT') {
        let panel = { position: Object.assign({}, currentPosition), paint: state.output[pIndex] };
        pIndex++;
        currentRotation += (state.output[pIndex]) ? -1 : 1;
        pIndex++;
        if (currentRotation > 3) currentRotation = 0;
        if (currentRotation < 0) currentRotation = 3;
        switch(currentRotation) {
            case 0: currentPosition.y -= 1; break;
            case 1: currentPosition.x += 1; break;
            case 2: currentPosition.y += 1; break;
            case 3: currentPosition.x -= 1; break;
        }
        let i = panels.findIndex(p => p.position.x == panel.position.x && p.position.y == panel.position.y);
        if (i > -1) {
            panels[i].paint = panel.paint;
        } else {
            panels.push(panel);
        }
        let j = panels.findIndex(p => p.position.x == currentPosition.x && p.position.y == currentPosition.y);
        currentPaintColor = (j == -1) ? 0 : panels[j].paint;
    }
} while (state.index != 'HALT');

console.log(state);
console.log(state.output.length);
console.log(pIndex);
console.log(panels.length);
