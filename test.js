const { convertToCelsius, filterExtremeTemps } = require('./main');

// Valid Test 1: Convert Fahrenheit to Celsius
// console.log('Test 1 - Valid Conversion:');
// try {
//     const fahrenheit = [32, 68, 212];
//     const celsius = convertToCelsius(fahrenheit);
//     const expected = [0, 20, 100];
//     const isCorrect = celsius.every((temp, i) => temp === expected[i]);
//     console.assert(isCorrect, 'Expected correct conversion');
//     console.log(isCorrect ? 'PASS' : 'FAIL');
// } catch (e) {
//     console.log('FAIL:', e.message);
// }

// // Valid Test 2: Filter extreme temperatures
// console.log('\nTest 2 - Valid Filtering:');
// try {
//     const temps = [-10, 0, 15, 25, 40];
//     const filtered = filterExtremeTemps(temps, 0, 30);
//     const expected = [0, 15, 25];
//     const isCorrect = JSON.stringify(filtered) === JSON.stringify(expected);
//     console.assert(isCorrect, 'Expected filtered temperatures');
//     console.log(isCorrect ? 'PASS' : 'FAIL');
// } catch (e) {
//     console.log('FAIL:', e.message);
// }

// Invalid Test 1: Non-numeric input for conversion
// console.log('\nTest 3 - Invalid Non-numeric Input:');
// try {
//     convertToCelsius([32, 'hot', 212]);
//     console.log('FAIL: Should have thrown error');
// } catch (e) {
//     console.log('PASS: Correctly threw error -', e.message);
// }

console.log('\nTest 3 - Invalid Non-numeric Input:');
try {
    convertToCelsius("main");
    console.log('FAIL: Should have thrown error');
} catch (e) {
    console.log('PASS: Correctly threw error -', e.message);
}

// Invalid Test 2: Invalid min/max for filtering
// console.log('\nTest 4 - Invalid Min/Max:');
// try {
//     filterExtremeTemps([10, 20, 30], 50, 10);
//     console.log('FAIL: Should have thrown error');
// } catch (e) {
//     console.log('PASS: Correctly threw error -', e.message);
// }

// Intentional Break Test: Expect wrong conversion result
// console.log('\nTest 5 - Intentional Break:');
// try {
//     const celsius = convertToCelsius([32]);
//     console.assert(celsius[0] === 100, 'Intentionally expecting wrong result');
//     console.log(celsius[0] === 100 ? 'PASS' : 'FAIL');
// } catch (e) {
//     console.log('FAIL:', e.message);
// }