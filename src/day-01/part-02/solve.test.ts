import { solve } from './solve';

const input = `199
200
208
210
200
207
240
269
260
263`;

test('handles three-measurement sliding window sum increase', () => {
  expect(solve(input)).toStrictEqual(5);
});
