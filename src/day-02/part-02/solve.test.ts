import { solve } from './solve';

const input = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;

test('parse the instructions', () => {
  expect(solve(input)).toStrictEqual(900);
});
