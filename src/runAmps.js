const intCode = require('./intCode.v3');

async function runAmps(program, phaseSequence) {
    let arrays = [];
    let programs = [];
    let output = 0;

    for(let i = 0; i < phaseSequence.length; i += 1) {
        arrays.push([phaseSequence[i]]);
        programs.push(program.slice(0));
    }
    arrays[0].push(0);

    let promises = [];
    for(let j = 0; j < phaseSequence.length; j += 1) {
        let nextIndex = (j < phaseSequence.length - 1) ? j + 1 : 0;
        promises.push(intCode(programs[j], arrays[j], arrays[nextIndex]));
    }

    Promise.all(promises).then((results) => {
        console.log(promises);
        output = results;
    });

    return output
}

module.exports = runAmps;
