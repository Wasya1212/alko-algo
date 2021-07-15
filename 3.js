/*

  Номер задания: #68 - б

  Текст задания: Дано натуральное число n (n <= 9999). Верно ли, что это число 
  содержит ровно три одинаковые цифры, как, например, числа 6676, 4544, 0006 и т.д.?

  Определение: натуральноче число - число в диапазоне от 1 до +∞.

*/

// MAIN FUNCTION
const hasThreeSimmilarDigits = n => (
  (Number.isInteger(+n) && n >= 1 && n <= 9999)
    ? (s => [...(new Set(s))].some(c => s.match(new RegExp(c, 'g')).length === 3))('0'.repeat(4 - `${n}`.length) + n)
    : null
);

// RESULTS
const testValues = [-84732, -9999, -7444, -37, -1, 0, 1, 23, 555, 8888, 9432, 74333, '-38898', '-3', '5', '999', '3000', '45234', '2k12' ];
testValues.forEach(n => console.log(`n = ${n} -> ${hasThreeSimmilarDigits(n)}`));