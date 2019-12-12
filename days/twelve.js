const { calculateEnergy, updateMoons } = require('../src/moons');

let moons = [
    { pos: { x: 8, y: -10, z: 0 }, vel: { x: 0, y: 0, z: 0 } },
    { pos: { x: 5, y: 5, z: 10 }, vel: { x: 0, y: 0, z: 0 } },
    { pos: { x: 2, y: -7, z: 3 }, vel: { x: 0, y: 0, z: 0 } },
    { pos: { x: 9, y: -8, z: -3 }, vel: { x: 0, y: 0, z: 0 } }
];

console.log('After 10 steps:');
updateMoons(moons, 10);
console.log(moons);

console.log('After 20 steps:')
updateMoons(moons, 10);
console.log(moons);

console.log(`Energy: ${calculateEnergy(moons)}`);
