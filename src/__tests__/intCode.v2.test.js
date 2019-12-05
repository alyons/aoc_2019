const intCode = require('../intCode.v2');

test('[1002,4,3,4,33] should become [1002,4,3,4,99]', () => {
    const expected = [1002,4,3,4,33];
    const actual = intCode([1002,4,3,4,99]);

    expect(expected.length).toBe(actual.length);
    for(let i = 0; i < expected.length; i++) {
        expect(expected[i]).toBe(actual[i]);
    }
});