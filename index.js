// require('./days/seven');
const runAmps = require('./src/runAmps');

const program = [3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0];
const phaseSequence = [4,3,2,1,0];

const output = runAmps(program, phaseSequence);

console.log(output);
