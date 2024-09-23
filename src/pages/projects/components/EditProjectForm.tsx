import { Input } from '@/components/ui/input';
import { useContext, useState } from 'react';
import axiosConfig from '../../../config/axios';
import { Button } from '@/components/ui/button';
import { ProjectContext } from '../ProjectContext';
import { ProjectType } from '../types';
import { toast } from 'sonner';

interface EditProjectFormProps {
  project: ProjectType;
  onSubmitCb?: () => void;
}

export function EditProjectForm({ project, onSubmitCb }: EditProjectFormProps) {
  const [projectName, setProjectName] = useState(project.name);
  const { setProjects } = useContext(ProjectContext);

  const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!projectName) return;

    axiosConfig
      .patch(`/projects/${project.id}`, {
        projectName,
      })
      .then((res) => {
        setProjects((prevState) =>
          prevState.map((stateProject) => {
            if (stateProject.id === project.id) {
              return res.data;
            }
            return stateProject;
          }),
        );
        onSubmitCb?.();
        toast.success('Project name changed succesfully', {
          duration: 2000,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error('Failed to change the project name', {
          duration: 2000,
        });
      });
  };

  return (
    <form onSubmit={handleEditSubmit} className="flex flex-col gap-4">
      <Input
        type="text"
        placeholder="Project name"
        className="border-[#4A4A4A] focus:border-orange-400"
        value={projectName}
        onChange={(e) => {
          setProjectName(e.target.value);
        }}
      />
      <Button type="submit" className="w-max" disabled={!projectName.length}>
        Save
      </Button>
    </form>
  );
}
