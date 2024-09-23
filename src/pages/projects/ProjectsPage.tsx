import { useContext } from 'react';
import { ProjectContext } from './ProjectContext';
import { AddProjectCard } from './components/AddProjectCard';
import { ProjectCard } from './components/ProjectCard';

export default function ProjectsPage() {
  const { projects, setProjects } = useContext(ProjectContext);
  return (
    <div className="p-2">
      <h1 className="text-2xl font-bold mb-4 text-gray-900">Your draws</h1>
      <div className="flex flex-wrap gap-4">
        <AddProjectCard setProjects={setProjects} />
        {projects.length > 0
          ? projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          : null}
      </div>
    </div>
  );
}
