export enum ActionType {
  Select = 'Select',
  Reactangle = 'Reactangle',
  Circle = 'Circle',
  Scribble = 'Scribble',
  Arrow = 'Arrow',
}

interface BaseShapeType {
  id: string;
  x: number;
  y: number;
  fill: string;
}

export interface ReactangleType extends BaseShapeType {
  stroke: string;
  strokeWidth: number;
  height: number;
  width: number;
}

export interface CircleType extends BaseShapeType {
  radius: number;
}

export interface ArrowType extends BaseShapeType {
  points: [number, number, number, number];
}

export interface ScribbleType extends Omit<BaseShapeType, 'x' | 'y'> {
  points: number[];
}
