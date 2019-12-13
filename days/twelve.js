const { calculateEnergy, updateMoons } = require('../src/moons');

let moons = [
    { pos: { x:   4, y: 12, z: 13 }, vel: { x: 0, y: 0, z: 0 } },
    { pos: { x:  -9, y: 14, z: -3 }, vel: { x: 0, y: 0, z: 0 } },
    { pos: { x:  -7, y: -1, z:  2 }, vel: { x: 0, y: 0, z: 0 } },
    { pos: { x: -11, y: 17, z: -1 }, vel: { x: 0, y: 0, z: 0 } }
];

updateMoons(moons, 1000);

console.log(`Energy: ${calculateEnergy(moons)}`);
