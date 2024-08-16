import { Layer, Rect, Stage } from 'react-konva';
import './App.css';
import { GiArrowCursor } from 'react-icons/gi';
import { TbRectangle } from 'react-icons/tb';
import { useRef, useState } from 'react';
import Konva from 'konva';
import { v4 as uuidv4 } from 'uuid';

enum ActionType {
	Select = 'Select',
	Reactangle = 'Reactangle',
	Circle = 'Circle',
	Scribble = 'Scribble',
	Arrow = 'Arrow'
}

interface Reactangle {
	id: string;
	x: number;
	y: number;
	stroke: string;
	strokeWidth: number;
	fill: string;
	height: number;
	width: number;
}

function App() {
	const stageRef = useRef<Konva.Stage>(null);
	const [action, setAction] = useState<ActionType>(ActionType.Select);
	const [rectangles, setRectangles] = useState<Reactangle[]>([]);
	const [fillColor, setFillColor] = useState('#ff0000');

	const isPainting = useRef<boolean>();
	const currentShapeId = useRef<string>();

	const onPointerDown = () => {
		if (action === ActionType.Select) return;

		const stage = stageRef.current?.getPointerPosition();
		const { x, y } = stage!; //To keep the TypeScript happy :)
		const id = uuidv4();

		currentShapeId.current = id;
		isPainting.current = true;

		switch (action) {
			case ActionType.Reactangle:
				setRectangles((prevVal) => [
					...prevVal,
					{
						id,
						x,
						y,
						height: 20,
						width: 20,
						fill: fillColor,
						stroke: '#000000',
						strokeWidth: 2
					}
				]);
				break;
		}
	};
	const onPointerMove = () => {
		if (action === ActionType.Select || !isPainting.current) return;

		const stage = stageRef.current?.getPointerPosition();
		const { x, y } = stage!; //To keep the TypeScript happy :)

		switch (action) {
			case ActionType.Reactangle:
				setRectangles((rectangles) =>
					rectangles.map((rectangle) => {
						if (rectangle.id === currentShapeId.current) {
							return {
								...rectangle,
								width: x - rectangle.x,
								height: y - rectangle.y
							};
						}
						return rectangle;
					})
				);
				break;
		}
	};
	const onPointerUp = () => {
		isPainting.current = false;
	};

	return (
		<div className="relative w-full h-screen overflow-hidden">
			<div className="absolute top-0 z-10 w-full py-2">
				<div className="flex justify-center items-center gap-3 py-2 px-3 w-fit mx-auto border">
					<button
						onClick={() => setAction(ActionType.Select)}
						className={action === ActionType.Select ? 'bg-violet-300 p-1 rounded' : 'p-1 hover:bg-violet-100 rounded'}>
						<GiArrowCursor size={'1.5rem'} />
					</button>
					<button
						onClick={() => setAction(ActionType.Reactangle)}
						className={action === ActionType.Reactangle ? 'bg-violet-300 p-1 rounded' : 'p-1 hover:bg-violet-100 rounded'}>
						<TbRectangle size={'1.5rem'} />
					</button>
					<button>
						<input className="w-6 h-6" type="color" value={fillColor} onChange={(e) => setFillColor(e.target.value)} />
					</button>
				</div>
			</div>
			<Stage
				ref={stageRef}
				width={window.innerWidth}
				height={window.innerHeight}
				onPointerDown={onPointerDown}
				onPointerMove={onPointerMove}
				onPointerUp={onPointerUp}>
				<Layer>
					<Rect x={0} y={0} height={window.innerHeight} width={window.innerWidth} fill={'#ffffff'} id="bg" />
					{rectangles.map((rectangle) => (
						<Rect
							key={rectangle.id}
							x={rectangle.x}
							y={rectangle.y}
							stroke={'#000000'}
							strokeWidth={2}
							fill={rectangle.fill}
							height={rectangle.height}
							width={rectangle.width}
						/>
					))}
				</Layer>
			</Stage>
		</div>
	);
}

export default App;
