function updateMoons(moons, steps) {
    for(let s = 0; s < steps; s++) {
        for(let i = 0; i < moons.length; i++) {
            for(let j = i + 1; j < moons.length; j++) {
                moons[i].vel.x += (moons[i].pos.x == moons[j].pos.x) ? 0 : (moons[i].pos.x < moons[j].pos.x) ? 1 : -1; 
                moons[i].vel.y += (moons[i].pos.y == moons[j].pos.y) ? 0 : (moons[i].pos.y < moons[j].pos.y) ? 1 : -1; 
                moons[i].vel.z += (moons[i].pos.z == moons[j].pos.z) ? 0 : (moons[i].pos.z < moons[j].pos.z) ? 1 : -1;
                moons[j].vel.x += (moons[j].pos.x == moons[i].pos.x) ? 0 : (moons[j].pos.x < moons[i].pos.x) ? 1 : -1;
                moons[j].vel.y += (moons[j].pos.y == moons[i].pos.y) ? 0 : (moons[j].pos.y < moons[i].pos.y) ? 1 : -1;
                moons[j].vel.z += (moons[j].pos.z == moons[i].pos.z) ? 0 : (moons[j].pos.z < moons[i].pos.z) ? 1 : -1;
            }

            // Adjust Moons position
            moons[i].pos.x += moons[i].vel.x;
            moons[i].pos.y += moons[i].vel.y;
            moons[i].pos.z += moons[i].vel.z;
        }
    }
}

function calculateEnergy(moons) {
    let energy = 0;

    moons.forEach(moon => {
        let pot = Math.abs(moon.pos.x) + Math.abs(moon.pos.y) + Math.abs(moon.pos.z);
        let kin = Math.abs(moon.vel.x) + Math.abs(moon.vel.y) + Math.abs(moon.vel.z);
        energy += pot * kin;
    });

    return energy
}

module.exports = {
    calculateEnergy,
    updateMoons
};
