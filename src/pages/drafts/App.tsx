import { Circle, Layer, Rect, Stage } from 'react-konva';
import { useRef, useState } from 'react';
import Konva from 'konva';
import { nanoid } from 'nanoid';
import { ActionButton } from './components/ActionButton';
import { ActionNav } from './components/ActionNav';
import { ActionType, CircleType, ReactangleType } from './types';

function App() {
	const stageRef = useRef<Konva.Stage>(null);
	const [action, setAction] = useState<ActionType>(ActionType.Select);
	const [rectangles, setRectangles] = useState<ReactangleType[]>([]);
	const [circles, setCircles] = useState<CircleType[]>([]);
	const [fillColor, setFillColor] = useState('#ff0000');

	const isDraggable = action === ActionType.Select;
	const isPainting = useRef<boolean>();
	const currentShapeId = useRef<string>();

	const onPointerDown = () => {
		if (action === ActionType.Select) return;

		const stage = stageRef.current?.getPointerPosition();
		const { x, y } = stage!; //To keep the TypeScript happy :)
		const id = nanoid();

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
			case ActionType.Circle:
				setCircles((prevVal) => [
					...prevVal,
					{
						id,
						x,
						y,
						radius: 20,
						fill: fillColor
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
			case ActionType.Circle:
				setCircles((circles) =>
					circles.map((circle) => {
						if (circle.id === currentShapeId.current) {
							return {
								...circle,
								radius: ((y - circle.y) ** 2 + (x - circle.x) ** 2) ** 0.5
							};
						}
						return circle;
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
				<ActionNav>
					<ActionButton currentAction={action} setAction={setAction} actionType={ActionType.Select} />
					<ActionButton currentAction={action} setAction={setAction} actionType={ActionType.Reactangle} />
					<ActionButton currentAction={action} setAction={setAction} actionType={ActionType.Circle} />
					<button>
						<input className="w-6 h-6" type="color" value={fillColor} onChange={(e) => setFillColor(e.target.value)} />
					</button>
				</ActionNav>
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
							draggable={isDraggable}
						/>
					))}
					{circles.map((circle) => (
						<Circle
							key={circle.id}
							radius={circle.radius}
							x={circle.x}
							y={circle.y}
							stroke={'#000000'}
							strokeWidth={2}
							fill={circle.fill}
							draggable={isDraggable}
						/>
					))}
				</Layer>
			</Stage>
		</div>
	);
}

export default App;
