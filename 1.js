/*

  Номер задания: #67 - в

  Текст задания: Дано натуральное число n (n <= 100). Найти последнюю цифру числа n.

  Определение: натуральноче число - число в диапазоне от 1 до +∞.

*/

// MAIN FUNCTION
const lastDigitOfNaturalNumber = n => (n <= 100 && n >= 1) ? n % 10 : null;

// RESULTS
const testValues = [-230, -100, -99, 0, 1, 37, 65, 99, 100, 128, '-2', '0', '15', '485', '12w'];
testValues.forEach(n => console.log(`n = ${n} -> ${lastDigitOfNaturalNumber(n)}`));