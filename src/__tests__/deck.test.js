const { cut, deal, dealIncrement, reverseIndex, runProgram } = require('../deck');
const fs = require('fs');

const program0 = fs.readFileSync('C:/Users/pyrot/Projects/aoc_2019/src/__data__/deck0.txt').toString();
const program1 = fs.readFileSync('C:/Users/pyrot/Projects/aoc_2019/src/__data__/deck1.txt').toString();

test('Deal', () => {
    let input = [0,1,2,3,4,5,6,7,8,9];
    let expected = [9,8,7,6,5,4,3,2,1,0];
    let actual = deal(input);
    expect(actual).toEqual(expected);
});

describe('Cut', () => {
    test('3', () => {
        let input = [0,1,2,3,4,5,6,7,8,9];
        let expected = [3,4,5,6,7,8,9,0,1,2];
        let actual = cut(input, 3);
        expect(actual).toEqual(expected);
    });

    test('-4', () => {
        let input = [0,1,2,3,4,5,6,7,8,9];
        let expected = [6,7,8,9,0,1,2,3,4,5];
        let actual = cut(input, -4);
        expect(actual).toEqual(expected);
    });
});

test('Deal with Increment', () => {
    let input = [0,1,2,3,4,5,6,7,8,9];
    let expected = [0,7,4,1,8,5,2,9,6,3];
    let actual = dealIncrement(input, 3);
    expect(actual).toEqual(expected);
});

describe('Multiple Steps (Run Program)', () => {
    let deck;

    beforeEach(() => {
        deck = [0,1,2,3,4,5,6,7,8,9];
    });

    test('increment 7, deal, deal', () => {
        let actual = runProgram(deck, program0);
        let expected = [0,3,6,9,2,5,8,1,4,7];
        expect(actual).toEqual(expected);
    });

    test('cut 6, increment 7, deal', () => {
        let step0 = cut(deck, 6);
        let step1 = dealIncrement(step0, 7);
        let actual = deal(step1);
        let expected = [3,0,7,4,1,8,5,2,9,6];
        expect(actual).toEqual(expected);
    });

    test('increment 7, increment 9, cut -2', () => {
        let step0 = dealIncrement(deck, 7);
        let step1 = dealIncrement(step0, 9);
        let actual = cut(step1, -2);
        let expected = [6,3,0,7,4,1,8,5,2,9];
        expect(actual).toEqual(expected);
    });

    test('increment 7, increment 9, cut -2', () => {
        let step0 = deal(deck);
        let step1 = cut(step0, -2);
        let step2 = dealIncrement(step1, 7);
        let step3 = cut(step2, 8);
        let step4 = cut(step3, -4);
        let step5 = dealIncrement(step4, 7);
        let step6 = cut(step5, 3);
        let step7 = dealIncrement(step6, 9);
        let step8 = dealIncrement(step7, 3);
        let actual = cut(step8, -1);
        let expected = [9,2,5,8,1,4,7,0,3,6];
        expect(actual).toEqual(expected);
    });
});

describe('Direct Calculation', () => {
    test('Value at index 1 is 3 for Program 0', () => {
        let actual = reverseIndex(program0, 10, 1);
        expect(actual).toBe(3);
    });

    test('Value at index 7 is 2 for Program 1', () => {
        let actual = reverseIndex(program1, 10, 7);
        expect(actual).toBe(2);
    });
});
