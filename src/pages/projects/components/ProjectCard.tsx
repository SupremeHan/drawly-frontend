import { Link } from 'react-router-dom';
import { ProjectType } from '../ProjectsPage';

interface ProjectCardProps {
  project: ProjectType;
  userId?: string;
}

export function ProjectCard({ project, userId }: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${userId}`}
      className="relative block max-w-[250px] p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h3 className="absolute right-4 bottom-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
        {project.name}
      </h3>
      <img src="https://placehold.co/250x100.png" alt="Project number one" />
    </Link>
  );
}
