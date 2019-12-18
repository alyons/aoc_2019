const fs = require(fs);
const { parseMaze } = require('../maze');

const BASE_PATH = '/Users/ag22845/workspace/aoc_2019';
const data0 = fs.readFileSync(`${BASE_PATH}/src/__data__/maze0.txt`).toString();
const data1 = fs.readFileSync(`${BASE_PATH}/src/__data__/maze1.txt`).toString();
const data2 = fs.readFileSync(`${BASE_PATH}/src/__data__/maze2.txt`).toString();
const data3 = fs.readFileSync(`${BASE_PATH}/src/__data__/maze3.txt`).toString();
const data4 = fs.readFileSync(`${BASE_PATH}/src/__data__/maze4.txt`).toString();

describe('Parse Maze', () => {
    test('Read Data from Map 0', () => {
        const actual = parseMaze(data0);
        const expected = [
            [0, 0, '#'],
            [0, 1, '#'],
            [0, 2, '#'],
            [0, 3, '#'],
            [0, 4, '#'],
            [0, 5, '#'],
            [0, 6, '#'],
            [0, 7, '#'],
            [0, 8, '#'],
            [1, 0, '#'],
            [1, 1, 'b'],
            [1, 2, '.'],
            [1, 3, 'A'],
            [1, 4, '.'],
            [1, 5, '@'],
            [1, 6, '.'],
            [1, 7, 'a'],
            [1, 8, '#'],
            [2, 0, '#'],
            [2, 1, '#'],
            [2, 2, '#'],
            [2, 3, '#'],
            [2, 4, '#'],
            [2, 5, '#'],
            [2, 6, '#'],
            [2, 7, '#'],
            [2, 8, '#']
        ];
        expect(actual).toEqual(expected);
    });
});

// describe('Navigate Maze', () => {

// });