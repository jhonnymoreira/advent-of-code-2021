import type { Direction, EnhancedCoordinate, Instruction } from '../types';

export const solve = (rawInput: string) => {
  const input: Instruction[] = rawInput.split('\n').map((command) => {
    const [direction, amount] = command.trim().split(' ');
    return [<Direction>direction, Number(amount)];
  });

  const coordinate: EnhancedCoordinate = input.reduce<EnhancedCoordinate>(
    ({ x, y, aim }, [direction, amount]) => {
      const directionMapping: Record<Direction, EnhancedCoordinate> = {
        down: { x, y, aim: aim + amount },
        forward: { x: x + amount, y: y + aim * amount, aim },
        up: { x, y, aim: aim - amount },
      };
      return directionMapping[direction];
    },
    { x: 0, y: 0, aim: 0 }
  );

  return coordinate.x * coordinate.y;
};
