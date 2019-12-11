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
                let isVertical = (w == x);
                let distance = Math.sqrt(Math.pow((w - x), 2) + Math.pow((h - y),2));
                let slope = (isVertical) ? y : (h == y) ? 0 : (h - y)/parseFloat(w - x);
                let yOffset = h - (slope * w);
                let asteroid = { x: w, y: h, distance, slope, yOffset, isVertical };

                let i = detectedAsteroids.findIndex(a => a.slope == slope);
                if (i > -1) {
                    if (distance < detectedAsteroids[i].distance && yOffset == detectedAsteroids[i].yOffset) {
                        detectedAsteroids.splice(i, 1, asteroid);
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
