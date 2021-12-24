import { solve } from './solve';

const input = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;

test('parse the instructions', () => {
  expect(solve(input)).toStrictEqual(198);
});
