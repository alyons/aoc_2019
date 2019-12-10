const { replaceAt } = require('./utils');

function generateAsteroidMap(data) {
    let map = [];
    let rows = data.split('\r\n');
    rows.forEach(r => map.push(r.split('')));
    return map;
}

function isAsteroid(value) {
    return value != '.';
}

function detectAsteriods(data, x, y) {
    let map = generateAsteroidMap(data);
    let detectedAsteroids = [];

    for(let h = 0; h < map.length; h += 1) {
        for(let w = 0; w < map[h].length; w += 1) {
            if (w == x && h == y) continue;
            if (isAsteroid(map[h][w])) {
                let distance = Math.sqrt(Math.pow((w - x), 2) + Math.pow((h - y),2));
                let slope = (h == y) ? 0 : (w - x)/parseFloat(h - y);
                let yOffset = h - (slope * w);
                let asteroid = { x: w, y: h, distance, slope, yOffset };

                let i = detectedAsteroids.indexOf(a => a.slope == slope);
                if (slope == 0.5) {
                    let otherAsteroid = detectedAsteroids.find(a => a.slope == slope);
                    console.log(otherAsteroid);
                }
                if (i > -1) {
                    console.log(i);
                    if (distance < detectedAsteroids[i].distance) {
                        replaceAt(detectedAsteroids, i, asteroid);
                    }
                } else {
                    detectedAsteroids.push(asteroid);
                }
            }
        }
    }

    return detectedAsteroids;
}

module.exports = detectAsteriods;
