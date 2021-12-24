export interface Coordinate {
  x: number;
  y: number;
}

export type Direction = 'up' | 'down' | 'forward';

export interface EnhancedCoordinate {
  x: number;
  y: number;
  aim: number;
}

export type Instruction = [Direction, number];
