function generateAsteroidMap(data) {
    let map = [];
    let rows = data.split('\r\n');
    rows.forEach(r => map.push(r.split('')));
    return map;
}

function isAsteroid(value) {
    return value == '#';
}

function detectAsteriods(map, x, y) {
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

    return detectedAsteroids.length;
}

function findBestStation(data) {
    let map = generateAsteroidMap(data);
    let station = {
        position: { x: -1, y: -1 },
        asteroids: 0
    };

    let toPrint = '';

    for(let y = 0; y < map.length; y += 1) {
        for(let x = 0; x < map[y].length; x += 1) {
            toPrint += map[y][x];
            if (isAsteroid(map[y][x])) {
                let result = detectAsteriods(map, x, y);
                if (result > station.asteroids) {
                    station = { position: { x, y }, asteroids: result };
                }
            }
        }
        toPrint += '\n';
    }

    console.log(`Width: ${map[0].length}, Height: ${map.length}`);
    console.log(toPrint);

    return station;
}

module.exports = findBestStation;
