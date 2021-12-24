import { combination, sum } from '../../utils';

export const solve = (rawInput: string) => {
  const input = rawInput.split('\n').map((n) => Number(n.trim()));

  const [_, answer] = combination(input, 3).reduce(
    ([previousSum, measurements], chunk) => {
      const currentSum = sum(chunk);
      return [currentSum, currentSum > previousSum ? measurements + 1 : measurements];
    },
    [Infinity, 0]
  );

  return answer;
};
