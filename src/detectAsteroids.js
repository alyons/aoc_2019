function generateAsteroidMap(data) {
    let map = [];
    let rows = data.split('\r\n');
    rows.forEach(r => map.push(r.splot()));
    return map;
}

function detectAsteriods(data, x, y) {
    let map = generateAsteroidMap(data);
    let detectedAsteroids = [];

    for(let h = 0; h < map.length; h += 1) {
        for(let w = 0; w < map[h].length; w += 1) {
            
        }
    }

    return detectAsteriods;
}

module.exports = detectAsteriods;
