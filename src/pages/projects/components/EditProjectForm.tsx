import { Input } from '@/components/ui/input';
import { useContext, useState } from 'react';
import axiosConfig from '../../../config/axios';
import { Button } from '@/components/ui/button';
import { ProjectContext } from '../ProjectContext';
import { ProjectType } from '../types';

interface EditProjectFormProps {
  project: ProjectType;
}

export function EditProjectForm({ project }: EditProjectFormProps) {
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
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleEditSubmit}>
      <Input
        type="text"
        placeholder="Project name"
        className="border-[#4A4A4A] focus:border-orange-400"
        value={projectName}
        onChange={(e) => {
          setProjectName(e.target.value);
        }}
      />
      <Button type="submit">Save</Button>
    </form>
  );
}
