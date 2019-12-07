const intCode = require('../src/intCode.v2');
// const program = require('../inputs/seven.json');

// let highestThrusterValue = Number.MIN_SAFE_INTEGER;

// function getPermutations(inputArr) {
//     var results = [];

//     function permute(arr, mem = []) {
//         let cur;

//         for(let i = 0; i < arr.length; i++) {
//             cur = arr.splice(i, 1);
//             if (arr.length == 0) {
//                 results.push(mem.concat(cur));
//             }
//             permute(arr.slice(), mem.concat(cur));
//             arr.splice(i, 0, cur[0]);
//         }
        
//         return results;
//     }

//     return permute(inputArr);
// }


// let sequences = getPermutations([0, 1, 2, 3, 4]);

// sequences.forEach(phase => {
//     let output = 0;
//     while(phase.length > 0) {
//         output = intCode(program, 0, [phase.shift(), output]);
//     }
//     if (highestThrusterValue < output) highestThrusterValue = output;
// });

// console.log(`Thruster Value: ${highestThrusterValue}`);

// let program = [3,26,1001,26,-4,26,3,27,1002,27,2,27,1,27,26,27,4,27,1001,28,-1,28,1005,28,6,99,0,0,5];
// let phaseSequence = [9,8,7,6,5];

// let output = 0;
// while(phaseSequence.length > 0) {
//     output = intCode(program, 0, [phaseSequence.shift(), output]);
// }

// console.log(output);

let program = [3,26,1001,26,-4,26,3,27,1002,27,2,27,1,27,26,27,4,27,1001,28,-1,28,1005,28,6,99,0,0,5];
let phaseSequence = [9,8,7,6,5];

let output = 0;
while(phaseSequence.length > 0) {
    output = intCode(program, 0, [phaseSequence.shift(), output], 0, true);
}
