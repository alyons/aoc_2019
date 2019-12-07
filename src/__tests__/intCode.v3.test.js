const intCode = require('../intCode.v3');

describe('IntCode Program', () => {
    let program, input, output;

    beforeEach(() => {
        program = [];
        input = [];
        output = [];
    });

    describe('Addition [01]', () => {
        test('Add values from array read', () => {
            program = [1, 0, 0, 0, 4, 0, 99];
            return expect(intCode(program, input, output)).resolves.toBe(2);
        });
    });

    describe('Multiplication [02]', () => {
        test('Multiply values from array read', () => {
            program = [2, 3, 0, 3, 4, 3, 99];
            expect(intCode(program, input, output)).resolves.toBe(6);
        });

        test('Multiplication using immediate mode', () => {
            program = [1002,6,3,6,4,6,33];
            expect(intCode(program, input, output)).resolves.toBe(99);
        })
    });

    describe('Input [03] and Output [04]', () => {
        test('Return the input as the output', () => {
            program = [3, 0, 4, 0, 99];
            input = [77];
            expect(intCode(program, input, output)).resolves.toBe(77);
        });
    });

    describe('Full Programs', () => {
        test('Addition, Multiplication, and Command Override', () =>{ 
            program = [1,1,1,4,99,5,6,0,4,0,99];
            expect(intCode(program, input, output)).resolves.toBe(30);
        });

        describe('Is input less than, equal to, or greater than 8', () => {
            test('Input is 7, result should be 999', () => {
                program = [3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99];
                input = [7];
                expect(intCode(program, input, output)).resolves.toBe(999);
            });

            test('Input is 8, result should be 1000', () => {
                program = [3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99];
                input = [8];
                expect(intCode(program, input, output)).resolves.toBe(1000);
            });

            test('Input is 9, result should be 1001', () => {
                program = [3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99];
                input = [9];
                expect(intCode(program, input, output)).resolves.toBe(1001);
            });
        });
    });
});
