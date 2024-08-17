export enum ActionType {
	Select = 'Select',
	Reactangle = 'Reactangle',
	Circle = 'Circle',
	Scribble = 'Scribble',
	Arrow = 'Arrow'
}

export interface ReactangleType {
	id: string;
	x: number;
	y: number;
	stroke: string;
	strokeWidth: number;
	fill: string;
	height: number;
	width: number;
}

export interface CircleType {
	id: string;
	x: number;
	y: number;
	radius: number;
	fill: string;
}
