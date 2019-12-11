const findBestStation = require('../findBestStation');
const fs = require('fs');
const basePath = 'G:/Projects/aoc_2019';

describe('Detect Asteroids', () => {
    test('Asteroid Map 0', () => {
        const input = fs.readFileSync(`${basePath}/src/__data__/asteroidMap0.txt`).toString();
        const actual = findBestStation(input);
        const expected = { position: { x: 3, y: 4 }, asteroids: 8 };

        expect(actual).toEqual(expected);
    });

    test('Asteroid Map 1', () => {
        const input = fs.readFileSync(`${basePath}/src/__data__/asteroidMap1.txt`).toString();
        const actual = findBestStation(input);
        const expected = { position: { x: 5, y: 8 }, asteroids: 33 };

        expect(actual).toEqual(expected);
    });

    test('Asteroid Map 2', () => {
        const input = fs.readFileSync(`${basePath}/src/__data__/asteroidMap2.txt`).toString();
        const actual = findBestStation(input);
        const expected = { position: { x: 1, y: 2 }, asteroids: 35 };

        expect(actual).toEqual(expected);
    });

    test('Asteroid Map 3', () => {
        const input = fs.readFileSync(`${basePath}/src/__data__/asteroidMap3.txt`).toString();
        const actual = findBestStation(input);
        const expected = { position: { x: 6, y: 3 }, asteroids: 41 };

        expect(actual).toEqual(expected);
    });

    test('Asteroid Map 4', () => {
        const input = fs.readFileSync(`${basePath}/src/__data__/asteroidMap4.txt`).toString();
        const actual = findBestStation(input);
        const expected = { position: { x: 11, y: 13 }, asteroids: 210 };

        expect(actual).toEqual(expected);
    });
});
