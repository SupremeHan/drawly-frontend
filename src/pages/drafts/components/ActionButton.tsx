import { GiArrowCursor } from 'react-icons/gi';
import { TbRectangle } from 'react-icons/tb';
import { ActionType } from '../types';
import { FaRegCircle } from 'react-icons/fa';

interface ActionButtonProps {
	actionType: ActionType;
	currentAction: ActionType;
	setAction: React.Dispatch<React.SetStateAction<ActionType>>;
}

export function ActionButton({ currentAction, actionType, setAction }: ActionButtonProps) {
	const renderIcon = () => {
		switch (actionType) {
			case ActionType.Select:
				return <GiArrowCursor size={'1.5rem'} />;
			case ActionType.Reactangle:
				return <TbRectangle size={'1.5rem'} />;
			case ActionType.Circle:
				return <FaRegCircle size={'1.5rem'} />;
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
