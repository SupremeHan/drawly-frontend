import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import environment from '@/enviroment';
import { useAuthState } from '@/pages/auth/state/state';
import axios from 'axios';
import { useState } from 'react';
import { ProjectType } from '../ProjectsPage';

interface ProjectFormProps {
  onSubmitCb?: () => void;
  setProjects: React.Dispatch<React.SetStateAction<ProjectType[]>>;
}

export function ProjectForm({ onSubmitCb, setProjects }: ProjectFormProps) {
  const [name, setName] = useState('');
  const { user } = useAuthState();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setName(value);
  };

  const addProject = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name) return; // TODO Handle error message

    axios
      .post(`${environment.apiUrl}/projects/`, {
        userId: user?.id,
        projectName: name,
      })
      .then((res) => {
        setProjects((prevVal) => [...prevVal, res.data]);
        onSubmitCb?.();
      })
      .catch((err) => console.error(err));
  };
  return (
    <form onSubmit={addProject} className="flex flex-col">
      <Input
        type="text"
        placeholder="Project name"
        onChange={handleInputChange}
      />

      <Button variant="default" type="submit" className="self-end mt-4">
        Add
      </Button>
    </form>
  );
}
