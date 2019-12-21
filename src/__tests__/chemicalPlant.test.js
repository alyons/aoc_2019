const fs = require('fs');
const { createChemical, parseProcesses, removeChemical } = require('../chemicalPlant');

// const BASE_PATH = 'G:/Projects/aoc_2019';
const BASE_PATH = '/Users/ag22845/workspace/aoc_2019';
const input0 = fs.readFileSync(`${BASE_PATH}/src/__data__/fuelProcess0.txt`).toString();
const input1 = fs.readFileSync(`${BASE_PATH}/src/__data__/fuelProcess1.txt`).toString();
const input2 = fs.readFileSync(`${BASE_PATH}/src/__data__/fuelProcess2.txt`).toString();
const input3 = fs.readFileSync(`${BASE_PATH}/src/__data__/fuelProcess3.txt`).toString();
const input4 = fs.readFileSync(`${BASE_PATH}/src/__data__/fuelProcess4.txt`).toString();

describe('Parse Processes', () => {
    test('Parse Input 0', () => {
        let expected = [
            [{ ORE: 10 }, { A: 10 }],
            [{ ORE: 1 }, { B: 1 }],
            [{ A: 7 }, { B: 1 }, { C: 1 }],
            [{ A: 7 }, { C: 1 }, { D: 1 }],
            [{ A: 7 }, { D: 1 }, { E: 1 }],
            [{ A: 7 }, { E: 1 }, { FUEL: 1 }]
        ];
        let actual = parseProcesses(input0);
        expect(actual).toEqual(expected);
    });
});

describe('Create Chemical', () => {
    describe('Input 0', () => {
        let processes = parseProcesses(input0);
        test('Create 10 of Element A', () => {
            let expected = { A: 10, ORE: 10 };
            let chemicalStore = { ORE: 0 };
            createChemical('A', 1, processes, chemicalStore);
            expect(chemicalStore).toEqual(expected);
        });

        test('Create 1 of Element C', () => {
            let expected = { A: 3, B: 0, C: 1, ORE: 11 };
            let chemicalStore = { ORE: 0 };
            createChemical('C', 1, processes, chemicalStore);
            expect(chemicalStore).toEqual(expected);
        });

        test('Create 1 Fuel', () => {
            let expected = { A: 2, B: 0, C: 0, D: 0, E: 0, FUEL: 1, ORE: 31 };
            let chemicalStore = { ORE: 0 };
            createChemical('FUEL', 1, processes, chemicalStore);
            expect(chemicalStore).toEqual(expected);
        })
    });

    describe('Input 1', () => {
        let processes = parseProcesses(input1);
        test('Create 1 Fuel', () => {
            let expected = 165;
            let chemicalStore = { ORE: 0 };
            createChemical('FUEL', 1, processes, chemicalStore);
            expect(chemicalStore['ORE']).toEqual(expected);
        });
    });

    describe('Input 2', () => {
        let processes = parseProcesses(input2);
        test('Create 1 Fuel', () => {
            let expected = 13312;
            let chemicalStore = { ORE: 0 };
            createChemical('FUEL', 1, processes, chemicalStore);
            expect(chemicalStore['ORE']).toEqual(expected);
        });

        test('Create 82892753 Fuel', () => {
            let chemicalStore = { ORE: 0 };
            createChemical('FUEL', 82892753, processes, chemicalStore);
            expect(chemicalStore['FUEL']).toBe(82892753);
            expect(chemicalStore['ORE']).toBeLessThanOrEqual(1000000000000);
        });

        test('Create 82892754 Fuel', () => {
            let chemicalStore = { ORE: 0 };
            createChemical('FUEL', 82892754, processes, chemicalStore);
            expect(chemicalStore['FUEL']).toBe(82892754);
            expect(chemicalStore['ORE']).toBeGreaterThanOrEqual(1000000000000);
        });
    });

    describe('Input 3', () => {
        let processes = parseProcesses(input3);
        test('Create 1 Fuel', () => {
            let expected = 180697;
            let chemicalStore = { ORE: 0 };
            createChemical('FUEL', 1, processes, chemicalStore);
            expect(chemicalStore['ORE']).toEqual(expected);
        });

        test('Create 5586022 Fuel', () => {
            let chemicalStore = { ORE: 0 };
            createChemical('FUEL', 5586022, processes, chemicalStore);
            expect(chemicalStore['FUEL']).toBe(5586022);
            expect(chemicalStore['ORE']).toBeLessThanOrEqual(1000000000000);
        });

        test('Create 5586023 Fuel', () => {
            let chemicalStore = { ORE: 0 };
            createChemical('FUEL', 5586023, processes, chemicalStore);
            expect(chemicalStore['FUEL']).toBe(5586023);
            expect(chemicalStore['ORE']).toBeGreaterThanOrEqual(1000000000000);
        });
    });

    describe('Input 4', () => {
        let processes = parseProcesses(input4);
        test('Create 1 Fuel', () => {
            let expected = 2210736;
            let chemicalStore = { ORE: 0 };
            createChemical('FUEL', 1, processes, chemicalStore);
            expect(chemicalStore['ORE']).toEqual(expected);
        });

        test('Create 460664 Fuel', () => {
            let chemicalStore = { ORE: 0 };
            createChemical('FUEL', 460664, processes, chemicalStore);
            expect(chemicalStore['FUEL']).toBe(460664);
            expect(chemicalStore['ORE']).toBeLessThanOrEqual(1000000000000);
        });

        test('Create 460665 Fuel', () => {
            let chemicalStore = { ORE: 0 };
            createChemical('FUEL', 460665, processes, chemicalStore);
            expect(chemicalStore['FUEL']).toBe(460665);
            expect(chemicalStore['ORE']).toBeGreaterThanOrEqual(1000000000000);
        });
    });
});

// describe('Remove Chemical', () => {
//     describe('Processes 0', () => {
//         let processes = parseProcesses(input0);
        
//         test('Remove 10 A', () => {
//             let chemicalStore = { A: 10, ORE: 10 };
//             let expected = { A: 0, ORE: 0 };
//             removeChemical('A', 10, processes, chemicalStore);
//             expect(chemicalStore).toEqual(expected);
//         });

//         test('Remove 1 C', () => {
//             let chemicalStore = { A: 3, B: 0, C: 1, ORE: 11 };
//             let expected = { A: 3, B: 0, C:0, ORE: 3 };
//             removeChemical('C', 1, processes, chemicalStore);
//             expect(chemicalStore).toEqual(expected);
//         });

//         test('Remove 1 Fuel', () => {
//             let chemicalStore = { A: 2, B: 0, C: 0, D: 0, E: 0, FUEL: 1, ORE: 31 };
//             let expected = { A: 2, B: 0, C:0, D: 0, E:0, FUEL: 0, ORE: 2 };
//             removeChemical('FUEL', 1, processes, chemicalStore);
//             expect(chemicalStore).toEqual(expected);
//         });
//     });
// });
