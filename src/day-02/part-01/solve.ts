import type { Coordinate, Direction, Instruction } from '../types';

export const solve = (rawInput: string) => {
  const input: Instruction[] = rawInput.split('\n').map((command) => {
    const [direction, amount] = command.trim().split(' ');
    return [<Direction>direction, Number(amount)];
  });

  const coordinate: Coordinate = input.reduce<Coordinate>(
    ({ x, y }, [direction, amount]) => {
      const directionMapping: Record<Direction, Coordinate> = {
        down: { x, y: y + amount },
        forward: { x: x + amount, y },
        up: { x, y: y - amount },
      };
      return directionMapping[direction];
    },
    { x: 0, y: 0 }
  );

  return coordinate.x * coordinate.y;
};
