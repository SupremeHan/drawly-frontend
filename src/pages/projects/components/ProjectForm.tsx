import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import axiosConfig from '../../../config/axios';
import { useAuthState } from '@/pages/auth/state/state';
import { useContext, useState } from 'react';
import { toast } from 'sonner';
import { ProjectContext } from '../ProjectContext';

interface ProjectFormProps {
  onSubmitCb?: () => void;
}

export function ProjectForm({ onSubmitCb }: ProjectFormProps) {
  const { setProjects } = useContext(ProjectContext);
  const { user } = useAuthState();
  const [name, setName] = useState('');

  const addProject = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name) return; // TODO Handle error message

    axiosConfig
      .post(`/projects/`, {
        userId: user?.id,
        projectName: name,
      })
      .then((res) => {
        setProjects((prevVal) => [...prevVal, res.data]);
        setName('');
        onSubmitCb?.();
        toast.success('Project added', {
          duration: 2000,
        });
      })
      .catch((err) => {
        console.error(err);
        toast.error('Project was not succesfully added', {
          duration: 2000,
        });
      });
  };
  return (
    <form onSubmit={addProject} className="flex flex-col">
      <Input
        type="text"
        placeholder="Project name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      <Button
        variant="default"
        type="submit"
        className="self-end mt-4"
        disabled={!name.length}
      >
        Add
      </Button>
    </form>
  );
}
