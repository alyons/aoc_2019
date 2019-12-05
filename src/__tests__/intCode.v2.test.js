const intCode = require('../intCode.v2');

// test('[1002,4,3,4,33] should become [1002,4,3,4,99]', () => {
//     const expected = [1002,4,3,4,99];
//     const actual = intCode([1002,4,3,4,33]);

//     expect(actual.length).toBe(expected.length);
//     for(let i = 0; i < expected.length; i++) {
//         expect(actual[i]).toBe(expected[i]);
//     }
// });


describe('Program [3,9,8,9,10,9,4,9,99,-1,8]', () => {
    let program = [3,9,8,9,10,9,4,9,99,-1,8];

    test('If input is equal to 8, output 1', () => {
        expect(intCode(program, 0, 8)).toBe(1);
    });

    test('If input is not equal to 8, output 0', () => {
        expect(intCode(program, 0, 6)).toBe(0);
    });
});

describe('Program [3,3,1108,-1,8,3,4,3,99]', () => {
    let program = [3,3,1108,-1,8,3,4,3,99];

    test('If input is equal to 8, output 1', () => {
        expect(intCode(program, 0, 8)).toBe(1);
    });

    test('If input is not equal to 8, output 0', () => {
        expect(intCode(program, 0, 6)).toBe(0);
    });
});

describe('Program [3,9,7,9,10,9,4,9,99,-1,8]', () => {
    let program = [3,9,7,9,10,9,4,9,99,-1,8];

    test('If input is less than to 8, output 1', () => {
        expect(intCode(program, 0, 7)).toBe(1);
    });

    test('If input is not less than to 8, output 0', () => {
        expect(intCode(program, 0, 8)).toBe(0);
    });
});

describe('Program [3,3,1107,-1,8,3,4,3,99]', () => {
    let program = [3,3,1107,-1,8,3,4,3,99];

    test('If input is less than to 8, output 1', () => {
        expect(intCode(program, 0, 7)).toBe(1);
    });

    test('If input is not less than to 8, output 0', () => {
        expect(intCode(program, 0, 8)).toBe(0);
    });
});

describe('Program [3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9]', () => {
    let program = [3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9];

    test('If input is 0, output 0', () => {
        expect(intCode(program, 0, 0)).toBe(0);
    });

    test('If input is non-zero, output 1', () => {
        expect(intCode(program, 0, 37)).toBe(1);
    });
});

describe('Program [3,3,1105,-1,9,1101,0,0,12,4,12,99,1]', () => {
    let program = [];

    beforeEach(() => {
        program = [3,3,1105,-1,9,1101,0,0,12,4,12,99,1];
    });

    test('If input is 0, output 0', () => {
        expect(intCode(program, 0, 0, 0)).toBe(0);
    });

    test('If input is non-zero, output 1', () => {
        expect(intCode(program, 0, 37, 0)).toBe(1);
    });
});

describe('Program [3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99]', () => {
    let program = [];

    beforeEach(() => {
        program = [3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99];
    });

    test('If input is equal to 8, output 1000', () => {
        expect(intCode(program, 0, 8)).toBe(1000);
    });

    test('If input is less than 8, output 999', () => {
        expect(intCode(program, 0, 6)).toBe(999);
    });

    test('If input is greater than to 8, output 1001', () => {
        expect(intCode(program, 0, 99)).toBe(1001);
    });
});
