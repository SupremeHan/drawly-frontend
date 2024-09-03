import { useEffect, useState } from 'react';
import axiosConfig from '../../config/axios';
import { useAuthState } from '../auth/state/state';
import { ProjectCard } from './components/ProjectCard';
import { AddProjectCard } from './components/AddProjectCard';

export interface ProjectType {
  id: string;
  name: string;
  userId: string;
  createdAt: Date | string;
  updatedAt: Date | string; // TODO: decied how to store dates
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const { user } = useAuthState((state) => state);

  useEffect(() => {
    axiosConfig
      .get(`/projects/${user?.id}`)
      .then((res) => {
        setProjects(res.data as ProjectType[]);
      })
      .catch((err) => console.log(err));
  }, [user?.id]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-gray-900">Your draws</h1>
      <div className="flex flex-wrap gap-4">
        <AddProjectCard setProjects={setProjects} />
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} userId={user?.id} />
        ))}
      </div>
    </div>
  );
}
