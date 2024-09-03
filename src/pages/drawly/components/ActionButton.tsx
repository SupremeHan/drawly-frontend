import { ActionType } from '../drawly-app/types';
import {
  ArrowRight,
  Circle,
  MousePointer,
  Pencil,
  RectangleHorizontal,
} from 'lucide-react';

interface ActionButtonProps {
  actionType: ActionType;
  currentAction: ActionType;
  setAction: React.Dispatch<React.SetStateAction<ActionType>>;
}

export function ActionButton({
  currentAction,
  actionType,
  setAction,
}: ActionButtonProps) {
  const ICON_SIZE = '1.5rem';

  const renderIcon = () => {
    switch (actionType) {
      case ActionType.Select:
        return <MousePointer size={ICON_SIZE} />;
      case ActionType.Reactangle:
        return <RectangleHorizontal size={ICON_SIZE} />;
      case ActionType.Circle:
        return <Circle size={ICON_SIZE} />;
      case ActionType.Arrow:
        return <ArrowRight size={ICON_SIZE} />;
      case ActionType.Scribble:
        return <Pencil size={ICON_SIZE} />;
      default:
        throw new Error(`Action type ${actionType} not implemented yet`);
    }
  };

  return (
    <button
      onClick={() => setAction(actionType)}
      className={
        currentAction === actionType
          ? 'bg-violet-300 p-1 rounded'
          : 'p-1 hover:bg-violet-100 rounded'
      }
    >
      {renderIcon()}
    </button>
  );
}
