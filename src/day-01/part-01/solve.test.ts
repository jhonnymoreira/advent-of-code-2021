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

test('handles measurement increase', () => {
  expect(solve(input)).toStrictEqual(7);
});
