import sum from "./sum.js";
const sum = require('./sum');

// deksripsi ekspektasi yang diinginkan
test('adds 1 + 2 to equal 3', () => {
  //ekspektasi sum 1 dan 2 adalah 3
  expect(sum(1, 2)).toBe(3);
});