/* eslint-disable @typescript-eslint/no-empty-object-type */
import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import axiosConfig from '../../config/axios';
import { useAuthState } from '../auth/state/state';
import { ProjectType } from './types';

interface ProjectContextType {
  projects: ProjectType[];
  setProjects: React.Dispatch<React.SetStateAction<ProjectType[]>>;
}

const ProjectContext = createContext<ProjectContextType>({
  projects: [],
  setProjects: () => [],
});

const ProjectProvider = ({ children }: PropsWithChildren<{}>) => {
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
    <ProjectContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectContext, ProjectProvider };
