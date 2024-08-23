import axios from 'axios';
import { useEffect, useState } from 'react';
import environment from '../../enviroment';
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
    axios
      .get(`${environment.apiUrl}/projects/${user?.id}`)
      .then((res) => setProjects(res.data as ProjectType[]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-gray-900">Your draws</h1>
      <div className="flex flex-wrap gap-4">
        <AddProjectCard />
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} userId={user?.id} />
        ))}

        {mockedProjects.map((item) => (
          <ProjectCard key={item.id} project={item} userId={user?.id} />
        ))}
      </div>
    </div>
  );
}

const mockedProjects = [
  {
    id: '01e967d5-44b1-4395-9338-970b98fba3d4',
    name: 'Test project',
    userId: '9123d84d-ed0d-4de6-9f72-927afca7ffe0',
    createdAt: '2024-08-19T14:42:37.512Z',
    updatedAt: '2024-08-19T14:42:37.512Z',
  },
  {
    id: 'a3c99f9c-88bb-4ed6-b835-6a4cba5e21e8',
    name: 'Second project',
    userId: '9123d84d-ed0d-4de6-9f72-927afca7ffe0',
    createdAt: '2024-08-20T10:30:15.789Z',
    updatedAt: '2024-08-20T10:30:15.789Z',
  },
  {
    id: 'f275d7be-69e1-4df7-9f89-d289cf4f1f39',
    name: 'Third project',
    userId: 'c2e61a8b-b5dd-4573-8728-d5b78a69d961',
    createdAt: '2024-08-21T09:12:22.456Z',
    updatedAt: '2024-08-21T09:12:22.456Z',
  },
  {
    id: 'be30d5b5-58f4-49d8-8f68-e6e5c906e9d6',
    name: 'Fourth project',
    userId: 'c2e61a8b-b5dd-4573-8728-d5b78a69d961',
    createdAt: '2024-08-22T11:55:37.124Z',
    updatedAt: '2024-08-22T11:55:37.124Z',
  },
  {
    id: '97f858be-1cfa-4695-9b6f-70f4bcda5d6a',
    name: 'Fifth project',
    userId: '732e9b8c-9c77-4568-9495-889d6d4bfa4a',
    createdAt: '2024-08-23T08:42:11.789Z',
    updatedAt: '2024-08-23T08:42:11.789Z',
  },
];
