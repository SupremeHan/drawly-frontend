import { EditProjectForm } from './EditProjectForm';
import { ProjectType } from '../types';
import { ProjectDialog } from './ProjectDialog';

interface EditProjectDialogProps {
  project: ProjectType;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function EditProjectDialog({
  project,
  open,
  setOpen,
}: EditProjectDialogProps) {
  // const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  // const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  return (
    <ProjectDialog
      title="Edit the name of your project"
      open={open}
      setOpen={setOpen}
    >
      <EditProjectForm project={project} onSubmitCb={() => setOpen(false)} />
    </ProjectDialog>
  );
}
