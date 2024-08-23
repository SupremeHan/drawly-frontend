import { Arrow, Circle, Layer, Line, Rect, Stage, Transformer } from 'react-konva';
import { useRef, useState } from 'react';
import Konva from 'konva';
import { nanoid } from 'nanoid';
import { ActionButton } from '../components/ActionButton';
import { ActionNav } from '../components/ActionNav';
import { ActionType, ArrowType, CircleType, ReactangleType, ScribbleType } from './types';
import { ColorPicker } from '../components/ColorPicker';

export function Drawly() {
	const stageRef = useRef<Konva.Stage>(null);
	const [action, setAction] = useState<ActionType>(ActionType.Select);
	const [rectangles, setRectangles] = useState<ReactangleType[]>([]);
	const [circles, setCircles] = useState<CircleType[]>([]);
	const [arrows, setArrows] = useState<ArrowType[]>([]);
	const [scribbles, setScribbles] = useState<ScribbleType[]>([]);

	const [fillColor, setFillColor] = useState('#ff0000');

	const strokeColor = '#000000';
	const isDraggable = action === ActionType.Select;
	const isPainting = useRef<boolean>();
	const currentShapeId = useRef<string>();
	const transformerRef = useRef<Konva.Transformer>(null);

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
						stroke: strokeColor,
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
			case ActionType.Arrow:
				setArrows((arrows) => [
					...arrows,
					{
						id,
						points: [x, y, x + 20, y + 20],
						fill: fillColor
					}
				]);
				break;
			case ActionType.Scribble:
				setScribbles((scribbles) => [
					...scribbles,
					{
						id,
						points: [x, y],
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
			case ActionType.Arrow:
				setArrows((arrows) =>
					arrows.map((arrow) => {
						if (arrow.id === currentShapeId.current) {
							return {
								...arrow,
								points: [arrow.points[0], arrow.points[1], x, y]
							};
						}
						return arrow;
					})
				);
				break;
			case ActionType.Scribble:
				setScribbles((scribbles) =>
					scribbles.map((scribble) => {
						if (scribble.id === currentShapeId.current) {
							return {
								...scribble,
								points: [...scribble.points, x, y]
							};
						}
						return scribble;
					})
				);
				break;
		}
	};
	const onPointerUp = () => {
		isPainting.current = false;
	};

	const onElementClick = (evt: Konva.KonvaEventObject<MouseEvent>) => {
		if (action !== ActionType.Select) return;

		const target = evt.currentTarget;
		transformerRef.current?.nodes([target]);
	};

	return (
		<div className="relative overflow-hidden">
			<div className="absolute top-0 z-10 w-full py-2">
				<ActionNav>
					{Object.values(ActionType).map((type) => (
						<ActionButton key={type} currentAction={action} setAction={setAction} actionType={type} />
					))}
					<ColorPicker fillColor={fillColor} setFillColor={setFillColor} />
				</ActionNav>
			</div>

			<Stage
				ref={stageRef}
				width={window.innerWidth}
				height={window.innerHeight}
				onPointerDown={onPointerDown}
				onPointerMove={onPointerMove}
				onPointerUp={onPointerUp}
				className={'h-[calc(100dvh-50px)]'}>
				<Layer>
					<Rect
						x={0}
						y={0}
						height={window.innerHeight}
						width={window.innerWidth}
						fill={'#ffffff'}
						id="bg"
						onClick={() => {
							transformerRef.current?.nodes([]);
						}}
					/>
					{rectangles.map((rectangle) => (
						<Rect
							key={rectangle.id}
							x={rectangle.x}
							y={rectangle.y}
							stroke={strokeColor}
							strokeWidth={2}
							fill={rectangle.fill}
							height={rectangle.height}
							width={rectangle.width}
							draggable={isDraggable}
							onClick={onElementClick}
						/>
					))}
					{circles.map((circle) => (
						<Circle
							key={circle.id}
							radius={circle.radius}
							x={circle.x}
							y={circle.y}
							stroke={strokeColor}
							strokeWidth={2}
							fill={circle.fill}
							draggable={isDraggable}
							onClick={onElementClick}
						/>
					))}
					{arrows.map((arrow) => (
						<Arrow
							key={arrow.id}
							points={arrow.points}
							stroke={strokeColor}
							strokeWidth={2}
							fill={arrow.fill}
							draggable={isDraggable}
							onClick={onElementClick}
						/>
					))}

					{scribbles.map((scribble) => (
						<Line
							key={scribble.id}
							lineCap="round"
							lineJoin="round"
							points={scribble.points}
							stroke={strokeColor}
							strokeWidth={2}
							fill={scribble.fill}
							draggable={isDraggable}
							onClick={onElementClick}
						/>
					))}

					<Transformer ref={transformerRef} />
				</Layer>
			</Stage>
		</div>
	);
}
