export const solve = (rawInput: string) => {
  const input = rawInput.split('\n').map((n) => Number(n.trim()));

  const [_, answer] = input.reduce(
    ([previous, measurements], current) => [
      current,
      current > previous ? measurements + 1 : measurements,
    ],
    [Infinity, 0]
  );

  return answer;
};
