import { GiArrowCursor } from 'react-icons/gi';
import { TbRectangle } from 'react-icons/tb';
import { ActionType } from '../types';
import { FaLongArrowAltRight, FaRegCircle } from 'react-icons/fa';
import { LuPencil } from 'react-icons/lu';

interface ActionButtonProps {
	actionType: ActionType;
	currentAction: ActionType;
	setAction: React.Dispatch<React.SetStateAction<ActionType>>;
}

export function ActionButton({ currentAction, actionType, setAction }: ActionButtonProps) {
	const ICON_SIZE = '1.5rem';

	const renderIcon = () => {
		switch (actionType) {
			case ActionType.Select:
				return <GiArrowCursor size={ICON_SIZE} />;
			case ActionType.Reactangle:
				return <TbRectangle size={ICON_SIZE} />;
			case ActionType.Circle:
				return <FaRegCircle size={ICON_SIZE} />;
			case ActionType.Arrow:
				return <FaLongArrowAltRight size={ICON_SIZE} />;
			case ActionType.Scribble:
				return <LuPencil size={ICON_SIZE} />;
			default:
				throw new Error(`Action type ${actionType} not implemented yet`);
		}
	};

	return (
		<button
			onClick={() => setAction(actionType)}
			className={currentAction === actionType ? 'bg-violet-300 p-1 rounded' : 'p-1 hover:bg-violet-100 rounded'}>
			{renderIcon()}
		</button>
	);
}
