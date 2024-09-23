import { useDialog } from '../state/state';
import { Plus } from 'lucide-react';
import { ProjectDialog } from './ProjectDialog';
import { ProjectForm } from './ProjectForm';
import { ProjectType } from '../types';

interface AddProjectCardProps {
  setProjects: React.Dispatch<React.SetStateAction<ProjectType[]>>;
}

export function AddProjectCard({ setProjects }: AddProjectCardProps) {
  const { onOpen, onClose } = useDialog();

  return (
    <>
      <button
        onClick={() => onOpen()}
        className="flex justify-center items-center w-[280px] p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <Plus />
      </button>
      <ProjectDialog title="Add a new project">
        <ProjectForm onSubmitCb={onClose} setProjects={setProjects} />
      </ProjectDialog>
    </>
  );
}
