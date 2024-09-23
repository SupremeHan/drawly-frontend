import { Plus } from 'lucide-react';
import { ProjectDialog } from './ProjectDialog';
import { ProjectForm } from './ProjectForm';
import { useState } from 'react';

export function AddProjectCard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex justify-center items-center w-[280px] p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <Plus />
      </button>
      <ProjectDialog title="Add a new project" open={open} setOpen={setOpen}>
        <ProjectForm onSubmitCb={() => setOpen(false)} />
      </ProjectDialog>
    </>
  );
}
