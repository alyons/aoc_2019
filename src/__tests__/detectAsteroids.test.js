const detectAsteroids = require('../detectAsteroids');

describe('Detect Asteroids', () => {
    test('', () => {
        const data = ".#..#\r\n.....\r\n#####\r\n....#\r\n...##";
        const actual = detectAsteroids(data, 3, 4);
        const expected = [];

        expect(actual).toHaveLength(8);
    });
});
